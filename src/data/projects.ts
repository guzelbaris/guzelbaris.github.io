export type ProjectCategory = "Web" | "Robotics" | "FPGA" | "Electronics";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  status: "Coming soon" | "Completed";
  description: string;
  highlights: string[];
  technologies: string[];
  visual: "sudoku" | "restaurant" | "barber" | "robot" | "chip" | "signal";
  award?: string;
  link?: {
    label: string;
    href: string;
  };
};

export const projects: Project[] = [
  {
    id: "sudoku-lab",
    title: "Sudoku Lab",
    category: "Web",
    status: "Coming soon",
    description:
      "Bringing my C++ Sudoku solver and generator to the web an interactive space for puzzles, logic, and problem solving.",
    highlights: [
      "Existing C++ implementation uses backtracking to solve puzzles.",
      "Puzzle generation uses std::mt19937 and hashing techniques for performance optimisation.",
      "Planned web experience for generating and solving Sudoku puzzles.",
    ],
    technologies: ["C++", "Algorithms", "React · planned", "TypeScript · planned"],
    visual: "sudoku",
  },
  {
    id: "table-and-taste",
    title: "Table & Taste",
    category: "Web",
    status: "Coming soon",
    description:
      "A planned restaurant website concept combining inviting visuals with a clear, effortless browsing experience.",
    highlights: [
      "Planned menu presentation and restaurant storytelling.",
      "Responsive layouts with attention to typography and accessibility.",
    ],
    technologies: ["React · planned", "TypeScript · planned", "UI / UX"],
    visual: "restaurant",
  },
  {
    id: "sharp-studio",
    title: "Sharp Studio",
    category: "Web",
    status: "Coming soon",
    description:
      "A planned barber website and booking experience with a distinctive identity and a straightforward customer journey.",
    highlights: [
      "Planned service selection and appointment-booking interface.",
      "Mobile-first design with clear navigation.",
    ],
    technologies: ["React · planned", "TypeScript · planned", "UI / UX"],
    visual: "barber",
  },
  {
    id: "copycat",
    title: "CopyCat Robotics",
    category: "Robotics",
    status: "Completed",
    description:
      "Led a five-person team to build a two-vehicle Master–Agent robotic system with synchronous movement and constant-distance tracking.",
    highlights: [
      "Master vehicle followed user-drawn paths through a C++/Qt interface using TOF, gyroscope, wheel-counter, and accelerometer data.",
      "Camera-equipped Agent tracked the Master in real time using control algorithms and sensor fusion.",
      "Only team to fully complete the project.",
    ],
    technologies: ["C++", "Qt", "OpenCV", "Sensor fusion"],
    visual: "robot",
    award: "Good Product Design Award",
  },
  {
    id: "risc-processor",
    title: "Pipelined RISC Processor",
    category: "FPGA",
    status: "Completed",
    description:
      "An FPGA-based pipelined processor integrating hazard detection and branch prediction to improve instruction throughput.",
    highlights: [
      "Handled data and control hazards through a dedicated Hazard Detection Unit.",
      "Implemented branch prediction to reduce pipeline stalls.",
      "Verified through ModelSim simulation and Terasic DE1-SoC hardware testing.",
    ],
    technologies: ["Verilog", "ModelSim", "DE1-SoC", "Computer architecture"],
    visual: "chip",
  },
  {
    id: "light-driver",
    title: "Adaptive Light Driver",
    category: "Electronics",
    status: "Completed",
    description:
      "A microcontroller-based light-monitoring system with adjustable thresholds, RGB indicators, and a Nokia 5110 display.",
    highlights: [
      "Read luminosity through I2C and calculated average readings every second.",
      "Supported threshold adjustment through a potentiometer and 4×4 keypad.",
      "Displayed live readings and controlled LED outputs using transistor circuitry.",
    ],
    technologies: ["Microcontrollers", "I2C", "Nokia 5110", "Sensors"],
    visual: "signal",
    link: {
      label: "View source",
      href: "https://github.com/guzelbaris/LED-BASED-LIGHT-DRIVER-WITH-NOKIA5110",
    },
  },
  {
    id: "fpga-qos",
    title: "FPGA QoS Visualiser",
    category: "FPGA",
    status: "Completed",
    description:
      "A four-buffer Quality of Service system with dynamic priorities and live VGA visualisation.",
    highlights: [
      "Combined FIFO buffering with priority adjustments based on fill levels and reliability requirements.",
      "Visualised buffer states, transmission rates, dropped packets, and system status.",
      "Implemented adjustable automatic read intervals and a reusable VGA display core.",
    ],
    technologies: ["Verilog", "FIFO", "VGA", "DE1-SoC"],
    visual: "chip",
    link: {
      label: "View source",
      href: "https://github.com/guzelbaris/FPGA-QOS",
    },
  },
  {
    id: "transmission-analysis",
    title: "Transmission Line Analysis",
    category: "Electronics",
    status: "Completed",
    description:
      "MATLAB analysis of high-voltage transmission lines and cable configurations under different loads and environmental conditions.",
    highlights: [
      "Evaluated impedance, capacitance, inductance, and corona loss.",
      "Compared electrical performance to assess efficiency and reliability.",
    ],
    technologies: ["MATLAB", "Electrical engineering", "Modelling"],
    visual: "signal",
    link: {
      label: "View report",
      href: "https://drive.google.com/file/d/17JwqDeZK73Fo7VrGFZ1MUmzfvAm284Ut/view",
    },
  },
  {
    id: "micro-air-conditioner",
    title: "Micro Climate Controller",
    category: "Electronics",
    status: "Completed",
    description:
      "A low-cost analog temperature-control system designed to switch automatically between heating and cooling.",
    highlights: [
      "Used LM35 sensors, differential amplifiers, and comparator circuits for temperature control.",
      "Displayed temperature through proportional LED brightness.",
      "Used BJT circuits to drive heating and cooling outputs.",
    ],
    technologies: ["Analog electronics", "LM35", "Op-Amps", "BJT"],
    visual: "signal",
  },
];