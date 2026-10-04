import type { Metadata } from 'next';
import { AUTHOR_NAME } from '@/lib/data';
import BlogPostPageClient from '@/components/blog/BlogPostPageClient';

export type BlogPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  let pageTitle = 'Blog Post';
  const resolvedSearchParams = await props.searchParams;

  if (resolvedSearchParams) {
    let titleValue = resolvedSearchParams.title;

    if (Array.isArray(titleValue)) {
      titleValue = titleValue[0];
    }

    if (typeof titleValue === 'string' && titleValue.trim() !== '') {
      try {
        pageTitle = decodeURIComponent(titleValue);
      } catch (e) {
        // pageTitle remains 'Blog Post'
      }
    }
  }

  return {
    title: `${pageTitle} | ${AUTHOR_NAME}'s Blog`,
    description: `Read more about ${pageTitle} on ${AUTHOR_NAME}'s tech blog.`,
  };
}

export default async function BlogPostPage(props: BlogPageProps) {
  const resolvedParams = await props.params;
  const resolvedSearchParams = await props.searchParams;
  return <BlogPostPageClient params={resolvedParams} searchParams={resolvedSearchParams} />;
}
