import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Building2, Check, Compass, Globe2, Home, Map, Menu, MessageCircle, Mountain, X } from "lucide-react";
import { useEffect, useState } from "react";

import inkLandscape from "@/assets/ink-landscape.jpg";
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://static.wixstatic.com/media/e16580_26397bcba72346e7a03f4be7eb3ec867~mv2.png";
const MEETING_URL = "https://www.fengshuimasteryou.com.au/_meetings/87dbf918-251a-4b91-934e-afcad5e8b673/30-min-meeting";

type Language = "en" | "zh";
type Copy = { en: string; zh: string };

const t = (copy: Copy, language: Language) => copy[language];

const pathways = [
  { icon: Home, number: "01", title: { en: "Buying or Comparing", zh: "买房 · 比较房产" }, body: { en: "A quick independent look at one property before inspection, offer or commitment.", zh: "在看房、出价或承诺购买之前，对目标房产进行快速、独立的审视。" } },
  { icon: Building2, number: "02", title: { en: "Building or Designing", zh: "建造 · 设计" }, body: { en: "Read site, orientation, access, floor plan and environmental relationships before design is fixed.", zh: "在设计定案之前，解读地块、朝向、出入口、平面布局及其环境关系。" } },
  { icon: Compass, number: "03", title: { en: "Home or Business", zh: "住宅 · 商业空间" }, body: { en: "Understand how surrounding form, movement and internal space affect long-term use.", zh: "了解周边形势、动线与内部空间如何影响长期使用。" } },
  { icon: MessageCircle, number: "04", title: { en: "Not Sure Yet", zh: "还不确定" }, body: { en: "Begin with a free 30-minute conversation and clarify what needs to be assessed.", zh: "先从免费的 30 分钟对话开始，厘清真正需要评估的问题。" } },
];

const approach = [
  { number: "01", label: { en: "ENVIRONMENT", zh: "环境" }, title: { en: "Read the setting", zh: "读懂环境" }, body: { en: "Landform, slope, roads, access, water movement, neighbouring buildings, openness and support.", zh: "观察地形、坡度、道路、出入口、水势、邻近建筑、开合与依托。" } },
  { number: "02", label: { en: "PROPERTY", zh: "房产" }, title: { en: "Read the structure", zh: "读懂结构" }, body: { en: "Position, orientation, entrance, floor plan, movement, privacy, light and the relationship between key rooms.", zh: "分析位置、朝向、入口、平面、动线、私密性、采光与关键空间的关系。" } },
  { number: "03", label: { en: "DECISION", zh: "决策" }, title: { en: "Support the choice", zh: "支持选择" }, body: { en: "Identify strengths, concerns, trade-offs and what should be investigated before you commit.", zh: "识别优势、隐忧与取舍，并明确承诺之前仍需核实的重点。" } },
];

const steps = [
  { title: { en: "Share the property or question", zh: "分享房产或问题" }, body: { en: "Address, listing link, plan, photos, video and your main concern.", zh: "提供地址、房源链接、平面图、照片、视频，以及您最关心的问题。" } },
  { title: { en: "Master You reviews the relationships", zh: "由师傅审视整体关系" }, body: { en: "Environment, landform, roads, orientation, movement and spatial structure.", zh: "从环境、地形、道路、朝向、动线与空间结构进行综合分析。" } },
  { title: { en: "Make a better-informed decision", zh: "做出更有依据的决定" }, body: { en: "Clear findings, practical recommendations and next-step guidance.", zh: "获得清晰结论、实用建议与下一步指引。" } },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feng Shui Master You | International" },
      { name: "description", content: "Feng Shui Master You — independent Feng Shui and environmental assessment for property, space and long-term decisions. Online worldwide." },
      { property: "og:title", content: "Feng Shui Master You | International" },
      { property: "og:description", content: "Feng Shui Master You — independent Feng Shui and environmental assessment for property, space and long-term decisions. Online worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Feng Shui Master You | International" },
      { name: "twitter:description", content: "Independent Feng Shui and environmental assessment for property, space and long-term decisions. Online worldwide." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Feng Shui Master You / 由心风水",
        alternateName: "由心风水",
        description: "Independent Feng Shui and environmental assessment for property, space and long-term decisions. Online worldwide.",
        areaServed: [{ "@type": "Country", name: "Australia" }, { "@type": "Country", name: "New Zealand" }, "Worldwide"],
        knowsAbout: ["Feng Shui", "property assessment", "environmental assessment", "site selection", "spatial planning"],
        sameAs: ["https://www.fengshuimasteryou.com.au/", "https://www.myfengshui.co.nz/"],
      }),
    }],
  }),
  component: InternationalHub,
});

function InternationalHub() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("fsy-language");
    if (saved === "zh" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const switchLanguage = () => {
    const next = language === "en" ? "zh" : "en";
    setLanguage(next);
    window.localStorage.setItem("fsy-language", next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 lg:px-10">
          <a href="#top" onClick={closeMenu} className="flex min-w-0 items-center gap-3" aria-label="Feng Shui Master You home">
            <img src={LOGO_URL} alt="Feng Shui Master You · 由心风水" className="h-11 w-auto max-w-44 object-contain sm:max-w-52" />
            <span className="hidden border-l border-primary/20 pl-3 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-primary/70 sm:block">International Hub</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label={language === "en" ? "Primary navigation" : "主导航"}>
            <a href="#approach" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-primary">{t({ en: "Approach", zh: "方法" }, language)}</a>
            <a href="#regions" className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-primary">{t({ en: "Regions", zh: "地区" }, language)}</a>
            <Button variant="ghost" size="sm" onClick={switchLanguage} aria-label={language === "en" ? "切换为中文" : "Switch to English"} className="min-w-20 border border-primary/15">
              <Globe2 aria-hidden="true" /> {language === "en" ? "中文" : "EN"}
            </Button>
            <Button asChild variant="signature" size="lg"><a href={MEETING_URL} target="_blank" rel="noopener noreferrer">{t({ en: "Ask Master You", zh: "咨询由师傅" }, language)} <ArrowRight aria-hidden="true" /></a></Button>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="ghost" size="sm" onClick={switchLanguage} aria-label={language === "en" ? "切换为中文" : "Switch to English"}><Globe2 aria-hidden="true" /> {language === "en" ? "中文" : "EN"}</Button>
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-primary/10 bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-[90rem] gap-4">
              <a href="#approach" onClick={closeMenu} className="py-2 font-medium">{t({ en: "Approach", zh: "方法" }, language)}</a>
              <a href="#regions" onClick={closeMenu} className="py-2 font-medium">{t({ en: "Regions", zh: "地区" }, language)}</a>
              <Button asChild variant="signature" size="lg"><a href={MEETING_URL} target="_blank" rel="noopener noreferrer">{t({ en: "Ask Master You", zh: "咨询由师傅" }, language)} <ArrowRight /></a></Button>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[min(900px,100svh)] items-center pt-20">
        <img src={inkLandscape} alt="Ink-wash mountain landscape meeting contemporary architecture" width={1920} height={1152} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_88%,transparent)_34%,color-mix(in_oklab,var(--background)_24%,transparent)_72%,transparent_100%)]" />
        <div className="relative mx-auto w-full max-w-[90rem] px-5 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-7 max-w-2xl text-[0.68rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-primary sm:text-xs">
              {t({ en: "Independent Feng Shui & Environmental Assessment · Online Worldwide", zh: "独立风水与环境评估 · 全球在线服务" }, language)}
            </p>
            <h1 className="font-display text-[clamp(3.45rem,8vw,7.6rem)] font-medium leading-[0.82] text-primary">
              {language === "en" ? <><span className="block">FENG SHUI</span><span className="block">BEFORE YOU</span><span className="block text-gold">CHOOSE.</span></> : <><span className="block">风水，不只是方位。</span><span className="mt-4 block text-gold">先读环境，再做决定。</span></>}
            </h1>
            <p className="mt-8 font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              {language === "en" ? "风水，不只是方位。先读环境，再做决定。" : "FENG SHUI BEFORE YOU CHOOSE."}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
              {t({ en: "For property, space and long-term decisions — read the environment, understand the relationships, then choose with greater clarity.", zh: "面对房产、空间与长期选择——先读环境，理解关系，再更清晰地做出决定。" }, language)}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {t({ en: "Feng Shui Master You connects traditional Feng Shui with practical environmental observation. International enquiries can begin online using maps, listings, plans, photographs and video.", zh: "由心风水将传统风水与务实的环境观察相结合。国际咨询可通过地图、房源资料、平面图、照片与视频在线开始。" }, language)}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="signature" size="xl"><a href="#decisions">{t({ en: "Start with Your Decision", zh: "从您的决定开始" }, language)} <ArrowDown /></a></Button>
              <Button asChild variant="parchment" size="xl"><a href={MEETING_URL} target="_blank" rel="noopener noreferrer">{t({ en: "Free 30-Min Consultation", zh: "免费 30 分钟咨询" }, language)} <ArrowRight /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="decisions" className="scroll-mt-20 bg-primary py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="section-rule">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">{t({ en: "Start with the decision", zh: "从决定开始" }, language)}</p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-none sm:text-6xl">{t({ en: "What are you choosing?", zh: "您正在做什么选择？" }, language)}</h2>
            </div>
            <p className="max-w-2xl self-end text-base leading-8 text-primary-foreground/70 sm:text-lg">{t({ en: "The International Hub does not force every visitor into the same service. Begin with the real decision, then enter the most relevant pathway.", zh: "国际中心不会把每位访客导向同一种服务。先从您真正面对的决定出发，再进入最相关的咨询路径。" }, language)}</p>
          </div>
          <div className="mt-14 grid border-l border-t border-primary-foreground/18 md:grid-cols-2 xl:grid-cols-4">
            {pathways.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.number} href={MEETING_URL} target="_blank" rel="noopener noreferrer" className="group flex min-h-80 flex-col border-b border-r border-primary-foreground/18 p-7 transition-colors hover:bg-primary-foreground/7">
                  <div className="flex items-center justify-between text-accent"><Icon className="size-6" strokeWidth={1.4} /><span className="font-display text-lg">{item.number}</span></div>
                  <h3 className="mt-auto font-display text-3xl font-medium">{t(item.title, language)}</h3>
                  <p className="mt-4 text-sm leading-7 text-primary-foreground/65">{t(item.body, language)}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">{t({ en: "Begin here", zh: "由此开始" }, language)} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <div className="section-rule max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">{t({ en: "The approach", zh: "评估方法" }, language)}</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-none text-primary sm:text-7xl">{t({ en: "Environment. Property. Decision.", zh: "环境。房产。决定。" }, language)}</h2>
          </div>
          <div className="mt-16 grid border-y border-border lg:grid-cols-3">
            {approach.map((item, index) => (
              <article key={item.number} className={`py-10 lg:px-10 ${index > 0 ? "border-t border-border lg:border-l lg:border-t-0" : ""}`}>
                <div className="flex items-baseline justify-between"><span className="text-xs font-semibold tracking-[0.14em] text-gold">{item.number}</span><span className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary">{t(item.label, language)}</span></div>
                <h3 className="mt-14 font-display text-4xl font-medium">{t(item.title, language)}</h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{t(item.body, language)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/70 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div className="section-rule">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">{t({ en: "A clear process", zh: "清晰流程" }, language)}</p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-none text-primary sm:text-6xl">{t({ en: "Three simple steps", zh: "三个简单步骤" }, language)}</h2>
          </div>
          <ol className="border-t border-primary/15">
            {steps.map((step, index) => (
              <li key={step.title.en} className="grid gap-4 border-b border-primary/15 py-8 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-3xl text-gold">0{index + 1}</span>
                <div><h3 className="font-display text-3xl font-medium">{t(step.title, language)}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{t(step.body, language)}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="regions" className="scroll-mt-20 bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="section-rule"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">{t({ en: "Regional pathways", zh: "区域入口" }, language)}</p><h2 className="mt-5 font-display text-5xl font-medium leading-none text-primary sm:text-7xl">{t({ en: "Local knowledge. International reach.", zh: "在地经验，国际视野。" }, language)}</h2></div>
            <Map className="hidden size-12 text-gold md:block" strokeWidth={1.2} />
          </div>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            <a href="https://www.fengshuimasteryou.com.au/" target="_blank" rel="noopener noreferrer" className="group bg-paper p-8 transition-colors hover:bg-secondary sm:p-12">
              <div className="flex items-start justify-between"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">AU</span><ArrowRight className="text-primary transition-transform group-hover:translate-x-1" /></div>
              <h3 className="mt-16 font-display text-5xl font-medium text-primary">{t({ en: "Australia", zh: "澳大利亚" }, language)}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{t({ en: "Property-first assessment, design review and consultations across Australia, with online service available nationwide.", zh: "面向澳大利亚各地提供以房产为先的评估、设计审阅与咨询，全国均可在线进行。" }, language)}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{t({ en: "Visit Australia", zh: "访问澳大利亚站" }, language)} <ArrowRight className="size-4" /></span>
            </a>
            <a href="https://www.myfengshui.co.nz/" target="_blank" rel="noopener noreferrer" className="group bg-paper p-8 transition-colors hover:bg-secondary sm:p-12">
              <div className="flex items-start justify-between"><span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">NZ</span><ArrowRight className="text-primary transition-transform group-hover:translate-x-1" /></div>
              <h3 className="mt-16 font-display text-5xl font-medium text-primary">{t({ en: "New Zealand", zh: "新西兰" }, language)}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{t({ en: "Established New Zealand practice, case history and local consultation pathway.", zh: "了解新西兰成熟的执业经验、案例历程与本地咨询路径。" }, language)}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{t({ en: "Visit New Zealand", zh: "访问新西兰站" }, language)} <ArrowRight className="size-4" /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 text-center text-primary-foreground lg:py-32">
        <Mountain className="absolute -bottom-20 left-1/2 size-[30rem] -translate-x-1/2 text-primary-foreground/5" strokeWidth={0.4} aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">{t({ en: "Before you commit", zh: "承诺之前" }, language)}</p>
          <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] sm:text-7xl">{t({ en: "Ask the question before you make the commitment.", zh: "在做出承诺之前，先提出问题。" }, language)}</h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-primary-foreground/70">{t({ en: "Begin with a free 30-minute consultation. Tell us what you are deciding, where the property is, and what makes you uncertain.", zh: "从免费的 30 分钟咨询开始。告诉我们您正在做什么决定、房产位于何处，以及哪些因素令您犹豫。" }, language)}</p>
          <Button asChild variant="gold" size="xl" className="mt-9"><a href={MEETING_URL} target="_blank" rel="noopener noreferrer">{t({ en: "Free 30-Min Consultation", zh: "免费 30 分钟咨询" }, language)} <ArrowRight /></a></Button>
        </div>
      </section>

      <div className="border-b border-primary/15 bg-gold py-4 text-gold-foreground">
        <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 text-[0.64rem] font-semibold uppercase tracking-[0.14em] sm:gap-x-6">
          {[{ en: "Australia", zh: "澳大利亚" }, { en: "New Zealand", zh: "新西兰" }, { en: "Online Worldwide", zh: "全球在线" }, { en: "Property", zh: "房产" }, { en: "Home", zh: "住宅" }, { en: "Business", zh: "商业" }, { en: "Decisions", zh: "决策" }].map((item, index) => <span key={item.en} className="inline-flex items-center gap-4 sm:gap-6">{index > 0 && <span aria-hidden="true">·</span>}{t(item, language)}</span>)}
        </div>
      </div>

      <footer className="bg-background py-12">
        <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left lg:px-10">
          <img src={LOGO_URL} alt="Feng Shui Master You · 由心风水" className="h-12 w-auto max-w-56 object-contain" loading="lazy" />
          <div className="text-xs leading-6 text-muted-foreground"><p>© 2026 Feng Shui Master You · 由心风水</p><p className="uppercase tracking-[0.16em]">International Hub</p></div>
        </div>
      </footer>
    </main>
  );
}