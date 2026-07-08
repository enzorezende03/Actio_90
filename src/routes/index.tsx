import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  AlertTriangle,
  Activity,
  Brain,
  HeartPulse,
  LineChart,
  ClipboardCheck,
  Stethoscope,
  MessageCircle,
  Award,
  Check,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import consultaImg from "@/assets/consulta.jpg";
import doctorImg from "@/assets/dr-leandro.png";

/* -------------------------------------------------------------------------- */
/*  Utilidades                                                                */
/* -------------------------------------------------------------------------- */

function useIsMobileDevice() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua));
  }, []);
  return isMobile;
}

function EmailLink({ className = "" }: { className?: string }) {
  const isMobile = useIsMobileDevice();
  const href = isMobile
    ? "mailto:medgustavocavalcanti@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=medgustavocavalcanti@gmail.com";
  return (
    <a
      href={href}
      target={isMobile ? undefined : "_blank"}
      rel={isMobile ? undefined : "noreferrer"}
      className={className}
    >
      medgustavocavalcanti@gmail.com
    </a>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACTIO — Saúde Corporativa e Conformidade NR-1" },
      {
        name: "description",
        content:
          "Programa clínico em 90 dias que adequa sua empresa à NR-1, reduz afastamentos e transforma saúde em indicador de gestão. Direção Dr. Leandro F. B. Leite.",
      },
      { property: "og:title", content: "ACTIO — Saúde Corporativa e Conformidade NR-1" },
      {
        property: "og:description",
        content:
          "Adequação à NR-1, redução de afastamentos e cultura de saúde mensurável. Programa clínico em 90 dias.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* -------------------------------------------------------------------------- */
/*  Marca                                                                     */
/* -------------------------------------------------------------------------- */

function ActioMark({ className = "h-6 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 60" className={className} fill="none" aria-hidden="true">
      <line x1="4" y1="58" x2="36" y2="6" stroke="#EFEFED" strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="58" x2="36" y2="6" stroke="#EFEFED" strokeWidth="3" strokeLinecap="round" />
      <circle cx="36" cy="5" r="5.5" fill="#D4A843" />
    </svg>
  );
}

function ActioWordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const cfg = {
    sm: { mark: "h-4 w-5", text: "text-sm tracking-[0.5em]" },
    md: { mark: "h-5 w-6", text: "text-base tracking-[0.4em]" },
    lg: { mark: "h-7 w-8", text: "text-2xl tracking-[0.55em]" },
  }[size];
  return (
    <a href="#top" className="inline-flex items-center gap-2.5 text-cream">
      <ActioMark className={cfg.mark} />
      <span className={`font-serif font-light ${cfg.text}`}>ACTIO</span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Botões                                                                    */
/* -------------------------------------------------------------------------- */

function PrimaryCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-sans text-[14px] font-semibold text-ink transition hover:bg-[color:var(--gold-soft)] ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function GhostCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-6 py-3.5 font-sans text-[14px] font-medium text-cream transition hover:border-gold hover:text-gold ${className}`}
    >
      {children}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Nav                                                                       */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#solucao", "Solução"],
    ["#nr1", "NR-1"],
    ["#como-funciona", "Como funciona"],
    ["#planos", "Planos"],
    ["#autoridade", "Quem conduz"],
  ] as const;
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-cream/[0.08] bg-ink/85 backdrop-blur-md">
      <div className="container-x flex items-center justify-between gap-4 py-4">
        <ActioWordmark />
        <div className="hidden items-center gap-8 text-[13px] font-medium text-cream/75 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <PrimaryCTA href="#contato">Agendar demonstração</PrimaryCTA>
        </div>
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-x pb-5">
            <div className="rounded-2xl border border-cream/10 bg-ink-soft p-5">
              <ul className="divide-y divide-cream/[0.07]">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-[14px] text-cream/90 hover:text-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-full bg-gold px-5 py-3 text-center text-[13px] font-semibold text-ink"
              >
                Agendar demonstração
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <header
      id="top"
      className="relative isolate overflow-hidden bg-ink pt-28 md:pt-32"
    >
      {/* Fundo com aura dourada */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 45% at 85% 20%, rgba(212,168,67,0.18) 0%, transparent 60%), radial-gradient(50% 40% at 10% 90%, rgba(212,168,67,0.10) 0%, transparent 60%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 pb-20 md:grid-cols-12 md:gap-10 md:pb-28">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            <AlertTriangle className="h-3.5 w-3.5" />
            NR-1 vigente desde 05/2026
          </span>

          <h1 className="mt-6 font-serif text-[2.5rem] font-light leading-[1.05] tracking-[-0.03em] text-cream sm:text-5xl md:text-[4rem]">
            Sua empresa está{" "}
            <span className="italic text-gold">em conformidade</span> com a nova NR-1?
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-cream/75 md:text-[17px]">
            O ACTIO adequa sua organização aos riscos psicossociais da Portaria MTE
            1.419/2024, reduz afastamentos e transforma saúde corporativa em
            indicador de gestão — com um programa clínico em 90 dias conduzido por
            médicos especialistas.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryCTA href="#contato">Agendar demonstração</PrimaryCTA>
            <GhostCTA href="#nr1">Ver o que mudou na NR-1</GhostCTA>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-cream/70">
            {[
              "Medicina baseada em evidência",
              "Cobertura NR-1 + Lei 14.831",
              "Relatório executivo para diretoria",
            ].map((f) => (
              <li key={f} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-gold" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Mock de dashboard */}
        <div className="md:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-tr from-gold/20 to-transparent blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft shadow-2xl shadow-black/40">
              <div className="flex items-center gap-1.5 border-b border-cream/[0.08] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
                <span className="ml-3 font-sans text-[11px] uppercase tracking-[0.24em] text-cream/50">
                  ACTIO · Painel Clínico
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-cream/50">
                      Conformidade NR-1
                    </div>
                    <div className="mt-1 font-serif text-4xl font-light text-cream">
                      92<span className="text-gold">%</span>
                    </div>
                  </div>
                  <div className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold text-gold">
                    +18% vs. Q1
                  </div>
                </div>

                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-cream/[0.08]">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-gold to-[color:var(--gold-soft)]" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["PHQ-9", "−34%"],
                    ["GAD-7", "−29%"],
                    ["Afast.", "−28%"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-lg border border-cream/[0.08] bg-ink p-3"
                    >
                      <div className="text-[10px] uppercase tracking-[0.2em] text-cream/50">
                        {k}
                      </div>
                      <div className="mt-1 font-serif text-lg font-light text-gold">
                        {v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2.5">
                  {[
                    ["Riscos psicossociais mapeados", true],
                    ["Plano de intervenção documentado", true],
                    ["Reavaliação e evidência de eficácia", true],
                  ].map(([label, ok]) => (
                    <div key={String(label)} className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                          ok ? "bg-gold/15 text-gold" : "bg-cream/10 text-cream/50"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-[12.5px] text-cream/80">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prova social */}
      <div className="border-y border-cream/[0.08] bg-ink-soft/50">
        <div className="container-x flex flex-wrap items-center justify-between gap-6 py-6 text-[11.5px] uppercase tracking-[0.22em] text-cream/50">
          <span className="text-cream/70">Reconhecido por</span>
          {[
            "PUC Minas",
            "PIBIC-FAPEMIG",
            "CRM-MG 68.021",
            "RQE 67.627",
            "MTE 1.419/2024",
          ].map((b) => (
            <span key={b} className="font-serif tracking-[0.28em]">
              {b}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Problema — números que a diretoria não pode ignorar                       */
/* -------------------------------------------------------------------------- */

function Problem() {
  const stats = [
    { k: "93%", t: "seguem presentes, mas adoecidos", d: "Presenteísmo invisível na equipe." },
    { k: "+68%", t: "de afastamentos por transtornos mentais", d: "Crescimento em apenas um ano." },
    { k: "546k", t: "benefícios concedidos em 2025", d: "Recorde histórico da Previdência." },
    { k: "1 / 4", t: "trabalhadores expostos a risco crônico", d: "Riscos psicossociais em países industrializados." },
  ];
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">O problema</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Adoecer no trabalho virou{" "}
            <span className="italic text-gold">indicador financeiro.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-cream/70">
            A maior parte do adoecimento corporativo não aparece em atestado. Aparece
            em prazos que escorregam, entregas erráticas e talentos que somem — antes
            de qualquer indicador soar o alarme.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-cream/[0.08] bg-ink-soft p-6 transition hover:border-gold/40"
            >
              <div className="font-serif text-4xl font-light text-gold md:text-5xl">
                {s.k}
              </div>
              <div className="mt-4 text-[14px] font-medium text-cream">{s.t}</div>
              <p className="mt-2 text-[12.5px] leading-[1.6] text-cream/60">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[11px] italic text-[color:var(--steel)]">
          Fontes: Ministério da Previdência Social · Bialowolski P et al., PLoS One
          · Ipsos, 2024.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Solução — o que o ACTIO entrega                                           */
/* -------------------------------------------------------------------------- */

function Solution() {
  const cards = [
    {
      icon: ShieldCheck,
      t: "Conformidade NR-1 sem burocracia",
      d: "Riscos psicossociais identificados, plano de intervenção documentado e reavaliação com evidência — pronto para fiscalização.",
    },
    {
      icon: Brain,
      t: "Saúde mental mensurável",
      d: "Instrumentos validados (PHQ-9, GAD-7, GHQ-12, DASS-21) aplicados por médicos, não por formulários genéricos.",
    },
    {
      icon: HeartPulse,
      t: "Cuidado clínico individual",
      d: "Consultas médicas, bioimpedância, exames e prescrição personalizada — dentro da empresa e no ritmo do time.",
    },
    {
      icon: LineChart,
      t: "Relatório executivo",
      d: "Indicadores consolidados para RH, SST e diretoria: presenteísmo, sinais vitais, saúde mental e evolução no período.",
    },
    {
      icon: MessageCircle,
      t: "Acesso direto por WhatsApp",
      d: "Canal contínuo com especialistas para dúvidas, ajustes de plano e educação semanal em saúde.",
    },
    {
      icon: Award,
      t: "Rumo ao selo 14.831",
      d: "Estrutura pronta para pleitear a certificação federal de Empresa Promotora da Saúde Mental.",
    },
  ];
  return (
    <section id="solucao" className="bg-[color:var(--ink-soft)] py-24 md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">A solução</span>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
              Um único programa cobre{" "}
              <span className="italic text-gold">obrigação e cultura.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7] text-cream/70">
            O ACTIO substitui campanhas isoladas de bem-estar por um método clínico
            contínuo, com métricas verificáveis e responsabilidade médica.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, t, d }) => (
            <article
              key={t}
              className="group rounded-2xl border border-cream/[0.08] bg-ink p-7 transition hover:-translate-y-0.5 hover:border-gold/40"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold transition group-hover:bg-gold group-hover:text-ink">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-light text-cream">{t}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-cream/70">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  NR-1 — o que mudou (duas colunas)                                         */
/* -------------------------------------------------------------------------- */

function NR1() {
  return (
    <section id="nr1" className="bg-ink py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Contexto regulatório</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            O que mudou na{" "}
            <span className="italic text-gold">NR-1 em 2026.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-cream/70">
            A Portaria MTE 1.419/2024 tornou obrigatória a inclusão de riscos
            psicossociais no PGR. Junto com a Lei 14.831/2024, redefine o papel
            estratégico do RH.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-cream/[0.10] bg-ink-soft p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Obrigatório
            </div>
            <h3 className="mt-5 font-serif text-2xl font-light text-cream md:text-3xl">
              NR-1 · riscos psicossociais no PGR
            </h3>
            <p className="mt-4 text-[14px] leading-[1.7] text-cream/75">
              Burnout, sobrecarga, assédio e estresse crônico entraram na lista de
              riscos que precisam ser identificados, avaliados e prevenidos. Vale
              para toda empresa com CLT. Fiscalização ativa, multa e embargo desde
              26/05/2026.
            </p>
            <ul className="mt-6 space-y-3 text-[13.5px] text-cream/85">
              {[
                "Identificação por avaliação clínica individual",
                "Plano de intervenção documentado e rastreável",
                "Reavaliação e evidência de eficácia",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
              Diferencial
            </div>
            <h3 className="mt-5 font-serif text-2xl font-light text-cream md:text-3xl">
              Lei 14.831 · selo de reputação
            </h3>
            <p className="mt-4 text-[14px] leading-[1.7] text-cream/75">
              Sancionada em março/2024, cria a certificação federal de{" "}
              <em>Empresa Promotora da Saúde Mental</em>. Vale por dois anos e
              reconhece organizações que estruturam programa, promovem
              conscientização e mensuram resultados.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Promoção da saúde mental",
                "Bem-estar organizacional",
                "Métricas verificáveis",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-block rounded-full border border-cream/15 bg-ink/40 px-3 py-1 text-[11px] text-cream/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>
        <p className="mt-6 text-[11px] italic text-[color:var(--steel)]">
          Portaria MTE 1.419/2024 · Lei 14.831/2024 · Ministério da Previdência Social.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Como funciona — 5 etapas                                                  */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    { d: "D0", t: "Fundação", b: "Palestra de abertura, bioimpedância, PA, glicemia, FC e SpO₂." , icon: ClipboardCheck },
    { d: "D1 → D10", t: "Consulta clínica", b: "Consultas médicas online, exames e prescrição personalizada.", icon: Stethoscope },
    { d: "D11 → D30", t: "Rotina em curso", b: "WhatsApp com especialistas, ajustes contínuos e educação semanal.", icon: Activity },
    { d: "D31 → D60", t: "Reavaliação", b: "Segundo ciclo educativo e nova leitura dos indicadores.", icon: LineChart },
    { d: "D61 → D90", t: "Entrega", b: "Avaliação final e relatório individual — pronto para gestão.", icon: Award },
  ];

  const medidas = [
    { g: "Corpo", i: ["Bioimpedância InBody 120", "Massa muscular e gordura", "Cintura-quadril", "Score InBody"] },
    { g: "Sinais vitais", i: ["Pressão arterial", "Glicemia", "Frequência cardíaca", "SpO₂"] },
    { g: "Mente (validados)", i: ["PHQ-9 · depressão", "GAD-7 · ansiedade", "GHQ-12 · sofrimento", "DASS-21 · triplo"] },
  ];

  return (
    <section id="como-funciona" className="bg-[color:var(--ink-soft)] py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Método <span className="italic text-gold">ACTIO_90.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-cream/70">
            Educação, avaliação e acompanhamento entregues dentro da empresa — na
            língua do time e no ritmo do calendário corporativo.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map(({ d, t, b, icon: Icon }, i) => (
            <li
              key={d}
              className="relative rounded-2xl border border-cream/[0.08] bg-ink p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-[11px] uppercase tracking-[0.22em] text-[color:var(--steel)]">
                  Etapa {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="h-4 w-4 text-gold" />
              </div>
              <div className="mt-4 font-serif text-2xl font-light text-gold">{d}</div>
              <div className="mt-1 font-serif text-[15px] text-cream">{t}</div>
              <p className="mt-3 text-[12.5px] leading-[1.55] text-cream/70">{b}</p>
            </li>
          ))}
        </ol>

        {/* O que medimos */}
        <div className="mt-20 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <img
              src={consultaImg}
              alt="Avaliação clínica presencial"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <span className="eyebrow">O que medimos</span>
            <h3 className="mt-4 font-serif text-2xl font-light leading-tight text-cream md:text-4xl">
              Métricas que importam — e por que importam.
            </h3>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-cream/75">
              Não formamos atletas. Cuidamos das pessoas do seu time naquilo que mais
              adoece — e prevenimos os desfechos que a empresa não vê.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {medidas.map((m) => (
                <div
                  key={m.g}
                  className="rounded-2xl border border-cream/[0.08] bg-ink p-5"
                >
                  <div className="font-serif text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    {m.g}
                  </div>
                  <ul className="mt-4 space-y-2 text-[12.5px] text-cream/80">
                    {m.i.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Planos                                                                    */
/* -------------------------------------------------------------------------- */

function Plans() {
  const tiers = [
    {
      tag: "Diagnóstico estratégico",
      name: "Now",
      desc: "Leitura inicial da saúde do seu time — para saber onde intervir antes de investir.",
      items: [
        "Entrevistas com colaboradores",
        "Palestras empresariais",
        "Relatório simplificado",
      ],
      variant: "outline" as const,
    },
    {
      tag: "30 a 180 dias · acompanhamento",
      name: "One",
      desc: "Programa de promoção da saúde com acompanhamento contínuo e evolução mensurável.",
      items: [
        "Entrevistas e acompanhamento individual",
        "Palestras empresariais",
        "Consultas com especialistas",
      ],
      variant: "solid" as const,
    },
    {
      tag: "Premium · liderança",
      name: "X",
      desc: "Solução dedicada a lideranças e equipes estratégicas, com acompanhamento ampliado.",
      items: [
        "Apoio médico online e WhatsApp",
        "Planos personalizados",
        "Relatório executivo",
      ],
      variant: "outline" as const,
    },
  ];
  return (
    <section id="planos" className="bg-ink py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Planos</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Três formatos <span className="italic text-gold">escaláveis.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-cream/70">
            Não vendemos pacotes fechados. O desenho final leva em conta porte, perfil
            de colaboradores e maturidade da instituição.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => {
            const solid = t.variant === "solid";
            return (
              <article
                key={t.name}
                className={`relative flex flex-col rounded-2xl p-8 md:p-9 ${
                  solid
                    ? "bg-gold text-ink shadow-2xl shadow-gold/20"
                    : "border border-cream/[0.10] bg-ink-soft text-cream"
                }`}
              >
                {solid && (
                  <div className="absolute -top-3 right-6 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                    Mais escolhido
                  </div>
                )}
                <div
                  className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                    solid ? "text-ink/70" : "text-gold"
                  }`}
                >
                  {t.tag}
                </div>
                <h3
                  className={`mt-4 font-serif text-4xl font-light ${
                    solid ? "text-ink" : "text-cream"
                  }`}
                >
                  ACTIO<span className={solid ? "text-ink/70" : "text-gold"}>_{t.name}</span>
                </h3>
                <p
                  className={`mt-4 text-[13.5px] leading-[1.7] ${
                    solid ? "text-ink/85" : "text-cream/80"
                  }`}
                >
                  {t.desc}
                </p>
                <ul
                  className={`mt-6 space-y-3 border-t pt-6 text-[13.5px] ${
                    solid ? "border-ink/20 text-ink/90" : "border-cream/[0.10] text-cream/85"
                  }`}
                >
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          solid ? "text-ink" : "text-gold"
                        }`}
                      />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition ${
                    solid
                      ? "bg-ink text-gold hover:bg-ink/80"
                      : "border border-gold text-gold hover:bg-gold hover:text-ink"
                  }`}
                >
                  Falar com especialista <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Autoridade — Dr. Leandro                                                  */
/* -------------------------------------------------------------------------- */

function Authority() {
  return (
    <section id="autoridade" className="bg-[color:var(--ink-soft)] py-24 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <img
            src={doctorImg}
            alt="Dr. Leandro Fernando Batista Leite"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>
        <div className="md:col-span-7">
          <span className="eyebrow">Direção técnica</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Dr. Leandro F. B. Leite
          </h2>
          <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-gold">
            CRM-MG 68.021 · RQE 67.627
          </div>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl italic leading-snug text-cream/90 md:text-2xl">
            “Medicina exercida com foco{" "}
            <span className="text-gold">centrado na pessoa</span> — pautada pelas
            melhores práticas e evidências científicas.”
          </blockquote>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <p className="text-[14px] leading-[1.7] text-cream/80">
              Pai, marido, médico especialista há mais de dez anos, leitor voraz e
              preceptor do internato de medicina da PUC-Minas. Entusiasta e
              praticante de atividades físicas.
            </p>
            <p className="text-[14px] leading-[1.7] text-cream/80">
              Fundador e diretor técnico do ACTIO, supervisor clínico direto de todos
              os participantes ao longo dos noventa dias de programa.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["PUC Minas", "PIBIC-FAPEMIG", "Medicina baseada em evidência"].map((t) => (
              <span
                key={t}
                className="inline-block rounded-full border border-cream/15 px-3 py-1 text-[11px] text-cream/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA final + contato                                                       */
/* -------------------------------------------------------------------------- */

function Contact() {
  return (
    <section id="contato" className="bg-ink py-24 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-ink-soft to-ink p-8 md:p-14">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="relative grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <span className="eyebrow">Próximo passo</span>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
                Pronto para adequar sua empresa à{" "}
                <span className="italic text-gold">NR-1?</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-[1.7] text-cream/80">
                Em trinta minutos, conhecemos o contexto da instituição e apresentamos
                caminhos concretos para transformar saúde corporativa em indicadores
                de gestão. Conversa técnica — não pitch comercial.
              </p>

              <ol className="mt-8 space-y-4">
                {[
                  ["Entender o cenário", "Mapeamos o momento atual de RH, SST e saúde corporativa."],
                  ["Identificar oportunidades", "Riscos, aderência regulatória e prioridades reais."],
                  ["Arquitetura sob medida", "Proposta inicial desenhada para o seu contexto."],
                ].map(([t, b], i) => (
                  <li key={t} className="flex items-start gap-4">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold text-[13px] font-semibold text-gold">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-serif text-[16px] text-cream">{t}</div>
                      <p className="mt-1 text-[13px] leading-[1.55] text-cream/70">{b}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-wrap gap-3">
                <PrimaryCTA href="https://wa.me/5531992655261">
                  Falar no WhatsApp
                </PrimaryCTA>
                <GhostCTA href="#solucao">Rever a solução</GhostCTA>
              </div>
            </div>

            <aside className="md:col-span-5">
              <div className="rounded-2xl border border-cream/[0.10] bg-ink p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Contato comercial
                </div>
                <div className="mt-4 font-serif text-2xl font-light text-cream">
                  Gustavo Cavalcanti
                </div>
                <div className="mt-1 text-[12px] text-cream/60">Diretor Comercial</div>

                <dl className="mt-6 divide-y divide-cream/[0.10] border-t border-cream/[0.10] text-[13.5px]">
                  <div className="py-4">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--steel)]">
                      E-mail
                    </dt>
                    <dd className="mt-1 break-all text-cream/90">
                      <EmailLink className="underline decoration-gold/40 decoration-1 underline-offset-4 transition hover:decoration-gold hover:text-gold" />
                    </dd>
                  </div>
                  <div className="py-4">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--steel)]">
                      WhatsApp
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="https://wa.me/5531992655261"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cream/90 underline decoration-gold/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
                      >
                        (31) 99265-5261
                      </a>
                    </dd>
                  </div>
                  <div className="py-4">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--steel)]">
                      Sede
                    </dt>
                    <dd className="mt-1 text-cream/80">Belo Horizonte · MG</dd>
                  </div>
                </dl>

                <a
                  href="https://wa.me/5531992655261"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-5 py-3 text-[13px] font-semibold text-gold transition hover:bg-gold hover:text-ink"
                >
                  Agendar visita técnica <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                    */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-cream/[0.10] bg-ink py-12">
      <div className="container-x grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <ActioWordmark size="sm" />
          <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-[color:var(--steel)]">
            Saúde corporativa é estratégia
          </div>
        </div>
        <p className="text-[11.5px] leading-[1.75] text-cream/65 md:col-span-5">
          Programa ACTIO · Medicina baseada em evidências · Direção técnica Dr.
          Leandro F. B. Leite, CRM-MG 68.021 / RQE 67.627.
        </p>
        <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--steel)] md:col-span-3 md:text-right">
          © {new Date().getFullYear()} ACTIO
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Composição                                                                */
/* -------------------------------------------------------------------------- */

function Index() {
  return (
    <main className="bg-ink text-cream">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <NR1 />
      <HowItWorks />
      <Plans />
      <Authority />
      <Contact />
      <Footer />
    </main>
  );
}
