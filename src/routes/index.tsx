import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
        content: "Educação, avaliação clínica e acompanhamento médico em 90 dias. Para empresas que tratam saúde como vantagem competitiva.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function ActioMark({ className = "h-7 w-auto" }: { className?: string }) {
  // Símbolo "A" minimalista com ponto dourado — Identidade de Marca v2
  return (
    <svg
      viewBox="0 0 56 64"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M28 6 L6 60" />
      <path d="M28 6 L50 60" />
      <circle cx="28" cy="6" r="3.2" fill="#D4A843" stroke="none" />
    </svg>
  );
}

function ActioLogo({ size = "default" }: { size?: "default" | "sm" }) {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2 text-cream">
      <ActioMark className={size === "sm" ? "h-6 w-auto" : "h-8 w-auto sm:h-9"} />
      <span className={`font-serif font-light tracking-[0.18em] ${size === "sm" ? "text-base" : "text-lg sm:text-xl"}`}>
        ACTIO
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#programa", "Programa"],
    ["#legislacao", "Legislação"],
    ["#evidencia", "Evidência"],
    ["#servicos", "Serviços"],
    ["#contato", "Contato"],
  ] as const;
  return (
    <nav className="absolute inset-x-0 top-0 z-30">
      <div className="container-x flex items-center justify-between gap-4 py-5 md:py-6">
        <ActioLogo />

        <div className="hidden items-center gap-8 text-sm text-cream/80 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-gold">{label}</a>
          ))}
        </div>
        <a
          href="#contato"
          className="hidden shrink-0 rounded-full border border-cream/30 px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream transition hover:border-gold hover:text-gold md:inline-block"
        >
          Falar com a equipe
        </a>
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold hover:text-gold md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-x pb-5">
            <div className="rounded-2xl border border-cream/15 bg-ink/95 p-5 backdrop-blur">
              <ul className="flex flex-col divide-y divide-cream/10">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-sm uppercase tracking-wider text-cream/85 hover:text-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-ink hover:bg-gold-soft"
              >
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


function Hero() {
  return (
    <header id="top" className="relative isolate min-h-screen overflow-hidden bg-ink text-cream">
      <Nav />
      <img
        src={heroImg}
        alt="Profissionais reunidos em sala corporativa moderna ao entardecer"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70 md:opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/55 to-ink md:from-ink/70 md:via-ink/60" />

      <div className="relative container-x flex min-h-screen flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20">
        <p className="eyebrow text-gold">Medicina baseada em evidências</p>
        <h1 className="mt-5 max-w-4xl font-serif text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl">
          Saúde corporativa <em className="text-gold not-italic">é estratégia.</em>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:mt-8 md:text-xl">
          Mitigar riscos não precisa ser sinônimo de burocracia. Transformamos exigências
          legais em conhecimento, saúde, bem-estar e produtividade — com programas B2B
          personalizados para saúde física, saúde mental e gestão de riscos psicossociais.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
          <a
            href="#contato"
            className="rounded-full bg-gold px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-gold-soft sm:px-7"
          >
            Agendar visita técnica
          </a>
          <a
            href="#programa"
            className="rounded-full border border-cream/30 px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-cream transition hover:border-cream sm:px-7"
          >
            Conhecer o ACTIO_90
          </a>
        </div>
        <div className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-cream/15 pt-8 sm:grid-cols-4 md:mt-20 md:gap-8">
          {[
            ["90", "dias de programa"],
            ["10+", "colaboradores por turma"],
            ["5", "marcos clínicos"],
            ["3", "eixos de atuação"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-serif text-3xl text-gold md:text-4xl">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function Reflection() {
  const questions = [
    "É possível cumprir exigências legais sem se afogar em burocracia?",
    "Sua empresa trata saúde do trabalhador apenas como exames admissionais e ASOs?",
    "Sua empresa está adequada para lidar com os riscos psicossociais da NR-1?",
    "Sua empresa possui indicadores confiáveis de saúde corporativa para tomada de decisão?",
  ];
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow">O ponto de partida</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
            O que sua instituição ganha com o que investe nas pessoas?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Já conhecemos as exigências legais. Já conhecemos os benefícios do exercício
            físico. Já investimos em saúde mental. E, na prática, o que está mudando?
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-xl italic leading-snug text-ink">
            A oportunidade não está em oferecer mais uma ação de bem-estar — mas em
            transformar exigências legais em cultura empresarial de bem-estar.
          </blockquote>
        </div>
        <div className="md:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Apenas para refletir
          </p>
          <ul className="mt-6 space-y-px overflow-hidden rounded-2xl border border-border bg-card">
            {questions.map((q, i) => (
              <li key={q} className="flex gap-5 border-b border-border p-6 last:border-b-0">
                <span className="font-serif text-2xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-cream">{q}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-ink py-16 text-cream md:py-24">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">Nossa visão</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
              Da ação à gestão de <em className="text-gold not-italic">indicadores</em>.
            </h2>
          </div>
          <p className="text-base text-cream/70 md:col-span-5">
            O ACTIO estrutura programas que combinam conscientização, avaliação,
            acompanhamento e relatórios executivos — conectando saúde física, mental e
            produtividade. Em conformidade com as exigências legais.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-3">
          {items.map((p) => (
            <div key={p.n} className="bg-ink p-8 md:p-10">
              <div className="font-serif text-5xl text-gold">{p.n}</div>
              <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Legislacao() {
  return (
    <section id="legislacao" className="bg-cream py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">Legislação & conformidade</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] md:text-5xl">
          Sua empresa já tem uma obrigação legal. Nós ajudamos a cumpri-la — e a ir além.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              Obrigação vigente desde maio/2026
            </div>
            <h3 className="mt-5 font-serif text-2xl">NR-1 atualizada: riscos psicossociais</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
              <li>• Portaria MTE nº 1.419/2024 incluiu riscos psicossociais (burnout, sobrecarga, assédio, estresse crônico) no PGR.</li>
              <li>• Obrigatório para <strong>todas</strong> as empresas com trabalhadores CLT.</li>
              <li>• Em vigor pleno desde 26/05/2026 — fiscalização com multas e embargos já ativa.</li>
            </ul>
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3">
              {[
                ["546.254", "benefícios por transtornos mentais em 2025"],
                ["+68%", "afastamentos 2024 vs. 2023"],
                ["4º", "país mais estressado (Ipsos/OMS)"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-serif text-xl text-ink">{k}</div>
                  <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-ink p-8 text-cream md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Vantagem competitiva
            </div>
            <h3 className="mt-5 font-serif text-2xl">
              Lei 14.831: Certificado Empresa Promotora da Saúde Mental
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-cream/75">
              Sancionada em março de 2024, institui certificação federal para empresas
              que vão além do mínimo legal. Válido por 2 anos, reconhece organizações
              com programas estruturados — e pode ser usado em comunicação institucional.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Promoção da saúde mental", "Incentivo ao bem-estar", "Transparência e métricas"].map((t) => (
                <span key={t} className="rounded-full border border-cream/20 px-3 py-1 text-xs text-cream/80">
                  {t}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-10">
          <h4 className="font-serif text-xl">Como o ACTIO atende à legislação</h4>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {[
              ["NR-1 · Identificação de riscos", "Avaliação clínica individual mapeia sobrecarga, sedentarismo, hipertensão e indicadores metabólicos — base para o PGR."],
              ["NR-1 · Medidas de prevenção", "Plano de atividades físicas e alimentação personalizado constitui intervenção documentada e rastreável."],
              ["Lei 14.831 · Apoio à saúde mental", "Palestras de conscientização + acompanhamento médico de 90 dias atendem ao pilar de Promoção da Saúde Mental."],
              ["Lei 14.831 · Conscientização", "Eventos educativos baseados em evidência cumprem diretamente o Art. 3º, alínea c da lei."],
            ].map(([t, b]) => (
              <div key={t} className="border-l-2 border-gold pl-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-gold">{t}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[11px] leading-relaxed text-muted-foreground">
            Portaria MTE nº 1.419/2024 (NR-1) · Lei nº 14.831, de 27 de março de 2024 · Ministério da Previdência Social, dados 2025 · Ipsos World Mental Health Day Report 2024.
          </p>
        </div>
      </div>
    </section>
  );
}

function Problema() {
  const cards = [
    {
      title: "Afastamentos custam caro",
      body: "O Brasil tem um dos maiores índices de afastamentos por doenças crônicas. Cada líder afastado impacta equipes, decisões estratégicas e resultados.",
    },
    {
      title: "Produtividade em risco",
      body: "Profissionais com saúde comprometida apresentam queda de desempenho, absenteísmo e menor capacidade de decisão — custos que raramente aparecem no balanço.",
    },
    {
      title: "Prevenção é estratégia",
      body: "Investir em saúde preventiva reduz custos com saúde suplementar, afastamentos e turnover de liderança — e permite intervenções antes que o dano aconteça.",
    },
  ];
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">O problema que resolvemos</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] md:text-5xl">
          O custo invisível do adoecimento.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Pessoas sobrecarregadas, sedentárias e tentando ter hábitos saudáveis sem
          instrução e acompanhamento especializado tornam-se um risco silencioso para si
          próprias e para sua organização — com consequências diretas em produtividade,
          cultura e resultados.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-card p-8">
              <h3 className="font-serif text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground md:p-8">
          <span className="font-semibold text-ink">Principais causas de afastamento corporativo: </span>
          lombalgia · hipertensão · diabetes · ansiedade · obesidade · depressão · dor cervical · artrite · doenças cardiovasculares.
        </div>
      </div>
    </section>
  );
}

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
      title: "Retorno por dólar investido",
      body: "Para cada US$ 1 investido em saúde, há economia de US$ 2,54 em custos médicos — e US$ 35 a menos por participante.",
      ref: "Dement JM et al. J Occup Environ Med. 2015;57(11):1159-1169.",
    },
    {
      k: "−28%",
      title: "Menos afastamentos",
      body: "Programas de saúde preventiva reduzem em até 25–28% os afastamentos por doença crônica.",
      ref: "Carnethon M et al. Circulation. 2009;120(17):1725-1741.",
    },
    {
      k: "93,6%",
      title: "Custo do presenteísmo",
      body: "Profissionais presentes mas com saúde debilitada respondem por 93,6% da perda anual de produtividade — 15× mais que o absenteísmo.",
      ref: "Bialowolski P et al. PLoS One. 2020;15(3):e0230562.",
    },
  ];
  return (
    <section className="bg-ink py-16 text-cream md:py-24">
      <div className="container-x">
        <p className="eyebrow">O ROI</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] md:text-5xl">
          Pessoas saudáveis <em className="text-gold not-italic">performam mais.</em>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream/70">
          A ciência comprova: saúde corporativa não é benefício, é vantagem competitiva.
          Organizações que investem em programas preventivos documentam ganhos
          mensuráveis em produtividade, retenção e custos médicos.
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.title} className="flex flex-col bg-ink p-8">
              <div className="font-serif text-6xl text-gold">{s.k}</div>
              <h3 className="mt-6 font-serif text-lg">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{s.body}</p>
              <p className="mt-auto pt-5 text-[10px] italic leading-snug text-cream/40">{s.ref}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-cream/40">Todos os estudos citados podem ser encontrados na biblioteca pública do PubMed.</p>
      </div>
    </section>
  );
}

function Evidencia() {
  return (
    <section id="evidencia" className="bg-cream py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">Evidência científica</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] md:text-5xl">
          Aquilo que ensinamos ao seu time, em duas frentes.
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-ink p-8 text-cream md:p-10">
            <div className="text-xs uppercase tracking-wider text-gold">Primeiro eixo</div>
            <h3 className="mt-3 font-serif text-3xl">Atividade física e saúde mental</h3>
            <p className="mt-5 text-sm leading-relaxed text-cream/75">
              <strong className="text-cream">Meta-análise com 79.551 participantes:</strong>{" "}
              efeitos terapêuticos mensuráveis e robustos na redução de sintomas de
              depressão, ansiedade e sofrimento psicológico — a atividade física deve ser
              abordagem principal, não apenas adjuvante.
            </p>
            <ul className="mt-6 space-y-4 border-t border-cream/15 pt-6 text-sm">
              <li className="flex gap-4">
                <span className="font-serif text-2xl text-gold">61%</span>
                <p className="text-cream/75">Redução robusta de sintomas em todas as populações adultas (Cohen's d, IC 95%).</p>
              </li>
              <li className="flex gap-4">
                <span className="font-serif text-2xl text-gold">2×</span>
                <p className="text-cream/75">Treinos combinados (força + aeróbico) supervisionados em grupo: mais eficazes que aeróbico isolado.</p>
              </li>
              <li className="flex gap-4">
                <span className="font-serif text-2xl text-gold">15 min</span>
                <p className="text-cream/75">Apenas 15 min/dia de MVPA já melhoram saúde mental autorrelatada — independentemente do resto da rotina.</p>
              </li>
            </ul>
            <p className="mt-6 text-[10px] italic leading-snug text-cream/40">
              Munro NR et al. Br J Sports Med. 2026;60(8):590-599. doi:10.1136/bjsports-2025-110301
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="text-xs uppercase tracking-wider text-gold">Segundo eixo</div>
            <h3 className="mt-3 font-serif text-3xl">Alimentação e saúde mental</h3>
            <p className="mt-5 text-sm leading-relaxed text-ink/75">
              <strong className="text-ink">Estudo prospectivo · 180.446 participantes · 11,6 anos:</strong>{" "}
              maior adesão à dieta EAT-Lancet associou-se a menor risco de depressão
              (HR 0,71–0,81), ansiedade (HR 0,77–0,82) e comorbidade simultânea (HR 0,66–0,82).
            </p>
            <div className="mt-6 border-t border-border pt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                Padrões alimentares com evidência
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Mediterrânea", "DASH", "EAT-Lancet"].map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-ink">{t}</span>
                ))}
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-ink/80">
              <li>→ <strong>Vitaminas do complexo B</strong> — síntese de serotonina, dopamina e GABA.</li>
              <li>→ <strong>Magnésio e probióticos</strong> — modulação da ansiedade e eixo microbioma-intestino-cérebro.</li>
              <li className="text-destructive">⨯ <strong>Evitar:</strong> ultraprocessados, açúcares refinados e padrões pró-inflamatórios.</li>
            </ul>
            <p className="mt-6 text-[10px] italic leading-snug text-muted-foreground">
              Lu X et al. Nat Commun. 2024;15(1):5599. doi:10.1038/s41467-024-49653-8
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Programa() {
  return (
    <section id="programa" className="bg-secondary py-16 md:py-24">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow">O ACTIO_90</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
            Educação e promoção em saúde, entregues na sua empresa.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            O Programa ACTIO_90 Saúde Corporativa Impacto Real traduz evidência
            científica em boas práticas. Elimina barreiras de acesso, simplifica a
            literatura, fala a língua da sua equipe e torna o cuidado e a promoção de
            saúde acessíveis ao seu time.
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gold">Público-alvo</dt>
              <dd className="mt-1 text-ink">Grupos de 10 ou mais colaboradores — com foco em lideranças e times estratégicos.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gold">Duração e entregáveis</dt>
              <dd className="mt-1 text-ink">90 dias de acompanhamento contínuo. Cada participante recebe relatório individual personalizado com análise comparativa e canal direto com especialistas por WhatsApp.</dd>
            </div>
          </dl>
        </div>
        <div className="md:col-span-7">
          <img
            src={consultaImg}
            alt="Médica em consulta com paciente em consultório iluminado"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

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
        "Relatório individual personalizado do percurso do colaborador",
      ],
    },
  ];
  return (
    <section className="bg-ink py-16 text-cream md:py-24">
      <div className="container-x">
        <p className="eyebrow">Jornada ACTIO_90</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] md:text-5xl">
          90 dias de transformação — <em className="text-gold not-italic">5 marcos clínicos</em>.
        </h2>

        <ol className="mt-14 space-y-4">
          {steps.map((s, i) => (
            <li
              key={s.d}
              className="grid items-start gap-6 rounded-2xl border border-cream/10 bg-ink-soft p-6 md:grid-cols-12 md:gap-8 md:p-8"
            >
              <div className="md:col-span-3">
                <div className="font-serif text-sm text-gold">Marco {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 font-serif text-3xl">{s.d}</div>
                <div className="mt-1 text-sm text-cream/60">{s.title}</div>
              </div>
              <ul className="space-y-2 text-sm text-cream/80 md:col-span-9">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <blockquote className="mt-10 max-w-3xl border-l-2 border-gold pl-6 font-serif text-xl italic leading-snug text-cream/90">
          Cada etapa é desenhada para garantir adesão clínica, evolução mensurável e
          engajamento sustentado ao longo dos 90 dias.
        </blockquote>
      </div>
    </section>
  );
}

function Medimos() {
  const groups = [
    {
      title: "Medidas corporais",
      items: ["Bioimpedância (InBody 120)", "Massa muscular e gordura corporal", "Relação cintura-quadril", "Score InBody"],
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
    <section className="bg-cream py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">Informações que escolhemos medir</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] md:text-5xl">
          O que medimos — e por que importa.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Não queremos formar atletas. Queremos cuidar das pessoas do seu time naquilo
          que mais adoece, naquilo que afasta, naquilo que diminui o desempenho — e
          naquilo onde podemos prevenir desfechos desfavoráveis.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-serif text-xl">{g.title}</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-ink/80">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold">—</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-ink p-6 text-sm text-cream/80 md:p-8">
          <strong className="text-cream">Pressão arterial:</strong> rastreamento de
          hipertensão — principal causa de AVC no Brasil. A identificação precoce
          permite intervenção clínica antes do evento cardiovascular irreversível.
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  const cols = [
    {
      title: "Alimentação",
      items: [
        "Macronutrientes e função no organismo",
        "Contagem de calorias e densidade energética",
        "Dietas validadas cientificamente (mediterrânea, DASH)",
      ],
    },
    {
      title: "Atividade física",
      items: [
        "Prevenção de doenças crônicas e câncer",
        "Combate ao sedentarismo corporativo",
        "Controle de hipertensão e diabetes",
        "Prescrição individualizada de exercícios",
        "15 min/dia de MVPA: impacto mensurável",
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
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">Pilar 01 · Educação e promoção em saúde</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.1] md:text-5xl">
          Conscientização que muda comportamento.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Palestras baseadas em evidência abordam os temas mais relevantes para a saúde
          da população corporativa brasileira — com linguagem direta, dados clínicos e
          aplicabilidade imediata à rotina de trabalho.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title} className="bg-card p-8">
              <h3 className="font-serif text-xl text-ink">{c.title}</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-ink/75">
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

function Servicos() {
  const tiers = [
    {
      tag: "Diagnóstico estratégico",
      name: "ACTIO_Now",
      desc: "Mapeamento inicial de indicadores de saúde mental, riscos psicossociais e oportunidades de intervenção.",
      items: ["Entrevista com todos os colaboradores", "Palestras empresariais", "Relatório simplificado de saúde e bem-estar"],
    },
    {
      tag: "30 a 180 dias · acompanhamento",
      name: "ACTIO_One",
      desc: "Programa de promoção da saúde e qualidade de vida com acompanhamento e evolução mensurável.",
      items: ["Entrevistas e acompanhamento individualizado", "Palestras empresariais", "Consultas com profissionais de saúde"],
      featured: true,
    },
    {
      tag: "Premium · liderança",
      name: "ACTIO_X",
      desc: "Solução premium para lideranças e equipes estratégicas, com acompanhamento ampliado.",
      items: ["Apoio médico quando necessário, online e WhatsApp", "Planos personalizados", "Relatório executivo de saúde e bem-estar"],
    },
  ];
  return (
    <section id="servicos" className="bg-cream py-16 md:py-24">
      <div className="container-x">
        <p className="eyebrow">Nossos serviços</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] md:text-5xl">
          Três níveis de serviço para diferentes maturidades corporativas.
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
          O formato final é definido após entender o porte, o perfil de colaboradores, a
          agenda de RH/SST e os objetivos da instituição.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                t.featured
                  ? "relative rounded-3xl bg-ink p-8 text-cream shadow-xl md:p-10 md:-translate-y-4"
                  : "rounded-3xl border border-border bg-card p-8 md:p-10"
              }
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                  Mais escolhido
                </span>
              )}
              <div className={`text-[11px] font-semibold uppercase tracking-widest ${t.featured ? "text-gold" : "text-muted-foreground"}`}>
                {t.tag}
              </div>
              <h3 className="mt-4 font-serif text-3xl">{t.name}</h3>
              <p className={`mt-4 text-sm leading-relaxed ${t.featured ? "text-cream/75" : "text-ink/75"}`}>{t.desc}</p>
              <ul className={`mt-6 space-y-3 border-t pt-6 text-sm ${t.featured ? "border-cream/15 text-cream/85" : "border-border text-ink/80"}`}>
                {t.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-gold">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl font-serif text-xl italic text-ink">
          Não é uma solução de prateleira. É uma conversa técnica que desenha a melhor
          entrada para a realidade da instituição.
        </p>
      </div>
    </section>
  );
}

function Responsavel() {
  return (
    <section className="bg-ink py-16 text-cream md:py-24">
      <div className="container-x grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <img
            src={doctorImg}
            alt="Dr. Leandro Batista, médico responsável técnico do ACTIO_90"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
        </div>
        <div className="md:col-span-7">
          <p className="eyebrow">Responsabilidade técnica</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] md:text-5xl">
            Quem desenvolveu o <em className="text-gold not-italic">ACTIO_90</em>.
          </h2>
          <div className="mt-8 rounded-2xl border border-cream/10 p-8">
            <div className="font-serif text-2xl">Dr. Leandro Fernando Batista Leite</div>
            <div className="mt-1 text-sm text-gold">CRM-MG 68.021 · RQE 67.627</div>
            <p className="mt-5 text-sm leading-relaxed text-cream/75">
              Pai, marido, médico especialista há +10 anos, leitor voraz, preceptor do
              internato de medicina da PUC-Minas, entusiasta e praticante de atividades
              físicas, fundador e responsável técnico do ACTIO_90.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              Medicina exercida com foco centrado na pessoa, atuação clínica pautada nas
              melhores práticas e evidências científicas. Supervisor clínico direto de
              todos os participantes do programa ao longo dos 90 dias.
            </p>
            <p className="mt-6 border-t border-cream/10 pt-5 text-xs text-cream/55">
              Projeto ACTIO_90 — Medicina. Nasceu como projeto de pesquisa financiado pelas
              plataformas PIBIC-FAPEMIG dentro da Faculdade de Medicina da PUC-Minas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-gold py-16 text-ink md:py-24">
      <div className="container-x">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">Próximo passo</p>
        <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-[1.05] sm:text-4xl md:text-6xl">
          Vamos transformar a saúde da sua equipe?
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
          Em 30 minutos, a equipe ACTIO conhece o contexto da instituição e apresenta
          caminhos possíveis para transformar saúde corporativa em indicadores de gestão.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Entender o cenário", "Mapeamos o contexto atual de RH, SST e saúde corporativa."],
            ["02", "Identificar oportunidades", "Pontos de risco, oportunidade e aderência regulatória."],
            ["03", "Arquitetura sob medida", "Apresentamos uma proposta inicial de programa personalizado."],
          ].map(([n, t, b]) => (
            <div key={n} className="rounded-2xl border border-ink/15 p-6">
              <div className="font-serif text-3xl text-ink/90">{n}</div>
              <div className="mt-3 font-serif text-xl">{t}</div>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{b}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl bg-ink p-8 text-cream md:grid-cols-12 md:items-center md:p-10">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-wider text-gold">Fale conosco</div>
            <div className="mt-2 font-serif text-2xl">Reunião de apresentação sem compromisso.</div>
            <p className="mt-3 text-sm text-cream/70">
              Mostramos como o programa funciona na prática para o perfil e a cultura da
              sua empresa — sem script genérico. Elaboramos uma proposta adaptada ao
              tamanho da equipe e aos objetivos de saúde corporativa, sem custo.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-cream/15 p-6">
              <div className="text-xs uppercase tracking-wider text-cream/60">Gustavo Cavalcanti</div>
              <a
                href="tel:+5531992655261"
                className="mt-2 block font-serif text-2xl text-cream hover:text-gold"
              >
                31 99265-5261
              </a>
              <a
                href="mailto:medgustavocavalcanti@gmail.com"
                className="mt-1 block break-all text-sm text-cream/75 hover:text-gold"
              >
                medgustavocavalcanti@gmail.com
              </a>
              <a
                href="https://wa.me/5531992655261"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition hover:bg-gold-soft"
              >
                Agendar visita técnica
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12 text-cream/60">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <ActioLogo />
          <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-cream/45">Saúde Corporativa é Estratégia</div>
        </div>
        <p className="max-w-md text-xs leading-relaxed">
          Programa ACTIO_90 · Medicina baseada em evidências · Responsável técnico Dr.
          Leandro F. B. Leite, CRM-MG 68.021 / RQE 67.627.
        </p>
        <div className="text-xs">© {new Date().getFullYear()} ACTIO. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-cream text-ink">
      <Hero />
      <Reflection />
      <Pillars />
      <Legislacao />
      <Problema />
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
