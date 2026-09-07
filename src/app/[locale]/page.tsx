import Image from "next/image";
import { WorkIllustration } from "@/components/work-illustration";

import { Icons } from "@/components/icons";

const internships = [
  {
    period: "Jun 2025 — Sep 2025",
    role: "AI Engineer Intern",
    organization: "Sheet0",
    href: "https://www.sheet0.com/",
    summary:
      "Built configurable multi-agent data workflows, improving collection accuracy, fault tolerance and execution recovery.",
  },
  {
    period: "Jun 2026 — Sep 2026",
    role: "Video Generation Infrastructure Engineer Intern",
    organization: "Xingjie Intelligence",
    href: "https://www.frame-x.ai/",
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
      "First-authored the published ICS 2026 workshop paper on agent-agnostic C/C++ optimization; developed LLM-driven compiler systems with 90%+ IR decompilation accuracy and up to 16.7× program speedup.",
    featured: true,
  },
  {
    period: "Oct 2025 — Jul 2026",
    role: "Research Assistant",
    organization: "National Engineering Laboratory, Peking University",
    group: "Bin Chong Group",
    summary:
      "Led first-author work on SAHG and VeriBot and contributed to BotRoute; all three manuscripts are under submission.",
    featured: true,
  },
  {
    period: "Jun 2024 — Jun 2025",
    role: "Research Assistant",
    organization: "School of Computer Science, Peking University",
    group: "Tong Yang Group",
    summary:
      "Proposed dynamic KV-cache compression, achieving 70% compression on LongBench with only 1% performance loss.",
    featured: true,
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Research Assistant",
    organization: "Shanghai Jiao Tong University",
    group: "Zhijie Deng Group",
    summary:
      "Developed TPS-Bench to evaluate AI agents' tool planning and scheduling on multi-step, multi-tool tasks.",
  },
  {
    period: "Jun 2025 — Aug 2025",
    role: "Research Assistant",
    organization: "Tsinghua University",
    group: "Jun Wei Group",
    summary:
      "Built knowledge-graph reasoning and multi-hop QA systems, and deployed low-latency LLM and streaming-TTS services for real-time voice interaction.",
  },
  {
    period: "Sep 2025 — Feb 2026",
    role: "Research Assistant",
    organization: "Westlake University",
    group: "Ziqing Li Group",
    summary:
      "Developed hierarchical generative representations for single-cell data using vector quantization, tree routing and diffusion models.",
  },
  {
    period: "May 2026 — Sep 2026",
    role: "Research Assistant",
    organization: "HKUST (Guangzhou)",
    group: "Menglin Yang Group",
    summary:
      "Studied Loop Transformers and recurrent computation in Llama-3-8B through hidden-state dynamics and controlled cross-task evaluation.",
    featured: true,
  },
];

const publications = [
  {
    title:
      "SAHG: Sector-Anisotropic Hyperbolic Graph Model for Social Bot Detection",
    venue: "Under submission · First author",
    href: "https://arxiv.org/abs/2605.30166",
  },
  {
    title:
      "VeriBot: Evidence-Routed Social Bot Detection with Auditable Decision Chains",
    venue: "Under submission · First author",
  },
  {
    title:
      "Agent-Agnostic End-to-End C/C++ Application Performance Optimization",
    venue: "Published at ACM ICS 2026 Workshop · First author",
    href: "https://doi.org/10.1145/3774895.3812199",
  },
  {
    title: "BotRoute: Dual-Branch Selective Routing for Social Bot Detection",
    venue: "Under submission",
  },
  {
    title: "Hierarchy-Aware Sparse Autoencoders via Activation-Cone Routing",
    venue: "Under submission",
  },
  {
    title:
      "HCGM: Hyperbolic Code Graph Modeling for Repository-Level Software Intelligence",
    venue: "Under submission",
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

const paperArtwork = [
  "sahg",
  "veribot",
  "compiler",
  "botroute",
  "sparse",
  "hcgm",
  "finharness",
  "quantization",
  "revision",
];
const projectDetails: Record<
  string,
  { title: string; artwork: string; code?: string }
> = {
  "Distributed Computing Group": {
    title: "LLM-Driven Compiler Optimization",
    artwork: "compiler",
    code: "https://github.com/lhnjames/accelerate_pass",
  },
  "Bin Chong Group": {
    title: "Graph Learning for Social Bot Detection",
    artwork: "sahg",
    code: "https://github.com/lhnjames/SAHG",
  },
  "Tong Yang Group": {
    title: "Dynamic KV-Cache Compression",
    artwork: "kv",
  },
  "Menglin Yang Group": {
    title: "Loop Transformers & Recurrent Computation",
    artwork: "loop",
  },
  "Zhijie Deng Group": {
    title: "TPS-Bench: Tool Planning & Scheduling for AI Agents",
    artwork: "tps",
    code: "https://github.com/hanwenxu1/mcp-agent",
  },
  "Jun Wei Group": {
    title: "Knowledge-Graph Reasoning & Real-Time LLM Serving",
    artwork: "reasoning",
  },
  "Ziqing Li Group": {
    title: "Hierarchical Generative Models for Single-Cell Data",
    artwork: "cells",
  },
};

export default function Page() {
  const orderedPapers = [
    publications[2],
    publications[6],
    publications[7],
    publications[8],
    publications[0],
    publications[1],
    publications[3],
    publications[4],
    publications[5],
  ];
  const groups = [
    ...researchExperience.filter((item) => item.featured),
    ...researchExperience.filter((item) => !item.featured),
  ];
  const topics: Record<string, string> = {
    "Distributed Computing Group":
      "LLM-driven compiler optimization; first-author ICS workshop paper.",
    "Bin Chong Group":
      "Graph learning and evidence-based detection; SAHG and VeriBot (first author), BotRoute, all under submission.",
    "Tong Yang Group": "Efficient inference and dynamic KV-cache compression.",
    "Menglin Yang Group": "Loop Transformers and recurrent computation.",
    "Zhijie Deng Group":
      "Evaluating agents' tool selection, task decomposition and execution scheduling on multi-step tasks.",
    "Jun Wei Group": "Knowledge-graph reasoning and real-time LLM serving.",
    "Ziqing Li Group": "Hierarchical generative models for single-cell data.",
  };
  return (
    <main className="academic-page" id="top">
      <header className="academic-header">
        <h1>
          Hanning Lu <span>陆涵宁</span>
        </h1>
        <div className="header-links">
          <a
            href="https://scholar.google.com/citations?user=ZjRL5KUAAAAJ&hl=en"
            aria-label="Google Scholar"
            title="Google Scholar"
          >
            <Icons.googlescholar aria-hidden="true" />
          </a>
          <a
            href="https://github.com/lhnjames"
            aria-label="GitHub"
            title="GitHub"
          >
            <Icons.github aria-hidden="true" />
          </a>
          <a href="mailto:lhnjames@163.com" aria-label="Email" title="Email">
            <Icons.email aria-hidden="true" />
          </a>
          <a className="resume-link" href="/Hanning_Lu_CV.pdf" download>
            Resume
          </a>
          <a className="contact-link" href="mailto:lhnjames@163.com">
            Contact
          </a>
        </div>
      </header>
      <section className="intro" aria-label="About me">
        <div>
          <p>
            Hello! I am an undergraduate in the School of Computing at the{" "}
            <strong>University of Leeds</strong>, graduating in 2027.
          </p>
          <p>
            I work on <strong>ML Systems (MLSys)</strong> and{" "}
            <strong>AI Agents</strong>: making models run efficiently and
            building agents that use tools reliably.
          </p>
          <p>
            My work spans compiler optimization, efficient inference and agent
            workflows, including a first-author ICS 2026 workshop paper and
            manuscripts under submission.
          </p>
          <p className="phd-note">
            I am seeking direct-entry PhD opportunities starting in{" "}
            <strong>September 2027</strong>.
          </p>
        </div>
        <Image
          className="profile-photo"
          src="/hanning-lu.jpg"
          alt="Hanning Lu"
          width={1200}
          height={1800}
          priority
          unoptimized
        />
      </section>
      <section id="education">
        <h2>Education</h2>
        <div className="record-heading">
          <strong>University of Leeds</strong>
          <span className="date">2024–2027</span>
        </div>
        <p className="record-detail">
          BSc Computer Science · GPA 3.8/4.0 · Top 1%
        </p>
      </section>
      <section id="publications">
        <h2>Publications</h2>
        <ol className="papers">
          {orderedPapers.map((paper) => (
            <li key={paper.title} className="illustrated-work">
              <WorkIllustration
                name={paperArtwork[publications.indexOf(paper)]}
                alt={paper.title}
              />
              <div>
                {paper.href ? (
                  <a className="paper-title" href={paper.href}>
                    {paper.title}
                  </a>
                ) : (
                  <span className="paper-title">{paper.title}</span>
                )}
                <div className="paper-meta">{paper.venue}</div>
                <div className="work-links">
                  {paper.href && <a href={paper.href}>Paper</a>}
                  {paper === publications[0] && (
                    <a href="https://github.com/lhnjames/SAHG">Code</a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section id="internships">
        <h2>Internships</h2>
        <div className="records">
          {internships.map((item) => (
            <article key={item.organization} className="illustrated-work">
              <WorkIllustration
                name={item.organization === "Sheet0" ? "sheet" : "diffusion"}
                alt={`${item.organization} research illustration`}
              />
              <div>
                <div className="record-heading">
                  <strong>
                    <a href={item.href}>{item.organization}</a>
                  </strong>
                  <span className="date">{item.period}</span>
                </div>
                <p className="record-detail">{item.role}</p>
                <p>
                  {item.organization === "Sheet0"
                    ? "Multi-agent data workflows, fault tolerance and execution recovery."
                    : "SGLang diffusion serving, quantization and GPU optimization."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="research-experience">
        <h2>Research Experience</h2>
        <div className="records research-records">
          {groups.map((item) => (
            <article key={item.group} className="illustrated-work">
              <WorkIllustration
                name={projectDetails[item.group].artwork}
                alt={projectDetails[item.group].title}
              />
              <div>
                <div className="record-heading">
                  <h3 className="project-title">
                    {projectDetails[item.group].title}
                  </h3>
                  <span className="date">{item.period}</span>
                </div>
                <p className="record-detail">
                  {item.group} · {item.organization}
                </p>
                <p>{topics[item.group]}</p>
                {projectDetails[item.group].code && (
                  <div className="work-links">
                    <a href={projectDetails[item.group].code}>
                      {item.group === "Distributed Computing Group"
                        ? "Related code"
                        : item.group === "Bin Chong Group"
                          ? "SAHG code"
                          : "Code"}
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="honours">
        <h2>Honours</h2>
        <p>CCPC 2024 · Gold Medal · Team Captain</p>
        <p>ICPC Xi&apos;an Invitational · Silver Medal · Team Captain</p>
      </section>
      <footer>
        © 2026 Hanning Lu <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
