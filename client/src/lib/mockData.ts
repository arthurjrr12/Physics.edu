import { Path, Module, Quiz } from "@/types";
import { 
  Building, 
  HeartPulse, 
  PlaneTakeoff 
} from "lucide-react";

export const paths: Path[] = [
  {
    id: "engineering",
    title: "Physics for Engineers",
    description: "Master the foundational physics principles that drive engineering innovation. From mechanics to electromagnetism, learn how physics enables engineers to design, build, and optimize systems.",
    iconClass: "ri-building-line",
    icon: Building,
    bgColor: "bg-primary",
    btnBg: "bg-primary",
    tags: ["Mechanics", "Thermodynamics", "Electromagnetism"],
    tagBg: "bg-blue-100",
    tagText: "text-blue-800"
  },
  {
    id: "healthcare",
    title: "Physics for Doctors",
    description: "Discover how physics drives medical technology and treatments. From radiation therapy to diagnostic imaging, understand the physics behind modern medicine.",
    iconClass: "ri-heart-pulse-line",
    icon: HeartPulse,
    bgColor: "bg-[#1DAFB8]",
    btnBg: "bg-[#1DAFB8]",
    tags: ["Radiation", "Medical Imaging", "Biomechanics"],
    tagBg: "bg-teal-100",
    tagText: "text-teal-800"
  },
  {
    id: "aviation",
    title: "Physics for Pilots",
    description: "Understand the physics principles that keep aircraft in the sky. Learn about aerodynamics, meteorology, and the physics of navigation essential for pilots.",
    iconClass: "ri-flight-takeoff-line",
    icon: PlaneTakeoff,
    bgColor: "bg-[#FF9500]",
    btnBg: "bg-[#FF9500]",
    tags: ["Aerodynamics", "Meteorology", "Navigation"],
    tagBg: "bg-amber-100",
    tagText: "text-amber-800"
  }
];

export const modules: Module[] = [
  // Engineering Modules
  {
    id: "eng-intro",
    pathId: "engineering",
    title: "Scientific Method & Measurement",
    description: "Foundation of scientific inquiry and measurement principles",
    order: 1,
    content: "Introduction to physics for engineering applications.",
    learningObjectives: [
      "Understand and apply the scientific method to engineering problems",
      "Master basic and advanced measurement techniques",
      "Develop proficiency in vector calculations"
    ],
    keyTerms: ["Scientific Method", "Hypothesis", "Measurement", "Units", "Vectors", "Vector Components"],
    stemActivities: [
      {
        id: "eng-intro-act1",
        title: "Vector Addition in Real Space",
        description: "Create a physical model to demonstrate vector addition and component analysis.",
        materials: ["Grid paper", "Colored strings", "Pushpins", "Protractor", "Ruler", "Weights"],
        steps: [
          "Draw a coordinate system on grid paper",
          "Use pushpins to mark origin and endpoints",
          "Represent vectors with colored strings",
          "Demonstrate vector addition physically",
          "Measure components and resultant vectors",
          "Verify calculations with physical measurements"
        ],
        expectedOutcome: "A physical demonstration that confirms vector addition calculations and component analysis.",
        scienceConnection: "This activity demonstrates how vector mathematics translates to physical space—a concept critical for engineers when analyzing forces, velocities, and other vector quantities in real-world systems.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ],
    subModules: [
      "Basic Scientific Method", 
      "Advanced Scientific Method", 
      "Basic Measurement", 
      "Advanced Measurement", 
      "Basic Vectors Calculation", 
      "Advanced Vectors Calculation"
    ]
  },
  {
    id: "eng-forces",
    pathId: "engineering",
    title: "Forces & Motion",
    description: "Newton's laws and applications in various contexts",
    order: 2,
    content: "Understanding forces and motion in engineering contexts.",
    learningObjectives: [
      "Apply Newton's laws to predict motion in various systems",
      "Analyze equilibrium conditions and friction forces",
      "Calculate motion parameters in horizontal, vertical, and circular systems"
    ],
    keyTerms: ["Newton's Laws", "Gravitation", "Equilibrium", "Friction", "Pendulum", "Projectile Motion"],
    stemActivities: [
      {
        id: "eng-forces-act1",
        title: "Inclined Plane Force Analyzer",
        description: "Build an apparatus to measure and analyze forces on an inclined plane.",
        materials: ["Wooden board", "Protractor", "Spring scale", "Various objects of different masses", "Sandpaper strips", "Smooth plastic sheets", "Digital kitchen scale"],
        steps: [
          "Construct an adjustable inclined plane",
          "Add different surface materials (smooth, rough)",
          "Place objects of known mass on the plane",
          "Measure force required to prevent sliding",
          "Vary the angle and record measurements",
          "Graph relationship between angle and force",
          "Calculate coefficient of friction for different surfaces"
        ],
        expectedOutcome: "Data that demonstrates the relationship between incline angle, mass, surface texture, and the forces involved.",
        scienceConnection: "This activity demonstrates Newton's laws, vector resolution, and friction forces on inclined planes. Engineers use these principles when designing ramps, roads, conveyor systems, and any application where objects move on sloped surfaces.",
        difficultyLevel: "intermediate",
        estimatedTime: "75 minutes"
      }
    ],
    subModules: [
      "Newton's Laws Application", 
      "Newton's Law of Gravitation", 
      "Equilibrium and Friction Forces", 
      "Motion in Inclined Planes", 
      "Single Pendulum and Double Pendulum", 
      "Motion (Horizontal, Vertical, Projectile and Circular)"
    ]
  },
  {
    id: "eng-energy",
    pathId: "engineering",
    title: "Energy, Work & Power",
    description: "Energy transformation principles and relationships",
    order: 3,
    content: "Exploring energy transformation and conservation in engineering systems.",
    learningObjectives: [
      "Analyze potential and kinetic energy transformations",
      "Apply the work-energy theorem to engineering problems",
      "Calculate power in mechanical and electrical systems"
    ],
    keyTerms: ["Potential Energy", "Kinetic Energy", "Work-Energy Theorem", "Power", "Conservation of Energy", "Efficiency"],
    stemActivities: [
      {
        id: "eng-energy-act1",
        title: "Energy Conversion Efficiency Analyzer",
        description: "Build a multi-stage energy conversion system and measure efficiency at each stage.",
        materials: ["Small electric motor/generator", "LED lights", "Hand crank", "Multimeter", "Rubber bands", "Small weights", "Stopwatch"],
        steps: [
          "Assemble a system converting mechanical energy to electrical energy to light",
          "Apply measured mechanical work using weights or hand crank",
          "Measure electrical output with multimeter",
          "Measure light output using a light sensor",
          "Calculate efficiency at each conversion stage",
          "Identify where energy losses occur",
          "Design improvements to increase system efficiency"
        ],
        expectedOutcome: "A quantitative analysis of energy transformations and losses through multiple conversion stages.",
        scienceConnection: "This activity demonstrates the law of conservation of energy while showing how energy transforms and diminishes through various conversions—a key concept in designing efficient mechanical, electrical, and thermal systems in engineering.",
        difficultyLevel: "advanced",
        estimatedTime: "90 minutes"
      }
    ],
    subModules: [
      "Potential and Kinetic Energies", 
      "Work-Energy Relationship", 
      "Power"
    ]
  },
  {
    id: "eng-thermo",
    pathId: "engineering",
    title: "Thermodynamics",
    description: "Heat transfer and thermal systems",
    order: 4,
    content: "Understanding thermodynamic principles in engineering applications.",
    learningObjectives: [
      "Analyze temperature scales and heat transfer methods",
      "Apply the laws of thermodynamics to engineering systems",
      "Evaluate the efficiency of heat engines and refrigeration cycles"
    ],
    keyTerms: ["Temperature", "Heat Transfer", "Laws of Thermodynamics", "Entropy", "Carnot Cycle", "Thermal Efficiency"],
    stemActivities: [
      {
        id: "eng-thermo-act1",
        title: "Heat Engine Demonstrator",
        description: "Create a working model of a simple heat engine that converts thermal energy to mechanical work.",
        materials: ["Glass flask", "Rubber stopper with hole", "Glass tubing", "Rubber tubing", "Toy turbine wheel", "Bunsen burner or hot plate", "Ice bath", "Thermometers"],
        steps: [
          "Set up a closed system with water in the flask",
          "Create a temperature difference (hot source and cold sink)",
          "Connect vapor output to drive a small turbine",
          "Measure temperature of hot and cold reservoirs",
          "Measure mechanical work output",
          "Calculate thermal efficiency",
          "Compare to theoretical Carnot efficiency"
        ],
        expectedOutcome: "A functioning heat engine model that demonstrates conversion of thermal energy to mechanical work, with quantitative analysis of efficiency.",
        scienceConnection: "This activity demonstrates the second law of thermodynamics and heat engine principles. Engineers apply these concepts when designing power plants, engines, refrigeration systems, and any thermal-mechanical energy conversion systems.",
        difficultyLevel: "advanced",
        estimatedTime: "120 minutes"
      }
    ],
    subModules: [
      "Temperature and Temperature Scales", 
      "Quantity of Heat and Methods of Heat Transfer", 
      "Engines and Refrigerators", 
      "Laws of Thermodynamics"
    ]
  },
  {
    id: "eng-em",
    pathId: "engineering",
    title: "Electromagnetism",
    description: "Electricity, circuits, and magnetic fields",
    order: 5,
    content: "Exploring electromagnetic principles in engineering applications.",
    learningObjectives: [
      "Design and analyze electric circuits using Ohm's Law",
      "Calculate electrical potential, current, and resistance in circuits",
      "Understand the relationship between electric and magnetic fields"
    ],
    keyTerms: ["Ohm's Law", "Electric Potential", "Resistance", "Current", "Magnetic Field", "Electromagnetic Induction"],
    stemActivities: [
      {
        id: "eng-em-act1",
        title: "Electromagnetic Field Visualizer",
        description: "Create apparatus to visualize and measure electromagnetic fields around current-carrying conductors.",
        materials: ["Copper wire", "Iron filings", "Graph paper", "DC power supply", "Compass needles", "Magnets of various strengths", "Hall effect sensor (if available)"],
        steps: [
          "Construct various wire configurations (straight, loop, solenoid)",
          "Connect to power supply with variable current",
          "Use iron filings to visualize magnetic fields",
          "Create a mapping grid for quantitative measurement",
          "Measure field strength at various distances",
          "Graph the relationship between current and field strength",
          "Compare experimental results with theoretical calculations"
        ],
        expectedOutcome: "Visual and quantitative data showing how the shape and strength of magnetic fields relate to current and conductor configuration.",
        scienceConnection: "This activity demonstrates the fundamental relationship between electricity and magnetism. These electromagnetic principles are the foundation for electric motors, generators, transformers, and countless electronic devices engineered for modern technology.",
        difficultyLevel: "advanced",
        estimatedTime: "90 minutes"
      }
    ],
    subModules: [
      "Electric Circuits", 
      "Ohm's Law", 
      "Electric Potential", 
      "Electrical Resistance", 
      "Magnetic and Electric Fields"
    ]
  },
  {
    id: "eng-waves",
    pathId: "engineering",
    title: "Waves & Optics",
    description: "Wave phenomena and optical principles",
    order: 6,
    content: "Understanding wave properties and optical systems in engineering applications.",
    learningObjectives: [
      "Analyze the fundamental properties of waves",
      "Apply wave principles to sound and light phenomena",
      "Design and evaluate optical instruments and systems"
    ],
    keyTerms: ["Wave Properties", "Sound Waves", "Light", "Reflection", "Refraction", "Optical Instruments"],
    stemActivities: [
      {
        id: "eng-waves-act1",
        title: "Advanced Spectroscope Builder",
        description: "Design and construct a precise spectroscope to analyze light spectra.",
        materials: ["Diffraction grating (1000+ lines/mm)", "Cardboard tube", "Black construction paper", "Razor blade/knife", "Protractor", "LED lights of various colors", "Compact fluorescent light", "Camera (optional)"],
        steps: [
          "Design and construct a light-tight housing",
          "Create precision slit for light entry",
          "Mount diffraction grating at precise angle",
          "Calibrate using known light sources",
          "Observe and record spectra from different sources",
          "Measure wavelengths of spectral lines",
          "Compare measured values with published data"
        ],
        expectedOutcome: "A functional spectroscope capable of separating light into its component wavelengths, with quantitative measurements of spectral lines.",
        scienceConnection: "This activity demonstrates wave properties of light including diffraction and interference. Engineers apply these principles in designing optical instruments, communication systems, and analytical tools used in fields ranging from astronomy to materials science.",
        difficultyLevel: "advanced",
        estimatedTime: "120 minutes"
      }
    ],
    subModules: [
      "Wave Properties", 
      "Sound Waves", 
      "Light", 
      "Optical Instruments"
    ]
  },
  
  // Healthcare Modules
  {
    id: "health-intro",
    pathId: "healthcare",
    title: "Introduction",
    description: "Basic principles and foundations",
    order: 1,
    content: "Introduction to physics for medical applications.",
    learningObjectives: [
      "Identify the fundamental physics concepts relevant to medicine",
      "Recognize how physics principles are applied in medical technologies",
      "Understand the historical development of medical physics"
    ],
    keyTerms: ["Biomechanics", "Medical Imaging", "Radiation", "Optics", "Acoustics"],
    stemActivities: [
      {
        id: "health-intro-act1",
        title: "Stethoscope Physics Explorer",
        description: "Build a simple stethoscope and explore the physics of sound in medical diagnosis.",
        materials: ["Flexible tubing", "Small funnels", "Tape", "Scissors", "Various materials (cloth, paper, water) for sound testing"],
        steps: [
          "Connect a funnel to each end of the tubing",
          "Create a seal at the listening end",
          "Test your stethoscope on different surfaces",
          "Record and compare sounds through different materials",
          "Explore how placement affects sound quality",
          "Discuss how acoustic principles inform medical device design"
        ],
        expectedOutcome: "A functioning stethoscope that demonstrates acoustic principles and how they're applied in medicine.",
        scienceConnection: "This activity demonstrates the physics of sound waves, including transmission, amplification, and frequency detection—principles that underlie many diagnostic tools in medicine.",
        difficultyLevel: "beginner",
        estimatedTime: "45 minutes"
      }
    ]
  },
  {
    id: "health-radiation",
    pathId: "healthcare",
    title: "Radiation Physics",
    description: "Types of radiation and safety",
    order: 2,
    content: "Understanding radiation physics for medical applications.",
    learningObjectives: [
      "Differentiate between types of radiation used in medicine",
      "Explain how radiation interacts with biological tissues",
      "Apply radiation safety principles in medical settings"
    ],
    keyTerms: ["Ionizing Radiation", "Half-life", "Absorption", "Shielding", "Dosimetry", "Radioisotope"],
    stemActivities: [
      {
        id: "health-radiation-act1",
        title: "Radiation Shielding Experiment",
        description: "Test the effectiveness of different materials in blocking light (as an analogy for radiation shielding).",
        materials: ["Flashlight", "Light meter or smartphone light meter app", "Various materials (aluminum foil, paper, plastic, cloth)", "Ruler", "Graph paper"],
        steps: [
          "Set up a controlled testing environment with minimal ambient light",
          "Place the light meter at a fixed distance from the flashlight",
          "Record baseline light intensity without shielding",
          "Test different materials as shields, recording light intensity for each",
          "Test layered combinations of materials",
          "Graph the effectiveness of different materials and thicknesses"
        ],
        expectedOutcome: "Data showing the relative effectiveness of different materials in blocking light, serving as an analogy for radiation shielding properties.",
        scienceConnection: "While visible light differs from ionizing radiation, this activity introduces concepts of attenuation, material properties, and the inverse square law that apply to radiation physics in medical imaging and treatment.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ]
  },
  {
    id: "health-imaging",
    pathId: "healthcare",
    title: "Medical Imaging",
    description: "Physics of diagnostic imaging",
    order: 3,
    content: "Exploring the physics behind medical imaging technologies.",
    learningObjectives: [
      "Compare physical principles behind different imaging technologies",
      "Analyze how image formation occurs in various modalities",
      "Evaluate advantages and limitations of imaging techniques"
    ],
    keyTerms: ["Ultrasound", "MRI", "CT Scan", "X-ray", "Contrast", "Resolution"],
    stemActivities: [
      {
        id: "health-imaging-act1",
        title: "Ultrasound Modeling Lab",
        description: "Create a model demonstrating how ultrasound imaging works by detecting objects in an opaque container.",
        materials: ["Large opaque container", "Water", "Various objects of different densities", "Wooden dowel or rod", "Ruler", "Grid paper", "Modeling clay"],
        steps: [
          "Fill the container with water and place objects inside",
          "Create a grid system on top of the container",
          "Use the dowel to probe the container at grid intersections",
          "Record the depth at which the dowel encounters resistance",
          "Map the hidden objects based on probe measurements",
          "Compare your map to the actual arrangement of objects"
        ],
        expectedOutcome: "A mapped representation of hidden objects that demonstrates the principle of echo-location used in ultrasound imaging.",
        scienceConnection: "This activity models how ultrasound imaging uses sound wave reflection to create images of internal structures, demonstrating concepts of wave reflection, velocity measurement, and image reconstruction used in medical sonography.",
        difficultyLevel: "intermediate",
        estimatedTime: "75 minutes"
      }
    ]
  },
  {
    id: "health-biomech",
    pathId: "healthcare",
    title: "Biomechanics",
    description: "Physics of the human body",
    order: 4,
    content: "Understanding biomechanical principles in healthcare.",
    learningObjectives: [
      "Apply mechanical principles to human movement",
      "Analyze forces and torques in the musculoskeletal system",
      "Evaluate biomechanical interventions in medical treatments"
    ],
    keyTerms: ["Lever", "Torque", "Center of Mass", "Gait Analysis", "Prosthetics", "Joint Mechanics"],
    stemActivities: [
      {
        id: "health-biomech-act1",
        title: "Biomechanical Arm Model",
        description: "Build a functional model of the human arm to demonstrate biomechanical principles of levers and muscle mechanics.",
        materials: ["Cardboard", "Brads/paper fasteners", "Rubber bands", "String", "Small weights", "Protractor", "Ruler"],
        steps: [
          "Cut cardboard pieces to represent arm bones (humerus, radius, ulna)",
          "Connect the pieces with brads to create joints",
          "Attach rubber bands to represent antagonistic muscle pairs",
          "Create points for attaching weights to the hand",
          "Measure force required to lift different weights",
          "Experiment with different muscle attachment points and angles"
        ],
        expectedOutcome: "A functioning model demonstrating lever systems in the human arm and how muscle position affects mechanical advantage.",
        scienceConnection: "This activity demonstrates the third-class lever system in the human arm, showing how biomechanical principles determine strength, range of motion, and efficiency—concepts critical in physical therapy, orthopedics, and prosthetic design.",
        difficultyLevel: "advanced",
        estimatedTime: "90 minutes"
      }
    ]
  },
  {
    id: "health-waves",
    pathId: "healthcare",
    title: "Waves & Optics",
    description: "Ultrasound and optical instruments",
    order: 5,
    content: "Exploring waves and optics in medical applications.",
    learningObjectives: [
      "Explain how wave properties apply to medical technologies",
      "Analyze optical systems used in medical instruments",
      "Evaluate diagnostic applications of wave-based technologies"
    ],
    keyTerms: ["Frequency", "Wavelength", "Refraction", "Reflection", "Doppler Effect", "Focal Length"],
    stemActivities: [
      {
        id: "health-waves-act1",
        title: "Medical Endoscope Simulator",
        description: "Build a simple endoscope model to understand fiber optics and lenses in medical imaging.",
        materials: ["PVC pipe or cardboard tubes", "Small mirrors", "Magnifying lens", "Smartphone with flashlight", "Tape", "Small objects for viewing", "Black construction paper"],
        steps: [
          "Construct a tube with a viewing port and a light source port",
          "Install mirrors at 45-degree angles to create a periscope effect",
          "Add a magnifying lens at the viewing end",
          "Create a chamber with small objects to 'diagnose'",
          "Use your device to view and identify objects in the chamber",
          "Experiment with different lens configurations"
        ],
        expectedOutcome: "A functioning optical device that demonstrates principles used in medical endoscopes to view inaccessible areas.",
        scienceConnection: "This activity demonstrates principles of reflection, refraction, and image transmission that are fundamental to fiber optic endoscopes, laparoscopes, and other minimally invasive diagnostic tools used in modern medicine.",
        difficultyLevel: "advanced",
        estimatedTime: "90 minutes"
      }
    ]
  },
  
  // Aviation Modules
  {
    id: "avia-intro",
    pathId: "aviation",
    title: "Introduction",
    description: "Basic principles and foundations",
    order: 1,
    content: "Introduction to physics for aviation.",
    learningObjectives: [
      "Identify key physics concepts relevant to aviation",
      "Recognize how physics principles enable flight",
      "Understand the historical development of flight physics"
    ],
    keyTerms: ["Aerodynamics", "Pressure", "Density", "Gravity", "Thrust", "Drag"],
    stemActivities: [
      {
        id: "avia-intro-act1",
        title: "Paper Airplane Physics Lab",
        description: "Design, build, and test paper airplanes to explore basic principles of flight.",
        materials: ["Various types of paper", "Scissors", "Tape", "Paper clips", "Ruler", "Stopwatch", "Measuring tape"],
        steps: [
          "Research different paper airplane designs",
          "Create three different designs with the same paper",
          "Test each design for distance, flight time, and stability",
          "Modify one design by adding weight at different positions",
          "Record the effect of modifications on flight characteristics",
          "Analyze which design features affect specific flight properties"
        ],
        expectedOutcome: "Multiple paper airplane designs with test data showing how design affects flight characteristics.",
        scienceConnection: "This activity introduces the four forces of flight (lift, weight, thrust, drag) and demonstrates how wing shape, weight distribution, and center of gravity affect flight performance—principles that aeronautical engineers use in aircraft design.",
        difficultyLevel: "beginner",
        estimatedTime: "60 minutes"
      }
    ]
  },
  {
    id: "avia-aero",
    pathId: "aviation",
    title: "Aerodynamics",
    description: "Principles of flight",
    order: 2,
    content: "Understanding aerodynamic principles for aviation.",
    learningObjectives: [
      "Explain how airfoils generate lift",
      "Apply Bernoulli's principle to wing design",
      "Analyze factors affecting drag and lift in aircraft"
    ],
    keyTerms: ["Airfoil", "Bernoulli's Principle", "Angle of Attack", "Boundary Layer", "Lift Coefficient", "Streamlining"],
    stemActivities: [
      {
        id: "avia-aero-act1",
        title: "Wind Tunnel Airfoil Testing",
        description: "Build a simple wind tunnel to test different airfoil shapes and visualize airflow patterns.",
        materials: ["Clear plastic box or container", "Small fan", "Straws", "Cardboard", "Clay", "Thread or yarn", "Smoke source (optional - under supervision only)"],
        steps: [
          "Cut openings in the plastic container for air intake and outflow",
          "Create a test section with clear visibility",
          "Install straws as flow straighteners at the intake",
          "Create different airfoil shapes from cardboard",
          "Mount airfoils in the test section",
          "Use threads as flow indicators to visualize air patterns",
          "Test lift by mounting airfoils on a balance"
        ],
        expectedOutcome: "A functional wind tunnel that allows visualization of airflow patterns around different wing shapes and comparative testing of lift generation.",
        scienceConnection: "This activity demonstrates Bernoulli's principle, flow separation, boundary layer effects, and pressure differential—concepts central to understanding how wings generate lift and how aircraft maintain controlled flight.",
        difficultyLevel: "advanced",
        estimatedTime: "120 minutes"
      }
    ]
  },
  {
    id: "avia-meteo",
    pathId: "aviation",
    title: "Meteorology Physics",
    description: "Weather patterns and phenomena",
    order: 3,
    content: "Exploring the physics of meteorology for pilots.",
    learningObjectives: [
      "Explain atmospheric structure and pressure systems",
      "Analyze the physics of weather phenomena relevant to aviation",
      "Evaluate how weather conditions affect flight operations"
    ],
    keyTerms: ["Air Mass", "Front", "Pressure Gradient", "Coriolis Effect", "Convection", "Precipitation"],
    stemActivities: [
      {
        id: "avia-meteo-act1",
        title: "Cloud Formation Chamber",
        description: "Create a cloud in a bottle to demonstrate principles of air pressure, temperature, and condensation.",
        materials: ["Clear plastic bottle with cap", "Warm water", "Match or incense stick (for smoke particles)", "Pump with valve adapter (or bicycle pump)"],
        steps: [
          "Add a small amount of warm water to the bottle",
          "Introduce some smoke particles as condensation nuclei",
          "Seal the bottle and pressurize it with the pump",
          "Observe the bottle contents - no cloud should be visible yet",
          "Quickly release the pressure by opening the cap",
          "Observe the sudden formation of a cloud inside the bottle",
          "Experiment with different temperature water and pressure levels"
        ],
        expectedOutcome: "A visible cloud forming inside the bottle, demonstrating adiabatic cooling and condensation principles.",
        scienceConnection: "This activity demonstrates principles of pressure-temperature relationships, adiabatic processes, and condensation that drive cloud formation and many weather phenomena pilots must understand. It shows how changing pressure affects air temperature and water's phase state.",
        difficultyLevel: "intermediate",
        estimatedTime: "45 minutes"
      }
    ]
  },
  {
    id: "avia-nav",
    pathId: "aviation",
    title: "Navigation Physics",
    description: "Principles of navigation systems",
    order: 4,
    content: "Understanding the physics behind navigation systems.",
    learningObjectives: [
      "Explain physical principles behind navigation systems",
      "Analyze how electromagnetic waves are used for positioning",
      "Apply trigonometric principles to navigation problems"
    ],
    keyTerms: ["Radio Waves", "Triangulation", "GPS", "Magnetic Compass", "Great Circle", "Radio Direction Finding"],
    stemActivities: [
      {
        id: "avia-nav-act1",
        title: "Triangulation Navigation Challenge",
        description: "Use bearings from multiple known positions to locate an unknown position, simulating radio navigation techniques.",
        materials: ["Large paper or map", "Protractor", "Ruler", "String", "Pushpins", "Compass"],
        steps: [
          "Create a coordinate grid on large paper",
          "Establish three 'transmitter' positions with pushpins",
          "Have someone place a target object out of sight",
          "From each transmitter, measure the bearing to the target",
          "Draw lines from each transmitter along the measured bearings",
          "Identify the target location where the lines intersect",
          "Calculate the accuracy of your triangulation"
        ],
        expectedOutcome: "Successfully locating a hidden object using principles of triangulation, with an understanding of error sources.",
        scienceConnection: "This activity demonstrates the principles behind VOR (VHF Omnidirectional Range) and other radio navigation systems. It shows how directional information from multiple known points can determine an unknown position—a fundamental concept in aviation navigation.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ]
  },
  {
    id: "avia-propulsion",
    pathId: "aviation",
    title: "Propulsion Systems",
    description: "Engines and thrust",
    order: 5,
    content: "Exploring the physics of aircraft propulsion systems.",
    learningObjectives: [
      "Compare different propulsion systems used in aviation",
      "Analyze thrust generation in jet and propeller engines",
      "Evaluate efficiency and performance factors in propulsion"
    ],
    keyTerms: ["Thrust", "Propeller", "Jet Engine", "Compression", "Combustion", "Newton's Third Law"],
    stemActivities: [
      {
        id: "avia-propulsion-act1",
        title: "Balloon Jet Propulsion Lab",
        description: "Create a balloon-powered thrust demonstration with measurements and modifications.",
        materials: ["Balloons", "Fishing line or string (10+ feet)", "Straw", "Tape", "Stopwatch", "Measuring tape", "Various nozzle materials (paper, plastic)"],
        steps: [
          "Thread a fishing line through a straw",
          "Secure the line horizontally across the room",
          "Attach a balloon to the straw with the opening facing backward",
          "Mark start and finish positions on the line",
          "Inflate the balloon and release it to travel along the line",
          "Time the balloon's journey and calculate velocity",
          "Experiment with different balloon sizes and nozzle shapes",
          "Graph the relationship between air volume and distance/speed"
        ],
        expectedOutcome: "Quantitative data showing the relationship between air pressure, nozzle shape, and resulting thrust performance.",
        scienceConnection: "This activity demonstrates Newton's Third Law, the principle behind all jet propulsion systems. It shows how the expulsion of mass (air) in one direction creates thrust in the opposite direction—the fundamental physics behind how jet engines generate the thrust that powers modern aircraft.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ]
  }
];

export const quizzes: Quiz[] = [
  // Engineering Quizzes
  {
    id: "eng-quiz-1",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 1,
    question: "An engineer is designing a roller coaster. What happens to the potential energy as the car descends?",
    description: "Test your knowledge on energy conservation principles",
    options: [
      { id: "eng-q1-a", text: "It disappears completely" },
      { id: "eng-q1-b", text: "It converts to kinetic energy" },
      { id: "eng-q1-c", text: "It stays the same regardless of height" },
      { id: "eng-q1-d", text: "It increases as velocity increases" }
    ],
    correctOption: "eng-q1-b",
    explanation: "According to the law of conservation of energy, energy cannot be created or destroyed, only transformed. As the roller coaster car descends, gravitational potential energy (mgh) is converted into kinetic energy (½mv²). This is why the car speeds up as it goes down."
  },
  {
    id: "eng-quiz-2",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 2,
    question: "Which of the following is the correct formula for calculating work done?",
    description: "Apply your understanding of work in physics",
    options: [
      { id: "eng-q2-a", text: "W = F × t (Force × time)" },
      { id: "eng-q2-b", text: "W = F × d (Force × displacement)" },
      { id: "eng-q2-c", text: "W = m × v (Mass × velocity)" },
      { id: "eng-q2-d", text: "W = ½mv² (Kinetic energy)" }
    ],
    correctOption: "eng-q2-b",
    explanation: "Work is defined as the product of the force applied and the displacement in the direction of the force (W = F × d). This formula is crucial in engineering when calculating energy transfer in mechanical systems."
  },
  {
    id: "eng-quiz-3",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 3,
    question: "In a hydroelectric dam, which energy transformation occurs?",
    description: "Understanding energy transformations in real-world applications",
    options: [
      { id: "eng-q3-a", text: "Nuclear energy to electrical energy" },
      { id: "eng-q3-b", text: "Chemical energy to mechanical energy" },
      { id: "eng-q3-c", text: "Gravitational potential energy to electrical energy" },
      { id: "eng-q3-d", text: "Solar energy to thermal energy" }
    ],
    correctOption: "eng-q3-c",
    explanation: "In a hydroelectric dam, water stored at height has gravitational potential energy. As water flows downward, this potential energy converts to kinetic energy in the flowing water, which then turns turbines to generate electrical energy. Understanding this energy transformation chain is crucial for engineers designing renewable energy systems."
  },
  {
    id: "eng-quiz-4",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 4,
    question: "According to the second law of thermodynamics, what happens to the entropy of an isolated system over time?",
    description: "Apply thermodynamic principles to engineering systems",
    options: [
      { id: "eng-q4-a", text: "It always decreases" },
      { id: "eng-q4-b", text: "It remains constant" },
      { id: "eng-q4-c", text: "It always increases" },
      { id: "eng-q4-d", text: "It fluctuates randomly" }
    ],
    correctOption: "eng-q4-c",
    explanation: "The second law of thermodynamics states that the entropy (disorder) of an isolated system always increases over time. This principle explains why heat flows from hot to cold objects, why engines can't be 100% efficient, and why certain processes are irreversible—all critical concepts in engineering design."
  },
  {
    id: "eng-quiz-5",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 5,
    question: "When designing a lever system, what determines its mechanical advantage?",
    description: "Apply principles of mechanical advantage to engineering",
    options: [
      { id: "eng-q5-a", text: "The material the lever is made from" },
      { id: "eng-q5-b", text: "The ratio of the effort arm to the load arm" },
      { id: "eng-q5-c", text: "The total weight of the lever" },
      { id: "eng-q5-d", text: "The speed at which the lever is operated" }
    ],
    correctOption: "eng-q5-b",
    explanation: "The mechanical advantage of a lever is determined by the ratio of the effort arm (distance from the fulcrum to where the force is applied) to the load arm (distance from the fulcrum to where the load is located). This ratio determines how much a lever amplifies force, which is essential knowledge for engineers designing mechanical systems."
  },
  
  // Healthcare Quizzes
  {
    id: "health-quiz-1",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 1,
    question: "Which physical property is utilized in MRI technology for medical imaging?",
    description: "Test your knowledge on medical imaging physics",
    options: [
      { id: "health-q1-a", text: "X-ray absorption" },
      { id: "health-q1-b", text: "Nuclear magnetic resonance" },
      { id: "health-q1-c", text: "Ultrasonic reflection" },
      { id: "health-q1-d", text: "Infrared emission" }
    ],
    correctOption: "health-q1-b",
    explanation: "Magnetic Resonance Imaging (MRI) utilizes the physical phenomenon of nuclear magnetic resonance (NMR). It measures the radiofrequency energy released by hydrogen atoms in the body when they are placed in a strong magnetic field and exposed to radio waves. This property allows for detailed imaging of soft tissues without using ionizing radiation."
  },
  {
    id: "health-quiz-2",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 2,
    question: "Which type of radiation has the highest energy and greatest penetrating power?",
    description: "Understanding radiation properties for medical applications",
    options: [
      { id: "health-q2-a", text: "Alpha particles" },
      { id: "health-q2-b", text: "Beta particles" },
      { id: "health-q2-c", text: "Gamma rays" },
      { id: "health-q2-d", text: "Ultraviolet light" }
    ],
    correctOption: "health-q2-c",
    explanation: "Gamma rays have the highest energy and greatest penetrating power among these options. This property makes them useful in certain medical treatments like radiation therapy for cancer, but also requires proper shielding for protection. Healthcare professionals must understand radiation properties to ensure patient safety during diagnostic and therapeutic procedures."
  },
  {
    id: "health-quiz-3",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 3,
    question: "In ultrasound imaging, what physical principle allows for the creation of images?",
    description: "Exploring the physics behind diagnostic ultrasound",
    options: [
      { id: "health-q3-a", text: "Photoelectric effect" },
      { id: "health-q3-b", text: "Reflection of sound waves at tissue boundaries" },
      { id: "health-q3-c", text: "Nuclear decay" },
      { id: "health-q3-d", text: "Magnetic field interactions" }
    ],
    correctOption: "health-q3-b",
    explanation: "Ultrasound imaging relies on the reflection (echo) of high-frequency sound waves at the boundaries between tissues with different acoustic impedances. When sound waves encounter a boundary between tissues of different densities, part of the wave is reflected back. By measuring these reflections, the ultrasound device can create an image of internal structures, making it valuable for non-invasive medical diagnostics."
  },
  {
    id: "health-quiz-4",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 4,
    question: "What physical principle explains how a defibrillator works to restore normal heart rhythm?",
    description: "Understanding physics applications in cardiac care",
    options: [
      { id: "health-q4-a", text: "Electrical depolarization of cardiac cells" },
      { id: "health-q4-b", text: "Nuclear magnetic resonance" },
      { id: "health-q4-c", text: "Infrared thermal imaging" },
      { id: "health-q4-d", text: "Ultrasonic vibration" }
    ],
    correctOption: "health-q4-a",
    explanation: "A defibrillator works by delivering a controlled electric shock to the heart, which causes simultaneous depolarization of cardiac cells. This momentary 'reset' can allow the heart's natural pacemaker to reestablish a normal rhythm. This application of electrical physics is critical in emergency cardiac care and illustrates how understanding physics principles can directly save lives in healthcare."
  },
  {
    id: "health-quiz-5",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 5,
    question: "Which physics concept explains why a patient feels weightless in a hydrotherapy pool?",
    description: "Applying fluid physics to rehabilitation techniques",
    options: [
      { id: "health-q5-a", text: "Bernoulli's principle" },
      { id: "health-q5-b", text: "Archimedes' principle" },
      { id: "health-q5-c", text: "Pascal's law" },
      { id: "health-q5-d", text: "Hooke's law" }
    ],
    correctOption: "health-q5-b",
    explanation: "Archimedes' principle states that the buoyant force on an object submerged in a fluid is equal to the weight of the fluid displaced by the object. In hydrotherapy, this buoyant force counteracts gravity, making patients feel lighter and enabling movements that might be difficult or impossible on land. This principle is fundamental to aquatic physical therapy in healthcare rehabilitation."
  },
  
  // Aviation Quizzes
  {
    id: "avia-quiz-1",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 1,
    question: "What physical principle explains why air pressure decreases with increasing altitude?",
    description: "Test your knowledge on meteorological physics",
    options: [
      { id: "avia-q1-a", text: "Bernoulli's principle" },
      { id: "avia-q1-b", text: "Boyle's law" },
      { id: "avia-q1-c", text: "The weight of air columns above" },
      { id: "avia-q1-d", text: "Coriolis effect" }
    ],
    correctOption: "avia-q1-c",
    explanation: "Air pressure decreases with increasing altitude primarily because of the decreasing weight of the air column above. At higher altitudes, there are fewer air molecules above a given point, resulting in less force (pressure) being exerted. This understanding is crucial for pilots as it affects aircraft performance, altimeter readings, and weather patterns."
  },
  {
    id: "avia-quiz-2",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 2,
    question: "Which aerodynamic principle creates the majority of lift for an aircraft wing?",
    description: "Understanding lift generation in aviation",
    options: [
      { id: "avia-q2-a", text: "Bernoulli's principle" },
      { id: "avia-q2-b", text: "Newton's third law" },
      { id: "avia-q2-c", text: "The Coanda effect" },
      { id: "avia-q2-d", text: "All of the above contribute significantly" }
    ],
    correctOption: "avia-q2-d",
    explanation: "Lift generation on an aircraft wing is a complex phenomenon involving multiple physical principles. Bernoulli's principle explains how the pressure difference between the upper and lower surfaces creates lift; Newton's third law describes how the wing deflects air downward, creating an equal and opposite upward force; and the Coanda effect explains how air flow attaches to the curved surface of the wing. Understanding these combined effects is essential for pilots and aviation engineers."
  },
  {
    id: "avia-quiz-3",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 3,
    question: "What causes a crosswind to affect an aircraft's ground track?",
    description: "Applying vector physics to aviation navigation",
    options: [
      { id: "avia-q3-a", text: "The Doppler effect" },
      { id: "avia-q3-b", text: "Vector addition of air movement and aircraft movement" },
      { id: "avia-q3-c", text: "The earth's magnetic field" },
      { id: "avia-q3-d", text: "Changes in air pressure" }
    ],
    correctOption: "avia-q3-b",
    explanation: "A crosswind affects an aircraft's ground track through vector addition. The aircraft's movement through the air (airspeed vector) combines with the wind's movement (wind vector) to produce the actual path over the ground (ground track vector). This is why pilots must calculate wind correction angles to maintain their desired course. Understanding vector physics is fundamental to aviation navigation and flight planning."
  },
  {
    id: "avia-quiz-4",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 4,
    question: "What physical phenomenon causes the formation of fog?",
    description: "Understanding meteorological physics for flight safety",
    options: [
      { id: "avia-q4-a", text: "Air compression" },
      { id: "avia-q4-b", text: "Condensation of water vapor" },
      { id: "avia-q4-c", text: "Ionization of air molecules" },
      { id: "avia-q4-d", text: "Electromagnetic interference" }
    ],
    correctOption: "avia-q4-b",
    explanation: "Fog forms through condensation of water vapor in the air. When air containing water vapor is cooled to its dew point, or when more water vapor is added to the air, the water vapor condenses into tiny water droplets suspended in the air. Understanding this process is crucial for pilots, as fog significantly reduces visibility and can make takeoffs and landings dangerous or impossible."
  },
  {
    id: "avia-quiz-5",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 5,
    question: "Which principle explains why aircraft with pressurized cabins are necessary for high-altitude flight?",
    description: "Understanding cabin pressurization physics",
    options: [
      { id: "avia-q5-a", text: "The low air pressure at high altitudes is insufficient for human respiration" },
      { id: "avia-q5-b", text: "The temperature at high altitudes is too low for human survival" },
      { id: "avia-q5-c", text: "To prevent cosmic radiation exposure" },
      { id: "avia-q5-d", text: "To maintain structural integrity of the aircraft" }
    ],
    correctOption: "avia-q5-a",
    explanation: "Aircraft cabins are pressurized primarily because the air pressure at high altitudes is too low to support adequate human respiration. At typical cruising altitudes (30,000-40,000 feet), the atmospheric pressure is only about 20-30% of sea level pressure. Without pressurization, passengers would suffer hypoxia (oxygen deficiency) due to the reduced partial pressure of oxygen, making breathing difficult or impossible."
  }
];
