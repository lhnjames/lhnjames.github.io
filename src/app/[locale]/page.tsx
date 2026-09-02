import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const internships = [
  {
    period: "Jun 2025 — Sep 2025",
    role: "AI Engineer Intern",
    organization: "Sheet0",
    summary:
      "Built configurable multi-agent data workflows, improving collection accuracy, fault tolerance and execution recovery.",
  },
  {
    period: "Jun 2026 — Present",
    role: "Video Generation Infrastructure Engineer Intern",
    organization: "Xingjie Intelligence",
    summary:
      "Building SGLang-based diffusion-model serving with parallelism, quantization and GPU performance optimization.",
  },
];

const researchExperience = [
  {
    period: "May 2025 — Sep 2026",
    role: "Research Assistant",
    organization: "University of Leeds",
    group: "Distributed Computing Group",
    summary:
      "Developed LLM-driven compiler systems, reaching 90%+ IR decompilation accuracy and up to 16.7× program speedup.",
  },
  {
    period: "Jun 2024 — Jun 2025",
    role: "Research Assistant",
    organization: "School of Computer Science, Peking University",
    group: "Yang Tong Group",
    summary:
      "Proposed dynamic KV-cache compression, achieving 70% compression on LongBench with only 1% performance loss.",
  },
  {
    period: "Oct 2025 — Jul 2026",
    role: "Research Assistant",
    organization: "National Engineering Laboratory, Peking University",
    group: "Chong Bin Group",
    summary:
      "Designed adaptive hyperbolic graph models and auditable evidence chains for social-bot detection.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Research Assistant",
    organization: "Shanghai Jiao Tong University",
    group: "Deng Zhijie Group",
    summary:
      "Developed an MCP-based multi-agent framework with task decomposition, dynamic tool routing and adaptive execution recovery.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Research Assistant",
    organization: "Tsinghua University",
    group: "Wei Jun Group",
    summary:
      "Built knowledge-graph reasoning and multi-hop QA systems, and deployed low-latency LLM and streaming-TTS services for real-time voice interaction.",
  },
  {
    period: "Sep 2025 — Feb 2026",
    role: "Research Assistant",
    organization: "Westlake University",
    group: "Li Ziqing Group",
    summary:
      "Developed hierarchical generative representations for single-cell data using vector quantization, tree routing and diffusion models.",
  },
  {
    period: "May 2026 — Sep 2026",
    role: "Research Assistant",
    organization: "HKUST (Guangzhou)",
    group: "Yang Menglin Group",
    summary:
      "Studied Loop Transformers and recurrent computation in Llama-3-8B through hidden-state dynamics and controlled cross-task evaluation.",
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
          <a href="#publications">Publications</a>
          <a href="#internships">Internships</a>
          <a href="#research-experience">Research</a>
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
          id="publications"
          className="section-rule compact-section"
          aria-labelledby="publications-title"
        >
          <div className="section-heading">
            <div className="section-label">
              <span>01</span>
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

        <section
          id="internships"
          className="section-rule compact-section"
          aria-labelledby="internships-title"
        >
          <div className="section-heading">
            <div className="section-label">
              <span>02</span>
              <h2 id="internships-title">Internships</h2>
            </div>
          </div>
          <div className="timeline compact-timeline">
            {internships.map((item) => (
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
          id="research-experience"
          className="section-rule compact-section"
          aria-labelledby="research-experience-title"
        >
          <div className="section-heading">
            <div className="section-label">
              <span>03</span>
              <h2 id="research-experience-title">Research experience</h2>
            </div>
          </div>
          <div className="timeline compact-timeline">
            {researchExperience.map((item) => (
              <article
                className="timeline-item"
                key={`${item.organization}-${item.period}`}
              >
                <p className="timeline-period">{item.period}</p>
                <div>
                  <p className="timeline-org">{item.organization}</p>
                  <h3>{item.group}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="two-column section-rule compact-section">
          <div>
            <div className="section-label compact-label">
              <span>04</span>
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
              <span>05</span>
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
          <div>
            <p>CCPC 2024 · Gold Medal · Team Captain</p>
            <p>ICPC Xi&apos;an Invitational · Silver Medal · Team Captain</p>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section compact-contact"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">Contact</h2>
          <p>PhD opportunities and research collaborations.</p>
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
