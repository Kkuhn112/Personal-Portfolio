/* ============================================================
   PROJECT: Automated CNC Part Extraction
   ------------------------------------------------------------
   PHOTO: drop your gripper photo into this folder, then set
   "cover" (and "hero") to the file name, e.g. cover: "gripper.jpg".
   While "cover" is empty, the card shows a clean placeholder.
   Suggested photo: the black gripper holding the blue part in the lathe.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["automated-cnc-part-extraction"] = {

  title:   "CFD inspired Gas FLow Device",
  kicker:  "DFM and CFD",
  featured: false,

  blurb:   "A custom gas flow device with preliminary analysis done in CFD, and design optimized for manufacturing only requiring a manual mill and lathe.",
  tagline: "Reinforcement of traditional ideas with a modern analysis method and traditional machining methods.",

  cover:   "Gas-Flow-Device.png",
  hero:    "Gas-Flow-Device.png",

  tags:    ["Machine Design", "CAD", "Automation", "Additive Mfg."],

  spec: [
    ["Context",   "Design for manufacturing implementation"],
    ["Timeline",  "2025"],
    ["Materials", "4140 Steel"],
    ["Status",    "Deployed"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "On a CNC turning center, an operator often has to reach in and remove each finished part before the next cycle can start. I designed and built an attachment that does this automatically, which removed the manual step and kept the machine running."
      ]
    },
    {
      id: "requirements",
      heading: "Requirements",
      body: [
        "The attachment had to work inside a live production process without changing the existing workflow or crowding the machine's working envelope."
      ],
      list: [
        "Fit within the limited work envelope of the turning center.",
        "Repeatably grip and clear finished parts.",
        "Withstand continuous exposure to cutting fluid."
      ]
    },
    {
      id: "design",
      heading: "Design and Build",
      body: [
        "I modeled the mechanism in CAD around the machine, chose a material that would hold up to coolant, and fabricated production-ready hardware."
      ],
      list: [
        "Modeled the extraction mechanism in CAD around the machine envelope.",
        "Selected chemical-resistant carbon fiber for coolant durability.",
        "Fabricated the hardware with additive manufacturing."
      ]
    },
    {
      id: "result",
      heading: "Result",
      body: [
        "The attachment removed operator intervention from the cycle, reduced idle time between parts, and improved production consistency. It ran on a real production line rather than a bench."
      ]
    }
  ]
};
