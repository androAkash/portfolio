export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  duration: string;
  instructor: string;
  platformOrFocus: string;
  badge: string;
}

export const educationData: EducationItem = {
  degree: "Bachelor of Commerce",
  institution: "University of Calcutta",
  location: "Kolkata, India",
  period: "2020 – 2023",
  grade: "GPA: 8.1 / 10.0",
  details: "Analytical foundation combined with intensive self-directed mobile software engineering and Kotlin development.",
};

export const certificationsList: CertificationItem[] = [
  {
    title: "Jetpack Compose Bootcamp",
    duration: "37 Hours",
    instructor: "Paulo Dichone",
    platformOrFocus: "Modern declarative UI, custom layouts, state handling & Compose animations",
    badge: "BOOTCAMP",
  },
  {
    title: "Modern Android App with REST API & Ktor",
    duration: "16.5 Hours",
    instructor: "Stefan Jovanovic",
    platformOrFocus: "Asynchronous backend networking, Ktor client, serialization & repository patterns",
    badge: "ADVANCED",
  },
  {
    title: "Android Development with Kotlin",
    duration: "17 Hours",
    instructor: "Michael Eramo",
    platformOrFocus: "Core Android SDK, lifecycle management, background threads & architectural design",
    badge: "CORE",
  },
];
