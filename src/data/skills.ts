export interface SkillCategory {
  title: string;
  code: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    code: "01",
    skills: ["Kotlin", "Swift"],
  },
  {
    title: "Android Ecosystem",
    code: "02",
    skills: [
      "Jetpack Compose",
      "Android SDK",
      "Coroutines & Flow",
      "ExoPlayer",
      "Navigation 3",
      "Material 3",
      "Room DB",
      "StateFlow / SharedFlow",
      "XML Views",
    ],
  },
  {
    title: "Architecture & Design",
    code: "03",
    skills: [
      "Clean Architecture",
      "MVVM (Model-View-ViewModel)",
      "MVI (Model-View-Intent)",
      "MVC",
      "Unidirectional Data Flow",
      "Modularization",
    ],
  },
  {
    title: "Networking & APIs",
    code: "04",
    skills: ["GraphQL", "REST APIs", "Ktor", "Retrofit", "WebSockets"],
  },
  {
    title: "Tools & Cloud Platforms",
    code: "05",
    skills: [
      "Git & GitHub",
      "Android Studio",
      "Firebase",
      "AWS Amplify DataStore",
      "CI/CD Pipelines",
      "Razorpay Gateway",
      "Eclipse",
    ],
  },
  {
    title: "Multiplatform & System Features",
    code: "06",
    skills: [
      "Kotlin Multiplatform (KMP)",
      "SwiftUI (iOS Interop)",
      "In-App Updates",
      "Push Notifications",
      "LiveView",
      "Play Store Publishing",
    ],
  },
];
