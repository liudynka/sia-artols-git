import { notFound } from "next/navigation"
import { getPortfolioPageBySlug, getAllPortfolioSlugs } from "@/data/portfolio"
import { ProductPageTemplate } from "@/components/templates/product-page-template"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPortfolioSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getPortfolioPageBySlug(slug)

  if (!data) {
    return { title: "Not Found" }
  }

  return {
    title: `${data.title} | Artols Investment`,
    description: data.subtitle,
  }
}

export default async function PortfolioPage({ params }: PageProps) {
  const { slug } = await params
  const data = getPortfolioPageBySlug(slug)

  if (!data) {
    notFound()
  }

  return <ProductPageTemplate data={data} />
}
