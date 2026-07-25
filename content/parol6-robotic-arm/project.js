/* ============================================================
   PROJECT: PAROL 6 Robotic Arm
   Edit any text below. Image files (cover, hero, figure src)
   live in this folder. See the fiber project for full notes.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["parol6-robotic-arm"] = {

  title:   "PAROL 6 Robotic Arm",
  kicker:  "Robotics and Controls",
  featured: false,

  blurb:   "A six-axis desktop robotic arm assembled, wired, and commissioned, then driven by motion software written in Python.",
  tagline: "A six-degree-of-freedom manipulator built as a platform for controls, calibration, and end-effector work.",
   cover:      "cover.jpg",   // the still, always shown at rest
   coverVideo: "demo.mp4",    // plays on hover
   hero:    "parol6.jpg",

  tags:    ["Robotics", "Controls", "Python", "Kinematics"],

  spec: [
    ["Type",     "Six-axis manipulator"],
    ["Timeline", "2025"],
    ["Tools",    "Python, stepper drives, pneumatics"],
    ["Status",   "Operational"]
  ],

  links: [
    { label: "Video",  href: "https://youtube.com/shorts/sV4nwKh9tP0?feature=share" },
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "The PAROL 6 is a six-degree-of-freedom desktop arm. I kitted, assembled, calibrated, and commissioned the hardware, then wrote the software to command it. The result is a working platform for testing motion control and end-effector tasks."
      ]
    },
    {
      id: "build",
      heading: "Assembly and Integration",
      body: [
        "Building the arm meant working through the mechanical and electrical detail that decides whether a manipulator moves reliably or not."
      ],
      list: [
        "Managed printed-part tolerances, belt alignment, and joint access for serviceability.",
        "Wired motors, drivers, and reference switches into a coherent control loop.",
        "Integrated a custom end-effector and a pneumatic actuation system."
      ]
    },
    {
      id: "software",
      heading: "Motion Software",
      body: [
        "I wrote a Python application to command the arm, covering the kinematics needed to position the tool in space."
      ],
      list: [
        "Forward and inverse kinematics for the six joints.",
        "Cartesian motion control for coordinated multi-axis moves.",
        "A serial command interface to the motion controller."
      ]
    },
    {
      id: "result",
      heading: "Result",
      body: [
        "The arm runs coordinated moves under software control and serves as a base for further work on calibration, repeatability, and task-level end-effector routines."
      ]
    }
  ]
};
