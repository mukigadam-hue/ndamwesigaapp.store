import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.despia.biztrack";

export function PublicHeader() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <Link to="/" className="flex min-h-11 items-center gap-2" aria-label={t("resourcesUi.homeAria")}>
          <img src="/app-icon-1024.png" alt="" className="h-9 w-9 rounded-md" />
          <span className="text-lg font-bold text-primary">BizTrack</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex" aria-label={t("resourcesUi.mainNav")}>
          <Link to="/#features" className="hover:text-foreground">{t("resourcesUi.features")}</Link>
          <Link to="/#pricing" className="hover:text-foreground">{t("resourcesUi.pricing")}</Link>
          <Link to="/resources" className="text-foreground">{t("resourcesUi.resources")}</Link>
          <Link to="/#contact" className="hover:text-foreground">{t("resourcesUi.contact")}</Link>
        </nav>
        <Button asChild className="min-h-11 px-4">
          <Link to="/login">{t("resourcesUi.launch")}<ArrowRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </header>
  );
}

export function PublicFooter() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-bold"><img src="/app-icon-1024.png" alt="" className="h-8 w-8 rounded-md" />BizTrack</div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-primary-foreground/75">{t("resourcesUi.footerDescription")}</p>
        </div>
        <nav className="flex flex-col items-start gap-3 text-sm" aria-label={t("resourcesUi.resources")}>
          <Link to="/resources" className="hover:text-accent">{t("resourcesUi.allGuides")}</Link>
          <Link to="/privacy" className="hover:text-accent">{t("resourcesUi.privacy")}</Link>
          <a href="/#contact" className="hover:text-accent">{t("resourcesUi.contact")}</a>
        </nav>
        <div className="text-sm text-primary-foreground/75">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-foreground hover:text-accent">{t("resourcesUi.androidApp")}</a>
          <p className="mt-4">© 2026 BizTrack. {t("resourcesUi.rights")}</p>
        </div>
      </div>
    </footer>
  );
}

export function PublicSiteLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><PublicHeader />{children}<PublicFooter /></div>;
}

// Real ad units are placed here by AdSense after approval; nothing visible until then.
export function AdPlacement() {
  return null;
}
