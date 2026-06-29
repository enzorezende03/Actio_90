import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
          "ACTIO_90: programa de 90 dias de saúde corporativa baseado em evidência. Conformidade NR-1, Lei 14.831 e ROI mensurável para sua liderança.",
      },
      { property: "og:title", content: "ACTIO — Saúde Corporativa é Estratégia" },
      {
        property: "og:description",
        content:
          "Educação, avaliação clínica e acompanhamento médico em 90 dias. Para empresas que tratam saúde como vantagem competitiva.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

/* -------------------------------------------------------------------------- */
/*  Marca                                                                     */
/* -------------------------------------------------------------------------- */

function ActioMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="6" r="3" fill="var(--gold)" />
      <path d="M24 10 L8 42 M24 10 L40 42 M14 32 L34 32"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ActioWordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const isSm = size === "sm";
  return (
    <a href="#top" className="inline-flex items-center gap-2 font-serif font-light tracking-tight text-cream">
      <ActioMark className={isSm ? "h-6 w-6" : "h-8 w-8"} />
      <span className={isSm ? "text-lg" : "text-2xl"}>ACTIO</span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sub-componentes utilitários                                               */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
      {children}
    </span>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif font-light leading-[1.05] text-cream text-[2rem] sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

/* -------------------------------------------------------------------------- */
/*  Nav                                                                       */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#programa", "Programa"],
    ["#legislacao", "Legislação"],
    ["#evidencia", "Evidência"],
    ["#servicos", "Serviços"],
    ["#responsavel", "Responsável"],
    ["#contato", "Contato"],
  ] as const;
  return (
    <nav className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between gap-4 py-6">
        <ActioWordmark />
        <div className="hidden items-center gap-7 text-[13px] text-cream/70 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="hidden shrink-0 border border-cream/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream transition hover:border-gold hover:text-gold md:inline-block"
        >
          Reunião
        </a>
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-cream/25 text-cream transition hover:border-gold hover:text-gold md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-x pb-5">
            <div className="border border-cream/15 bg-ink/95 p-5 backdrop-blur">
              <ul className="divide-y divide-cream/10">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-[13px] uppercase tracking-[0.2em] text-cream/85 hover:text-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-4 block bg-gold px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink"
              >
                Agendar reunião
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero — blueprint editorial                                                */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <header id="top" className="relative isolate overflow-hidden border-b border-cream/10 bg-ink text-cream">
      <Nav />
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-30 md:opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />

      {/* Blueprint corner frame */}
      <div className="pointer-events-none absolute right-4 bottom-24 h-28 w-28 border-r border-b border-gold/25 md:right-10 md:bottom-32 md:h-40 md:w-40" />
      <div className="pointer-events-none absolute right-4 bottom-24 hidden h-px w-40 bg-gold/15 md:right-10 md:bottom-32 md:block" />

      <div className="relative container-x pt-32 pb-20 md:pt-40 md:pb-28">
        <Eyebrow>Saúde corporativa · medicina baseada em evidência</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-serif font-light leading-[1.05] text-[2.6rem] sm:text-6xl md:text-7xl">
          Saúde não é custo.
          <br />
          <span className="text-gold">É performance.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
          Gestão estratégica de saúde corporativa para lideranças que buscam
          conformidade legal, produtividade real e indicadores confiáveis para a tomada
          de decisão.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-cream"
          >
            Agendar reunião
          </a>
          <a
            href="#programa"
            className="inline-flex items-center justify-center gap-2 border border-cream/30 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-gold hover:text-gold"
          >
            Conhecer o ACTIO_90 <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-cream/10 pt-10 sm:grid-cols-4">
          {[
            ["90", "dias de programa"],
            ["10+", "colaboradores / turma"],
            ["5", "marcos clínicos"],
            ["3", "eixos de atuação"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-serif font-light text-3xl text-gold md:text-4xl">{k}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-cream/70">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Cenário · O problema                                                      */
/* -------------------------------------------------------------------------- */

function Cenario() {
  const stats = [
    ["546.254", "benefícios concedidos por transtornos mentais em 2025 no Brasil."],
    ["+68%", "afastamentos por saúde mental em 2024 vs. 2023."],
    ["93,6%", "da perda anual de produtividade vem do presenteísmo — 15× mais que o absenteísmo."],
    ["4º", "país mais estressado do mundo (Ipsos / OMS, 2024)."],
  ];
  return (
    <section className="bg-ink-soft py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>O cenário atual</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          O custo invisível do adoecimento corporativo.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/65">
          Pessoas sobrecarregadas, sedentárias e sem instrução clínica tornam-se um
          risco silencioso para si próprias e para a organização — com consequências
          diretas em produtividade, cultura e resultados.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {stats.map(([k, b]) => (
            <div key={k} className="border-l border-gold bg-ink/60 p-6">
              <div className="font-serif font-light text-3xl text-cream">{k}</div>
              <p className="mt-3 text-[13px] leading-relaxed text-cream/65">{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-[13px] leading-relaxed text-cream/55">
          <span className="text-cream/80">Principais causas de afastamento:</span>{" "}
          lombalgia · hipertensão · diabetes · ansiedade · obesidade · depressão · dor
          cervical · artrite · doenças cardiovasculares.
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
    "É possível cumprir exigências legais sem se afogar em burocracia?",
    "Sua empresa trata saúde do trabalhador apenas como exames admissionais e ASOs?",
    "Sua empresa está adequada para lidar com riscos psicossociais da NR-1?",
    "Sua empresa possui indicadores confiáveis de saúde corporativa?",
  ];
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Eyebrow>Ponto de partida</Eyebrow>
          <SectionTitle className="mt-5">
            O que sua instituição ganha com o que investe nas pessoas?
          </SectionTitle>
          <blockquote className="mt-10 border-l border-gold pl-5 font-serif text-lg italic leading-snug text-cream/80">
            A oportunidade não está em oferecer mais uma ação de bem-estar — mas em
            transformar exigências legais em cultura empresarial de bem-estar.
          </blockquote>
        </div>
        <div className="md:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/55">
            Apenas para refletir
          </p>
          <ol className="mt-6 divide-y divide-cream/10 border-y border-cream/10">
            {questions.map((q, i) => (
              <li key={q} className="grid grid-cols-[auto_1fr] gap-5 py-6">
                <span className="font-serif font-light text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-cream">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pilares                                                                   */
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
    <section className="bg-ink-soft py-20 text-cream md:py-28">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Nossa visão</Eyebrow>
            <SectionTitle className="mt-5">
              Da ação à gestão de <span className="text-gold">indicadores</span>.
            </SectionTitle>
          </div>
          <p className="text-[15px] leading-relaxed text-cream/65 md:col-span-5">
            O ACTIO estrutura programas que combinam conscientização, avaliação,
            acompanhamento e relatórios executivos — conectando saúde física, mental e
            produtividade.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-cream/10 md:grid-cols-3">
          {items.map((p) => (
            <div key={p.n} className="bg-ink-soft p-8 md:p-10">
              <div className="font-serif font-light text-3xl text-gold">{p.n}</div>
              <h3 className="mt-5 font-serif font-light text-xl text-cream">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-cream/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Legislação · bloco dourado de alto contraste                              */
/* -------------------------------------------------------------------------- */

function Legislacao() {
  return (
    <section id="legislacao" className="bg-ink py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>Legislação & conformidade</Eyebrow>
        <SectionTitle className="mt-5 max-w-4xl">
          Sua empresa já tem uma obrigação legal. Nós ajudamos a cumpri-la — e a ir além.
        </SectionTitle>

        <div className="mt-14 grid gap-px bg-cream/10 md:grid-cols-2">
          <article className="bg-ink-soft p-8 md:p-10">
            <div className="inline-flex items-center gap-2 border border-destructive/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-destructive">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              Vigente desde 05/2026
            </div>
            <h3 className="mt-5 font-serif font-light text-2xl text-cream">
              NR-1 atualizada — riscos psicossociais
            </h3>
            <ul className="mt-5 space-y-3 text-[13px] leading-relaxed text-cream/75">
              <li>— Portaria MTE nº 1.419/2024 incluiu burnout, sobrecarga, assédio e estresse crônico no PGR.</li>
              <li>— Obrigatório para todas as empresas com trabalhadores CLT.</li>
              <li>— Fiscalização ativa com multas e embargos desde 26/05/2026.</li>
            </ul>
          </article>

          <article className="bg-ink-soft p-8 md:p-10">
            <div className="inline-flex items-center gap-2 border border-gold/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
              Vantagem competitiva
            </div>
            <h3 className="mt-5 font-serif font-light text-2xl text-cream">
              Lei 14.831 — Certificação Empresa Promotora da Saúde Mental
            </h3>
            <p className="mt-5 text-[13px] leading-relaxed text-cream/75">
              Sancionada em março/2024, institui certificação federal para empresas que
              vão além do mínimo legal. Válida por 2 anos, reconhece organizações com
              programas estruturados.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Promoção da saúde mental", "Bem-estar", "Métricas e transparência"].map((t) => (
                <span key={t} className="border border-cream/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-cream/75">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Faixa dourada — único bloco de alto contraste */}
        <div className="mt-12 bg-gold p-8 text-ink md:p-12">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h3 className="font-serif font-light text-2xl uppercase tracking-tight md:text-3xl">
                Segurança jurídica absoluta.
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="border border-ink/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                  NR-1 Compliant
                </span>
                <span className="border border-ink/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Lei 14.831
                </span>
              </div>
            </div>
            <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
              {[
                ["NR-1 · Identificação de riscos", "Avaliação clínica individual mapeia sobrecarga, sedentarismo e indicadores metabólicos — base para o PGR."],
                ["NR-1 · Medidas de prevenção", "Plano de atividade física e alimentação personalizado constitui intervenção documentada e rastreável."],
                ["Lei 14.831 · Apoio à saúde mental", "Palestras + acompanhamento de 90 dias atendem o pilar de Promoção da Saúde Mental."],
                ["Lei 14.831 · Conscientização", "Eventos educativos baseados em evidência cumprem o Art. 3º, alínea c da lei."],
              ].map(([t, b]) => (
                <div key={t} className="border-l border-ink/40 pl-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em]">{t}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/80">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-[10px] leading-relaxed text-cream/50">
          Portaria MTE nº 1.419/2024 · Lei nº 14.831/2024 · Ministério da Previdência Social
          (2025) · Ipsos World Mental Health Day Report 2024.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ROI                                                                       */
/* -------------------------------------------------------------------------- */

function ROI() {
  const stats = [
    {
      k: "2,3×",
      title: "Mais produtivos",
      body: "Profissionais saudáveis são até 2,3× mais produtivos que aqueles com saúde comprometida.",
      ref: "Carnethon M et al. Circulation. 2009;120(17):1725-1741.",
    },
    {
      k: "US$ 2,54",
      title: "Retorno por dólar",
      body: "Para cada US$ 1 investido em saúde, US$ 2,54 de economia em custos médicos.",
      ref: "Dement JM et al. J Occup Environ Med. 2015;57(11):1159-1169.",
    },
    {
      k: "−28%",
      title: "Menos afastamentos",
      body: "Programas preventivos reduzem em até 28% afastamentos por doença crônica.",
      ref: "Carnethon M et al. Circulation. 2009;120(17):1725-1741.",
    },
    {
      k: "93,6%",
      title: "Presenteísmo",
      body: "Profissionais presentes mas debilitados respondem por 93,6% da perda de produtividade.",
      ref: "Bialowolski P et al. PLoS One. 2020;15(3):e0230562.",
    },
  ];
  return (
    <section className="bg-ink-soft py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>O ROI</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Pessoas saudáveis <span className="text-gold">performam mais</span>.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/65">
          A ciência comprova: saúde corporativa não é benefício — é vantagem
          competitiva. Programas preventivos documentam ganhos mensuráveis em
          produtividade, retenção e custos médicos.
        </p>
        <div className="mt-12 grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.title} className="flex flex-col bg-ink-soft p-7">
              <div className="font-serif font-light text-5xl text-gold">{s.k}</div>
              <h3 className="mt-5 font-serif font-light text-lg text-cream">{s.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-cream/65">{s.body}</p>
              <p className="mt-auto pt-5 text-[9px] italic leading-snug text-cream/45">{s.ref}</p>
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
    <section id="evidencia" className="bg-ink py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>Evidência científica</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          O que ensinamos ao seu time — em duas frentes.
        </SectionTitle>

        <div className="mt-12 grid gap-px bg-cream/10 md:grid-cols-2">
          <article className="bg-ink-soft p-8 md:p-10">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
              Primeiro eixo
            </div>
            <h3 className="mt-3 font-serif font-light text-2xl text-cream">
              Atividade física e saúde mental
            </h3>
            <p className="mt-5 text-[13px] leading-relaxed text-cream/75">
              <span className="text-cream">Meta-análise · 79.551 participantes:</span>{" "}
              efeitos terapêuticos mensuráveis na redução de depressão, ansiedade e
              sofrimento psicológico — atividade física como abordagem principal.
            </p>
            <ul className="mt-6 space-y-4 border-t border-cream/10 pt-6">
              {[
                ["61%", "Redução robusta de sintomas em todas as populações adultas."],
                ["2×", "Treinos combinados supervisionados em grupo: mais eficazes que aeróbico isolado."],
                ["15 min", "15 min/dia de MVPA já melhoram saúde mental autorrelatada."],
              ].map(([k, b]) => (
                <li key={k} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-serif font-light text-xl text-gold">{k}</span>
                  <p className="text-[13px] text-cream/75">{b}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[10px] italic leading-snug text-cream/45">
              Munro NR et al. Br J Sports Med. 2026;60(8):590-599.
            </p>
          </article>

          <article className="bg-ink-soft p-8 md:p-10">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
              Segundo eixo
            </div>
            <h3 className="mt-3 font-serif font-light text-2xl text-cream">
              Alimentação e saúde mental
            </h3>
            <p className="mt-5 text-[13px] leading-relaxed text-cream/75">
              <span className="text-cream">
                Estudo prospectivo · 180.446 participantes · 11,6 anos:
              </span>{" "}
              maior adesão à dieta EAT-Lancet associou-se a menor risco de depressão
              (HR 0,71–0,81), ansiedade e comorbidade.
            </p>
            <div className="mt-6 border-t border-cream/10 pt-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55">
                Padrões com evidência
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Mediterrânea", "DASH", "EAT-Lancet"].map((t) => (
                  <span
                    key={t}
                    className="border border-cream/15 px-3 py-1 text-[11px] text-cream/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-[13px] text-cream/75">
              <li>→ <span className="text-cream">Vitaminas do complexo B</span> — síntese de serotonina, dopamina e GABA.</li>
              <li>→ <span className="text-cream">Magnésio e probióticos</span> — modulação da ansiedade e eixo microbioma-intestino-cérebro.</li>
              <li className="text-destructive">⨯ <span className="text-cream">Evitar:</span> ultraprocessados, açúcares refinados e padrões pró-inflamatórios.</li>
            </ul>
            <p className="mt-6 text-[10px] italic leading-snug text-cream/45">
              Lu X et al. Nat Commun. 2024;15(1):5599.
            </p>
          </article>
        </div>
        <p className="mt-6 text-[11px] text-cream/55">
          Estudos disponíveis na biblioteca pública do PubMed.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Programa ACTIO_90                                                         */
/* -------------------------------------------------------------------------- */

function Programa() {
  return (
    <section id="programa" className="bg-ink-soft py-20 text-cream md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Eyebrow>O ACTIO_90</Eyebrow>
          <SectionTitle className="mt-5">
            Educação e promoção em saúde, entregues na sua empresa.
          </SectionTitle>
          <p className="mt-6 text-[15px] leading-relaxed text-cream/70">
            O Programa ACTIO_90 Saúde Corporativa Impacto Real traduz evidência
            científica em boas práticas. Elimina barreiras de acesso, simplifica a
            literatura e fala a língua do seu time.
          </p>
          <dl className="mt-8 space-y-6 border-t border-cream/10 pt-6">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Público-alvo
              </dt>
              <dd className="mt-2 text-[14px] text-cream/80">
                Grupos de 10 ou mais colaboradores — foco em lideranças e times estratégicos.
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
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
          <div className="relative">
            <img
              src={consultaImg}
              alt="Médica em consulta com paciente em consultório iluminado"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-r border-b border-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Jornada · 5 marcos                                                        */
/* -------------------------------------------------------------------------- */

function Jornada() {
  const steps = [
    {
      d: "D0",
      title: "Início",
      bullets: [
        "Primeiro ciclo de palestras de educação e promoção em saúde",
        "Avaliação de composição corporal e vitais",
        "Bioimpedância + PA + Glicemia + FC + SpO₂",
      ],
    },
    {
      d: "D1 → D10",
      title: "Consultas individuais",
      bullets: [
        "Consultas médicas individuais e online",
        "Solicitação de exames, se aplicáveis",
        "Prescrição alimentar personalizada",
        "Plano de atividades físicas exclusivo",
      ],
    },
    {
      d: "D11 → D30",
      title: "Execução & engajamento",
      bullets: [
        "Acompanhamento via WhatsApp com especialistas",
        "Ajustes contínuos do plano alimentar e de atividades",
        "Educação contínua em saúde",
      ],
    },
    {
      d: "D31 → D60",
      title: "Reavaliação clínica",
      bullets: [
        "Segundo ciclo de palestras",
        "Adequação do plano alimentar e de atividades",
        "Reavaliação de todos os indicadores",
      ],
    },
    {
      d: "D61 → D90",
      title: "Entrega final",
      bullets: [
        "Terceiro ciclo de palestras",
        "Avaliação final de composição corporal e vitais",
        "Relatório individual personalizado do percurso",
      ],
    },
  ];
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>Jornada ACTIO_90</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          90 dias de transformação — <span className="text-gold">5 marcos clínicos</span>.
        </SectionTitle>

        <ol className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
          {steps.map((s, i) => (
            <li key={s.d} className="grid gap-6 py-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Marco {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-serif font-light text-2xl text-cream md:text-3xl">{s.d}</div>
                <div className="mt-1 text-[13px] text-cream/65">{s.title}</div>
              </div>
              <ul className="space-y-2.5 text-[14px] text-cream/80 md:col-span-8">
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

        <blockquote className="mt-12 max-w-3xl border-l border-gold pl-5 font-serif text-lg italic leading-snug text-cream/85">
          Cada etapa é desenhada para garantir adesão clínica, evolução mensurável e
          engajamento sustentado ao longo dos 90 dias.
        </blockquote>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Medimos                                                                   */
/* -------------------------------------------------------------------------- */

function Medimos() {
  const groups = [
    {
      title: "Medidas corporais",
      items: ["Bioimpedância (InBody 120)", "Massa muscular e gordura", "Relação cintura-quadril", "Score InBody"],
    },
    {
      title: "Sinais vitais",
      items: ["Pressão arterial", "Glicemia", "Frequência cardíaca", "Saturação de O₂"],
    },
    {
      title: "Saúde mental (validados)",
      items: ["PHQ-9 — depressão", "GAD-7 — ansiedade", "GHQ-12 — sofrimento mental", "DASS-21 — instrumento triplo"],
    },
  ];
  return (
    <section className="bg-ink-soft py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>O que medimos</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Métricas que importam — e por quê.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/65">
          Não queremos formar atletas. Queremos cuidar das pessoas do seu time naquilo
          que mais adoece e prevenir desfechos desfavoráveis.
        </p>
        <div className="mt-12 grid gap-px bg-cream/10 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="bg-ink-soft p-8">
              <h3 className="font-serif font-light text-xl text-cream">{g.title}</h3>
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
        <div className="mt-8 border-l border-gold bg-ink p-6 text-[13px] leading-relaxed text-cream/80 md:p-7">
          <span className="text-cream">Pressão arterial:</span> rastreamento de
          hipertensão — principal causa de AVC no Brasil. A identificação precoce
          permite intervenção clínica antes do evento cardiovascular irreversível.
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pilares de conteúdo                                                       */
/* -------------------------------------------------------------------------- */

function Pilares() {
  const cols = [
    {
      title: "Alimentação",
      items: [
        "Macronutrientes e função no organismo",
        "Contagem de calorias e densidade energética",
        "Dietas validadas (mediterrânea, DASH)",
      ],
    },
    {
      title: "Atividade física",
      items: [
        "Prevenção de doenças crônicas e câncer",
        "Combate ao sedentarismo corporativo",
        "Controle de hipertensão e diabetes",
        "Prescrição individualizada",
        "15 min/dia de MVPA com impacto mensurável",
      ],
    },
    {
      title: "Doenças prevalentes",
      items: [
        "Hipertensão, diabetes, obesidade, dislipidemia",
        "Consequências no ambiente de trabalho",
        "Depressão, ansiedade e estresse",
        "Rastreamento e diagnóstico precoce",
        "Prevenção primária baseada em evidência",
      ],
    },
  ];
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>Pilar 01 · Educação e promoção em saúde</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Conscientização que muda comportamento.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/65">
          Palestras baseadas em evidência abordam os temas mais relevantes para a saúde
          da população corporativa brasileira — linguagem direta e aplicabilidade imediata.
        </p>
        <div className="mt-12 grid gap-px bg-cream/10 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title} className="bg-ink-soft p-8">
              <h3 className="font-serif font-light text-xl text-cream">{c.title}</h3>
              <ul className="mt-5 space-y-2.5 text-[13px] text-cream/75">
                {c.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Serviços · escaláveis                                                     */
/* -------------------------------------------------------------------------- */

function Servicos() {
  const tiers = [
    {
      tag: "Diagnóstico estratégico",
      name: "ACTIO_Now",
      desc: "Mapeamento inicial de indicadores de saúde mental, riscos psicossociais e oportunidades de intervenção.",
      items: ["Entrevista com todos os colaboradores", "Palestras empresariais", "Relatório simplificado"],
    },
    {
      tag: "30 a 180 dias · acompanhamento",
      name: "ACTIO_One",
      desc: "Programa de promoção da saúde e qualidade de vida com acompanhamento e evolução mensurável.",
      items: ["Entrevistas e acompanhamento individualizado", "Palestras empresariais", "Consultas com profissionais"],
      featured: true,
    },
    {
      tag: "Premium · liderança",
      name: "ACTIO_X",
      desc: "Solução premium para lideranças e equipes estratégicas, com acompanhamento ampliado.",
      items: ["Apoio médico online e WhatsApp", "Planos personalizados", "Relatório executivo"],
    },
  ];
  return (
    <section id="servicos" className="bg-ink-soft py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>Soluções</Eyebrow>
        <SectionTitle className="mt-5 max-w-4xl">
          Três níveis de serviço — escaláveis para diferentes maturidades corporativas.
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/65">
          O formato final é definido após entender o porte, o perfil de colaboradores e
          os objetivos da instituição.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                t.featured
                  ? "relative border border-gold bg-ink p-7 md:p-8"
                  : "border border-cream/10 bg-ink p-7 transition hover:border-gold md:p-8"
              }
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif font-light text-xl text-cream">{t.name}</h3>
                {t.featured ? (
                  <span className="bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink">
                    Popular
                  </span>
                ) : (
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                )}
              </div>
              <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                {t.tag}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-cream/70">{t.desc}</p>
              <ul className="mt-6 space-y-2.5 border-t border-cream/10 pt-5 text-[13px] text-cream/80">
                {t.items.map((i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="text-gold">✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl border-l border-gold pl-5 font-serif text-lg italic text-cream/80">
          Não é uma solução de prateleira. É uma conversa técnica que desenha a melhor
          entrada para a realidade da instituição.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Responsabilidade técnica · ficha do médico                                */
/* -------------------------------------------------------------------------- */

function Responsavel() {
  return (
    <section id="responsavel" className="bg-ink py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>Responsabilidade técnica</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Quem desenvolveu o <span className="text-gold">ACTIO_90</span>.
        </SectionTitle>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <div className="relative">
              <img
                src={doctorImg}
                alt="Dr. Leandro Batista, médico responsável técnico do ACTIO_90"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale"
              />
              <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-r border-b border-gold/50" />
            </div>
          </div>
          <div className="md:col-span-7">
            <blockquote className="border-l border-gold pl-5 font-serif text-xl italic leading-snug text-cream/85 md:text-2xl">
              Medicina exercida com foco centrado na pessoa — pautada nas melhores
              práticas e evidências científicas.
            </blockquote>

            <div className="mt-10 border-t border-cream/10 pt-8">
              <div className="font-serif font-light text-2xl text-cream md:text-3xl">
                Dr. Leandro Fernando Batista Leite
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                CRM-MG 68.021 · RQE 67.627
              </div>
              <p className="mt-6 text-[14px] leading-relaxed text-cream/75">
                Pai, marido, médico especialista há +10 anos, leitor voraz, preceptor do
                internato de medicina da PUC-Minas, entusiasta e praticante de
                atividades físicas, fundador e responsável técnico do ACTIO_90.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-cream/75">
                Supervisor clínico direto de todos os participantes do programa ao longo
                dos 90 dias.
              </p>

              <div className="mt-8 grid grid-cols-[auto_1fr] items-center gap-4 border-t border-cream/10 pt-6">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/80">
                  Evidência científica aplicada
                </span>
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-cream/55">
                Projeto ACTIO_90 — Medicina. Nasceu como projeto de pesquisa financiado
                pelas plataformas PIBIC-FAPEMIG dentro da Faculdade de Medicina da
                PUC-Minas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA & Contato · ficha técnica                                             */
/* -------------------------------------------------------------------------- */

function Contato() {
  return (
    <section id="contato" className="bg-ink-soft py-20 text-cream md:py-28">
      <div className="container-x">
        <Eyebrow>Próximo passo</Eyebrow>
        <SectionTitle className="mt-5 max-w-3xl">
          Pronto para elevar o padrão da sua gestão de saúde?
        </SectionTitle>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-cream/70">
          Em 30 minutos, a equipe ACTIO conhece o contexto da instituição e apresenta
          caminhos possíveis para transformar saúde corporativa em indicadores de gestão.
        </p>

        <div className="mt-12 grid gap-px bg-cream/10 md:grid-cols-3">
          {[
            ["01", "Entender o cenário", "Mapeamos o contexto atual de RH, SST e saúde corporativa."],
            ["02", "Identificar oportunidades", "Pontos de risco, oportunidade e aderência regulatória."],
            ["03", "Arquitetura sob medida", "Proposta inicial de programa personalizado."],
          ].map(([n, t, b]) => (
            <div key={n} className="bg-ink-soft p-7">
              <div className="font-serif font-light text-3xl text-gold">{n}</div>
              <div className="mt-4 font-serif font-light text-lg text-cream">{t}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-cream/65">{b}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-ink p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Fale com o responsável comercial
              </div>
              <div className="mt-3 font-serif font-light text-2xl text-cream md:text-3xl">
                Reunião de apresentação sem compromisso.
              </div>
              <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-cream/70">
                Mostramos como o programa funciona na prática para o perfil e a cultura
                da sua empresa. Proposta adaptada ao tamanho da equipe — sem custo.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="border border-cream/15 p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/65">
                  Gustavo Cavalcanti
                </div>
                <a
                  href="tel:+5531992655261"
                  className="mt-3 block font-serif font-light text-2xl text-cream transition hover:text-gold"
                >
                  31 99265-5261
                </a>
                <a
                  href="mailto:medgustavocavalcanti@gmail.com"
                  className="mt-2 block break-all text-[13px] text-cream/75 transition hover:text-gold"
                >
                  medgustavocavalcanti@gmail.com
                </a>
                <a
                  href="https://wa.me/5531992655261"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-gold py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold transition hover:bg-gold hover:text-ink"
                >
                  Falar no WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
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
    <footer className="border-t border-cream/10 bg-ink py-12 text-cream/75">
      <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <ActioWordmark size="sm" />
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-cream/60">
            Saúde corporativa é estratégia
          </div>
        </div>
        <p className="max-w-md text-[11px] leading-relaxed text-cream/70">
          Programa ACTIO_90 · Medicina baseada em evidências · Responsável técnico Dr.
          Leandro F. B. Leite, CRM-MG 68.021 / RQE 67.627.
        </p>
        <div className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
          © {new Date().getFullYear()} ACTIO
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Composição da página                                                      */
/* -------------------------------------------------------------------------- */

function Index() {
  return (
    <main className="bg-ink text-cream">
      <Hero />
      <Cenario />
      <Reflection />
      <Pillars />
      <Legislacao />
      <ROI />
      <Evidencia />
      <Programa />
      <Jornada />
      <Medimos />
      <Pilares />
      <Servicos />
      <Responsavel />
      <Contato />
      <Footer />
    </main>
  );
}
