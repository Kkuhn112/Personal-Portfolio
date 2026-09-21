/* ============================================================
   PROJECT: Crius 3U CubeSat Structure
   ------------------------------------------------------------
   This page quotes only values that have been established. Where
   a number is not stated, the text describes the engineering
   instead of leaving a blank.

   PHOTOS AND RENDERS. Drop image files in this folder and
   uncomment the "figures" blocks below. Worth adding, roughly in
   order of value: exploded assembly, load path diagram, DFM
   before and after, FEA results, the lightweighting progression,
   drawings, and machined hardware.

   A "table" is optional on any section:
      table: { head: ["A","B"], rows: [["1","2"], ["3","4"]] }
   ============================================================ */
window.Portfolio = window.Portfolio || {};
window.Portfolio["crius-cubesat"] = {

  title:   "Crius 3U CubeSat Structure",
  kicker:  "Spacecraft Structures and DFM",
  featured: true,

  blurb:   "A 3U CubeSat primary structure designed from the CubeSat Design Specification outward, through trade studies, CNC-driven detail design, and static and dynamic analysis, toward machined hardware.",
  tagline: "Taking a spacecraft primary structure from written requirements to machinable, analyzed, assemblable hardware.",

  cover:   "Cius_1.0_SpaceShot_Glow.jpg",
  hero:    "Cius_1.0_SpaceShot_Glow.jpg",

  tags:    ["Structural Design", "DFM", "FEA", "Aerospace"],

  spec: [
    ["Type",      "3U CubeSat primary structure"],
    ["Role",      "Structural design, DFM, and analysis"],
    ["Standard",  "CubeSat Design Spec Rev. 14"],
    ["Materials", "6061 aluminum panels, 304 stainless bracing"],
    ["Fasteners", "2-56 screws into custom nut plates"],
    ["Analysis",  "SolidWorks static and dynamic, 20 to 2000 Hz"],
    ["Margins",   "1.4 working, 2.0 simulation"],
    ["Process",   "3-axis CNC milling"],
    ["Status",    "Design and analysis complete"]
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
          ["STR-03", "Rail and standoff contact surfaces meet minimum dimensions", "Dedicated machined contact faces on the rails", "Dimensional inspection of the contact faces"],
          ["STR-04", "Structure survives launch-equivalent quasi-static loading", "Load path carried corner to corner through the rails", "SolidWorks static analysis, working factor of safety 1.4"],
          ["STR-05", "No structural resonance excited by the launch environment", "Panel and bracing stiffness sized against the dynamic results", "SolidWorks dynamic analysis across 20 to 2000 Hz"],
          ["MAT-01", "Light, predictable, machinable primary structure", "6061 aluminum panels", "Material certification and inspection"],
          ["MAT-02", "Stiff internal support without consuming payload volume", "304 stainless bracing framing the antenna and solar panel space", "CAD interference check and inspection"],
          ["MAS-01", "Structural mass within the allocated budget", "Load-path-driven pocketing of panels", "CAD mass properties"],
          ["MFG-01", "Every feature reachable with 3-axis CNC and standard tooling", "Features oriented for tool access, no undercuts", "Manufacturing review and CAM"],
          ["MFG-02", "Minimum internal corner radius compatible with stock cutters", "Internal radii sized to standard end mill diameters", "Drawing callout and CAM check"],
          ["ASY-01", "Internal electronics accessible without full disassembly", "Removable side panel providing service access", "Assembly walkthrough"],
          ["ASY-02", "Minimum number of unique fasteners", "A single 2-56 screw size throughout, into custom nut plates", "Bill of materials"]
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
    },

    {
      id: "architecture",
      heading: "Structural Architecture",
      body: [
        "The structure is divided so that each part is simple to hold, simple to cut, and simple to inspect, while keeping the primary load path as continuous as possible along the rails, which are integrated into the corner structure rather than bolted on.",
        "It uses two materials, each where it earns its place. The panels are 6061 aluminum, which carries the envelope and the rails at low mass and machines predictably. The internal bracing is 304 stainless, used specifically where the structure has to be stiff in a thin section: it frames the internal volume reserved for the antenna and the solar panels. Meeting that stiffness in aluminum would have required a thicker member, and the thickness would have come directly out of payload space, so the heavier material is the lighter answer once the volume is accounted for."
      ],
      list: [
        "Deployment rails run the full 3U length and carry the primary launch load.",
        "6061 aluminum side panels stiffen the structure in shear and carry the internal mounting provisions.",
        "304 stainless bracing frames the internal volume reserved for the antenna and solar panels.",
        "End structures close the stack and provide the interfaces at each end.",
        "Every structural joint uses one 2-56 screw size, threaded into custom nut plates rather than into the panels themselves.",
        "Fasteners are concentrated at the corners, where the panels meet the rails."
      ]
      // figures: [
      //   { src: "exploded.jpg",  caption: "Exploded structural assembly." },
      //   { src: "load-path.jpg", caption: "Primary load path from end interface through the rails." }
      // ]
    },

    {
      id: "fasteners",
      heading: "Fasteners and Nut Plates",
      body: [
        "At this scale the joints are the hard part. A 3U structure is mostly thin walls, and a 2-56 screw tapped straight into a thin aluminum panel engages very few threads. That joint strips long before the panel itself is in trouble, which means the fastener, not the structure, sets the limit.",
        "The answer was to take the threads off the panels entirely. Custom nut plates carry the 2-56 threads, so the screw engages a part designed to be threaded while the panel only has to pass a clearance hole. Thread engagement stops depending on panel thickness, load spreads into the panel over the footprint of the plate instead of concentrating at a tapped hole, and the joint survives being taken apart and reassembled, which matters for a structure meant to be opened for service."
      ],
      list: [
        "One screw size, 2-56, across the whole structure, so assembly needs a single driver and the bill of materials stays short.",
        "Custom nut plates sized to spread fastener load into thin panel material.",
        "Full thread engagement set by the nut plate rather than by panel thickness.",
        "Repeated assembly and disassembly without degrading the threads."
      ]
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
          ["Threads tapped directly into thin panels", "Too few threads engaged for a 2-56 screw, strips under preload", "Custom nut plates carry the threads, panels get clearance holes", "Joint strength set by the nut plate, not panel thickness"],
          ["Deep narrow lightening pockets", "Long reach at high length-to-diameter ratio, chatter and deflection", "Pocket depth reduced and floor stepped", "Cut with a shorter, stiffer tool"],
          ["Sharp internal corners", "Requires a very small cutter and many passes", "Internal radii opened to match standard end mill diameters", "Standard end mill, fewer passes"],
          ["Deep fastener holes from one face", "Drill depth beyond practical ratio, poor hole quality", "Interface geometry changed to shorten the hole", "Drilled with a standard-length drill"],
          ["Features on five faces", "Multiple setups, tolerance stack-up between them", "Features consolidated onto fewer faces", "Less stack-up between the faces that have to agree"],
          ["Thin panel walls between pockets", "Chatter and distortion during and after cutting", "Wall thickness increased where pockets ran too thin", "Stable cut, less post-machining distortion"],
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
        "Step 2. Install the 304 stainless bracing while access is unobstructed.",
        "Step 3. Install the electronics stack and route harnessing.",
        "Step 4. Close three side panels, leaving the service panel open.",
        "Step 5. Install the opposite end structure.",
        "Step 6. Close the service panel last, so internal work stays reachable.",
        "All fasteners are driven from outside the structure, so no tool has to reach into a closed volume.",
        "A single 2-56 screw size throughout, so the whole structure assembles with one driver and no hardware can be fitted in the wrong place.",
        "Nut plates stay captive, so no loose hardware has to be held inside the structure while a panel is fitted."
      ]
      // figures: [ { src: "assembly-sequence.jpg", caption: "Assembly sequence." } ]
    },

    {
      id: "analysis",
      heading: "Structural Analysis",
      body: [
        "Analysis is used to make decisions, not to produce pictures. Static and dynamic studies were run in SolidWorks, and the results drove panel thickness, pocket geometry, and where the stainless bracing had to go.",
        "Two margins are carried separately, and keeping them separate is deliberate. The working factor of safety of 1.4 is the margin the structure is designed to hold against its expected loads. The simulation factor of 2 is applied on top of that inside the analysis, covering the distance between a linear elastic model and real hardware with joints, fasteners, and manufacturing variation. Combining them into one number would hide which part of the margin is design intent and which part is model uncertainty.",
        "These are launch-equivalent assumptions for a ground demonstrator. They are not a verified launch vehicle specification, and no qualification testing is claimed."
      ],
      table: {
        head: ["Analysis", "Setup", "Criterion", "What it drove"],
        rows: [
          ["Static, launch-equivalent", "Constrained at the rail contact surfaces, linear elastic, 6061 panels with 304 bracing", "Working factor of safety of 1.4, with a simulation factor of 2 applied on top", "Panel sections and pocket geometry sized to hold the margin"],
          ["Dynamic, 20 to 2000 Hz", "Constrained as installed in the deployer, swept across the band", "No structural mode excited across the frequency range", "Placement and stiffness of the stainless bracing, and where material had to stay on the panels"]
        ]
      }
      // figures: [
      //   { src: "fea-stress.jpg",       caption: "Von Mises distribution under the static case." },
      //   { src: "fea-displacement.jpg", caption: "Displacement results." }
      // ]
    },

    {
      id: "mass",
      heading: "Mass Optimization",
      body: [
        "Material was removed where it contributed little to the load path, while preserving stiffness and keeping the remaining geometry machinable. The goal was never to remove the most grams. It was to remove the grams that were not doing structural work, which is a different problem and one that only the analysis can answer."
      ],
      table: {
        head: ["Iteration", "Change", "Mass", "Stiffness", "Machining complexity"],
        rows: [
          ["Solid panel baseline", "No lightening", "Highest", "Highest", "Low"],
          ["First pocketing pass", "Aggressive pocketing across the panel", "Large reduction", "Reduced where pockets crossed the load path", "High"],
          ["Analysis-informed revision", "Material returned along the load paths, removed elsewhere", "Most of the reduction kept", "Restored where the analysis said it mattered", "Moderate"],
          ["Final panel", "Pocket grid regularized for machining", "Held", "Held", "Moderate"]
        ]
      }
      // figures: [ { src: "lightweighting.jpg", caption: "Panel progression from solid stock to the final pocketed geometry." } ]
    },

    {
      id: "decisions",
      heading: "What Analysis and Manufacturing Changed",
      body: [
        "The final geometry is the result of analysis and manufacturing feedback rather than a first attempt that happened to work. These are the decisions those two inputs forced."
      ],
      list: [
        "Threads moved off the panels and into custom nut plates, because a 2-56 screw in thin aluminum is a fastener-limited joint rather than a structure-limited one.",
        "Internal bracing specified in 304 stainless rather than a thicker aluminum member, so the antenna and solar panel volume was not spent buying stiffness.",
        "Fastener selection standardized to one 2-56 size, trading a small mass penalty at the lightly loaded joints for a shorter bill of materials and an assembly that cannot be done wrong.",
        "Pocket geometry regularized and internal radii opened, accepting slightly less mass saving in exchange for a part that cuts with standard tooling.",
        "Panel material returned along the load paths the static analysis identified, after the first pocketing pass removed stiffness where the structure actually needed it."
      ]
      // figures: [ { src: "iteration.jpg", caption: "Panel geometry across the iterations." } ]
    },

    {
      id: "manufacturing",
      heading: "Manufacturing",
      body: [
        "The design is carried to the point where it could be cut. Drawings, material, workholding, and inspection are part of the deliverable rather than an afterthought."
      ],
      list: [
        "Drawings with GD&T applied where function requires it, not applied everywhere by default.",
        "Panels machined from 6061 aluminum, bracing from 304 stainless.",
        "Nut plates made as dedicated parts so the threaded feature is cut in material chosen for it.",
        "Datums selected to control the relationship between the rails, since the rails are what the deployer actually touches.",
        "Fastener holes and nut plate pockets located from the same datums as the features they serve, to keep stack-up between them small.",
        "Inspection focused on the rail contact faces and the external envelope, which are the dimensions the specification constrains."
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
        "Established: the structural architecture, the material split between 6061 aluminum panels and 304 stainless bracing, the 2-56 fastener and nut plate scheme, and the static and dynamic analysis in SolidWorks against a 1.4 working factor of safety with a simulation factor of 2 applied on top.",
        "Still open: physical build and any environmental testing. The 20 to 2000 Hz band used for the dynamic analysis is representative of a launch environment rather than a specific launch vehicle requirement, so it tells you the structure has no resonance in a realistic range, not that it has been qualified to fly.",
        "Crius is a ground demonstrator. The requirements it is designed against are real, the analysis assumptions are stated, and no qualification or flight heritage is claimed."
      ]
      // figures: [ { src: "assembled.jpg", caption: "Assembled structure." } ]
    }
  ]
};
