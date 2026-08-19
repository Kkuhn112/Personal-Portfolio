/* ============================================================
   PROJECT: CFD-Informed Muzzle Brake
   ------------------------------------------------------------
   Designed, analyzed in CFD, manually machined, and tested.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["Machined-Gas-Flow-Device"] = {

  title:   "CFD-Informed Muzzle Brake",
  kicker:  "CFD • DFM • Manual Machining",
  featured: false,

  blurb:   "A 4140 steel muzzle brake designed using CFD to evaluate gas-flow behavior, then refined for manufacturability, manually machined, and physically tested.",
  tagline: "Using simulation to inform a practical design that could be manufactured with conventional manual machining processes.",

  cover:   "Gas-Flow-Device.png",
  hero:    "Gas-Flow-Device.png",

  tags:    ["Mechanical Design", "CFD", "DFM", "Manual Machining"],

  spec: [
    ["Focus",     "CFD-informed mechanical design and DFM"],
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
        "I designed and manufactured a custom muzzle brake as an exercise in combining computational analysis, mechanical design, and hands-on manufacturing. CFD was used during development to evaluate gas-flow behavior and compare design features before committing the final geometry to metal."
      ]
    },
    {
      id: "requirements",
      heading: "Design Requirements",
      body: [
        "The design needed to balance gas-flow performance with geometry that could realistically be produced using the manual machining equipment available to me."
      ],
      list: [
        "Use CFD to evaluate and refine internal and external gas-flow geometry.",
        "Design all critical features around manual lathe and mill capabilities.",
        "Use 4140 steel for a durable final component.",
        "Minimize unnecessary machining operations and difficult setups.",
        "Produce a functional prototype suitable for physical testing."
      ]
    },
    {
      id: "analysis",
      heading: "CFD Analysis",
      body: [
        "I used CFD as a design tool rather than relying only on conventional geometry. Simulation results were used to visualize gas expansion and flow through the brake and to identify areas where the geometry could be refined before manufacturing."
      ],
      list: [
        "Created the flow domain from the CAD geometry.",
        "Evaluated pressure and velocity behavior through the device.",
        "Compared design features based on simulated gas-flow behavior.",
        "Used analysis results to guide geometry changes before machining."
      ]
    },
    {
      id: "design",
      heading: "Design for Manufacturing",
      body: [
        "After the analysis phase, I refined the CAD model around the capabilities of a manual mill and lathe. Features were selected and dimensioned to reduce setup complexity while maintaining the intended geometry."
      ],
      list: [
        "Designed turned features for conventional manual lathe operations.",
        "Designed port geometry around accessible manual milling operations.",
        "Reduced unnecessary features and complex setups.",
        "Considered tooling access, workholding, and operation sequence during the design process."
      ]
    },
    {
      id: "manufacturing",
      heading: "Manufacturing",
      body: [
        "The final component was manufactured from 4140 steel using manual machining processes. Completing the part myself provided direct feedback on tool access, setup difficulty, tolerances, and the manufacturability decisions made during CAD development."
      ],
      list: [
        "Turned the primary cylindrical geometry on a manual lathe.",
        "Machined gas ports and secondary features on a manual mill.",
        "Performed the required setups, workholding, and dimensional inspection.",
        "Completed and inspected the final manufactured component."
      ]
    },
    {
      id: "result",
      heading: "Testing and Result",
      body: [
        "The finished muzzle brake was physically tested after manufacturing. The project took the design through the complete workflow from CAD and CFD analysis to DFM refinement, manual machining, and hardware testing."
      ]
    }
  ]
};
