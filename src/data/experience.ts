export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string; // Remote / Onsite / Contract
  period: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
}

export const experienceList: ExperienceItem[] = [
  {
    id: "iiprof",
    company: "IIPROF Consultancy Limited",
    role: "Freelance Mobile Application Developer",
    type: "Remote",
    period: "2026 – Present",
    current: true,
    highlights: [
      "Currently developing an Android application for a multi-role platform connecting users across different service and donation workflows.",
      "Working with role-based workflows for Brokers, Customers, Donors/Donees, IT Professionals, Donation Givers/Receivers, Admin, and Super Admin users.",
      "Integrating the Razorpay Payment Gateway to support secure in-app payment workflows and transaction handling.",
      "Working with existing backend APIs and collaborating with the backend team to integrate application workflows and validate end-to-end functionality.",
      "Implementing and refining application architecture, navigation, API integration, and role-based functionality using Kotlin and Jetpack Compose.",
    ],
    skills: ["Kotlin", "Jetpack Compose", "REST APIs", "Razorpay", "Android SDK", "Git"],
  },
  {
    id: "score-info",
    company: "Score Information and Technologies",
    role: "Mobile Application Developer",
    type: "Onsite",
    period: "Mar 2026 – Aug 2026",
    highlights: [
      "Worked on a Kotlin Multiplatform (KMP) based Solar Cleaning Management System, developing shared business logic and application workflows within the KMP project.",
      "Engineered role-based workflows for three primary user types: Admin, Customer/User, and Mechanic, with different permissions and operational flows for each role.",
      "Implemented and integrated business workflows for managing solar cleaning operations, including job assignment, mechanic activities, and operational status tracking.",
      "Collaborated with backend and QA teams for API integration, feature development, workflow validation, and debugging of the KMP application.",
      "Maintained and enhanced legacy Android applications built with XML, MVC, SQLite, and traditional Android components across multiple product versions.",
      "Worked on ERP-based applications covering modules such as employee attendance, machine production, and operational data management.",
      "Implemented feature enhancements and bug fixes across existing application versions while maintaining compatibility with established legacy codebases.",
    ],
    skills: ["Kotlin Multiplatform (KMP)", "Kotlin", "Android SDK", "XML", "MVC", "SQLite", "Eclipse", "Servlet", "REST APIs"],
  },
  {
    id: "xellier-full",
    company: "Xellier Network Solutions",
    role: "Mobile Application Developer",
    type: "Remote",
    period: "Aug 2023 – Mar 2026",
    highlights: [
      "Developed, enhanced, and maintained Android applications using Kotlin and Jetpack Compose, implementing modern and scalable UI components.",
      "Implemented a Campaign Management system utilizing Jetpack Compose for the frontend and AWS Amplify DataStore for robust backend synchronization.",
      "Developed a time-based filtering system for footfall charts, aggregating hourly event data into dynamic daily, weekly, and monthly views.",
      "Built a custom video player with frame scrubbing, ExoPlayer enhancements, gesture controls, and optimized buffering for low-latency playback.",
      "Collaborated closely with UI/UX designers to ship responsive, animation-rich interfaces such as carousel feeds, charts, and dynamic dashboards.",
      "Integrated GraphQL APIs with efficient pagination, reducing load times and improving data handling for real-time screens.",
      "Implemented in-app updates, nested navigation, push notifications, and lifecycle-aware state management.",
      "Worked with Clean Architecture + MVVM ensuring testability, maintainability, and modular feature development.",
      "Contributed to the iOS app using SwiftUI, improving UI responsiveness and assisting with network integrations.",
    ],
    skills: ["Kotlin", "Jetpack Compose", "Coroutines", "Flow", "GraphQL", "ExoPlayer", "Firebase", "Room DB", "AWS Amplify", "Git", "SwiftUI"],
  },
  {
    id: "xellier-intern",
    company: "Xellier Network Solutions",
    role: "Android Developer Intern",
    type: "Remote",
    period: "Mar 2023 – Aug 2023",
    highlights: [
      "Successfully migrated large legacy XML-based UI components to Jetpack Compose, improving maintainability and reducing UI boilerplate.",
      "Contributed to refactoring legacy code into MVVM architecture, enabling better state management and cleaner UI logic.",
      "Collaborated with senior developers to implement responsive UI layouts and optimize rendering performance.",
    ],
    skills: ["Kotlin", "Jetpack Compose", "XML", "MVVM", "Git"],
  },
];
