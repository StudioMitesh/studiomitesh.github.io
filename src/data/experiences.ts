export interface Experience {
  company: string;
  title: string;
  location: string;
  date: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "PayPal",
    title: "Software Engineer Intern (Payment Compliance Platform)",
    location: "San Jose, CA",
    date: "May 2026 - August 2026",
    description: [
      "Built a Python pipeline ingesting 40M+ daily compliance events from BigQuery into DuckDB, mapping transaction variants to compliance decisions at zero added infra cost, fully automated via scheduled notebook",
      "Developed a Java Spring Boot Daemon listener consuming real-time compliance logs off a Kafka topic in the QA environment, replicating extraction logic to catalog Functional Test (FT) structure and surface coverage analytics",
      "Designed a skills-guided AI agent managing 5,000+ FTs, auto-generating new tests and answering natural-language queries on variant flows to close compliance test coverage gaps"
    ]
  },
  {
    company: "Snowflake",
    title: "Software Engineer Intern (AI/ML)",
    location: "Menlo Park, CA",
    date: "January 2026 - April 2026",
    description: [
      "Architected an end-to-end agentic AI workflow for creation, evaluation, and optimization of custom Snowflake Cortex AI Functions, enabling conversational function generation for 80% of new production-scale use cases",
      "Drove average 10%+ accuracy improvements over Snowflake built-in and SOTA benchmarks via synthetic data generation, QA testing pipelines, prompt optimization using GEPA, and Python/SQL code generation",
      "Built async/parallelized UDF and stored procedure workflows with AI function versioning and Python-based custom metric definitions, cutting pipeline latency by ~50% on large-scale Snowflake datasets"
    ]
  },
  {
    company: "United Parcel Service (Roadie Inc.)",
    title: "Software Engineering Intern",
    location: "Atlanta, GA",
    date: "May 2025 - December 2025",
    description: [
      "Roadie is a crowdsourced delivery platform and UPS subsidiary handling 200k+ daily shipments across the U.S.",
      "Engineered a Golang backend service for the fastest-growing UPS branch, RoadieXD/MI, to optimize temporal and capacity-based delivery allocation, scaling throughput from 100K to 400K+ daily shipments for 30+ clients",
      "Refactored logistics microservices' REST API calls to a PostgreSQL backend using Kafka messaging and Redis caching, reducing latency by 500ms/request and tripling delivery planning efficiency"
    ]
  },
  {
    company: "Georgia Tech Memory Systems Lab",
    title: "Research Intern under Professor M. Qureshi - NeuraQED: Quantum Error Correction via Simulated NNs",
    location: "Atlanta, GA",
    date: "August 2023 - April 2024",
    description: [
      "Researched a novel algorithm for quantum error correction using hybrid neural network/AI model & activation function through quantum circuit code simulation to improve computing accuracy by 6% decrease in logical error rate",
      "Developed new superposed activation function (NeurA) for adaptability to noisy codes by 40% decrease in physical error rate",
      "Received alternate bid to present at National Junior Science & Humanities Symposium (6/60 in GA) for presentation + paper"
    ]
  }
];
