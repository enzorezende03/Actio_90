import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import consultaImg from "@/assets/consulta.jpg";
import doctorImg from "@/assets/dr-leandro.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACTIO — Saúde Corporativa é Estratégia" },
      {
        name: "description",
        content:
          "Programa B2B de saúde corporativa baseado em evidência. Conformidade NR-1, Lei 14.831 e indicadores reais para RH, SST e diretoria.",
      },
      { property: "og:title", content: "ACTIO — Saúde Corporativa é Estratégia" },
      {
        property: "og:description",
        content:
          "Conformidade NR-1 convertida em cultura. ACTIO_Now · ACTIO_One · ACTIO_X — programas para empresas que tratam saúde como vantagem competitiva.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

/* -------------------------------------------------------------------------- */
/*  Marca — Logo ACTIO conforme guia (duas diagonais + ponto dourado)         */
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
/*  Primitivos                                                                */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-serif text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--gold)]/80">
      {children}
    </span>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif font-light leading-[1.1] tracking-[-0.02em] text-[2rem] text-cream sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function Badge({
  tone = "gold",
  children,
}: {
  tone?: "gold" | "outline";
  children: React.ReactNode;
}) {
  const cls =
    tone === "gold"
      ? "border border-gold/25 bg-[color:var(--gold)]/10 text-gold"
      : "border border-cream/15 text-cream/70";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 font-serif text-[10px] font-semibold uppercase tracking-[0.22em] ${cls}`}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Nav                                                                       */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#programa", "Programas"],
    ["#servicos", "Serviços"],
    ["#evidencia", "Evidências"],
    ["#responsavel", "Sobre"],
    ["#contato", "Contato"],
  ] as const;
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-cream/[0.07] bg-ink/90 backdrop-blur-md">
      <div className="container-x flex items-center justify-between gap-4 py-4">
        <ActioWordmark />
        <div className="hidden items-center gap-8 text-[13px] text-cream/70 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="hidden shrink-0 rounded-xl bg-gold px-4 py-2.5 font-serif text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-[color:var(--gold-soft)] md:inline-block"
        >
          Agendar conversa
        </a>
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cream/15 text-cream transition hover:border-gold hover:text-gold md:hidden"
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
                      className="block py-3 font-serif text-[13px] uppercase tracking-[0.22em] text-cream/85 hover:text-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-5 block rounded-xl bg-gold px-5 py-3 text-center font-serif text-[11px] font-semibold uppercase tracking-[0.22em] text-ink"
              >
                Agendar conversa
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
    <header id="top" className="relative isolate overflow-hidden bg-ink pt-24">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/95 to-ink" />

      <div className="relative container-x py-20 md:py-32">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>NR-1 Conforme</Badge>
          <Badge>Lei 14.831/2024</Badge>
          <Badge tone="outline">PUC Minas · PIBIC-FAPEMIG</Badge>
        </div>

        <h1 className="mt-8 max-w-4xl font-serif font-light leading-[1.02] tracking-[-0.025em] text-[2.6rem] text-cream sm:text-6xl md:text-[5rem]">
          Saúde corporativa <br />
          <span className="text-gold">é estratégia.</span>
        </h1>

        <p className="mt-8 max-w-xl text-[15px] leading-[1.7] text-cream/70 md:text-base">
          546.254 afastamentos por transtornos mentais em 2025 — o maior número já
          registrado. Para empresas que tratam saúde como vantagem competitiva, e não
          como ação de bem-estar de prateleira.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-4 font-serif text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-[color:var(--gold-soft)]"
          >
            Agendar visita técnica
          </a>
          <a
            href="#programa"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream/15 px-7 py-4 font-serif text-[12px] font-semibold uppercase tracking-[0.2em] text-cream transition hover:border-gold hover:text-gold"
          >
            Ver programas <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Problema — stat cards dourados                                            */
/* -------------------------------------------------------------------------- */

function Problema() {
  const stats = [
    ["93%", "dos profissionais com saúde comprometida continuam comparecendo ao trabalho — o custo invisível do presenteísmo."],
    ["+68%", "crescimento em afastamentos por transtornos mentais no Brasil em apenas um ano."],
    ["1 em 4", "trabalhadores em países industrializados exposto a riscos psicossociais crônicos."],
    ["38%", "dos profissionais com DM2 apresentam depressão concomitante não diagnosticada."],
    ["546.254", "benefícios concedidos por transtornos mentais em 2025 no Brasil — o maior número já registrado."],
    ["NR-1", "Portaria MTE nº 1.419/2024 em vigor desde maio/2026."],
  ];
  return (
    <section className="bg-[color:var(--ink-soft)] py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>O problema</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          O custo invisível do adoecimento corporativo.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-cream/70">
          Pessoas sobrecarregadas, sedentárias e sem instrução clínica tornam-se um
          risco silencioso para si e para a organização — com impacto direto em
          produtividade, cultura e resultados.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map(([k, b]) => (
            <div
              key={k}
              className="rounded-2xl border border-cream/[0.07] bg-ink p-6"
            >
              <div className="font-serif text-4xl font-bold leading-none text-gold">
                {k}
              </div>
              <p className="mt-4 text-[13px] leading-[1.6] text-cream/70">{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[12px] italic leading-relaxed text-[color:var(--steel)]">
          Ministério da Previdência Social, 2025 · Bialowolski P et al. PLoS One,
          2020 · Ipsos World Mental Health Day Report, 2024.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reflexão                                                                  */
/* -------------------------------------------------------------------------- */

function Reflection() {
  const questions = [
    "Quantas pessoas do seu time estão presentes — mas não inteiras?",
    "E quantas você consegue ver antes que o custo apareça em afastamento ou demissão?",
    "É possível cumprir exigências legais sem se afogar em burocracia?",
    "Sua empresa trata saúde do trabalhador apenas como exames admissionais e ASOs?",
    "Sua empresa está adequada para lidar com riscos psicossociais da NR-1?",
    "Sua empresa possui indicadores confiáveis de saúde corporativa?",
  ];
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow>Ponto de partida</Eyebrow>
          <SectionTitle className="mt-5">
            O que sua instituição ganha com o que investe nas pessoas?
          </SectionTitle>
          <blockquote className="mt-10 rounded-r-xl border-l-2 border-gold bg-[color:var(--ink-soft)] px-5 py-4 font-serif text-base italic leading-snug text-cream/80">
            A oportunidade não está em oferecer mais uma ação de bem-estar — mas em
            transformar exigências legais em cultura empresarial de bem-estar.
          </blockquote>
        </div>
        <div className="md:col-span-7">
          <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--steel)]">
            Apenas para refletir
          </p>
          <ol className="mt-6 divide-y divide-cream/[0.07] border-y border-cream/[0.07]">
            {questions.map((q, i) => (
              <li key={q} className="grid grid-cols-[auto_1fr] gap-5 py-6">
                <span className="font-serif text-2xl font-light text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-[1.6] text-cream/90">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Visão · 3 pilares                                                         */
/* -------------------------------------------------------------------------- */

function Pillars() {
  const items = [
    {
      n: "01",
      title: "Saúde física",
      body: "Hábitos, prevenção de doenças crônicas e qualidade de vida com prescrição individualizada.",
    },
    {
      n: "02",
      title: "Saúde mental",
      body: "Mapeamento de riscos psicossociais (PHQ-9, GAD-7, DASS-21) e estratégias de prevenção.",
    },
    {
      n: "03",
      title: "Gestão corporativa",
      body: "Indicadores consolidados para RH, SST e diretoria — base para tomada de decisão.",
    },
  ];
  return (
    <section className="bg-[color:var(--ink-soft)] py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Nossa visão</Eyebrow>
            <SectionTitle className="mt-5">
              Da ação isolada à gestão de indicadores.
            </SectionTitle>
          </div>
          <p className="text-[15px] leading-[1.7] text-cream/70 md:col-span-5">
            O ACTIO estrutura programas que combinam conscientização, avaliação,
            acompanhamento e relatórios executivos — conectando saúde física, mental e
            produtividade.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-cream/[0.07] bg-ink p-7"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--gold)]/15 font-serif text-sm font-bold text-gold">
                {p.n}
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-cream">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-cream/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Legislação                                                                */
/* -------------------------------------------------------------------------- */

function Legislacao() {
  return (
    <section id="legislacao" className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>Legislação & conformidade</Eyebrow>
        <SectionTitle className="mt-5 max-w-4xl">
          Sua empresa já tem uma obrigação legal. Nós ajudamos a cumpri-la — e a ir além.
        </SectionTitle>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-cream/[0.07] bg-[color:var(--ink-soft)] p-8">
            <Badge>Vigente desde 05/2026</Badge>
            <h3 className="mt-5 font-serif text-2xl font-medium text-cream">
              NR-1 atualizada — riscos psicossociais
            </h3>
            <ul className="mt-5 space-y-3 text-[13px] leading-[1.65] text-cream/75">
              <li>— Portaria MTE nº 1.419/2024 incluiu burnout, sobrecarga, assédio e estresse crônico no PGR.</li>
              <li>— Obrigatório para todas as empresas com trabalhadores CLT.</li>
              <li>— Fiscalização ativa com multas e embargos desde 26/05/2026.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-gold/25 bg-[color:var(--ink-soft)] p-8">
            <Badge>Vantagem competitiva</Badge>
            <h3 className="mt-5 font-serif text-2xl font-medium text-cream">
              Lei 14.831 — Empresa Promotora da Saúde Mental
            </h3>
            <p className="mt-5 text-[13px] leading-[1.65] text-cream/75">
              Sancionada em março/2024, institui certificação federal para empresas
              que vão além do mínimo legal. Válida por 2 anos, reconhece organizações
              com programas estruturados.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Promoção da saúde mental", "Bem-estar", "Métricas"].map((t) => (
                <Badge key={t} tone="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["NR-1 · Identificação de riscos", "Avaliação clínica individual mapeia sobrecarga, sedentarismo e indicadores metabólicos — base para o PGR."],
            ["NR-1 · Medidas de prevenção", "Plano de atividade física e alimentação personalizado constitui intervenção documentada e rastreável."],
            ["Lei 14.831 · Apoio à saúde mental", "Palestras + acompanhamento de 90 dias atendem o pilar de Promoção da Saúde Mental."],
            ["Lei 14.831 · Conscientização", "Eventos educativos baseados em evidência cumprem o Art. 3º, alínea c da lei."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-xl border-l-2 border-gold bg-[color:var(--ink-soft)] p-5">
              <div className="font-serif text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                {t}
              </div>
              <p className="mt-2 text-[13px] leading-[1.6] text-cream/75">{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[11px] italic leading-relaxed text-[color:var(--steel)]">
          Portaria MTE nº 1.419/2024 · Lei nº 14.831/2024 · Ministério da Previdência
          Social (2025).
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ROI — stat boxes                                                          */
/* -------------------------------------------------------------------------- */

function ROI() {
  const stats = [
    { k: "2,3×", title: "Mais produtivos", body: "Profissionais saudáveis são até 2,3× mais produtivos que aqueles com saúde comprometida.", ref: "Carnethon M et al. Circulation. 2009." },
    { k: "R$2,54", title: "Por real investido", body: "Para cada real investido em saúde preventiva, R$2,54 de economia em custos médicos.", ref: "Dement JM et al. J Occup Environ Med. 2015." },
    { k: "−28%", title: "Menos afastamentos", body: "Programas preventivos reduzem em até 28% afastamentos por doença crônica.", ref: "Carnethon M et al. Circulation. 2009." },
    { k: "93%", title: "Presenteísmo", body: "Profissionais presentes mas debilitados respondem por 93% da perda de produtividade.", ref: "Bialowolski P et al. PLoS One. 2020." },
  ];
  return (
    <section className="bg-[color:var(--ink-soft)] py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>O ROI</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Pessoas saudáveis performam mais.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-cream/70">
          A ciência comprova: saúde corporativa não é benefício — é vantagem
          competitiva. Programas preventivos documentam ganhos mensuráveis em
          produtividade, retenção e custos médicos.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-cream/[0.07] bg-ink p-7"
            >
              <div className="font-serif text-[44px] font-bold leading-none text-gold">
                {s.k}
              </div>
              <h3 className="mt-5 font-serif text-base font-medium text-cream">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-cream/70">{s.body}</p>
              <p className="mt-auto pt-5 text-[10px] italic leading-snug text-[color:var(--steel)]">
                {s.ref}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Evidência científica                                                      */
/* -------------------------------------------------------------------------- */

function Evidencia() {
  return (
    <section id="evidencia" className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>Evidência científica</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          O que ensinamos ao seu time — em duas frentes.
        </SectionTitle>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-cream/[0.07] bg-[color:var(--ink-soft)] p-8">
            <Eyebrow>Primeiro eixo</Eyebrow>
            <h3 className="mt-3 font-serif text-2xl font-medium text-cream">
              Atividade física e saúde mental
            </h3>
            <p className="mt-5 text-[13px] leading-[1.65] text-cream/75">
              <span className="text-cream">Meta-análise · 79.551 participantes:</span>{" "}
              efeitos terapêuticos mensuráveis na redução de depressão, ansiedade e
              sofrimento psicológico.
            </p>
            <ul className="mt-6 space-y-4 border-t border-cream/[0.07] pt-6">
              {[
                ["61%", "Redução robusta de sintomas em todas as populações adultas."],
                ["2×", "Treinos combinados supervisionados em grupo: mais eficazes que aeróbico isolado."],
                ["15 min", "15 min/dia de MVPA já melhoram a saúde mental autorrelatada."],
              ].map(([k, b]) => (
                <li key={k} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-serif text-xl font-bold text-gold">{k}</span>
                  <p className="text-[13px] leading-[1.6] text-cream/80">{b}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[10px] italic leading-snug text-[color:var(--steel)]">
              Munro NR et al. Br J Sports Med. 2026;60(8):590-599.
            </p>
          </article>

          <article className="rounded-2xl border border-cream/[0.07] bg-[color:var(--ink-soft)] p-8">
            <Eyebrow>Segundo eixo</Eyebrow>
            <h3 className="mt-3 font-serif text-2xl font-medium text-cream">
              Alimentação e saúde mental
            </h3>
            <p className="mt-5 text-[13px] leading-[1.65] text-cream/75">
              <span className="text-cream">
                Estudo prospectivo · 180.446 participantes · 11,6 anos:
              </span>{" "}
              maior adesão à dieta EAT-Lancet associou-se a menor risco de depressão
              (HR 0,71–0,81) e ansiedade.
            </p>
            <div className="mt-6 border-t border-cream/[0.07] pt-6">
              <div className="font-serif text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--steel)]">
                Padrões com evidência
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Mediterrânea", "DASH", "EAT-Lancet"].map((t) => (
                  <Badge key={t} tone="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-[13px] leading-[1.6] text-cream/80">
              <li>→ <span className="text-cream">Vitaminas do complexo B</span> — síntese de serotonina, dopamina e GABA.</li>
              <li>→ <span className="text-cream">Magnésio e probióticos</span> — modulação da ansiedade e eixo microbioma-intestino-cérebro.</li>
              <li>⨯ <span className="text-cream">Evitar:</span> ultraprocessados, açúcares refinados e padrões pró-inflamatórios.</li>
            </ul>
            <p className="mt-6 text-[10px] italic leading-snug text-[color:var(--steel)]">
              Lu X et al. Nat Commun. 2024;15(1):5599.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Programa ACTIO_90                                                         */
/* -------------------------------------------------------------------------- */

function Programa() {
  return (
    <section id="programa" className="bg-[color:var(--ink-soft)] py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>O ACTIO_90</Eyebrow>
          <SectionTitle className="mt-5">
            Educação e promoção em saúde, entregues na sua empresa.
          </SectionTitle>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75">
            O Programa ACTIO_90 Saúde Corporativa Impacto Real traduz evidência
            científica em boas práticas. Elimina barreiras de acesso, simplifica a
            literatura e fala a língua do seu time.
          </p>
          <dl className="mt-8 space-y-6 border-t border-cream/[0.07] pt-6">
            <div>
              <dt className="font-serif text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Público-alvo
              </dt>
              <dd className="mt-2 text-[14px] text-cream/80">
                Grupos de 10+ colaboradores — foco em lideranças e times estratégicos.
              </dd>
            </div>
            <div>
              <dt className="font-serif text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Duração & entregáveis
              </dt>
              <dd className="mt-2 text-[14px] text-cream/80">
                90 dias de acompanhamento contínuo. Cada participante recebe relatório
                individual personalizado e canal direto com especialistas por WhatsApp.
              </dd>
            </div>
          </dl>
        </div>
        <div className="md:col-span-7">
          <img
            src={consultaImg}
            alt="Médica em consulta com paciente"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Jornada                                                                   */
/* -------------------------------------------------------------------------- */

function Jornada() {
  const steps = [
    { d: "D0", title: "Início", bullets: ["Primeiro ciclo de palestras de educação e promoção em saúde", "Avaliação de composição corporal e vitais", "Bioimpedância + PA + Glicemia + FC + SpO₂"] },
    { d: "D1 → D10", title: "Consultas individuais", bullets: ["Consultas médicas individuais e online", "Solicitação de exames, se aplicáveis", "Prescrição alimentar personalizada", "Plano de atividades físicas exclusivo"] },
    { d: "D11 → D30", title: "Execução & engajamento", bullets: ["Acompanhamento via WhatsApp com especialistas", "Ajustes contínuos do plano alimentar e de atividades", "Educação contínua em saúde"] },
    { d: "D31 → D60", title: "Reavaliação clínica", bullets: ["Segundo ciclo de palestras", "Adequação do plano alimentar e de atividades", "Reavaliação de todos os indicadores"] },
    { d: "D61 → D90", title: "Entrega final", bullets: ["Terceiro ciclo de palestras", "Avaliação final de composição corporal e vitais", "Relatório individual personalizado do percurso"] },
  ];
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>Jornada ACTIO_90</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          90 dias de transformação — 5 marcos clínicos.
        </SectionTitle>

        <ol className="mt-12 divide-y divide-cream/[0.07] border-y border-cream/[0.07]">
          {steps.map((s, i) => (
            <li key={s.d} className="grid gap-6 py-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <div className="font-serif text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--steel)]">
                  Marco {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-serif text-2xl font-light text-gold md:text-3xl">
                  {s.d}
                </div>
                <div className="mt-1 text-[13px] text-cream/75">{s.title}</div>
              </div>
              <ul className="space-y-2.5 text-[14px] leading-[1.6] text-cream/85 md:col-span-8">
                {s.bullets.map((b) => (
                  <li key={b} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Medimos                                                                   */
/* -------------------------------------------------------------------------- */

function Medimos() {
  const groups = [
    { title: "Medidas corporais", items: ["Bioimpedância (InBody 120)", "Massa muscular e gordura", "Relação cintura-quadril", "Score InBody"] },
    { title: "Sinais vitais", items: ["Pressão arterial", "Glicemia", "Frequência cardíaca", "Saturação de O₂"] },
    { title: "Saúde mental (validados)", items: ["PHQ-9 — depressão", "GAD-7 — ansiedade", "GHQ-12 — sofrimento mental", "DASS-21 — instrumento triplo"] },
  ];
  return (
    <section className="bg-[color:var(--ink-soft)] py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>O que medimos</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Métricas que importam — e por quê.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-cream/70">
          Não queremos formar atletas. Queremos cuidar das pessoas do seu time naquilo
          que mais adoece e prevenir desfechos desfavoráveis.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-cream/[0.07] bg-ink p-7"
            >
              <h3 className="font-serif text-lg font-medium text-cream">{g.title}</h3>
              <ul className="mt-5 space-y-2.5 text-[13px] text-cream/75">
                {g.items.map((i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="text-gold">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border-l-2 border-gold bg-ink p-6 text-[13px] leading-[1.65] text-cream/85">
          <span className="text-gold">Pressão arterial:</span> rastreamento de
          hipertensão — principal causa de AVC no Brasil. A identificação precoce
          permite intervenção clínica antes do evento cardiovascular irreversível.
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Serviços — Now / One (destaque) / X                                       */
/* -------------------------------------------------------------------------- */

function Servicos() {
  const tiers = [
    {
      tag: "Diagnóstico estratégico",
      name: "_Now",
      desc: "Mapeamento inicial de indicadores de saúde mental, riscos psicossociais e oportunidades de intervenção.",
      items: ["Entrevista com colaboradores", "Palestras empresariais", "Relatório simplificado"],
      variant: "subtle" as const,
    },
    {
      tag: "30 a 180 dias · acompanhamento",
      name: "_One",
      desc: "Programa de promoção da saúde e qualidade de vida com acompanhamento e evolução mensurável.",
      items: ["Entrevistas e acompanhamento individualizado", "Palestras empresariais", "Consultas com profissionais"],
      variant: "solid" as const,
    },
    {
      tag: "Premium · liderança",
      name: "_X",
      desc: "Solução premium para lideranças e equipes estratégicas, com acompanhamento ampliado.",
      items: ["Apoio médico online e WhatsApp", "Planos personalizados", "Relatório executivo"],
      variant: "border" as const,
    },
  ];
  return (
    <section id="servicos" className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>Nossos programas</Eyebrow>
        <SectionTitle className="mt-5 max-w-4xl">
          Três níveis — escaláveis para diferentes maturidades corporativas.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-cream/70">
          O formato final é definido após entender o porte, o perfil de colaboradores e
          os objetivos da instituição.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => {
            const isSolid = t.variant === "solid";
            const isBorder = t.variant === "border";
            const cardCls = isSolid
              ? "rounded-2xl bg-gold p-8 text-ink"
              : isBorder
              ? "rounded-2xl border border-gold/40 bg-[color:var(--ink-soft)] p-8"
              : "rounded-2xl border border-cream/[0.07] bg-[color:var(--ink-soft)] p-8";
            const tagCls = isSolid ? "text-ink/70" : "text-gold";
            const wordmarkCls = isSolid ? "text-ink/55" : "text-[color:var(--steel)]";
            const nameCls = isSolid ? "text-ink" : "text-gold";
            const descCls = isSolid ? "text-ink/80" : "text-cream/75";
            const itemsCls = isSolid
              ? "border-ink/15 text-ink/85"
              : "border-cream/[0.07] text-cream/85";
            const checkCls = isSolid ? "text-ink" : "text-gold";
            return (
              <div key={t.name} className={cardCls}>
                <div className={`font-serif text-[10px] font-semibold uppercase tracking-[0.3em] ${wordmarkCls}`}>
                  ACTIO
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <h3 className={`font-serif text-3xl font-medium ${nameCls}`}>
                    {t.name}
                  </h3>
                  {isSolid && (
                    <span className="rounded-full bg-ink px-2 py-0.5 font-serif text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                      Popular
                    </span>
                  )}
                </div>
                <div className={`mt-3 font-serif text-[10px] font-semibold uppercase tracking-[0.22em] ${tagCls}`}>
                  {t.tag}
                </div>
                <p className={`mt-5 text-[13px] leading-[1.65] ${descCls}`}>
                  {t.desc}
                </p>
                <ul className={`mt-6 space-y-2.5 border-t pt-5 text-[13px] ${itemsCls}`}>
                  {t.items.map((i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                      <span className={checkCls}>✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl rounded-r-xl border-l-2 border-gold bg-[color:var(--ink-soft)] px-5 py-4 font-serif text-base italic text-cream/85">
          Não é uma solução de prateleira. É uma conversa técnica de 30 minutos.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Responsável técnico                                                       */
/* -------------------------------------------------------------------------- */

function Responsavel() {
  return (
    <section id="responsavel" className="bg-[color:var(--ink-soft)] py-20 md:py-28">
      <div className="container-x">
        <Eyebrow>Responsabilidade técnica</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Quem desenvolveu o ACTIO_90.
        </SectionTitle>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <img
              src={doctorImg}
              alt="Dr. Leandro Fernando Batista Leite"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover grayscale"
            />
          </div>
          <div className="md:col-span-7">
            <blockquote className="rounded-r-xl border-l-2 border-gold bg-ink px-5 py-4 font-serif text-xl italic leading-snug text-cream/90 md:text-2xl">
              Medicina exercida com foco centrado na pessoa — pautada nas melhores
              práticas e evidências científicas.
            </blockquote>

            <div className="mt-10 border-t border-cream/[0.07] pt-8">
              <div className="font-serif text-2xl font-light text-cream md:text-3xl">
                Dr. Leandro Fernando Batista Leite
              </div>
              <div className="mt-2 font-serif text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                CRM-MG 68.021 · RQE 67.627
              </div>
              <p className="mt-6 text-[14px] leading-[1.7] text-cream/80">
                Pai, marido, médico especialista há +10 anos, leitor voraz, preceptor
                do internato de medicina da PUC-Minas, entusiasta e praticante de
                atividades físicas, fundador e responsável técnico do ACTIO_90.
              </p>
              <p className="mt-4 text-[14px] leading-[1.7] text-cream/80">
                Supervisor clínico direto de todos os participantes do programa ao
                longo dos 90 dias.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <Badge tone="outline">PUC Minas</Badge>
                <Badge tone="outline">PIBIC-FAPEMIG</Badge>
                <Badge tone="outline">Medicina baseada em evidência</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Contato — CTA final                                                       */
/* -------------------------------------------------------------------------- */

function Contato() {
  return (
    <section id="contato" className="bg-ink py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Próximo passo</Eyebrow>
          <SectionTitle className="mt-5">
            Pronto para elevar o padrão da sua gestão de saúde?
          </SectionTitle>
          <p className="mt-6 text-[15px] leading-[1.7] text-cream/75">
            Em 30 minutos, a equipe ACTIO conhece o contexto da instituição e
            apresenta caminhos para transformar saúde corporativa em indicadores de
            gestão. Não é uma solução de prateleira.
          </p>
          <a
            href="https://wa.me/5531992655261"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 font-serif text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-[color:var(--gold-soft)]"
          >
            Agendar visita técnica <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-cream/[0.07] bg-[color:var(--ink-soft)] p-6 text-center">
            <div className="font-serif text-lg font-medium text-cream">
              Gustavo Cavalcanti
            </div>
            <div className="mt-1 font-serif text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
              Diretor Comercial
            </div>
            <div className="mt-4 space-y-1 text-[13px] text-cream/85">
              <a
                href="mailto:medgustavocavalcanti@gmail.com"
                className="block break-all font-serif transition hover:text-gold"
              >
                medgustavocavalcanti@gmail.com
              </a>
              <a
                href="https://wa.me/5531992655261"
                target="_blank"
                rel="noreferrer"
                className="block font-serif tracking-[0.14em] transition hover:text-gold"
              >
                31 99265-5261
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            ["01", "Entender o cenário", "Mapeamos o contexto atual de RH, SST e saúde corporativa."],
            ["02", "Identificar oportunidades", "Pontos de risco, oportunidade e aderência regulatória."],
            ["03", "Arquitetura sob medida", "Proposta inicial de programa personalizado."],
          ].map(([n, t, b]) => (
            <div
              key={n}
              className="rounded-2xl border border-cream/[0.07] bg-[color:var(--ink-soft)] p-7"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--gold)]/15 font-serif text-sm font-bold text-gold">
                {n}
              </div>
              <div className="mt-5 font-serif text-lg font-medium text-cream">{t}</div>
              <p className="mt-2 text-[13px] leading-[1.6] text-cream/70">{b}</p>
            </div>
          ))}
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
    <footer className="border-t border-cream/[0.07] bg-ink py-12">
      <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <ActioWordmark size="sm" />
          <div className="mt-3 font-serif text-[10px] uppercase tracking-[0.3em] text-[color:var(--steel)]">
            Saúde corporativa é estratégia
          </div>
        </div>
        <p className="max-w-md text-[11px] leading-[1.7] text-cream/65">
          Programa ACTIO_90 · Medicina baseada em evidências · Responsável técnico
          Dr. Leandro F. B. Leite, CRM-MG 68.021 / RQE 67.627.
        </p>
        <div className="font-serif text-[10px] uppercase tracking-[0.22em] text-[color:var(--steel)]">
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
      <Problema />
      <Reflection />
      <Pillars />
      <Legislacao />
      <ROI />
      <Evidencia />
      <Programa />
      <Jornada />
      <Medimos />
      <Servicos />
      <Responsavel />
      <Contato />
      <Footer />
    </main>
  );
}
