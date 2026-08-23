
"use client";

import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_DETAILS, EMAILJS_CONFIG, SOCIAL_LINKS, AUTHOR_EMAIL, AUTHOR_NAME, CONTACT_FORM_RECEIVER_EMAIL } from "@/lib/data";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  company: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const LOCALSTORAGE_KEYS = {
  NAME: 'contactFormDraft_name',
  EMAIL: 'contactFormDraft_email',
  COMPANY: 'contactFormDraft_company',
  PROJECTTYPE: 'contactFormDraft_projectType',
  MESSAGE: 'contactFormDraft_message',
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: '',
    }
  });

  useEffect(() => {
    setIsMounted(true); // Component has mounted
  }, []);


  useEffect(() => {
    if (isMounted && typeof window !== 'undefined') {
      const savedName = localStorage.getItem(LOCALSTORAGE_KEYS.NAME);
      const savedEmail = localStorage.getItem(LOCALSTORAGE_KEYS.EMAIL);
      const savedCompany = localStorage.getItem(LOCALSTORAGE_KEYS.COMPANY);
      const savedProjectType = localStorage.getItem(LOCALSTORAGE_KEYS.PROJECTTYPE);
      const savedMessage = localStorage.getItem(LOCALSTORAGE_KEYS.MESSAGE);

      if (savedName) setValue('name', savedName);
      if (savedEmail) setValue('email', savedEmail);
      if (savedCompany) setValue('company', savedCompany);
      if (savedProjectType) setValue('projectType', savedProjectType);
      if (savedMessage) setValue('message', savedMessage);
    }
  }, [setValue, isMounted]);

  useEffect(() => {
    if (!isMounted) return; // Don't run watch effect if not mounted

    const subscription = watch((value, { name }) => {
      if (typeof window !== 'undefined' && name) {
        const fieldName = name as keyof ContactFormValues;
        if (LOCALSTORAGE_KEYS[fieldName.toUpperCase() as keyof typeof LOCALSTORAGE_KEYS]) {
            localStorage.setItem(LOCALSTORAGE_KEYS[fieldName.toUpperCase() as keyof typeof LOCALSTORAGE_KEYS], value[fieldName] || '');
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, isMounted]);


  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey ||
          EMAILJS_CONFIG.serviceId.includes("YOUR_") || EMAILJS_CONFIG.templateId.includes("YOUR_") || EMAILJS_CONFIG.publicKey.includes("YOUR_")) {
        throw new Error("EmailJS credentials (Service ID, Template ID, or Public Key) are missing or still contain placeholders. Please ensure they are correctly set in your .env file (e.g., NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) and that you have restarted your development server.");
      }

      if (!CONTACT_FORM_RECEIVER_EMAIL || CONTACT_FORM_RECEIVER_EMAIL.includes("YOUR_") || CONTACT_FORM_RECEIVER_EMAIL === AUTHOR_EMAIL && (process.env.NEXT_PUBLIC_CONTACT_FORM_RECEIVER_EMAIL === undefined || process.env.NEXT_PUBLIC_CONTACT_FORM_RECEIVER_EMAIL.includes("YOUR_"))) {
         if (CONTACT_FORM_RECEIVER_EMAIL.includes("YOUR_")) {
            throw new Error("The contact form receiver email (NEXT_PUBLIC_CONTACT_FORM_RECEIVER_EMAIL) is not configured. Please set it in your .env file.");
         }
      }


      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: data.name,
          to_name: AUTHOR_NAME,
          from_email: data.email,
          to_email: CONTACT_FORM_RECEIVER_EMAIL,
          company: data.company || "Not provided",
          project_type: data.projectType || "Not specified",
          message: data.message,
        },
        EMAILJS_CONFIG.publicKey
      );
      toast({
        title: "Message Sent Successfully! ✨",
        description: `Thank you for reaching out, ${data.name}! Your project details have been received. I'll review them and get back to you soon.`,
        variant: "default",
      });
      reset({ name: '', email: '', company: '', projectType: '', message: '' });
      if (typeof window !== 'undefined') {
        localStorage.removeItem(LOCALSTORAGE_KEYS.NAME);
        localStorage.removeItem(LOCALSTORAGE_KEYS.EMAIL);
        localStorage.removeItem(LOCALSTORAGE_KEYS.COMPANY);
        localStorage.removeItem(LOCALSTORAGE_KEYS.PROJECTTYPE);
        localStorage.removeItem(LOCALSTORAGE_KEYS.MESSAGE);
      }
    } catch (error) {
      const errorMessage = (error instanceof Error && (error.message.includes("credentials") || error.message.includes("receiver email")))
        ? error.message
        : "Failed to send message. Please try again later or contact me directly.";
      toast({
        title: "Error Sending Message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSocialButtons = () => (
    <div className="flex space-x-4 pt-2">
      {SOCIAL_LINKS.filter(link => link.name !== "Email").map(({ name, Icon, href }) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
        <Button 
          variant="outline" 
          size="icon" 
          className="h-11 w-11"
          onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
          aria-label={name}
        >
          <Icon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out" />
        </Button>
        </motion.div>
      ))}
    </div>
  );

  const renderContactForm = () => (
     <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-4 sm:p-6 md:p-8 bg-card rounded-lg shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transform: 'translateZ(0)' }}
      >
        <div>
          <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
          <Input id="name" {...register("name")} placeholder={"Your Full Name"} className="mt-1 h-11 sm:h-10 text-base sm:text-sm" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
          <Input id="email" type="email" {...register("email")} placeholder={`your.email@example.com`} className="mt-1 h-11 sm:h-10 text-base sm:text-sm" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="company" className="text-sm font-medium">Company / Organization (Optional)</Label>
          <Input id="company" {...register("company")} placeholder="Your company name" className="mt-1 h-11 sm:h-10 text-base sm:text-sm" />
          {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company.message}</p>}
        </div>
        <div>
          <Label htmlFor="projectType" className="text-sm font-medium">Project Type (Optional)</Label>
          <Select onValueChange={(value) => setValue("projectType", value)} defaultValue="">
            <SelectTrigger id="projectType" className="mt-1 h-11 sm:h-10">
              <SelectValue placeholder="Select a project type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom-web-app">Custom Web Application</SelectItem>
              <SelectItem value="saas">SaaS Application</SelectItem>
              <SelectItem value="mern">MERN Stack Development</SelectItem>
              <SelectItem value="react-next">React / Next.js Development</SelectItem>
              <SelectItem value="nodejs">Node.js Backend</SelectItem>
              <SelectItem value="api">API Development & Integration</SelectItem>
              <SelectItem value="healthcare">Healthcare Software</SelectItem>
              <SelectItem value="crm">CRM Development</SelectItem>
              <SelectItem value="lms">LMS Development</SelectItem>
              <SelectItem value="realtime">Real-Time / Video Application</SelectItem>
              <SelectItem value="maintenance">Bug Fixing & Maintenance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.projectType && <p className="mt-1 text-xs text-destructive">{errors.projectType.message}</p>}
        </div>
        <div>
          <Label htmlFor="message" className="text-sm font-medium">Project Details</Label>
          <Textarea id="message" {...register("message")} placeholder="Tell me about your project, requirements, and goals..." rows={5} className="mt-1 text-base sm:text-sm resize-none" />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full shadow-md transform hover:scale-105 h-11 sm:h-10 text-base sm:text-sm">
          {isSubmitting ? "Sending..." : "Discuss Your Project"}
        </Button>
         {(EMAILJS_CONFIG.serviceId.includes("YOUR_") || EMAILJS_CONFIG.templateId.includes("YOUR_") || EMAILJS_CONFIG.publicKey.includes("YOUR_") || (process.env.NEXT_PUBLIC_CONTACT_FORM_RECEIVER_EMAIL && process.env.NEXT_PUBLIC_CONTACT_FORM_RECEIVER_EMAIL.includes("YOUR_")) ) && (
          <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 text-center">
            Note: EmailJS or the Contact Form Receiver Email is not fully configured. Please check your <code>.env</code> file for placeholders and restart your server.
          </p>
        )}
      </motion.form>
  );

  const renderFormSkeleton = () => (
    <div className="space-y-6 p-6 sm:p-8 bg-card rounded-lg shadow-xl">
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-20 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );

  const renderSocialButtonsSkeleton = () => (
    <div className="flex space-x-4 pt-2">
      <Skeleton className="h-11 w-11 rounded-md" />
      <Skeleton className="h-11 w-11 rounded-md" />
      <Skeleton className="h-11 w-11 rounded-md" />
    </div>
  );


  return (
    <SectionWrapper id="contact" className="bg-secondary/30 dark:bg-card/50">
      <SectionHeader
        title={CONTACT_DETAILS.title}
        subtitle={CONTACT_DETAILS.description}
        Icon={CONTACT_DETAILS.Icon}
      />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-primary font-headline">Get in Touch Directly</h3>
          <p className="text-muted-foreground">
            You can also reach me via email or connect on social media.
          </p>
          <div className="space-y-3">
            <Link href={`mailto:${AUTHOR_EMAIL}`} className="flex items-center group">
              <CONTACT_DETAILS.Icon className="h-6 w-6 mr-3 text-accent group-hover:text-primary transition-colors duration-300 ease-in-out" />
              <span className="text-foreground group-hover:text-primary transition-colors duration-300 ease-in-out">{AUTHOR_EMAIL}</span>
            </Link>
            {CONTACT_DETAILS.phone && (
               <div className="flex items-center">
                <CONTACT_DETAILS.PhoneIcon className="h-6 w-6 mr-3 text-accent" />
                <span className="text-foreground">{CONTACT_DETAILS.phone}</span>
              </div>
            )}
          </div>
          {isMounted ? renderSocialButtons() : renderSocialButtonsSkeleton()}
        </motion.div>

        {isMounted ? renderContactForm() : renderFormSkeleton()}
      </div>
    </SectionWrapper>
  );
}
