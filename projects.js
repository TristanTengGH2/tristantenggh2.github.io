// Edit this file to add or change projects.
// image: path like "assets/copypanda.png" (16:9 works best). If empty, a gradient placeholder is used.
// video: a YouTube embed URL (optional).
const PROJECTS = [
  {
    title: "A Cat's Journey Home",
    year: "2026",
    tags: "Unity · C# · 2D platformer · Course project (AET 311)",
    bullets: [
      "Free pixel-art 2D platformer where a young cat searches for his lost mother, moving from underground areas to the surface and getting past obstacles.",
      "Solo project: I developed the entire game myself, including all of the art.",
      "Released on itch.io as a browser (HTML5) build and a Windows download."
    ],
    image: "assets/cats-journey-home.png",
    video: "https://www.youtube.com/embed/v3XwgKEPirU",
    links: [
      { label: "Play on itch.io", url: "https://tristanteng.itch.io/a-cats-journey-home" },
      { label: "Source", url: "https://github.com/TristanTengGH/2dplatformer" }
    ]
  },
  {
    title: "Scale the Cove",
    year: "2026",
    tags: "Unity · C# · 3D platformer",
    bullets: [
      "Free 3D platformer built in Unity, with custom terrain, animations, prefabs and scripts.",
      "Solo project: I developed the entire game myself, including all of the art.",
      "Released on itch.io as a browser (HTML5) build and a Windows download."
    ],
    image: "assets/scale-the-cove.jpg",
    video: "",
    links: [
      { label: "Play on itch.io", url: "https://tristanteng.itch.io/scale-the-cove" },
      { label: "Source", url: "https://github.com/TristanTengGH/3dplatformer" }
    ]
  },
  {
    title: "Creeper Cataclysm",
    year: "2023–2025",
    tags: "Java · Minecraft plugin · Team project",
    bullets: [
      "Team-based Minecraft minigame plugin with a queue and lobby system, map zones, capture progress, team statues, a gold shop and a grappling hook.",
      "Built with Java, ProtocolLib and WorldEdit, and updated to Minecraft 1.21.5."
    ],
    image: "",
    video: "",
    links: [{ label: "Source", url: "https://github.com/TristanTengGH2/CreeperCataclysm" }]
  },
  {
    title: "Weather in Class",
    year: "Sep–Oct 2026",
    tags: "HTML/CSS · JavaScript · Live weather data · Course project",
    bullets: [
      "Browser-based app for a college-focused clothing brand brief: a character whose outfit, weather icons, recommendation and reminders (umbrella, sunscreen, hydration) all come from the weather forecast.",
      "Deployed on GitHub Pages."
    ],
    image: "assets/weather-in-class.png",
    video: "",
    links: [
      { label: "Open app", url: "https://tristantenggh2.github.io/Project3-WeatherInClass/" },
      { label: "Source", url: "https://github.com/TristanTengGH2/Project3-WeatherInClass" }
    ]
  },
  {
    title: "CopyPanda",
    year: "2026–present",
    tags: "HTML/CSS · JavaScript · Godot · Personal project",
    bullets: [
      "Hand-coded the original timer and core study functions; directed AI-assisted integration and refinement into a hosted web app and a Windows Godot overlay alpha.",
      "Defined effort-based rewards and goals that preserve progress after missed days, and shaped QR-code group invitations that avoid requiring location services.",
      "Directed AI-generated artwork and interface revisions; manually tested the app and gathered multiple peer reviews to guide iteration."
    ],
    image: "assets/copypanda.webp",
    video: "",
    links: [
      { label: "Open app", url: "https://tristantenggh2.github.io/CopyPanda-web/" },
      { label: "Source", url: "https://github.com/TristanTengGH2/CopyPanda" }
    ]
  },
  {
    title: "Handshape: ASL Workspace",
    year: "Nov 2026–present · In development",
    tags: "TypeScript · Python · MediaPipe · Vite · Course project",
    bullets: [
      "Conceived an ASL sign-lookup and learning tool; directed AI-generated code and artwork, prioritizing local webcam processing, privacy and clear recognition limits.",
      "Ran real-camera tests on personal devices and compared tracking approaches by frame rate, latency and visible hand lag.",
      "Guided offline recognition feasibility work with Python and MediaPipe and gathered peer feedback on prototypes. Browser recognition is still in development."
    ],
    image: "assets/handshape-logo.webp",
    // Logo on white, shown whole with white bars at the sides.
    crop: { size: "auto 85%", pos: "center", bg: "#fff" },
    video: "",
    links: [{ label: "Source", url: "https://github.com/TristanTengGH2/Project5-ASL-Workspace" }]
  },
  {
    title: "Moonlit Midway",
    year: "Oct 2026",
    tags: "HTML/CSS · JavaScript · Interactive narrative · Course project",
    bullets: [
      "Directed AI-generated code and artwork for a mobile-friendly Halloween experience with three connected stories, visual interactions and audiovisual feedback.",
      "Playtested and gathered peer reviews; replaced overly revealing highlights with optional, progressive hints, and kept keyboard and reduced-motion controls."
    ],
    image: "assets/moonlit-midway.webp",
    // Shows the full phone frame centered, with dark bars at the sides.
    crop: { size: "auto 133%", pos: "50% 51%" },
    video: "",
    links: [{ label: "Play", url: "https://tristantenggh2.github.io/Project-4-Holloweenie/" }]
  }
];
