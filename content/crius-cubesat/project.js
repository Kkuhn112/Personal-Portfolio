/* ============================================================
   PROJECT: Crius 3U CubeSat Structure
   ------------------------------------------------------------
   HOW TO FINISH THIS PAGE

   1. NUMBERS. Every value still written as [INSERT ...] is a
      placeholder. Replace it as the design establishes the real
      value. Nothing here is invented, so the page never claims a
      result you have not produced.

   2. PHOTOS AND RENDERS. Drop image files in this folder, then
      set "cover" and "hero" below, and uncomment the "figures"
      blocks inside the sections. Suggested order of importance:
        final render, exploded assembly, load-path diagram,
        DFM before/after, FEA results, lightweighting progression,
        drawings, machined hardware, final assembled structure.

   3. TO FEATURE THIS PROJECT. Set featured: true here, set
      featured: false on content/continuous-fiber-retrofit/project.js
      (only one project should be featured), and move
      "crius-cubesat" to the top of content/manifest.js.

   A "table" is optional on any section:
      table: { head: ["A","B"], rows: [["1","2"], ["3","4"]] }
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["crius-cubesat"] = {

  title:   "Crius 3U CubeSat Structure",
  kicker:  "Spacecraft Structures and DFM",
  featured: false,

  blurb:   "A 3U CubeSat primary structure designed from the CubeSat Design Specification outward, through trade studies, CNC-driven detail design, and FEA, toward machined hardware.",
  tagline: "Taking a spacecraft primary structure from written requirements to machinable, analyzed, assemblable hardware.",

  cover:   "",
  hero:    "",

  tags:    ["Structural Design", "DFM", "FEA", "Aerospace"],

  spec: [
    ["Type",     "3U CubeSat primary structure"],
    ["Role",     "Structural design, DFM, and analysis"],
    ["Standard", "CubeSat Design Spec Rev. 14"],
    ["Material", "[INSERT MATERIAL AND TEMPER]"],
    ["Process",  "3-axis CNC milling"],
    ["Status",   "In development"]
  ],

  links: [
    { label: "GitHub", href: "" }
  ],

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "Crius is a 3U CubeSat primary structure built as a ground demonstrator. It is designed against real CubeSat dimensional and interface requirements so that the mechanical problem is genuine, but it is not flight-qualified hardware and is not presented as such.",
        "The interesting part of a CubeSat structure is not the outline, which the specification largely fixes. It is everything downstream of that: how the envelope is divided into parts a machine shop can actually cut, where load travels, where material can be removed without losing stiffness, and whether a person can assemble and disassemble it without fighting the design."
      ]
      // figures: [ { src: "crius-final-render.jpg", caption: "Final structural assembly." } ]
    },

    {
      id: "requirements",
      heading: "Requirements",
      body: [
        "The geometry starts from requirements rather than from a CAD sketch. The specification, the launch environment, and the machine shop each impose constraints, and every one of them has a design response and a way to verify it."
      ],
      table: {
        head: ["ID", "Requirement", "Design response", "Verification"],
        rows: [
          ["STR-01", "3U external envelope per CubeSat Design Spec Rev. 14", "Controlled outer geometry driven by a master sketch", "Dimensional inspection"],
          ["STR-02", "Continuous deployment rail contact along the long axis", "Rails integrated into the corner structure rather than bolted on", "CAD verification and inspection"],
          ["STR-03", "Rail and standoff contact surfaces meet minimum dimensions", "Dedicated machined contact faces held to a controlled finish", "Inspection, [INSERT SURFACE FINISH SPEC]"],
          ["STR-04", "Structure survives launch-equivalent quasi-static loading", "Load path carried corner to corner through the rails", "FEA, factor of safety [INSERT FOS]"],
          ["STR-05", "First natural frequency above the launch vehicle minimum", "Panel and rail stiffness sized against modal results", "Modal FEA, [INSERT FIRST NATURAL FREQUENCY]"],
          ["MAS-01", "Structural mass within the allocated budget", "Load-path-driven pocketing of panels", "CAD mass properties, [INSERT FINAL STRUCTURAL MASS]"],
          ["MFG-01", "Every feature reachable with 3-axis CNC and standard tooling", "Features oriented for tool access, no undercuts", "Manufacturing review and CAM"],
          ["MFG-02", "Minimum internal corner radius compatible with stock cutters", "Radii set to [INSERT MIN INTERNAL RADIUS] or larger", "Drawing callout and CAM check"],
          ["ASY-01", "Internal electronics accessible without full disassembly", "Removable side panel providing service access", "Assembly walkthrough"],
          ["ASY-02", "Minimum number of unique fasteners", "[INSERT FASTENER COUNT AND SIZES]", "Bill of materials"]
        ]
      }
    },

    {
      id: "concepts",
      heading: "Concepts Considered",
      body: [
        "Three architectures were considered before detail design. Each divides the same envelope differently, and each moves complexity to a different place: into the machine, into the assembly, or into the joints."
      ],
      list: [
        "Monolithic frame. The rails and corner structure cut from a single block, with thin panels closing the sides.",
        "Four-rail skeleton. Separate extruded or machined rails joined by end plates, with panels acting mainly as covers.",
        "Panel-integrated rails. Each side panel carries half of two corner rails, so the rails form when panels are joined."
      ]
      // figures: [ { src: "concepts.jpg", caption: "The three architectures evaluated." } ]
    },

    {
      id: "trade-study",
      heading: "Architecture Trade Study",
      body: [
        "The three concepts were scored against the constraints that actually drive this structure: continuity of the load path, how hard the parts are to machine, how hard they are to assemble, and whether a damaged part can be replaced without scrapping the whole structure."
      ],
      table: {
        head: ["Criterion", "Monolithic frame", "Four-rail skeleton", "Panel-integrated rails"],
        rows: [
          ["Structural continuity", "Highest, no joint in the load path", "Lowest, joints at every rail end", "Moderate, joint runs along the rail"],
          ["Rail straightness", "Set by one machining setup", "Depends on assembly stack-up", "Depends on panel-to-panel fit"],
          ["Machining complexity", "High, deep pockets and long reach", "Low per part", "Moderate"],
          ["Number of unique parts", "Fewest", "Most", "Moderate"],
          ["Assembly complexity", "Low", "High, alignment critical", "Moderate"],
          ["Internal access", "Limited by closed frame", "Good", "Good"],
          ["Repairability", "Poor, one damaged feature scraps the frame", "Good", "Good"]
        ]
      }
      // Record the selected concept and the deciding reason once committed:
      // add a short paragraph here naming the choice and what drove it.
    },

    {
      id: "architecture",
      heading: "Structural Architecture",
      body: [
        "The structure is divided so that each part is simple to hold, simple to cut, and simple to inspect, while keeping the primary load path as continuous as possible along the rails.",
        "[INSERT SELECTED ARCHITECTURE AND THE REASON IT WAS CHOSEN]"
      ],
      list: [
        "Deployment rails run the full 3U length and carry the primary launch load.",
        "Side panels stiffen the structure in shear and carry internal mounting provisions.",
        "End structures close the stack and provide the interfaces at each end.",
        "Internal mounting provisions locate the electronics stack off the panels.",
        "Fasteners are concentrated at the corners, where the panels meet the rails."
      ]
      // figures: [
      //   { src: "exploded.jpg",  caption: "Exploded structural assembly." },
      //   { src: "load-path.jpg", caption: "Primary load path from end interface through the rails." }
      // ]
    },

    {
      id: "dfm",
      heading: "Design for Manufacturing",
      body: [
        "Every feature on this structure has to be cut by a real machine with real tooling. These are the specific geometry changes made after reviewing the design as a machining problem rather than a CAD model."
      ],
      table: {
        head: ["Original geometry", "Manufacturing problem", "Design change", "Result"],
        rows: [
          ["Deep narrow lightening pockets", "Long reach at high length-to-diameter ratio, chatter and deflection", "Pocket depth reduced and floor stepped", "Cut with a shorter, stiffer tool"],
          ["Sharp internal corners", "Requires a very small cutter and many passes", "Internal radii opened to [INSERT MIN INTERNAL RADIUS]", "Standard end mill, fewer passes"],
          ["Deep fastener holes from one face", "Drill depth beyond practical ratio, poor hole quality", "Interface geometry changed to shorten the hole", "Drilled with a standard-length drill"],
          ["Features on five faces", "Multiple setups, tolerance stack-up between them", "Features consolidated onto fewer faces", "Setups reduced to [INSERT NUMBER OF SETUPS]"],
          ["Thin panel walls between pockets", "Chatter and distortion during and after cutting", "Wall thickness increased to [INSERT MIN WALL THICKNESS]", "Stable cut, less post-machining distortion"],
          ["Organic lightweighting pattern", "Long cycle time for little mass saved", "Simplified to prismatic pockets on a regular grid", "Shorter cycle time, similar mass"]
        ]
      }
      // figures: [ { src: "dfm-before-after.jpg", caption: "Annotated before and after of the pocket geometry." } ]
    },

    {
      id: "assembly",
      heading: "Design for Assembly",
      body: [
        "A structure that cannot be assembled and serviced is not finished. The assembly sequence was worked out alongside the geometry, and the design changed where the original arrangement would have been awkward to build."
      ],
      list: [
        "Step 1. Join the end structure to the rails to establish the primary frame.",
        "Step 2. Install the internal mounting provisions while access is unobstructed.",
        "Step 3. Install the electronics stack and route harnessing.",
        "Step 4. Close three side panels, leaving the service panel open.",
        "Step 5. Install the opposite end structure.",
        "Step 6. Close the service panel last, so internal work stays reachable.",
        "All fasteners are driven from outside the structure, so no tool has to reach into a closed volume.",
        "[INSERT FASTENER COUNT AND SIZES], chosen to keep the number of unique fasteners low."
      ]
      // figures: [ { src: "assembly-sequence.jpg", caption: "Assembly sequence." } ]
    },

    {
      id: "analysis",
      heading: "Structural Analysis",
      body: [
        "Analysis is used to make decisions, not to produce pictures. Each load case below states what was applied, how the structure was constrained, what the assumptions were, and what changed in the design as a result.",
        "These are launch-equivalent assumptions for a ground demonstrator. They are not a verified launch vehicle environment, and no qualification testing is claimed."
      ],
      table: {
        head: ["Load case", "Boundary conditions", "Key assumptions", "Result", "Design decision"],
        rows: [
          ["Quasi-static axial", "Constrained at the rail contact surfaces", "[INSERT AXIAL LOAD FACTOR], linear elastic, uniform material", "Max von Mises [INSERT STRESS], FOS [INSERT FOS]", "[INSERT WHAT CHANGED]"],
          ["Quasi-static lateral", "Constrained at the rail contact surfaces", "[INSERT LATERAL LOAD FACTOR], worst-case direction", "Max displacement [INSERT DISPLACEMENT]", "[INSERT WHAT CHANGED]"],
          ["Modal", "Constrained as installed in the deployer", "Free of preload, no damping", "First mode [INSERT FIRST NATURAL FREQUENCY]", "[INSERT WHAT CHANGED]"],
          ["Fastener and interface", "Local model at the corner joint", "[INSERT PRELOAD ASSUMPTION]", "[INSERT BEARING OR SHEAR RESULT]", "[INSERT WHAT CHANGED]"]
        ]
      }
      // figures: [
      //   { src: "fea-stress.jpg",       caption: "Von Mises distribution under the axial case." },
      //   { src: "fea-displacement.jpg", caption: "Displacement under the lateral case." }
      // ]
    },

    {
      id: "mass",
      heading: "Mass Optimization",
      body: [
        "Material was removed where it contributed little to the load path, while preserving stiffness and keeping the remaining geometry machinable. The goal was never to remove the most grams. It was to remove the grams that were not doing structural work."
      ],
      table: {
        head: ["Iteration", "Structural mass", "Max stress", "Max displacement", "FOS", "Machining complexity"],
        rows: [
          ["Solid panel baseline", "[INSERT MASS]", "[INSERT STRESS]", "[INSERT DISPLACEMENT]", "[INSERT FOS]", "Low"],
          ["First pocketing pass", "[INSERT MASS]", "[INSERT STRESS]", "[INSERT DISPLACEMENT]", "[INSERT FOS]", "High"],
          ["FEA-informed revision", "[INSERT MASS]", "[INSERT STRESS]", "[INSERT DISPLACEMENT]", "[INSERT FOS]", "Moderate"],
          ["Final panel", "[INSERT FINAL STRUCTURAL MASS]", "[INSERT STRESS]", "[INSERT DISPLACEMENT]", "[INSERT FOS]", "Moderate"]
        ]
      }
      // figures: [ { src: "lightweighting.jpg", caption: "Panel progression from solid stock to the final pocketed geometry." } ]
    },

    {
      id: "iteration",
      heading: "Design Iteration",
      body: [
        "The final geometry is the result of analysis and manufacturing feedback rather than a first attempt that happened to work."
      ],
      list: [
        "Version 1. [INSERT PROBLEM FOUND], identified during [INSERT ANALYSIS OR MANUFACTURING REVIEW].",
        "Version 2. [INSERT ENGINEERING RESPONSE] and what it cost elsewhere in the design.",
        "Final. [INSERT REASON THE FINAL ARCHITECTURE WAS SELECTED]."
      ]
      // figures: [ { src: "iteration.jpg", caption: "Panel geometry across the three iterations." } ]
    },

    {
      id: "manufacturing",
      heading: "Manufacturing",
      body: [
        "The design is carried to the point where it could be cut: drawings, stock, workholding, and inspection are all part of the deliverable rather than an afterthought."
      ],
      list: [
        "Drawings with GD&T applied where function requires it, not applied everywhere by default.",
        "Stock selection: [INSERT STOCK SIZE AND FORM].",
        "Workholding: [INSERT FIXTURING APPROACH], including how the part is held for the second operation.",
        "Setups: [INSERT NUMBER OF SETUPS], with datums chosen to control the rail relationship.",
        "Tooling: [INSERT PRIMARY TOOL LIST].",
        "Inspection: [INSERT INSPECTION METHOD AND KEY MEASURED DIMENSIONS]."
      ]
      // figures: [
      //   { src: "drawing.jpg",   caption: "Panel drawing with GD&T on the interface features." },
      //   { src: "machined.jpg",  caption: "Machined component." }
      // ]
    },

    {
      id: "validation",
      heading: "Status and Validation",
      body: [
        "What is established and what is still assumed are kept separate on purpose.",
        "Established so far: [INSERT WHAT IS COMPLETE]. Still open: [INSERT WHAT REMAINS], including verification of the loading assumptions against a real launch environment.",
        "Crius is a ground demonstrator. The requirements it is designed against are real, the analysis assumptions are stated, and no qualification or flight heritage is claimed."
      ]
      // figures: [ { src: "assembled.jpg", caption: "Assembled structure." } ]
    }
  ]
};
