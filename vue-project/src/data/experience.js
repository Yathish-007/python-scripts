// src/data/experience.js

// Import the logos from your assets folder
import schwarzLogo from '@/assets/Schwarz-Gruppe_logo.svg.png';
import sabreLogo from '@/assets/Sabre_Corporation_logo.svg.png';
// Import new logos - make sure to add these files to your assets/logos folder
import nsdcLogo from '@/assets/training-skill.jpg'; 
import roomanLogo from '@/assets/Rooman-Logo-scaled.png';

export const experiences = [
  {
    role: "Gen AI and NLP Developer (Working Student)",
    company: "Schwarz IT | Heilbron, Germany",
    period: "Feb 2025 - Present",
    description: [
      "Developed advanced uncertainty metrics to evaluate and benchmark AI model reliability.",
      "Benchmarked LLMs for conversational QA using context retrieval and cosine similarity.",
      "Designed and deployed a real-time bias detection tool for large language models.",
    ],
    logo: schwarzLogo
  },
  {
    role: "Software Developer II",
    company: "Sabre Corporation | Bangalore, India",
    period: "Jun 2023 - Feb 2024",
    description: [
      "Designed and deployed an HR chatbot to streamline employee support using Google PALM AI.",
      "Developed 'SynthDataCraft' to generate high-quality synthetic data using GANs.",
      "Innovated a data solution using GANs to produce synthetic data that mimics real production data.",
    ],
    logo: sabreLogo
  },
  {
    role: "Associate Software Developer",
    company: "Sabre Corporation | Bangalore, India",
    period: "Jul 2020 - Jun 2023",
    description: [
      "Developed 'HRQueryBot,' an AI-driven system using Dolly 2.0.",
      "Built 'MQBOT,' streamlining queue management in middleware environments.",
      "Modernized legacy script management by migrating to Python and integrating OpenDJ LDAP protocols.",
    ],
    logo: sabreLogo
  },
  // New experiences added below
  {
    role: "Junior Software Developer",
    company: "National Skill Development Corporation",
    period: "Jun 2019 - Sep 2019",
    description: [
      "Assisted in the development and maintenance of web-based applications using JavaScript.",
      "Collaborated with the development team to implement front-end features and perform testing.",
      "Gained hands-on experience in the software development lifecycle, including coding and debugging.",
    ],
    logo: nsdcLogo
  },
  {
    role: "Frontend Developer",
    company: "Rooman Technologies",
    period: "May 2019 - Jun 2019",
    description: [
      "Developed and implemented interactive front-end components using JavaScript.",
      "Assisted in designing responsive UI elements and troubleshooting front-end issues.",
      "Worked closely with senior developers to understand best practices in web development.",
    ],
    logo: roomanLogo
  },
];
