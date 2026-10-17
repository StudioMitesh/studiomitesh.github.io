export interface Organization {
  title: string;
  role: string;
  date?: string;
  description: string[];
}

export const organizations: Organization[] = [
  {
    title: "HexLabs Inc.",
    role: "Co-Director of Operations",
    date: "November 2024 - Present",
    description: [
      "Directed end-to-end operations at HackGT13, the Southeast's largest collegiate hackathon, for 1,400+ attendees",
      "Led a 20-person operations team managing a $100K budget, coordinating logistics with 25+ sponsors/vendors"
    ]
  },
  {
    title: "Grand Challenges Living Learning Community at Georgia Tech",
    role: "Community Member",
    date: "August 2024 - May 2025",
    description: [
      "Selected as one of 240 students to build and learn through the design process",
      "Building a better, cheaper alternative to white and smart canes for improved navigational independence and mobility for blind people"
    ]
  },
  {
    title: "Georgia Tech Office of Competitive Sports",
    role: "Intramural Official",
    date: "August 2024 - August 2025",
    description: [
      "Officiate for sports like soccer, volleyball, flag football, basketball",
      "Help facilitate smooth communication across the sports and within the organization"
    ]
  },
  {
    title: "Data Science @ Georgia Tech",
    role: "Sports Analytics Team Project Lead, Outreach Team Member",
    date: "August 2024 - May 2025",
    description: [
      "Lead creation of app to model NBA shot selection efficiency based on advanced metrics/shot chart data to provide a player's efficiency value per dollar for NBA fantasy decision-making using frameworks like Pandas, Seaborn, Scikit-Learn, & Plotly",
      "Gained expertise in web scraping, ML, & full-stack development through stakeholder research and collaboration on outreach"
    ]
  },
  {
    title: "Georgia Tech VIP - Interactive Music Group Team",
    role: "Team Member",
    date: "January 2025 - May 2025",
    description: [
      "Building a virtual reality experience called Wings of Change for a zoo exhibit",
      "Leverages climate data and sonification techniques to create an interactive game-based experience",
      "Visualizes and sonifies the impacts of climate change through bird-like simulation game for children, teens, and young adults"
    ]
  },
  {
    title: "HackGwinnett",
    role: "Co-President",
    date: "August 2021 - April 2024",
    description: [
      "Organized/hosted student-led annual HackGwinnett hackathon (300+ attendees) & HackFest/STEM nights (100+ K-5 students)",
      "Secured $3000+ in event sponsorship, pioneered 8-hr HS hackathon format, & helped create Bogey: Hackathon scoring app",
      "Led weekly & hackathon workshops on beginner ML (classification and regression), JS development, CV, & Firebase databases"
    ]
  },
  {
    title: "SHAD Calgary 2023 Network",
    role: "Fellow",
    date: "Summer 2023",
    description: [
      "Selected as one of 64 students to attend a 4-week summer research and entrepreneurial design development program at the University of Calgary"
    ]
  },
  {
    title: "Boy Scouts Troop 846",
    role: "Eagle Scout of America",
    date: "2017 - 2024",
    description: [
      "Achieved highest rank in Boy Scouts of America"
    ]
  }
];
