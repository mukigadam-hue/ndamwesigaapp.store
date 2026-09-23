import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { AdPlacement, PublicSiteLayout } from "@/components/public/PublicSiteLayout";
import { articles, getArticle } from "@/content/articles";
import { Button } from "@/components/ui/button";

const siteUrl = "https://ndamwesigaapp.store";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const article = getArticle(slug);

  if (!article) return <Navigate to="/resources" replace />;

  const related = articles.filter((candidate) => candidate.slug !== article.slug).slice(0, 2);
  const canonical = `${siteUrl}/resources/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: "2026-09-22",
    dateModified: "2026-09-23",
    author: { "@type": "Organization", name: "BizTrack Editorial" },
    publisher: { "@type": "Organization", name: "BizTrack" },
    mainEntityOfPage: canonical,
  };

  return (
    <PublicSiteLayout>
      <Helmet>
        <title>{article.title} | BizTrack</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <main>
        <article>
          <header className="border-b border-border bg-primary text-primary-foreground">
            <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
              <Link to="/resources" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-accent">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />{t("resourcesUi.backToGuides")}
              </Link>
              <p className="mt-7 text-sm font-bold uppercase text-accent">{t(`resourcesUi.categories.${article.category}`)}</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{article.title}</h1>
              <p className="mt-5 text-lg leading-8 text-primary-foreground/80">{article.description}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/75">
                <span>{t("resourcesUi.byline")}</span>
                <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden="true" />{t("resourcesUi.updated")} {article.updated}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" />{article.readTime}</span>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
            <img src={article.image} alt={article.imageAlt} width={1200} height={720} className="aspect-[5/3] w-full rounded-md object-cover" />
            <div className="mx-auto mt-10 max-w-3xl text-lg leading-8">
              <p className="font-medium text-foreground">{article.intro}</p>
              {article.blocks.map((block, index) => {
                if (block.type === "heading") return <h2 key={index} className="mt-10 text-2xl font-bold leading-tight text-foreground md:text-3xl">{block.text}</h2>;
                if (block.type === "list") return <ul key={index} className="my-6 list-disc space-y-3 border-l-4 border-accent bg-muted/60 py-5 pl-10 pr-5 text-foreground">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
                return <p key={index} className="mt-5 text-muted-foreground">{block.text}</p>;
              })}
            </div>

            <AdPlacement />

            <section className="border-y border-border py-9" aria-labelledby="next-step-heading">
              <h2 id="next-step-heading" className="text-2xl font-bold">{t("resourcesUi.nextStepHeading")}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{t("resourcesUi.nextStepBody")}</p>
              <Button asChild className="mt-6 min-h-11"><Link to="/login">{t("resourcesUi.launch")}<ArrowRight aria-hidden="true" /></Link></Button>
            </section>

            <section className="py-10" aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-2xl font-bold">{t("resourcesUi.relatedGuides")}</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {related.map((item) => (
                  <Link key={item.slug} to={`/resources/${item.slug}`} className="group border-t-4 border-primary bg-muted/50 p-5">
                    <span className="text-sm font-bold text-primary">{t(`resourcesUi.categories.${item.category}`)}</span>
                    <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary">{item.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t("resourcesUi.readGuide")}<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </PublicSiteLayout>
  );
}