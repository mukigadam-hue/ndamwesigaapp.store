import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { AdPlacement, PublicSiteLayout } from "@/components/public/PublicSiteLayout";
import { articles, articleCategories, type ArticleCategory } from "@/content/articles";
import { Button } from "@/components/ui/button";

const canonical = "https://ndamwesigaapp.store/resources";

export default function ResourcesPage() {
  const { t } = useTranslation();
  const [category, setCategory] = useState<ArticleCategory | "All">("All");
  const visible = useMemo(() => category === "All" ? articles : articles.filter((article) => article.category === category), [category]);

  return (
    <PublicSiteLayout>
      <Helmet>
        <title>Small Business Guides & Resources | BizTrack</title>
        <meta name="description" content="Practical BizTrack guides for inventory, cash flow, customer records, team accountability, and reliable offline business operations." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Small Business Guides & Resources | BizTrack" />
        <meta property="og:description" content="Useful, practical guides for running a more organized small business." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-accent"><BookOpen className="h-5 w-5" />{t("resourcesUi.editorial")}</div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{t("resourcesUi.heading")}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-primary-foreground/80">{t("resourcesUi.intro")}</p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex flex-wrap gap-2" aria-label={t("resourcesUi.filterAria")}>
            {["All", ...articleCategories].map((item) => (
              <Button key={item} variant={category === item ? "default" : "outline"} onClick={() => setCategory(item as ArticleCategory | "All")} className="min-h-11">
                {item === "All" ? t("resourcesUi.all") : t(`resourcesUi.categories.${item}`)}
              </Button>
            ))}
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {visible.map((article, index) => (
              <article key={article.slug} className={index === 0 && category === "All" ? "overflow-hidden rounded-md border border-border bg-card md:col-span-2 md:grid md:grid-cols-2" : "overflow-hidden rounded-md border border-border bg-card"}>
                <Link to={`/resources/${article.slug}`} className="block overflow-hidden">
                  <img src={article.image} alt={article.imageAlt} width={1200} height={720} loading={index === 0 ? "eager" : "lazy"} className="aspect-[5/3] h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]" />
                </Link>
                <div className="flex flex-col p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground"><span className="font-bold text-primary">{t(`resourcesUi.categories.${article.category}`)}</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" />{article.readTime}</span></div>
                  <h2 className="mt-4 text-2xl font-bold leading-tight"><Link to={`/resources/${article.slug}`} className="hover:text-primary">{article.title}</Link></h2>
                  <p className="mt-4 flex-1 leading-7 text-muted-foreground">{article.description}</p>
                  <Link to={`/resources/${article.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-primary">{t("resourcesUi.readGuide")}<ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
          <AdPlacement />
          <div className="border-l-4 border-accent bg-muted/60 px-6 py-7">
            <h2 className="text-xl font-bold">{t("resourcesUi.practiceHeading")}</h2>
            <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">{t("resourcesUi.practiceBody")}</p>
          </div>
        </section>
      </main>
    </PublicSiteLayout>
  );
}
