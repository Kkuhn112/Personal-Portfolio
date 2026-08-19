/* ============================================================
   PROJECT: CFD-Informed Gas Flow Device
   ------------------------------------------------------------
   Designed, analyzed in CFD, manually machined, and tested.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["Machined-Gas-Flow-Device"] = {

  title:   "CFD-Informed Gas Flow Device",
  kicker:  "CFD • DFM • Manual Machining",
  featured: false,

  blurb:   "A 4140 steel gas flow device developed using CFD to evaluate flow behavior, then refined for manufacturability, manually machined, and physically tested.",

  tagline: "Using computational analysis to inform a practical design manufactured with conventional machining processes.",

  cover:   "Gas-Flow-Device.png",
  hero:    "Gas-Flow-Device.png",

  tags: [
    "Mechanical Design",
    "CFD",
    "DFM",
    "Manual Machining"
  ],

  spec: [
    ["Focus",     "CFD-Informed Design & DFM"],
    ["Timeline",  "2025"],
    ["Material",  "4140 Steel"],
    ["Process",   "Manual Mill & Lathe"],
    ["Status",    "Manufactured & Tested"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "I designed and manufactured a custom gas flow device as an exercise in combining computational analysis, mechanical design, and hands-on manufacturing. CFD was used during development to evaluate flow behavior and guide geometry changes before committing the final design to metal."
      ]
    },

    {
      id: "requirements",
      heading: "Design Requirements",
      body: [
        "The design needed to balance flow performance with geometry that could realistically be produced using the manual machining equipment available to me."
      ],
      list: [
        "Use CFD to evaluate and refine gas-flow geometry.",
        "Design critical features around manual lathe and mill capabilities.",
        "Manufacture the final component from 4140 steel.",
        "Minimize unnecessary machining operations and complex setups.",
        "Produce a functional prototype suitable for physical testing."
      ]
    },

    {
      id: "analysis",
      heading: "CFD Analysis",
      body: [
        "CFD was used as a design tool to visualize flow behavior through the device and evaluate how changes in geometry affected the resulting flow field."
      ],
      list: [
        "Created the flow domain from the CAD geometry.",
        "Evaluated pressure and velocity behavior through the device.",
        "Compared geometric features using simulation results.",
        "Used CFD results to guide design changes before manufacturing."
      ]
    },

    {
      id: "design",
      heading: "Design for Manufacturing",
      body: [
        "After the analysis phase, I refined the CAD model around the capabilities of a manual mill and lathe. Features were designed to reduce setup complexity while preserving the intended flow geometry."
      ],
      list: [
        "Designed cylindrical features around conventional lathe operations.",
        "Designed flow-port geometry around accessible manual milling operations.",
        "Reduced unnecessary features and machining setups.",
        "Considered tooling access, workholding, and operation sequence during design."
      ]
    },

    {
      id: "manufacturing",
      heading: "Manufacturing",
      body: [
        "The final component was manufactured from 4140 steel using manual machining processes. Manufacturing the component myself provided direct feedback on tooling access, setup difficulty, tolerances, and the DFM decisions made during CAD development."
      ],
      list: [
        "Turned the primary geometry on a manual lathe.",
        "Machined flow ports and secondary features on a manual mill.",
        "Designed 3D printed workholding, performed setups, and dimensional inspection.",
        "Completed and inspected the final manufactured component."
      ]
    },

    {
      id: "result",
      heading: "Testing and Result",
      body: [
        "The completed gas flow device was physically tested after manufacturing. The project took a single design through the complete engineering workflow from CAD and CFD analysis to design iteration, DFM, manual machining, and hardware testing."
      ]
    }
  ]
};
