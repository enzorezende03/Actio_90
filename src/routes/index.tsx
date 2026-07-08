import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import consultaImg from "@/assets/consulta.jpg";
import doctorImg from "@/assets/dr-leandro.png";

function useIsMobileDevice() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua));
  }, []);
  return isMobile;
}

function EmailLink() {
  const isMobile = useIsMobileDevice();
  const href = isMobile
    ? "mailto:medgustavocavalcanti@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=medgustavocavalcanti@gmail.com";
  return (
    <a
      href={href}
      target={isMobile ? undefined : "_blank"}
      rel={isMobile ? undefined : "noreferrer"}
      className="font-serif underline decoration-gold/40 decoration-1 underline-offset-4 transition hover:decoration-gold"
    >
      medgustavocavalcanti@gmail.com
    </a>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACTIO — Dossiê de Saúde Corporativa" },
      {
        name: "description",
        content:
          "Uma leitura editorial sobre saúde corporativa baseada em evidência. Conformidade NR-1, Lei 14.831 e o método ACTIO_90 para RH, SST e diretoria.",
      },
      { property: "og:title", content: "ACTIO — Dossiê de Saúde Corporativa" },
      {
        property: "og:description",
        content:
          "Da conformidade à cultura. Uma leitura editorial sobre saúde corporativa baseada em evidência.",
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
/*  Primitivos editoriais                                                     */
/* -------------------------------------------------------------------------- */

function Rubric({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-serif text-[10px] font-semibold uppercase tracking-[0.32em] text-gold">
      <span className="h-px w-6 bg-gold/60" />
      {children}
    </span>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-serif text-[10px] font-semibold uppercase tracking-[0.32em] text-[color:var(--steel)]">
      {children}
    </div>
  );
}

function Headline({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={`font-serif font-light leading-[1.02] tracking-[-0.03em] text-cream ${className}`}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/*  Cabeçalho / Nav — estilo masthead                                         */
/* -------------------------------------------------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#dossie", "Dossiê"],
    ["#legado", "Conformidade"],
    ["#metodo", "Método"],
    ["#programas", "Programas"],
    ["#perfil", "Perfil"],
    ["#expediente", "Expediente"],
  ] as const;
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-cream/[0.08] bg-ink/85 backdrop-blur-md">
      <div className="container-x flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-6">
          <ActioWordmark />
          <span className="hidden font-serif text-[10px] uppercase tracking-[0.32em] text-[color:var(--steel)] lg:inline">
            Nº 01 · Dossiê de Saúde Corporativa
          </span>
        </div>
        <div className="hidden items-center gap-7 text-[12px] uppercase tracking-[0.22em] text-cream/70 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="font-serif transition hover:text-gold">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#expediente"
          className="hidden shrink-0 rounded-none border border-gold px-4 py-2.5 font-serif text-[11px] font-semibold uppercase tracking-[0.22em] text-gold transition hover:bg-gold hover:text-ink md:inline-block"
        >
          Agendar leitura
        </a>
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-cream/15 text-cream transition hover:border-gold hover:text-gold md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container-x pb-5">
            <div className="border border-cream/10 bg-ink-soft p-5">
              <ul className="divide-y divide-cream/[0.07]">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-serif text-[13px] uppercase tracking-[0.24em] text-cream/85 hover:text-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#expediente"
                onClick={() => setOpen(false)}
                className="mt-5 block border border-gold px-5 py-3 text-center font-serif text-[11px] font-semibold uppercase tracking-[0.22em] text-gold"
              >
                Agendar leitura
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/*  Capa editorial                                                            */
/* -------------------------------------------------------------------------- */

function Cover() {
  return (
    <header id="top" className="relative isolate overflow-hidden bg-ink pt-24">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/95 to-ink" />

      <div className="relative container-x pt-8 pb-24 md:pt-14 md:pb-36">
        {/* Masthead */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-cream/[0.10] pb-6">
          <div className="font-serif text-[11px] uppercase tracking-[0.4em] text-cream/60">
            ACTIO · Edição Nº 01
          </div>
          <div className="font-serif text-[11px] uppercase tracking-[0.32em] text-[color:var(--steel)]">
            Dossiê · Belo Horizonte · 2026
          </div>
        </div>

        {/* Grid editorial */}
        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <Rubric>Editorial de abertura</Rubric>
            <Headline
              as="h1"
              className="mt-8 text-[2.75rem] sm:text-6xl md:text-[5.4rem]"
            >
              Da conformidade
              <br />
              <span className="italic text-gold">à cultura.</span>
            </Headline>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-cream/70 md:text-[16px]">
              Uma leitura em cinco atos sobre por que saúde deixou de ser benefício e
              passou a ser indicador de gestão — para empresas que não querem descobrir
              o custo depois que ele aparece na folha.
            </p>
          </div>

          <aside className="border-t border-cream/[0.10] pt-8 md:col-span-4 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <Kicker>Nesta edição</Kicker>
            <ul className="mt-6 space-y-4 font-serif text-[13px] text-cream/80">
              {[
                ["I", "O silêncio que custa caro"],
                ["II", "A lei virou linha de base"],
                ["III", "Ciência traduzida em rotina"],
                ["IV", "Um método em 90 dias"],
                ["V", "Programas escaláveis"],
              ].map(([r, t]) => (
                <li key={r} className="flex items-baseline gap-4">
                  <span className="w-6 shrink-0 text-gold">{r}</span>
                  <span className="flex-1 leading-snug">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-cream/[0.10] pt-6">
              <a
                href="#dossie"
                className="inline-flex items-center gap-2 font-serif text-[11px] uppercase tracking-[0.28em] text-gold transition hover:text-cream"
              >
                Iniciar leitura <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>
        </div>

        {/* Assinatura da edição */}
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-cream/[0.10] pt-8 text-[11px] uppercase tracking-[0.28em] text-cream/50">
          <span className="font-serif">NR-1 · vigente 05/2026</span>
          <span className="font-serif">Lei 14.831/2024</span>
          <span className="font-serif">PUC Minas · PIBIC-FAPEMIG</span>
          <span className="ml-auto font-serif text-gold/80">Direção Dr. L. F. B. Leite</span>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Ato I — O silêncio que custa caro (feature magazine)                      */
/* -------------------------------------------------------------------------- */

function AtoI() {
  return (
    <section id="dossie" className="relative bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Ato I</Rubric>
          <Kicker>Reportagem · pág. 04</Kicker>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-14">
          {/* Coluna manchete */}
          <div className="md:col-span-7">
            <Headline className="text-[2rem] md:text-[3.4rem]">
              O silêncio que custa caro.
            </Headline>
            <p className="mt-8 text-[15px] leading-[1.75] text-cream/85 first-letter:font-serif first-letter:text-6xl first-letter:font-light first-letter:leading-none first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              A maior parte do adoecimento corporativo não aparece em atestado. Aparece
              em prazos que escorregam, reuniões esvaziadas de energia, decisões
              adiadas — e num dado silencioso: a maioria dos profissionais com saúde
              comprometida continua comparecendo ao trabalho como se nada estivesse
              acontecendo.
            </p>
            <p className="mt-5 columns-1 gap-8 text-[14.5px] leading-[1.75] text-cream/75 md:columns-2">
              Chamamos isso de presenteísmo, e ele custa mais do que qualquer
              afastamento. É o intervalo entre o momento em que o corpo pede socorro
              e o momento em que a empresa percebe. Nesse intervalo, cultura, entrega
              e retenção erodem — sem que nenhum indicador soe o alarme.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              A saída não é oferecer mais uma ação isolada de bem-estar. É construir
              uma leitura contínua da saúde do time — clínica, mensurável e
              acompanhada por profissionais. É trocar campanhas por método.
            </p>
          </div>

          {/* Coluna lateral com dados */}
          <aside className="md:col-span-5">
            <div className="border-y border-cream/[0.10] py-6">
              <blockquote className="font-serif text-2xl italic leading-[1.25] text-cream md:text-[1.7rem]">
                “Antes do afastamento, existe uma janela.
                <span className="text-gold"> Nela cabe uma decisão.”</span>
              </blockquote>
            </div>

            <ul className="mt-8 divide-y divide-cream/[0.10]">
              {[
                ["93%", "dos profissionais com saúde comprometida seguem comparecendo — presenteísmo invisível."],
                ["+68%", "de crescimento de afastamentos por transtornos mentais no Brasil em um ano."],
                ["546.254", "benefícios concedidos por transtornos mentais em 2025 — recorde histórico."],
                ["1 / 4", "trabalhadores em países industrializados exposto a riscos psicossociais crônicos."],
              ].map(([k, b]) => (
                <li key={k} className="grid grid-cols-[auto_1fr] items-baseline gap-5 py-4">
                  <span className="font-serif text-[26px] font-light leading-none text-gold">
                    {k}
                  </span>
                  <p className="text-[13px] leading-[1.55] text-cream/80">{b}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[10.5px] italic leading-relaxed text-[color:var(--steel)]">
              Fontes: Ministério da Previdência Social, 2025 · Bialowolski P et al.
              PLoS One, 2020 · Ipsos, 2024.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Ensaio — perguntas ao leitor                                              */
/* -------------------------------------------------------------------------- */

function Ensaio() {
  const perguntas = [
    "Quantas pessoas do seu time estão presentes — mas não inteiras?",
    "Quantas dessas você consegue enxergar antes que o custo apareça em folha?",
    "É possível cumprir a NR-1 sem se afogar em burocracia?",
    "Sua saúde ocupacional se resume a admissional, periódico e ASO?",
    "Você tem indicadores confiáveis de saúde corporativa — ou intuição?",
  ];
  return (
    <section className="bg-[color:var(--ink-soft)] py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Entre atos · ensaio</Rubric>
          <Kicker>Cinco perguntas ao leitor</Kicker>
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
          <Headline className="text-[1.8rem] md:col-span-5 md:text-[2.6rem]">
            Antes de qualquer programa, cinco perguntas que só a diretoria pode
            responder.
          </Headline>
          <ol className="md:col-span-7">
            {perguntas.map((q, i) => (
              <li
                key={q}
                className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-cream/[0.10] py-5 first:border-t"
              >
                <span className="font-serif text-3xl font-light text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-[17px] leading-[1.45] text-cream/90 md:text-[19px]">
                  {q}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Ato II — Conformidade (Legislação)                                        */
/* -------------------------------------------------------------------------- */

function AtoII() {
  return (
    <section id="legado" className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Ato II</Rubric>
          <Kicker>Conformidade · pág. 12</Kicker>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Headline className="text-[2rem] md:text-[3.4rem]">
              A lei virou linha de base —{" "}
              <span className="italic text-gold">o resto é reputação.</span>
            </Headline>
            <p className="mt-8 max-w-2xl text-[15px] leading-[1.75] text-cream/75">
              Em maio de 2026, a nova NR-1 tornou os riscos psicossociais parte
              obrigatória do PGR. No mesmo movimento, a Lei 14.831 abriu espaço para
              quem decide ir além. Duas frentes, um único plano: transformar
              obrigação em vantagem.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-0 border border-cream/[0.10] md:grid-cols-2">
          <article className="border-b border-cream/[0.10] p-8 md:border-b-0 md:border-r md:p-10">
            <Kicker>Coluna A · obrigatório</Kicker>
            <h3 className="mt-4 font-serif text-2xl font-light text-cream md:text-[1.8rem]">
              NR-1 — riscos psicossociais no PGR
            </h3>
            <p className="mt-5 text-[13.5px] leading-[1.7] text-cream/75">
              A Portaria MTE 1.419/2024 incluiu burnout, sobrecarga, assédio e
              estresse crônico entre os riscos que precisam ser identificados,
              avaliados e prevenidos. Vale para toda empresa com CLT. Fiscalização
              ativa, multa e embargo desde 26/05/2026.
            </p>
            <ul className="mt-6 divide-y divide-cream/[0.10] text-[13px] text-cream/80">
              {[
                "Identificação de riscos por avaliação clínica individual",
                "Plano de intervenção documentado e rastreável",
                "Reavaliação e evidência de eficácia",
              ].map((i) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-3 py-3">
                  <span className="text-gold">—</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[color:var(--ink-soft)] p-8 md:p-10">
            <Kicker>Coluna B · voluntário</Kicker>
            <h3 className="mt-4 font-serif text-2xl font-light text-cream md:text-[1.8rem]">
              Lei 14.831 — <span className="text-gold">selo de reputação</span>
            </h3>
            <p className="mt-5 text-[13.5px] leading-[1.7] text-cream/75">
              Sancionada em março/2024, cria a certificação federal de{" "}
              <em>Empresa Promotora da Saúde Mental</em>. Vale por dois anos e
              reconhece organizações que estruturam programa, promovem
              conscientização e mensuram resultados.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Promoção da saúde mental", "Bem-estar organizacional", "Métricas verificáveis"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-block border border-cream/15 px-3 py-1 font-serif text-[10px] uppercase tracking-[0.24em] text-cream/70"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
            <p className="mt-6 border-l-2 border-gold pl-4 font-serif text-[13px] italic leading-[1.55] text-cream/80">
              Cumprir a NR-1 é obrigação. Buscar o selo da 14.831 é escolha —
              e diferencial competitivo diante de talentos e clientes.
            </p>
          </article>
        </div>

        <p className="mt-6 text-[10.5px] italic text-[color:var(--steel)]">
          Portaria MTE 1.419/2024 · Lei 14.831/2024 · Ministério da Previdência Social.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data spread — ciência em números                                          */
/* -------------------------------------------------------------------------- */

function DataSpread() {
  const dados = [
    { k: "2,3×", t: "Produtividade", b: "Profissionais saudáveis performam até 2,3× acima de pares debilitados.", r: "Carnethon M et al. Circulation, 2009." },
    { k: "R$ 2,54", t: "Retorno por real", b: "Para cada real investido em prevenção, economia média em custos médicos.", r: "Dement JM et al. J Occup Environ Med, 2015." },
    { k: "−28%", t: "Afastamentos", b: "Redução observada em programas preventivos estruturados.", r: "Carnethon M et al. Circulation, 2009." },
    { k: "61%", t: "Sintomas mentais", b: "Redução robusta de depressão e ansiedade com atividade física supervisionada.", r: "Munro NR et al. Br J Sports Med, 2026." },
    { k: "15 min/d", t: "Limiar mínimo", b: "MVPA a partir de 15 min/dia já melhora a saúde mental autorrelatada.", r: "Munro NR et al., 2026." },
    { k: "HR 0,71", t: "Alimentação", b: "Maior adesão à dieta EAT-Lancet associada a menor risco de depressão.", r: "Lu X et al. Nat Commun, 2024." },
  ];
  return (
    <section id="metodo" className="bg-[color:var(--ink-soft)] py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Ato III</Rubric>
          <Kicker>Ciência traduzida · pág. 20</Kicker>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Headline className="text-[2rem] md:text-[3.2rem]">
              Ciência traduzida <span className="italic text-gold">em rotina.</span>
            </Headline>
          </div>
          <p className="text-[15px] leading-[1.75] text-cream/75 md:col-span-5">
            Duas frentes de evidência sustentam o programa: atividade física
            supervisionada e alimentação com padrão anti-inflamatório. Nada de
            promessa; tudo com desfecho medido em revistas revisadas por pares.
          </p>
        </div>

        {/* Grid tipográfico */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-cream/[0.10] bg-cream/[0.10] sm:grid-cols-2 lg:grid-cols-3">
          {dados.map((d) => (
            <div key={d.t} className="flex flex-col bg-ink p-7 md:p-8">
              <div className="font-serif text-[42px] font-light leading-none text-gold md:text-[54px]">
                {d.k}
              </div>
              <div className="mt-5 font-serif text-[11px] font-semibold uppercase tracking-[0.28em] text-cream">
                {d.t}
              </div>
              <p className="mt-3 text-[13px] leading-[1.6] text-cream/75">{d.b}</p>
              <p className="mt-auto pt-5 text-[10px] italic leading-snug text-[color:var(--steel)]">
                {d.r}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Ato IV — Método ACTIO_90 (Jornada + o que medimos)                        */
/* -------------------------------------------------------------------------- */

function AtoIV() {
  const marcos = [
    { d: "D0", t: "Fundação", b: "Palestra de abertura, avaliação de composição corporal e sinais vitais. Bioimpedância, PA, glicemia, FC, SpO₂." },
    { d: "D1 → D10", t: "Consulta clínica", b: "Consultas médicas individuais online. Exames se aplicáveis, prescrição alimentar e plano físico personalizados." },
    { d: "D11 → D30", t: "Rotina em curso", b: "Canal direto por WhatsApp com especialistas. Ajustes contínuos e educação semanal em saúde." },
    { d: "D31 → D60", t: "Reavaliação", b: "Segundo ciclo educativo, adequação dos planos e nova leitura dos indicadores." },
    { d: "D61 → D90", t: "Entrega", b: "Terceiro ciclo, avaliação final e relatório individual do percurso — pronto para gestão." },
  ];

  const medidas = [
    { g: "Corpo", i: ["Bioimpedância InBody 120", "Massa muscular e gordura", "Cintura-quadril", "Score InBody"] },
    { g: "Sinais vitais", i: ["Pressão arterial", "Glicemia", "Frequência cardíaca", "SpO₂"] },
    { g: "Mente (validados)", i: ["PHQ-9 · depressão", "GAD-7 · ansiedade", "GHQ-12 · sofrimento", "DASS-21 · triplo"] },
  ];

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Ato IV</Rubric>
          <Kicker>Método ACTIO_90 · pág. 28</Kicker>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Headline className="text-[2rem] md:text-[3.4rem]">
              Um método <span className="italic text-gold">em 90 dias</span> — cinco
              marcos clínicos, um relatório executivo.
            </Headline>
          </div>
          <p className="text-[15px] leading-[1.75] text-cream/75 md:col-span-4">
            Educação, avaliação e acompanhamento entregues dentro da empresa — na
            língua do time e no ritmo do calendário corporativo.
          </p>
        </div>

        {/* Timeline horizontal em desktop, vertical em mobile */}
        <ol className="mt-14 grid gap-6 border-t border-cream/[0.10] pt-8 md:grid-cols-5 md:gap-4">
          {marcos.map((m, i) => (
            <li key={m.d} className="relative border-t-2 border-gold/40 pt-5 md:pt-6">
              <div className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-gold" />
              <div className="font-serif text-[10px] uppercase tracking-[0.28em] text-[color:var(--steel)]">
                Marco {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 font-serif text-2xl font-light text-gold">{m.d}</div>
              <div className="mt-1 font-serif text-[15px] text-cream">{m.t}</div>
              <p className="mt-3 text-[12.5px] leading-[1.55] text-cream/70">{m.b}</p>
            </li>
          ))}
        </ol>

        {/* O que medimos + imagem */}
        <div className="mt-20 grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <img
              src={consultaImg}
              alt="Consulta clínica"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale contrast-110"
            />
            <p className="mt-3 font-serif text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--steel)]">
              Fig. 01 · Avaliação clínica presencial, sede do cliente.
            </p>
          </div>
          <div className="md:col-span-7">
            <Kicker>O que medimos</Kicker>
            <Headline className="mt-3 text-[1.6rem] md:text-[2.2rem]">
              Métricas que importam — e por que importam.
            </Headline>
            <p className="mt-5 text-[14.5px] leading-[1.7] text-cream/75">
              Não formamos atletas. Cuidamos das pessoas do seu time naquilo que mais
              adoece — e prevenimos os desfechos que a empresa não vê.
            </p>
            <div className="mt-8 grid gap-px overflow-hidden border border-cream/[0.10] bg-cream/[0.10] sm:grid-cols-3">
              {medidas.map((m) => (
                <div key={m.g} className="bg-ink p-6">
                  <div className="font-serif text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    {m.g}
                  </div>
                  <ul className="mt-4 space-y-2 text-[12.5px] text-cream/80">
                    {m.i.map((x) => (
                      <li key={x} className="grid grid-cols-[auto_1fr] gap-2">
                        <span className="text-gold">·</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-gold pl-4 text-[13px] leading-[1.6] text-cream/85">
              A pressão arterial isolada já rastreia hipertensão — principal causa de
              AVC no Brasil. Diagnosticar cedo é intervir antes do irreversível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Ato V — Programas Now / One / X                                           */
/* -------------------------------------------------------------------------- */

function AtoV() {
  const tiers = [
    {
      tag: "Diagnóstico estratégico",
      name: "_Now",
      pretitle: "Prancheta 01",
      desc: "Uma leitura inicial da saúde do seu time — para saber onde intervir antes de investir.",
      items: ["Entrevista com colaboradores", "Palestras empresariais", "Relatório simplificado"],
      variant: "outline" as const,
    },
    {
      tag: "30 a 180 dias · acompanhamento",
      name: "_One",
      pretitle: "Prancheta 02",
      desc: "Programa de promoção da saúde com acompanhamento contínuo e evolução mensurável.",
      items: ["Entrevistas e acompanhamento individualizado", "Palestras empresariais", "Consultas com especialistas"],
      variant: "solid" as const,
    },
    {
      tag: "Premium · liderança",
      name: "_X",
      pretitle: "Prancheta 03",
      desc: "Solução dedicada a lideranças e equipes estratégicas, com acompanhamento ampliado.",
      items: ["Apoio médico online e WhatsApp", "Planos personalizados", "Relatório executivo"],
      variant: "outline" as const,
    },
  ];
  return (
    <section id="programas" className="bg-[color:var(--ink-soft)] py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Ato V</Rubric>
          <Kicker>Programas · pág. 36</Kicker>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Headline className="text-[2rem] md:text-[3.4rem]">
              Três programas <span className="italic text-gold">escaláveis.</span>
            </Headline>
          </div>
          <p className="text-[15px] leading-[1.75] text-cream/75 md:col-span-5">
            Não vendemos pacotes fechados. O desenho final leva em conta porte, perfil
            de colaboradores e maturidade da instituição.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => {
            const solid = t.variant === "solid";
            const card = solid
              ? "bg-gold text-ink"
              : "border border-cream/[0.10] bg-ink text-cream";
            return (
              <article key={t.name} className={`flex flex-col p-8 md:p-10 ${card}`}>
                <div
                  className={`font-serif text-[10px] uppercase tracking-[0.32em] ${
                    solid ? "text-ink/60" : "text-[color:var(--steel)]"
                  }`}
                >
                  {t.pretitle}
                </div>
                <h3
                  className={`mt-6 font-serif text-5xl font-light ${
                    solid ? "text-ink" : "text-cream"
                  }`}
                >
                  ACTIO<span className={solid ? "text-ink/70" : "text-gold"}>{t.name}</span>
                </h3>
                <div
                  className={`mt-4 font-serif text-[11px] font-semibold uppercase tracking-[0.24em] ${
                    solid ? "text-ink/75" : "text-gold"
                  }`}
                >
                  {t.tag}
                </div>
                <p
                  className={`mt-5 text-[13.5px] leading-[1.7] ${
                    solid ? "text-ink/85" : "text-cream/80"
                  }`}
                >
                  {t.desc}
                </p>
                <ul
                  className={`mt-6 space-y-2.5 border-t pt-5 text-[13px] ${
                    solid ? "border-ink/20 text-ink/85" : "border-cream/[0.10] text-cream/85"
                  }`}
                >
                  {t.items.map((i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                      <span className={solid ? "text-ink" : "text-gold"}>—</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                {solid && (
                  <div className="mt-6 inline-block self-start border border-ink/30 px-3 py-1 font-serif text-[9px] uppercase tracking-[0.28em] text-ink">
                    Escolha mais frequente
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl border-l-2 border-gold pl-5 font-serif text-[17px] italic leading-snug text-cream/90 md:text-[19px]">
          Não é solução de prateleira — é uma conversa técnica de trinta minutos.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Perfil — Dr. Leandro                                                      */
/* -------------------------------------------------------------------------- */

function Perfil() {
  return (
    <section id="perfil" className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Perfil</Rubric>
          <Kicker>Direção técnica · pág. 44</Kicker>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <img
              src={doctorImg}
              alt="Dr. Leandro Fernando Batista Leite"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <p className="mt-3 font-serif text-[10.5px] uppercase tracking-[0.24em] text-[color:var(--steel)]">
              Retrato · Dr. Leandro F. B. Leite
            </p>
          </div>

          <div className="md:col-span-7">
            <blockquote className="font-serif text-2xl italic leading-[1.2] text-cream md:text-[2rem]">
              “Medicina exercida com foco{" "}
              <span className="text-gold">centrado na pessoa</span> — pautada pelas
              melhores práticas e evidências científicas.”
            </blockquote>

            <div className="mt-10 border-t border-cream/[0.10] pt-8">
              <Headline as="h3" className="text-[1.8rem] md:text-[2.4rem]">
                Dr. Leandro Fernando Batista Leite
              </Headline>
              <div className="mt-3 font-serif text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                CRM-MG 68.021 · RQE 67.627 · Diretor técnico
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <p className="text-[14px] leading-[1.75] text-cream/80">
                  Pai, marido, médico especialista há mais de dez anos, leitor voraz e
                  preceptor do internato de medicina da PUC-Minas. Entusiasta e
                  praticante de atividades físicas.
                </p>
                <p className="text-[14px] leading-[1.75] text-cream/80">
                  Fundador e diretor técnico do ACTIO_90, supervisor clínico direto de
                  todos os participantes ao longo dos noventa dias de programa.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["PUC Minas", "PIBIC-FAPEMIG", "Medicina baseada em evidência"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-block border border-cream/15 px-3 py-1 font-serif text-[10px] uppercase tracking-[0.24em] text-cream/70"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Expediente — contato + CTA                                                */
/* -------------------------------------------------------------------------- */

function Expediente() {
  const passos = [
    ["01", "Entender o cenário", "Mapeamos o momento atual de RH, SST e saúde corporativa."],
    ["02", "Identificar oportunidades", "Riscos, aderência regulatória e prioridades reais."],
    ["03", "Arquitetura sob medida", "Proposta inicial de programa desenhada para o seu contexto."],
  ];
  return (
    <section id="expediente" className="bg-[color:var(--ink-soft)] py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-baseline justify-between border-b border-cream/[0.10] pb-4">
          <Rubric>Expediente</Rubric>
          <Kicker>Carta ao leitor · pág. 48</Kicker>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Headline className="text-[2rem] md:text-[3.4rem]">
              Pronto para elevar o padrão da sua gestão de{" "}
              <span className="italic text-gold">saúde?</span>
            </Headline>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.75] text-cream/80">
              Em trinta minutos, conhecemos o contexto da instituição e apresentamos
              caminhos concretos para transformar saúde corporativa em indicadores de
              gestão. É uma conversa técnica — não um pitch comercial.
            </p>

            <ol className="mt-10 divide-y divide-cream/[0.10] border-y border-cream/[0.10]">
              {passos.map(([n, t, b]) => (
                <li key={n} className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-5">
                  <span className="font-serif text-3xl font-light text-gold">{n}</span>
                  <div>
                    <div className="font-serif text-[16px] text-cream">{t}</div>
                    <p className="mt-1 text-[13px] leading-[1.55] text-cream/70">{b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href="https://wa.me/5531992655261"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-serif text-[12px] font-semibold uppercase tracking-[0.24em] text-ink transition hover:bg-transparent hover:text-gold"
            >
              Agendar visita técnica <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <aside className="md:col-span-5">
            <div className="border border-cream/[0.10] bg-ink p-8">
              <Kicker>Contato editorial</Kicker>
              <div className="mt-5 font-serif text-2xl font-light text-cream">
                Gustavo Cavalcanti
              </div>
              <div className="mt-1 font-serif text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                Diretor Comercial
              </div>
              <dl className="mt-8 divide-y divide-cream/[0.10] border-t border-cream/[0.10] text-[13.5px]">
                <div className="grid grid-cols-[80px_1fr] items-baseline gap-4 py-4">
                  <dt className="font-serif text-[10px] uppercase tracking-[0.28em] text-[color:var(--steel)]">
                    E-mail
                  </dt>
                  <dd className="break-all text-cream/90">
                    <EmailLink />
                  </dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] items-baseline gap-4 py-4">
                  <dt className="font-serif text-[10px] uppercase tracking-[0.28em] text-[color:var(--steel)]">
                    WhatsApp
                  </dt>
                  <dd>
                    <a
                      href="https://wa.me/5531992655261"
                      target="_blank"
                      rel="noreferrer"
                      className="font-serif tracking-[0.12em] text-cream/90 underline decoration-gold/40 underline-offset-4 transition hover:text-gold hover:decoration-gold"
                    >
                      31 99265-5261
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] items-baseline gap-4 py-4">
                  <dt className="font-serif text-[10px] uppercase tracking-[0.28em] text-[color:var(--steel)]">
                    Sede
                  </dt>
                  <dd className="text-cream/80">Belo Horizonte · MG</dd>
                </div>
              </dl>
            </div>

            <p className="mt-6 font-serif text-[11px] italic leading-[1.7] text-[color:var(--steel)]">
              Esta edição foi composta em Space Grotesk e Inter. Impressa em pixels
              sobre fundo tinta. Circulação nacional.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Rodapé — colofão                                                          */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-cream/[0.10] bg-ink py-12">
      <div className="container-x grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <ActioWordmark size="sm" />
          <div className="mt-3 font-serif text-[10px] uppercase tracking-[0.3em] text-[color:var(--steel)]">
            Saúde corporativa é estratégia
          </div>
        </div>
        <p className="text-[11.5px] leading-[1.75] text-cream/65 md:col-span-5">
          Programa ACTIO_90 · Medicina baseada em evidências · Direção técnica
          Dr. Leandro F. B. Leite, CRM-MG 68.021 / RQE 67.627.
        </p>
        <div className="font-serif text-[10px] uppercase tracking-[0.24em] text-[color:var(--steel)] md:col-span-3 md:text-right">
          © {new Date().getFullYear()} ACTIO · Edição Nº 01
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
      <Cover />
      <AtoI />
      <Ensaio />
      <AtoII />
      <DataSpread />
      <AtoIV />
      <AtoV />
      <Perfil />
      <Expediente />
      <Footer />
    </main>
  );
}
