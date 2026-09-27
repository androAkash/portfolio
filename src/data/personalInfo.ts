export interface PersonalInfo {
  name: string;
  role: string;
  specialty: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  experienceYears: string;
  socials: {
    github: string;
    linkedin: string;
    emailMailto: string;
  };
  resumeUrl: string;
  navLinks: Array<{ label: string; href: string }>;
}

export const personalInfo: PersonalInfo = {
  name: "Akash Bhattacharya",
  role: "Android Developer",
  specialty: "Kotlin & Jetpack Compose",
  tagline: "Engineering high-performance Android applications, video playback systems, and modern reactive architectures with Kotlin & Jetpack Compose.",
  summary: "Mobile Application Developer with 3 years of experience specializing in Android development using Kotlin, Jetpack Compose, and modern architecture patterns (MVVM, Clean Architecture). Strong contributor to high-performance UI, real-time features, video playback systems, and scalable API integrations. Experienced in collaborating with cross-functional teams, writing maintainable code, and delivering optimized, user-centric mobile apps.",
  location: "Howrah, West Bengal, India",
  email: "akashbhattacharyak1314@gmail.com",
  phone: "+91 8240285810",
  availability: "Available for Full-time & High-Impact Contracts",
  experienceYears: "3+ Years",
  socials: {
    github: "https://github.com/androAkash",
    linkedin: "https://www.linkedin.com/in/akash-bhattacharya-b343bb1aa/",
    emailMailto: "mailto:akashbhattacharyak1314@gmail.com",
  },
  resumeUrl: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/resume.pdf`,
  navLinks: [
    { label: "// 01. projects", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/projects` },
    { label: "// 02. experience", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/experience` },
    { label: "// 03. skills", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/skills` },
    { label: "// 04. education", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/education` },
    { label: "// 05. contact", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/contact` },
  ],
};
