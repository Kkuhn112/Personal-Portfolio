/* ============================================================
   BRIEF PORTFOLIO
   ------------------------------------------------------------
   The short export: three projects, with a paragraph each.
   This is the only file you need to edit to change it.

   To swap a project, change the "slug" to any folder name in
   /content. The title, kicker and cover image are read from that
   project's own project.js, so they never go out of sync.

   To reorder, move the blocks around.

   Each project answers the same four questions, in this order:
     why      why the project is worth your attention
     found    what the work actually turned up
     tools    what it taught you to use
     path     why it matters to where you are going

   Keep each one to a short paragraph. The point of this document
   is that it can be read in about two minutes.
   ============================================================ */
window.PORTFOLIO_BRIEF = {

  intro: "Three projects that show how I work: a spacecraft structure carried from requirements " +
         "to drawings, production hardware that had to survive a real factory, and a robot built " +
         "and programmed end to end. Full write-ups for these and the rest are at kestinkuhn.com.",

  projects: [
    {
      slug: "crius-cubesat",

      why: "A full spacecraft primary structure carried from the CubeSat Design Specification through "+
           "trade studies and detail design to static and dynamic analysis and drawings a shop could cut. "+
           "It is honest about its limits: a 1.4 working factor of safety and a separate simulation factor "+
           "of 2, on a ground demonstrator with no flight qualification claimed.",

      found: "The design that survived is not the one I drew first. Threads had to move off the thin 6061 "+
             "panels into custom nut plates, because a 2-56 screw in thin aluminum makes a fastener-limited "+
             "joint. The first pocketing pass removed material where the structure wanted it, and the static "+
             "results showed where to put it back.",

      tools: "SolidWorks modeling with static and dynamic simulation across 20 to 2000 Hz, design for "+
             "manufacturing against 3-axis milling, and formal trade study method. The habit that stuck was "+
             "keeping design margin and model uncertainty as separate numbers.",

      path: "This is the work I want to do. It taught me to use analysis to make decisions instead of to "+
            "produce pictures, and to say which parts of a design are established and which are assumed."
    },

    {
      slug: "automated-cnc-part-extraction",

      why: "Hardware I designed, built and deployed on a live production floor. An operator normally has "+
           "to reach into the turning center and clear every finished part before the next cycle. This "+
           "attachment does it automatically, inside an existing process, without changing the workflow.",

      found: "Almost every real constraint came from the machine and the environment, not from the CAD: a "+
             "tight work envelope, repeatable gripping, and continuous cutting fluid, which is what drove the "+
             "material to chemical-resistant carbon fiber. It cut idle time and made the process more consistent.",

      tools: "CAD built around a measured machine envelope, material selection for a chemical environment, "+
             "and additive manufacturing used for production hardware instead of prototypes.",

      path: "It is the clearest evidence I have that I can design something that works in production and "+
            "not just on a bench. That instinct now sits underneath everything I design."
    },

    {
      slug: "parol6-robotic-arm",

      why: "A six-axis manipulator I kitted, assembled, calibrated, wired and commissioned, then drove it "+
           "with motion software I wrote myself. One machine spanning the mechanical, electrical and "+
           "software sides, with nothing handed off at the boundaries.",

      found: "Whether a manipulator moves reliably is decided in detail that is easy to underestimate: "+
             "printed-part tolerances, belt alignment, serviceable joints, and getting motors, drivers and "+
             "reference switches into one coherent loop. The kinematics were the smaller half.",

      tools: "Python, forward and inverse kinematics across six joints, Cartesian motion control, a serial "+
             "interface to the motion controller, stepper drives and pneumatic actuation.",

      path: "Spacecraft mechanisms are mechanical, electrical and software at once. Doing all three on one "+
            "machine showed me where those boundaries actually cause problems."
    }
  ]
};
