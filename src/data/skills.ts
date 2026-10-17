export interface Skill {
  name: string;
  icon: string;
  category: string;
}

const skillIcons = {
  // Programming Languages
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  r: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
  ruby: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  swift: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
  
  // Frameworks & Libraries
  pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  keras: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  selenium: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  scikitlearn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  springboot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  
  // Tools & Technologies
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  gcp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  excel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  sqlite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  mssql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  trello: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  kafka: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  duckdb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/duckdb/duckdb-original.svg",
  bigquery: "https://cdn.simpleicons.org/googlebigquery/669DF6",
  snowflake: "https://cdn.simpleicons.org/snowflake/29B5E8",
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", icon: skillIcons.python, category: "Programming Languages" },
  { name: "Java", icon: skillIcons.java, category: "Programming Languages" },
  { name: "SQL", icon: skillIcons.sql, category: "Programming Languages" },
  { name: "Go", icon: skillIcons.go, category: "Programming Languages" },
  { name: "HTML", icon: skillIcons.html, category: "Programming Languages" },
  { name: "CSS", icon: skillIcons.css, category: "Programming Languages" },
  { name: "JavaScript", icon: skillIcons.javascript, category: "Programming Languages" },
  { name: "TypeScript", icon: skillIcons.typescript, category: "Programming Languages" },
  { name: "C", icon: skillIcons.c, category: "Programming Languages" },
  { name: "C++", icon: skillIcons.cpp, category: "Programming Languages" },
  { name: "Swift", icon: skillIcons.swift, category: "Programming Languages" },
  { name: "R", icon: skillIcons.r, category: "Programming Languages" },
  { name: "Ruby", icon: skillIcons.ruby, category: "Programming Languages" },
  
  // Frameworks & Libraries
  { name: "PyTorch", icon: skillIcons.pytorch, category: "Frameworks & Libraries" },
  { name: "TensorFlow", icon: skillIcons.tensorflow, category: "Frameworks & Libraries" },
  { name: "Keras", icon: skillIcons.keras, category: "Frameworks & Libraries" },
  { name: "Pandas", icon: skillIcons.pandas, category: "Frameworks & Libraries" },
  { name: "NumPy", icon: skillIcons.numpy, category: "Frameworks & Libraries" },
  { name: "Flask", icon: skillIcons.flask, category: "Frameworks & Libraries" },
  { name: "React", icon: skillIcons.react, category: "Frameworks & Libraries" },
  { name: "Django", icon: skillIcons.django, category: "Frameworks & Libraries" },
  { name: "Next.js", icon: skillIcons.nextjs, category: "Frameworks & Libraries" },
  { name: "Express", icon: skillIcons.express, category: "Frameworks & Libraries" },
  { name: "OpenCV", icon: skillIcons.opencv, category: "Frameworks & Libraries" },
  { name: "Node.js", icon: skillIcons.nodejs, category: "Frameworks & Libraries" },
  { name: "Tailwind", icon: skillIcons.tailwind, category: "Frameworks & Libraries" },
  { name: "Matplotlib", icon: skillIcons.matplotlib, category: "Frameworks & Libraries" },
  { name: "Selenium", icon: skillIcons.selenium, category: "Frameworks & Libraries" },
  { name: "Scikit-learn", icon: skillIcons.scikitlearn, category: "Frameworks & Libraries" },
  { name: "Spring Boot", icon: skillIcons.springboot, category: "Frameworks & Libraries" },
  
  // Tools & Technologies
  { name: "Git", icon: skillIcons.git, category: "Tools & Technologies" },
  { name: "Azure", icon: skillIcons.azure, category: "Tools & Technologies" },
  { name: "AWS", icon: skillIcons.aws, category: "Tools & Technologies" },
  { name: "Google Cloud", icon: skillIcons.gcp, category: "Tools & Technologies" },
  { name: "MySQL", icon: skillIcons.mysql, category: "Tools & Technologies" },
  { name: "Firebase", icon: skillIcons.firebase, category: "Tools & Technologies" },
  { name: "Excel", icon: skillIcons.excel, category: "Tools & Technologies" },
  { name: "Supabase", icon: skillIcons.supabase, category: "Tools & Technologies" },
  { name: "PostgreSQL", icon: skillIcons.postgres, category: "Tools & Technologies" },
  { name: "SQLite", icon: skillIcons.sqlite, category: "Tools & Technologies" },
  { name: "FastAPI", icon: skillIcons.fastapi, category: "Tools & Technologies" },
  { name: "Microsoft SQL Server", icon: skillIcons.mssql, category: "Tools & Technologies" },
  { name: "MongoDB", icon: skillIcons.mongodb, category: "Tools & Technologies" },
  { name: "Trello", icon: skillIcons.trello, category: "Tools & Technologies" },
  { name: "Jira", icon: skillIcons.jira, category: "Tools & Technologies" },
  { name: "Docker", icon: skillIcons.docker, category: "Tools & Technologies" },
  { name: "Kubernetes", icon: skillIcons.kubernetes, category: "Tools & Technologies" },
  { name: "Redis", icon: skillIcons.redis, category: "Tools & Technologies" },
  { name: "Apache Kafka", icon: skillIcons.kafka, category: "Tools & Technologies" },
  { name: "Postman", icon: skillIcons.postman, category: "Tools & Technologies" },
  { name: "Grafana", icon: skillIcons.grafana, category: "Tools & Technologies" },
  { name: "BigQuery", icon: skillIcons.bigquery, category: "Tools & Technologies" },
  { name: "DuckDB", icon: skillIcons.duckdb, category: "Tools & Technologies" },
  { name: "Snowflake", icon: skillIcons.snowflake, category: "Tools & Technologies" }
];

// Skills grouped by category, in the order the categories first appear
export const groupedSkills = skills.reduce((acc, skill) => {
  (acc[skill.category] ??= []).push(skill);
  return acc;
}, {} as Record<string, Skill[]>);
