import Image from "next/image";
import { MapPin } from "lucide-react";
import { PaperSummary } from "@/components/paper-summary";
import { WorkIllustration } from "@/components/work-illustration";

import { Icons } from "@/components/icons";

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://lhnjames.github.io/#website",
      url: "https://lhnjames.github.io/",
      name: "Hanning Lu",
      publisher: { "@id": "https://lhnjames.github.io/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://lhnjames.github.io/#profile",
      url: "https://lhnjames.github.io/",
      name: "Hanning Lu",
      mainEntity: { "@id": "https://lhnjames.github.io/#person" },
      isPartOf: { "@id": "https://lhnjames.github.io/#website" },
    },
    {
      "@type": "Person",
      "@id": "https://lhnjames.github.io/#person",
      name: "Hanning Lu",
      alternateName: ["陆涵宁", "lhnjames"],
      givenName: "Hanning",
      familyName: "Lu",
      url: "https://lhnjames.github.io/",
      image: "https://lhnjames.github.io/hanning-lu.jpg",
      description:
        "Computer Science undergraduate and researcher at the University of Leeds working on ML systems, efficient inference, compiler optimization and AI agents.",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "University of Leeds",
        url: "https://www.leeds.ac.uk/",
      },
      homeLocation: { "@type": "Place", name: "Leeds, United Kingdom" },
      knowsAbout: [
        "Machine Learning Systems",
        "AI Agents",
        "Compiler Optimization",
        "Efficient LLM Inference",
        "Graph Machine Learning",
      ],
      sameAs: [
        "https://scholar.google.com/citations?user=ZjRL5KUAAAAJ&hl=en",
        "https://github.com/lhnjames",
      ],
    },
  ],
};

const internships = [
  {
    period: "Jun 2025 — Sep 2025",
    role: "AI Engineer Intern",
    organization: "Sheet0",
    href: "https://www.sheet0.com/",
    summary:
      "Designed and optimized multi-agent coordination to improve data-collection accuracy and runtime stability. Built configurable task-scheduling and execution workflows that strengthened fault tolerance and recovery in complex scenarios.",
  },
  {
    period: "Jun 2026 — Sep 2026",
    role: "Video Generation Infrastructure Engineer Intern",
    organization: "Xingjie Intelligence",
    href: "https://www.frame-x.ai/",
    summary:
      "Developed SGLang-based serving infrastructure for Wan-series diffusion models, combining tensor, pipeline and sequence parallelism with KV caching and block-wise autoregressive generation. Profiled GPU bottlenecks with Nsight and PyTorch Profiler, and evaluated quantization, CUDA Graph, kernel fusion, continuous batching and streaming inference across throughput, latency, memory use and scaling efficiency.",
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

const paperTldr = [
  "We propose SAHG, a sector-anisotropic hyperbolic graph model for detecting social bots by revealing anisotropic geometric signatures induced by semantic camouflage and coordinated behavior.",
  "VeriBot makes graph-based social bot detection auditable by constructing source-grounded evidence chains and abstaining when independently trained detector branches disagree.",
  "An agent-agnostic approach to end-to-end C/C++ application performance optimization.",
  "BotRoute keeps a graph detector as the default and selectively hands disagreement cases to complementary experts, using predicted utility and structural reliability to make more reliable social bot detection decisions.",
  "The Hyperbolic Sparse Autoencoder (HypSAE) framework embeds latent features into hyperbolic space to better capture hierarchical relationships in neural network concepts that standard Euclidean sparse autoencoders often fail to represent.",
  "HCGM introduces a hyperbolic code graph model that captures repository structure for better code retrieval and generation.",
  "An inline safety harness for finance LLM agents that monitors queries and tool calls during execution to block prompt-injection attacks while preserving legitimate workflows.",
  "A comprehensive overview of large-model quantization, comparing post-training quantization and quantization-aware training methods that reduce memory and computation costs while preserving accuracy.",
  "LLM cascades' revision rate and revision correctness are decoupled: prompt framing controls how often Stage 2 revises, but not whether those revisions help or hurt.",
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
      "Built a closed-loop compiler agent that plans, executes, profiles and revises optimization actions using runtime feedback and correctness checks, achieving a 2.25× geometric-mean speedup over -O3 on PolyBench. Improved LLVM IR decompilation accuracy from approximately 50% to over 90% through iterative LLM self-correction. This work includes a first-author ICS 2026 workshop paper and a co-first-author study separating revision propensity from revision reliability in LLM cascades.",
    "Bin Chong Group":
      "Developed adaptive hyperbolic graph models for social bot detection, improving Weibo accuracy from 89.0% to 91.5%. Post-trained Qwen3-0.6B with LoRA-SFT and Active-GRPO to support grounded reasoning, and built an auditable framework with evidence tracing and conflict-aware abstention. The work achieved 98.9% and 98.8% accuracy on Fox8-23 and BotSim-24 and includes first-author SAHG and VeriBot manuscripts under submission.",
    "Tong Yang Group":
      "Developed adaptive token retention across attention heads and decoding stages, achieving 70% KV-cache compression with approximately 1% performance loss on Llama-2-7B / LongBench. Explored quantization, pruning and sparse-weight inference for lower-memory, lower-latency deployment, contributing to a model-quantization survey. Also built a context-aware retrieval and controlled-generation pipeline.",
    "Menglin Yang Group":
      "Studied recurrent computation in frozen LLMs and identified high local redundancy and rapid output saturation. Across diverse tasks and experimental settings, deeper frozen loops produced no stable gains beyond noise. The findings point to learned, task-aligned updates as the key to effective recurrent computation.",
    "Zhijie Deng Group":
      "Contributed to TPS-Bench, an MCP-based benchmark and agent framework for task decomposition, tool selection and coordinated multi-step execution. Improved planning reliability and fault recovery through adaptive tool reselection, execution scheduling and aggregation of intermediate results. The implementation is available on GitHub.",
    "Jun Wei Group":
      "Built multi-hop knowledge-graph reasoning for complex question answering using structured graph traversal and cross-node evidence aggregation. Integrated LLM inference, incremental generation, streaming text-to-speech and audio delivery into an end-to-end pipeline for low-latency voice interaction.",
    "Ziqing Li Group":
      "Developed hierarchical generative models for single-cell data, achieving a Core4 score of 0.966 in fate-tree reconstruction at 42,000 cells with stable scaling. Recovered ground-truth lineage structure in C. elegans with temporal fidelity above 0.95. The model outperformed the evaluated generative baselines, reaching 93.5% diversity and an FID of 10.4; a manuscript is in preparation.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="academic-page" id="top">
        <header className="academic-header">
          <div>
            <h1>
              Hanning Lu <span>陆涵宁</span>
            </h1>
            <p className="profile-location">
              <MapPin aria-hidden="true" size={14} /> Leeds, UK
            </p>
          </div>
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
                    <PaperSummary
                      title={paper.title}
                      text={paperTldr[publications.indexOf(paper)]}
                    />
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
                  <p>{item.summary}</p>
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
                    {item.role} · {item.group} · {item.organization}
                  </p>
                  <p>{topics[item.group]}</p>
                  {projectDetails[item.group].code && (
                    <div className="work-links">
                      <a href={projectDetails[item.group].code}>Code</a>
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
    </>
  );
}
