/* ============================================================
   PROJECT: Nimbus One
   ------------------------------------------------------------
   Stakeholder-driven conceptual design project culminating in
   a large-format physical eVTOL/drone demonstrator.
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["Nimbus-One"] = {

  title:   "Nimbus One",
  kicker:  "Stakeholder-Driven Design • Prototyping • Systems Engineering",
  featured: false,

  blurb:   "A team-based engineering design project that translated stakeholder needs into system-level design priorities and culminated in a large-format physical eVTOL/drone demonstrator.",

  tagline: "Applying a structured engineering design process from stakeholder discovery and requirements definition through concept selection, prototyping, integration, and testing.",

  cover:   "NimbusOne.jpg",
  hero:    "NimbusOne.jpg",

  tags: [
    "Systems Design",
    "Stakeholder Analysis",
    "CAD",
    "Prototyping",
    "Additive Manufacturing"
  ],

  spec: [
    ["Context",  "Freshman Engineering Design Project"],
    ["Timeline", "2025"],
    ["Team",     "6 Engineers"],
    ["Process",  "Discover → Define → Develop → Deliver"],
    ["Outcome",  "Large-Format Physical Demonstrator"]
  ],

  links: [
    { label: "Project Report", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Nimbus One was a freshman engineering design project focused on developing a conceptual autonomous urban air vehicle. Rather than beginning with a predetermined technical solution, our team used a structured design process to identify stakeholder needs, define design priorities, evaluate competing concepts, and develop a physical demonstrator."
      ]
    },

    {
      id: "stakeholders",
      heading: "Stakeholder Discovery",
      body: [
        "The project began by researching transportation challenges and interviewing potential stakeholders. These findings were used to understand what users valued and to establish the major factors that would guide subsequent design decisions."
      ],
      list: [
        "Conducted stakeholder interviews to identify user needs and concerns.",
        "Evaluated transportation use cases and emerging technologies.",
        "Developed 'How Might We' statements to convert broad problems into actionable design questions.",
        "Identified cost, efficiency, safety, and applicability as four major design priorities."
      ]
    },

    {
      id: "requirements",
      heading: "Defining the Design",
      body: [
        "Stakeholder findings were translated into design priorities that could be used to compare concepts. The team generated multiple vehicle and subsystem ideas before evaluating which features best addressed the identified needs."
      ],
      list: [
        "Defined design priorities from stakeholder feedback.",
        "Generated multiple vehicle and subsystem concepts.",
        "Used a Real-Win-Worth evaluation process to compare competing ideas.",
        "Converged on an autonomous electric VTOL architecture for further development."
      ]
    },

    {
      id: "development",
      heading: "Concept Development",
      body: [
        "After selecting the overall architecture, the team moved into iterative development. CAD and physical prototypes were used to evaluate the geometry, construction approach, subsystem integration, and feasibility of the design before committing to the final demonstrator."
      ],
      list: [
        "Developed the vehicle structure and packaging in CAD.",
        "Used parallel prototyping and subsystem isolation during development.",
        "Produced small-scale 3D-printed prototypes to evaluate design features.",
        "Iterated the structure before manufacturing the large-format prototype."
      ]
    },

    {
      id: "engineering",
      heading: "Engineering Challenges",
      body: [
        "Scaling the concept into a physical prototype introduced a major structural tradeoff: the airframe needed enough rigidity to support the hardware while remaining lightweight enough for the propulsion system. This required design changes that reduced mass without sacrificing the structural integrity needed for the demonstrator."
      ],
      list: [
        "Balanced structural rigidity against vehicle mass.",
        "Used additive manufacturing to create lightweight structural geometry.",
        "Modified the design as physical prototypes exposed practical limitations.",
        "Integrated propulsion, electronics, structural components, and protective hardware into the final assembly."
      ]
    },

    {
      id: "prototype",
      heading: "Final Demonstrator",
      body: [
        "The project culminated in a large-format physical demonstrator assembled from multiple manufactured sections with integrated electronics and propulsion hardware. The final prototype provided a tangible platform for evaluating the design assumptions and exposed practical challenges that were not apparent during the initial conceptual phase."
      ]
    },

    {
      id: "result",
      heading: "Takeaways",
      body: [
        "Nimbus One introduced me to engineering as a requirements-driven process rather than simply a CAD exercise. The most valuable part of the project was working from stakeholder needs through concept selection, prototyping, manufacturing, and integration while seeing how constraints discovered during hardware development feed back into the design."
      ]
    }
  ]
};
