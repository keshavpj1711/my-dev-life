const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Journey",
    link: "#journey",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg", id: 1 },
  { text: "Concepts", imgPath: "/images/concepts.svg", id: 2 },
  { text: "Designs", imgPath: "/images/designs.svg", id: 3 },
  { text: "Code", imgPath: "/images/code.svg", id: 4 },
  { text: "Ideas", imgPath: "/images/ideas.svg", id: 5 },
  { text: "Concepts", imgPath: "/images/concepts.svg", id: 6 },
  { text: "Designs", imgPath: "/images/designs.svg", id: 7 },
  { text: "Code", imgPath: "/images/code.svg", id: 8 },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/images/build.png",
    title: "Engineering Instinct",
    desc: "I build systems that aren’t just functional—they’re thoughtfully designed with modularity and scalability in mind.",
  },
  {
    imgPath: "/images/problem.png",
    title: "End-to-End Problem Solving",
    desc: "From infrastructure to APIs, I enjoy taking full ownership of my projects and making sure every part fits cleanly.",
  },
  {
    imgPath: "/images/curiosity.png",
    title: "Projects with a Purpose",
    desc: "Whether it's an emoji picker for quick texting or a script to clean my Downloads folder, I love turning everyday friction into useful tools, picking up new skills and experience.",
  },
  {
    imgPath: "/images/arch.png",
    title: "I Use Arch BTW",
    desc: "As an Arch Linux user, I value control, transparency, and customization. My workflow isn’t just configured—it’s engineered to fit how I think, build, and learn.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const journeyCards = [
  {
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Python Developer",
    date: "January 2021 - Present",
    story: "My very first real project — a school management system built in Class 12 using Python and MySQL. I didn’t know much at the time, so Stack Overflow and YouTube were my best friends. But that’s what made it stick — it was a challenge I kept chipping away at. That project showed me what it feels like to build something that actually works.",
    journey: [
      "Built utility tools like an emoji picker, snake games, bots, scrapers etc.",
      "Discovered APIs and web concepts via Python (requests, FAST API etc).",
      "Explored data workflows with Pandas/Numpy, and later AI/LLMs.",
    ],
  },
  {
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "JEE Aspirant",
    date: "January 2021 - August 2022",
    story: "This phase was a break from everything I loved about computers at that point. I paused all coding to focus on cracking the JEE — one of the most intense exams in India. It was more about learning how to stay consistent and adapt under pressure than about academics alone. But in the end, I made it into IIT Kharagpur (Electrical Engineering), and I don’t regret a thing.",
    journey: [
      "Learned discipline, focus, and how to push through mental fatigue.",
      "Faced the common challenge of sacrificing passion to chase a bigger goal.",
      "Secured admission into IIT KGP (Electrical) in my second attempt.",
    ],
  },
  {
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Advisor, KOSS (Kharagpur Open Source Society)",
    date: "June 2023 - Present",
    story: "The first real turning point in college. While everyone was rushing to join cultural clubs, I had one goal — get into KOSS. I was selected, and it changed everything. I met some of the best devs on campus and finally discovered Linux. That single thing opened up a whole world of customization, scripting, and control.",
    journey: [
      "Joined KOSS, a core open-source community at IIT Kharagpur.",
      "Discovered Arch Linux and started customizing my dev workflow.",
      "Organized KWoC (a student-led version of GSoC).",
      "Built scripts, learned about bash, database systems, servers.",

    ],
  },
  {
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Full Stack Developer",
    date: "June 2024 - Present",
    story: "I knew the basics of HTML/CSS early on, but didn’t think much of them—until I needed to give a UI to the backend projects I was building. That moment pulled me into the world of web development. Learning React changed everything, and before long, I was building full stack apps I actually enjoyed using.",
    journey: [
      "Built my first single-page app during a society interview task.",
      "Used React, Express, and Postgres to build tools like a markdown note-taking app.",
      "Started thinking about design, user flow, and how frontend and backend fit together.",
    ],
  },
  {
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Noob at DevOps",
    date: "May 2025 - Present",
    story: "After a networking course sparked my interest in how systems run behind the scenes, I explored AWS and discovered Infrastructure as Code. From there, Docker, scalability, and architecture principles followed naturally. DevOps made me see code as something that lives, runs, and evolves—not just compiles.",
    journey: [
      "Built my first IaC setup using Pulumi to automate an EC2 web server.",
      "Dockerized projects for fast deployment and consistent environments.",
      "Started mapping out architecture diagrams and scalability principles for future apps.",
    ],
  }

];

// const expLogos = [
//   {
//     name: "logo1",
//     imgPath: "/images/logo1.png",
//   },
//   {
//     name: "logo2",
//     imgPath: "/images/logo2.png",
//   },
//   {
//     name: "logo3",
//     imgPath: "/images/logo3.png",
//   },
// ];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  journeyCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};