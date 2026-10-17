import kneetech from "../assets/kneetech.png";
import musicai from "../assets/musicai.png";
import lore from "../assets/lore.png";
import swolemate from "../assets/swolemate.png";
import neuraqed from "../assets/neuraqed.png";
import accidentpred from "../assets/accidentpred.png";
import familytree from "../assets/familytree.svg";
import breast from "../assets/breastcancer.jpg";
import march from "../assets/marchmadness.png";
import ledger from "../assets/ledger.png";
import nba from "../assets/nbashot.png";
import foodie from "../assets/foodie.png";
import nibble from "../assets/nibble.png";
import breakthesilence from "../assets/breakthesilence.jpeg";
import energy from "../assets/energyefficiency.png";

export type ProjectTag = "AI/ML" | "Full-stack" | "Hardware" | "Research" | "Data" | "Hackathon";
export type ProjectTier = "featured" | "more" | "older";

export interface Project {
  title: string;
  description: string;
  image: string;
  tier: ProjectTier;
  tags: ProjectTag[];
  stack: string[];
  /** "In progress" | "Live"; omitted for finished projects */
  status?: string;
  /** Extra badges, e.g. awards or programs */
  badges?: string[];
  role?: string;
  link?: string;
  linkLabel?: string;
  github?: string;
  /** Screenshots of tall apps look better cropped from the top */
  cover?: boolean;
}

// Array order is display order within each tier.
export const projects: Project[] = [
  // ---- Featured ----
  {
    title: "KneeTech: Smart Knee Compression Sleeve",
    description:
      "A smart knee compression sleeve with dual IMUs that measures knee flexion and gait in real time and streams it to a dashboard for physical therapists, giving clinicians objective recovery data between visits.",
    image: kneetech,
    tier: "featured",
    tags: ["Hardware", "Data"],
    stack: ["C++", "nRF52840", "BLE", "Python", "Dash"],
    status: "In progress",
    badges: ["Georgia Tech Create-X"],
    role: "Co-founder",
    cover: true,
  },
  {
    title: "Cadence: AI Music Co-Producer",
    description:
      "Hum or sing an idea and Cadence turns it into MIDI, finds the key, and builds chords, bass, and drums around it. Deterministic code does all the music theory, and AI explains every choice with step-by-step DAW instructions.",
    image: musicai,
    tier: "featured",
    tags: ["AI/ML", "Full-stack"],
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Claude"],
    status: "In development",
    cover: true,
  },
  {
    title: "Lore + Lora: Travel Mapping & AI Travel Agent",
    description:
      "Lore is a map-based travel journal and memory vault for tracking everywhere you've been. Lora is its AI travel agent: it plans trips, searches flights and hotels, watches prices, and coordinates group travel across multiple origins.",
    image: lore,
    tier: "featured",
    tags: ["Full-stack", "AI/ML"],
    stack: ["React", "TypeScript", "Firebase", "Google Maps API", "Gemini"],
    status: "Live",
    badges: ["200+ early users"],
    link: "https://loremaps.netlify.app/",
    github: "https://github.com/StudioMitesh/lore",
  },
  {
    title: "SwoleMate: Your AI Fitness Companion",
    description:
      "A fitness app that tracks workouts and gives real-time form feedback from live camera input, with personalized coaching powered by a custom LSTM model and Gemini.",
    image: swolemate,
    tier: "featured",
    tags: ["AI/ML", "Full-stack", "Hackathon"],
    stack: ["Python", "TensorFlow", "OpenCV", "Gemini", "React Native"],
    status: "In progress",
    badges: ["UGAHacks X Award"],
    link: "https://devpost.com/software/swolemate-r2lug9",
    github: "https://github.com/rudrasingh500/swolemate2",
  },

  // ---- More projects: research first, then by impact ----
  {
    title: "NeuraQED: Quantum Error Correction",
    description:
      "A neural network based approach to correcting errors in low-level, low-depth quantum computers using sequence matching and novel quantum-based activation function.",
    image: neuraqed,
    tier: "more",
    tags: ["Research", "AI/ML"],
    stack: ["Python", "Neural Networks", "Quantum Simulation"],
    badges: ["Georgia Tech Research"],
    link: "https://docs.google.com/presentation/d/e/2PACX-1vTcCRLY4frV-h2hEd2er7iCXF3XIB6K5sq1rDhEMfaEDaatCjkmc14PsbFGa1AlRMT878_1OPG7wqcY/pub?start=false&loop=false&delayms=15000",
  },
  {
    title: "CS 4641 ML Project: Traffic Accident Injury Prediction",
    description:
      "A machine learning class (Georgia Tech CS 4641) project that predicts the likelihood/severity of injury in traffic accidents based on various features like weather, time of day, and road conditions.",
    image: accidentpred,
    tier: "more",
    tags: ["Research", "AI/ML", "Data"],
    stack: ["Python", "scikit-learn", "pandas"],
    link: "https://github.gatech.edu/pages/mshah402/ml-group-50/",
  },
  {
    title: "Lodaya Family Tree",
    description:
      "An interactive, zoomable family tree for the Lodaya family, with private logins so relatives can explore and help build our shared history.",
    image: familytree,
    tier: "more",
    tags: ["Full-stack"],
    stack: ["Next.js", "React", "TypeScript"],
    status: "In progress",
    link: "https://tree.lodayafamily.com/",
    linkLabel: "Visit (family login)",
  },
  {
    title: "Predictive Vision Analysis of Breast Cancer Cells",
    description:
      "A data science and computer vision project that explored aggregating data from breast cancer cells to expedite diagnoses and improve quick treatment.",
    image: breast,
    tier: "more",
    tags: ["Research", "Data", "AI/ML"],
    stack: ["Python", "Computer Vision", "pandas"],
    github: "https://github.com/StudioMitesh/GSMSTTSADataScience24",
  },
  {
    title: "March Madness Tournament Simulator",
    description:
      "A prediction app that simulates the NCAA tournament game by game from historical trends, team performance, and conference-wide stats. Rebuilt for 2026 on top of the 2025 model.",
    image: march,
    tier: "more",
    tags: ["Data"],
    stack: ["Python", "Jupyter", "pandas"],
    github: "https://github.com/StudioMitesh/march-madness-2026",
  },
  {
    title: "Ledger: Miles-Aware Flight Explorer",
    description:
      "A map-first flight explorer that shows where your budget and miles go furthest, with cash-vs-miles deal verdicts, price alerts, and a log of every trip you've taken.",
    image: ledger,
    tier: "more",
    tags: ["Full-stack"],
    stack: ["Next.js", "TypeScript", "Firebase", "MapLibre", "Redis"],
    status: "In progress",
    cover: true,
  },
  {
    title: "NBA Shot Efficiency Classifier",
    description:
      "A data science project that classifies shot selection efficiency of NBA players based on their stats and shot chart data, helping evaluate effectiveness for fantasy basketball and sports betting.",
    image: nba,
    tier: "more",
    tags: ["Data", "AI/ML"],
    stack: ["Python", "pandas", "scikit-learn", "Plotly"],
    github: "https://github.com/leozheng829/NBA_-ShotEfficiency",
  },
  {
    title: "BiggieBack Foodie: AI Recipe Maker and Search Engine",
    description:
      "A web app that uses AI to generate recipes and search for existing recipes given a picture of ingredients, built with AI in a 4-hour hackathon.",
    image: foodie,
    tier: "more",
    tags: ["AI/ML", "Full-stack", "Hackathon"],
    stack: ["TypeScript", "React", "Vercel"],
    link: "https://hackday-foodie.vercel.app/",
    github: "https://github.com/StudioMitesh/hackday-foodie",
  },

  // ---- Older ----
  {
    title: "Nibble",
    description:
      "A web and mobile app connecting street vendors to customers, helping them build their brands. Currently being further developed and expanded.",
    image: nibble,
    tier: "older",
    tags: ["Full-stack"],
    stack: ["Web", "Mobile"],
    link: "https://nibble-a1.netlify.app/",
  },
  {
    title: "Break the Silence",
    description:
      "A gesture-recognition app that helps facilitate nonverbal communication through computer vision and LLM-integrated conversations.",
    image: breakthesilence,
    tier: "older",
    tags: ["AI/ML", "Hackathon"],
    stack: ["Python", "Computer Vision", "LLM"],
    link: "https://devpost.com/software/break-the-silence-76okpu",
    github: "https://github.com/StudioMitesh/breakthesilence",
  },
  {
    title: "Energy Efficiency Scorer Tool",
    description:
      "A data science and machine learning app that helps buildings improve energy efficiency through decision tree classifiers of building energy data.",
    image: energy,
    tier: "older",
    tags: ["Data", "AI/ML"],
    stack: ["Python", "scikit-learn"],
    github: "https://github.com/StudioMitesh/LA-Energy-Efficiency-py",
  },
];
