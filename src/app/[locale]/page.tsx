import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const experience = [
  {
    period: "Jun 2026 — Present",
    role: "Video Generation Infrastructure Engineer Intern",
    organization: "Xingjie Intelligence",
    summary:
      "Building SGLang-based diffusion-model serving with parallelism, quantization and GPU performance optimization.",
  },
  {
    period: "May 2025 — Sep 2026",
    role: "Research Assistant",
    organization: "University of Leeds · Distributed Computing Group",
    summary:
      "Developed LLM-driven compiler systems, reaching 90%+ IR decompilation accuracy and up to 16.7× program speedup.",
  },
  {
    period: "Oct 2025 — Jul 2026",
    role: "Research Assistant",
    organization: "Peking University · National Engineering Laboratory",
    summary:
      "Designed adaptive hyperbolic graph models and auditable evidence chains for social-bot detection.",
  },
  {
    period: "Jun 2024 — Jun 2025",
    role: "Research Assistant",
    organization: "Peking University · School of Computer Science",
    summary:
      "Proposed dynamic KV-cache compression, achieving 70% compression on LongBench with only 1% performance loss.",
  },
  {
    period: "May 2026 — Sep 2026",
    role: "Research Assistant",
    organization: "HKUST (Guangzhou) · Yang Menglin Group",
    summary:
      "Studied Loop Transformers and recurrent computation in Llama-3-8B through hidden-state dynamics and controlled cross-task evaluation.",
  },
  {
    period: "Sep 2025 — Feb 2026",
    role: "Research Assistant",
    organization: "Westlake University · Li Ziqing Group",
    summary:
      "Developed hierarchical generative representations for single-cell data using vector quantization, tree routing and diffusion models.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Research Assistant",
    organization: "Tsinghua University · Wei Jun Group",
    summary:
      "Built knowledge-graph reasoning and multi-hop QA systems, and deployed low-latency LLM and streaming-TTS services for real-time voice interaction.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Research Assistant",
    organization: "Shanghai Jiao Tong University · Deng Zhijie Group",
    summary:
      "Developed an MCP-based multi-agent framework with task decomposition, dynamic tool routing and adaptive execution recovery.",
  },
  {
    period: "Jun 2025 — Sep 2025",
    role: "AI Engineer Intern",
    organization: "Sheet0",
    summary:
      "Built configurable multi-agent data workflows, improving collection accuracy, fault tolerance and execution recovery.",
  },
];

const publications = [
  {
    title:
      "SAHG: Sector-Anisotropic Hyperbolic Graph Model for Social Bot Detection",
    venue: "Under review at NeurIPS 2026 · First author",
    href: "https://arxiv.org/abs/2605.30166",
  },
  {
    title:
      "VeriBot: Evidence-Routed Social Bot Detection with Auditable Decision Chains",
    venue: "Under review at AAAI 2027 · First author",
  },
  {
    title:
      "Agent-Agnostic End-to-End C/C++ Application Performance Optimization",
    venue: "Published at ACM ICS 2026 Workshop · First author",
    href: "https://doi.org/10.1145/3774895.3812199",
  },
  {
    title: "BotRoute: Dual-Branch Selective Routing for Social Bot Detection",
    venue: "Under review at KDD 2027",
  },
  {
    title: "Hierarchy-Aware Sparse Autoencoders via Activation-Cone Routing",
    venue: "Under review at AAAI 2027",
  },
  {
    title:
      "HCGM: Hyperbolic Code Graph Modeling for Repository-Level Software Intelligence",
    venue: "Under review at KDD 2027",
  },
  {
    title:
      "FinHarness: An Inline Lifecycle Safety Harness for Finance LLM Agents",
    venue: "Preprint · 2026",
    href: "https://arxiv.org/abs/2605.27333",
  },
  {
    title:
      "Art and Science of Quantizing Large-Scale Models: A Comprehensive Overview",
    venue: "Preprint · 2024",
    href: "https://arxiv.org/abs/2409.11650",
  },
  {
    title:
      "Revision Propensity Is Not Revision Reliability: Ground-Truth-Conditioned Evaluation of Prompt Framing in LLM Cascades",
    venue: "Preprint · 2026 · Co-first author",
  },
];

const skills = [
  "Python",
  "C/C++",
  "PyTorch",
  "LLVM",
  "CUDA",
  "SGLang",
  "LLM Agents",
  "Graph ML",
  "Efficient Inference",
  "Nsight",
];

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          HL<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#publications">Research</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="top" className="page-shell">
        <section className="hero compact-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AI systems researcher & engineer</p>
            <h1 id="hero-title">
              Hanning Lu <span>陆涵宁</span>
            </h1>
            <p className="hero-lede">
              Computer Science student at the University of Leeds, working on
              efficient inference, compiler optimization and graph machine
              learning.
            </p>
            <p className="phd-status">
              <span aria-hidden="true" /> Currently seeking direct-entry PhD
              opportunities starting in September 2027.
            </p>
            <div className="hero-links">
              <a href="mailto:lhnjames@163.com">
                <Mail aria-hidden="true" /> lhnjames@163.com
              </a>
              <span>
                <MapPin aria-hidden="true" /> Leeds, United Kingdom
              </span>
            </div>
          </div>

          <figure className="portrait-wrap compact-portrait">
            <Image
              className="portrait"
              src="/hanning-lu.jpg"
              alt="Portrait of Hanning Lu"
              width={1200}
              height={1800}
              priority
              unoptimized
              sizes="(max-width: 800px) 100vw, 34vw"
            />
          </figure>
        </section>

        <section
          className="fact-strip compact-facts"
          aria-label="Profile highlights"
        >
          <div>
            <strong>3.8 / 4.0</strong>
            <span>GPA · Top 1%</span>
          </div>
          <div>
            <strong>1.55×</strong>
            <span>Average compiler speedup over -O3</span>
          </div>
          <div>
            <strong>90%+</strong>
            <span>Iterative IR decompilation accuracy</span>
          </div>
        </section>

        <section
          id="experience"
          className="section-rule compact-section"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div className="section-label">
              <span>01</span>
              <h2 id="experience-title">Experience</h2>
            </div>
          </div>
          <div className="timeline compact-timeline">
            {experience.map((item) => (
              <article
                className="timeline-item"
                key={`${item.organization}-${item.period}`}
              >
                <p className="timeline-period">{item.period}</p>
                <div>
                  <p className="timeline-org">{item.organization}</p>
                  <h3>{item.role}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="publications"
          className="section-rule compact-section"
          aria-labelledby="publications-title"
        >
          <div className="section-heading">
            <div className="section-label">
              <span>02</span>
              <h2 id="publications-title">Selected publications</h2>
            </div>
          </div>
          <div className="publication-list">
            {publications.map((publication) => {
              const content = (
                <>
                  <span>
                    <strong>{publication.title}</strong>
                    <small>{publication.venue}</small>
                  </span>
                  {publication.href ? (
                    <ArrowUpRight aria-hidden="true" />
                  ) : (
                    <span />
                  )}
                </>
              );
              return publication.href ? (
                <a
                  className="publication-row compact-publication"
                  href={publication.href}
                  target="_blank"
                  rel="noreferrer"
                  key={publication.title}
                >
                  {content}
                </a>
              ) : (
                <div
                  className="publication-row compact-publication"
                  key={publication.title}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section className="two-column section-rule compact-section">
          <div>
            <div className="section-label compact-label">
              <span>03</span>
              <h2>Education</h2>
            </div>
            <div className="simple-block">
              <p className="timeline-org">University of Leeds · 2024–2027</p>
              <h3>BSc Computer Science</h3>
              <p>GPA 3.8/4.0 · Top 1% of the programme</p>
            </div>
          </div>

          <div>
            <div className="section-label compact-label">
              <span>04</span>
              <h2>Skills</h2>
            </div>
            <div className="skill-tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="honours-row" aria-label="Awards">
          <span>Honours</span>
          <p>
            CCPC 2024 Gold Medal · ICPC Xi&apos;an Invitational Silver Medal ·
            Team captain
          </p>
        </section>

        <section
          id="contact"
          className="contact-section compact-contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">
            Research, systems, or a good technical problem?
          </h2>
          <a href="mailto:lhnjames@163.com">
            lhnjames@163.com <ArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <footer className="site-footer">
          <p>© 2026 Hanning Lu · 陆涵宁</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
