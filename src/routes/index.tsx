import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Brain,
  HeartPulse,
  LineChart,
  ClipboardCheck,
  Stethoscope,
  FileText,
  Users,
  GraduationCap,
  Check,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import consultaImg from "@/assets/consulta.jpg";
import doctorImg from "@/assets/dr-leandro.png";
import gustavoImg from "@/assets/gustavo-cavalcanti.png";

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
      { title: "ACTIO — Saúde Corporativa de Alto Impacto" },
      {
        name: "description",
        content:
          "Programa clínico de saúde corporativa com diagnóstico, educação e acompanhamento médico individualizado. Três níveis. Entregáveis reais. Baseado em evidências.",
      },
      { property: "og:title", content: "ACTIO — Saúde Corporativa de Alto Impacto" },
      {
        property: "og:description",
        content:
          "Identificamos o que está invisível na saúde do seu time — e agimos antes que apareça no resultado.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:title", content: "ACTIO — Saúde Corporativa de Alto Impacto" },
      {
        name: "twitter:description",
        content:
          "Programa clínico B2B com diagnóstico individual, educação baseada em evidências e acompanhamento médico. Para empresas que tratam saúde como estratégia.",
      },
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
    ["#como-funciona", "Como funciona"],
    ["#planos", "Programas"],
    ["#autoridade", "Quem conduz"],
    ["#contato", "Contato"],
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
          <PrimaryCTA href="#contato">Agendar conversa técnica</PrimaryCTA>
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
                Agendar conversa técnica
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
    <header id="top" className="relative isolate overflow-hidden bg-ink pt-28 md:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 45% at 85% 20%, rgba(212,168,67,0.18) 0%, transparent 60%), radial-gradient(50% 40% at 10% 90%, rgba(212,168,67,0.10) 0%, transparent 60%)",
        }}
      />
      <div className="container-x relative pb-24 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70">
            Programa clínico B2B
          </span>

          <h1 className="mt-7 font-serif text-[2.25rem] font-light leading-[1.08] tracking-[-0.03em] text-cream sm:text-5xl md:text-[3.75rem]">
            As pessoas certas no seu time estão operando no{" "}
            <span className="italic text-gold">potencial que você contratou?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-cream/75 md:text-[17px]">
            O Actio é um programa clínico de saúde corporativa. Identificamos o que
            está invisível na sua equipe — e agimos antes que apareça no resultado.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PrimaryCTA href="#contato">Agendar conversa técnica</PrimaryCTA>
            <GhostCTA href="#como-funciona">Ver como funciona</GhostCTA>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-cream/70">
            {[
              "Medicina baseada em evidências",
              "Diagnóstico clínico individual",
              "Relatório executivo para o RH",
            ].map((f) => (
              <li key={f} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-gold" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Problema                                                                  */
/* -------------------------------------------------------------------------- */

function Problem() {
  const stats = [
    {
      k: "93%",
      t: "do custo de produtividade perdida",
      d: "vem do presenteísmo — profissionais presentes, mas com capacidade comprometida e invisíveis para o RH.",
      s: "Bialowolski et al., PLoS One, 2020",
    },
    {
      k: "2,3×",
      t: "é o custo da perda de produtividade",
      d: "comparado ao custo médico direto. O maior ralo financeiro não está no plano de saúde.",
      s: "Loeppke et al., J Occup Environ Med, 2009 · 51.648 colaboradores",
    },
    {
      k: "+68%",
      t: "de afastamentos por saúde mental",
      d: "crescimento no Brasil entre 2023 e 2024. 546.254 benefícios previdenciários concedidos em 2025 — o maior número já registrado.",
      s: "Ministério da Previdência Social, 2025",
    },
    {
      k: "75%",
      t: "de fatores de risco silenciosos",
      d: "identificados em populações corporativas consideradas saudáveis — obesidade central e hipertensão não diagnosticadas.",
      s: "Gray et al., BMC Public Health, 2014 · +800 colaboradores",
    },
  ];
  return (
    <section className="bg-ink py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">O contexto</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            O adoecimento da sua equipe não aparece nos{" "}
            <span className="italic text-gold">indicadores que você monitora.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-cream/70">
            Aparece em prazos que escorregam, entregas erráticas e talentos que pedem
            demissão. Até que um afastamento acontece — e o custo real se torna visível.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.t}
              className="flex flex-col rounded-2xl border border-cream/[0.08] bg-ink-soft p-6 transition hover:border-gold/40"
            >
              <div className="font-serif text-4xl font-light text-gold md:text-5xl">
                {s.k}
              </div>
              <div className="mt-4 text-[14px] font-medium text-cream">{s.t}</div>
              <p className="mt-2 text-[12.5px] leading-[1.6] text-cream/60">{s.d}</p>
              <p className="mt-4 border-t border-cream/[0.08] pt-3 text-[10.5px] italic leading-[1.5] text-[color:var(--steel)]">
                {s.s}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[11px] italic text-[color:var(--steel)]">
          Fontes: Bialowolski et al., PLoS One, 2020 · Loeppke et al., J Occup Environ
          Med, 2009 · Ministério da Previdência Social, 2025 · Gray et al., 2014.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Solução                                                                   */
/* -------------------------------------------------------------------------- */

function Solution() {
  const cards = [
    {
      icon: Stethoscope,
      t: "Diagnóstico clínico individual",
      d: "Bioimpedância completa, sinais vitais e triagem de saúde mental com instrumentos validados (PHQ-9, GAD-7, DASS-21). Aplicados em contexto clínico, não como formulário de RH.",
    },
    {
      icon: FileText,
      t: "Relatório individual — confidencial",
      d: "Cada colaborador recebe o próprio relatório com interpretação clínica dos seus dados. O RH não tem acesso a dados individuais. Nunca.",
    },
    {
      icon: LineChart,
      t: "Painel agregado para a empresa",
      d: "A empresa recebe o perfil de saúde do grupo — sempre anônimo e agregado. Riscos identificados, comparativos populacionais e recomendações de próximos passos.",
    },
    {
      icon: GraduationCap,
      t: "Educação baseada no diagnóstico",
      d: "As palestras são calibradas ao perfil real do grupo — não um roteiro genérico. O que predominou no diagnóstico determina o que é aprofundado.",
    },
    {
      icon: HeartPulse,
      t: "Acompanhamento médico individual",
      d: "Disponível no Actio_X. Consultas online, prescrição alimentar e plano de atividade física individualizados, assinados pelo médico responsável.",
    },
    {
      icon: Users,
      t: "Devolutiva executiva",
      d: "Sessão com RH e liderança apresentando os resultados com leitura clínica. Não é relatório para arquivar — é base para a próxima decisão.",
    },
  ];
  return (
    <section id="solucao" className="bg-[color:var(--ink-soft)] py-24 md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">O que fazemos</span>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
              Um programa clínico que separa o que a empresa vê do{" "}
              <span className="italic text-gold">que o colaborador recebe.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7] text-cream/70">
            Essa separação não é operacional — é o que torna o programa eticamente
            consistente e clinicamente efetivo. O colaborador não teme ser julgado.
            A empresa recebe dados reais, não respostas fabricadas para agradar.
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
/*  NR-1                                                                      */
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

        <div className="mt-10 rounded-2xl border border-gold/25 bg-gold/[0.04] px-6 py-5 text-center">
          <p className="font-serif text-[17px] italic leading-[1.6] text-cream md:text-xl">
            A conformidade é o piso — não o teto. O Actio entrega o que a lei exige{" "}
            <span className="text-gold">e o que a sua equipe precisa.</span>
          </p>
        </div>

        <p className="mt-6 text-[11px] italic text-[color:var(--steel)]">
          Portaria MTE 1.419/2024 · Lei 14.831/2024 · Ministério da Previdência Social.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Como funciona — 3 fases                                                   */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const phases = [
    {
      n: "01",
      t: "Diagnóstico",
      d: "Avaliação de composição corporal, sinais vitais e triagem de saúde mental. Relatório individual entregue ao colaborador. Painel agregado anônimo entregue à empresa. A base que torna qualquer passo seguinte clinicamente informado.",
      icon: ClipboardCheck,
    },
    {
      n: "02",
      t: "Educação",
      d: "Palestras baseadas no perfil identificado no diagnóstico — saúde mental, atividade física e nutrição. Conteúdo calibrado para aquele grupo específico, não para um público genérico.",
      icon: GraduationCap,
    },
    {
      n: "03",
      t: "Evolução",
      d: "Reavaliação clínica com relatório comparativo individual — ponto de partida versus momento atual. Painel de evolução agregado para a empresa. Devolutiva executiva com RH e liderança.",
      icon: LineChart,
    },
  ];

  const medidas = [
    { g: "Corpo", i: ["Bioimpedância InBody 120", "Massa muscular e gordura", "Cintura-quadril", "Score InBody"] },
    { g: "Sinais vitais", i: ["Pressão arterial", "Glicemia capilar", "Frequência cardíaca", "SpO₂"] },
    { g: "Mente (validados)", i: ["PHQ-9 · depressão", "GAD-7 · ansiedade", "DASS-21 · triplo", "Escuta clínica"] },
  ];

  return (
    <section id="como-funciona" className="bg-[color:var(--ink-soft)] py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Três fases. Uma sequência que faz{" "}
            <span className="italic text-gold">sentido clínico.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-cream/70">
            A duração de cada fase é definida conforme o porte da equipe e os
            objetivos da organização. O que não muda é a ordem — porque diagnóstico
            antes de educação, e educação antes de reavaliação, não é preferência:
            é método.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {phases.map(({ n, t, d, icon: Icon }) => (
            <li
              key={n}
              className="relative rounded-2xl border border-cream/[0.08] bg-ink p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-5xl font-light text-gold">{n}</span>
                <Icon className="h-5 w-5 text-gold/80" />
              </div>
              <div className="mt-5 font-serif text-2xl font-light text-cream">{t}</div>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-cream/70">{d}</p>
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
/*  Programas                                                                 */
/* -------------------------------------------------------------------------- */

function Plans() {
  const tiers = [
    {
      tag: "Diagnóstico",
      name: "Now",
      desc: "Para saber onde a sua equipe está antes de decidir o que fazer.",
      items: [
        "Avaliação de composição corporal com bioimpedância",
        "Sinais vitais — PA, FC, SpO₂ e glicemia capilar",
        "Triagem de saúde mental (PHQ-9, GAD-7, DASS-21)",
        "Relatório individual confidencial para cada colaborador",
        "Painel diagnóstico agregado e anônimo para a empresa",
        "Devolutiva executiva com RH",
      ],
      variant: "outline" as const,
    },
    {
      tag: "Diagnóstico + Educação",
      name: "One",
      desc: "Para agir sobre o que o diagnóstico revelou.",
      items: [
        "Tudo do Actio_Now incluído",
        "Três palestras calibradas ao perfil do grupo",
        "Saúde mental, atividade física e nutrição",
        "Reavaliação clínica ao final do programa",
        "Relatório comparativo individual — antes e depois",
        "Painel de evolução agregado para a empresa",
      ],
      variant: "solid" as const,
    },
    {
      tag: "Programa completo · co-criado",
      name: "X",
      desc: "Para organizações que querem construir o programa junto.",
      items: [
        "Tudo do Actio_One incluído",
        "Workshop de co-design com RH antes do início",
        "Consultas médicas individuais online",
        "Prescrição alimentar e plano de exercícios pelo médico",
        "Suporte médico por WhatsApp durante todo o programa",
        "Escopo, duração e público definidos em conjunto",
        "Suporte à certificação Lei 14.831/2024",
      ],
      variant: "outline" as const,
      note: "Sem template. Sem duração fixa. Desenhado para a sua realidade.",
    },
  ];
  return (
    <section id="planos" className="bg-ink py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Programas</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Três formatos, uma{" "}
            <span className="italic text-gold">mesma lógica clínica.</span>
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.7] text-cream/70">
            Escolha o ponto de entrada que faz sentido para o momento da organização.
            O escopo final é sempre desenhado com você.
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
                  Actio<span className={solid ? "text-ink/70" : "text-gold"}>_{t.name}</span>
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
                {t.note && (
                  <p
                    className={`mt-6 text-[12px] italic leading-[1.6] ${
                      solid ? "text-ink/70" : "text-cream/55"
                    }`}
                  >
                    {t.note}
                  </p>
                )}
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
/*  Autoridade — Dr. Leandro + Gustavo                                        */
/* -------------------------------------------------------------------------- */

function Authority() {
  return (
    <section id="autoridade" className="bg-[color:var(--ink-soft)] py-24 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Quem conduz</span>
          <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-cream md:text-5xl">
            Quem está por trás do{" "}
            <span className="italic text-gold">programa.</span>
          </h2>
        </div>

        {/* Dr. Leandro */}
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <img
              src={doctorImg}
              alt="Dr. Leandro Fernando Batista Leite"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Direção clínica
            </span>
            <h3 className="mt-3 font-serif text-3xl font-light leading-tight text-cream md:text-4xl">
              Dr. Leandro F. B. Leite
            </h3>
            <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-cream/60">
              CRM-MG 68.021 · RQE 67.627 · Diretor Técnico
            </div>
            <blockquote className="mt-7 border-l-2 border-gold pl-5 font-serif text-lg italic leading-snug text-cream/90 md:text-xl">
              “Medicina exercida com foco{" "}
              <span className="text-gold">centrado na pessoa</span> — pautada pelas
              melhores práticas e evidências científicas.”
            </blockquote>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <p className="text-[14px] leading-[1.7] text-cream/80">
                Médico especialista há mais de dez anos, preceptor do internato de
                medicina da PUC Minas. Pai, marido, leitor voraz e praticante de
                atividades físicas.
              </p>
              <p className="text-[14px] leading-[1.7] text-cream/80">
                Direção técnica do Actio e supervisor clínico dos protocolos,
                relatórios individuais e devolutivas executivas entregues a cada
                cliente.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {["PUC Minas", "Medicina baseada em evidência", "Supervisão clínica"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-block rounded-full border border-cream/15 px-3 py-1 text-[11px] text-cream/80"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="my-16 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-cream/[0.10]" />
          <span className="font-serif text-[11px] uppercase tracking-[0.32em] text-[color:var(--steel)]">
            &amp;
          </span>
          <span className="h-px flex-1 bg-cream/[0.10]" />
        </div>

        {/* Gustavo */}
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5 md:order-2">
            <img
              src={gustavoImg}
              alt="Gustavo Cavalcanti"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="md:col-span-7 md:order-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Fundação e contato comercial
            </span>
            <h3 className="mt-3 font-serif text-3xl font-light leading-tight text-cream md:text-4xl">
              Gustavo Cavalcanti
            </h3>
            <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-cream/60">
              Fundador e Diretor Comercial · Medicina PUC Minas
            </div>
            <p className="mt-7 text-[14.5px] leading-[1.75] text-cream/80">
              Estudante de medicina no internato da PUC Minas e pesquisador
              PIBIC-FAPEMIG em epidemiologia de hábitos de vida em adolescentes.
              Fundou o Actio para levar rigor clínico à saúde corporativa.
            </p>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-cream/80">
              É o ponto de contato do programa — conduz as conversas técnicas
              iniciais e acompanha a implementação junto ao RH de cada cliente.
            </p>
            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-cream/[0.10] bg-ink p-4">
                <dt className="text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--steel)]">
                  E-mail
                </dt>
                <dd className="mt-1.5 break-all text-[13px] text-cream/90">
                  <EmailLink className="underline decoration-gold/40 decoration-1 underline-offset-4 transition hover:decoration-gold hover:text-gold" />
                </dd>
              </div>
              <div className="rounded-xl border border-cream/[0.10] bg-ink p-4">
                <dt className="text-[10.5px] uppercase tracking-[0.22em] text-[color:var(--steel)]">
                  WhatsApp
                </dt>
                <dd className="mt-1.5 text-[13px]">
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
            </dl>
            <div className="mt-7 flex flex-wrap gap-2">
              {["PUC Minas", "PIBIC-FAPEMIG", "Fundador do Actio"].map((t) => (
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
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA final                                                                 */
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
                O que você gostaria que fosse diferente na{" "}
                <span className="italic text-gold">saúde do seu time?</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15.5px] leading-[1.7] text-cream/80">
                Em trinta minutos entendemos o perfil da equipe, os desafios que você
                já vê e os que suspeita existir. A partir daí, desenhamos algo que
                faz sentido para a sua realidade. Sem proposta genérica. Sem
                compromisso.
              </p>

              <ol className="mt-8 space-y-4">
                {[
                  [
                    "Entender o contexto",
                    "Perfil da equipe, desafios de RH e SST, o que já existe e o que está faltando.",
                  ],
                  [
                    "Identificar o programa certo",
                    "Now, One ou _X — a escolha depende do que faz sentido para o momento da organização.",
                  ],
                  [
                    "Proposta sob medida",
                    "Escopo, formato e próximos passos desenhados para o seu contexto específico.",
                  ],
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
                <GhostCTA href="#planos">Rever os programas</GhostCTA>
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
                <div className="mt-1 text-[12px] text-cream/60">
                  Fundador · Diretor Comercial
                </div>

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
                  Agendar conversa técnica <ArrowUpRight className="h-4 w-4" />
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
            Actio · Saúde Corporativa de Alto Impacto
          </div>
        </div>
        <div className="space-y-2 text-[11.5px] leading-[1.75] text-cream/65 md:col-span-5">
          <p>
            Direção técnica Dr. Leandro F. B. Leite · CRM-MG 68.021 · RQE 67.627.
          </p>
          <p>
            Gustavo Cavalcanti · Fundador ·{" "}
            <EmailLink className="underline decoration-gold/30 underline-offset-4 hover:text-gold hover:decoration-gold" />
          </p>
        </div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--steel)] md:col-span-3 md:text-right">
          © {new Date().getFullYear()} Actio
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
