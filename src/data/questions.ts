export interface Question {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  level: 1 | 2 | 3;
}

// Level 1: Basic questions (easier) - From Quiz Level 1
export const level1Questions: Question[] = [
  {
    id: 'L1-1',
    question: 'What is the main material used in most solar panels?',
    optionA: 'Copper',
    optionB: 'Silicon',
    optionC: 'Aluminum',
    optionD: 'Carbon',
    correctAnswer: 'B',
    level: 1
  },
  {
    id: 'L1-2',
    question: 'Which country currently leads the world in total solar power capacity?',
    optionA: 'USA',
    optionB: 'India',
    optionC: 'China',
    optionD: 'Germany',
    correctAnswer: 'C',
    level: 1
  },
  {
    id: 'L1-3',
    question: 'What does PV stand for in "Solar PV"?',
    optionA: 'Power Voltage',
    optionB: 'Photovoltaic',
    optionC: 'Panel Variation',
    optionD: 'Power Variable',
    correctAnswer: 'B',
    level: 1
  },
  {
    id: 'L1-4',
    question: 'How long do solar panels typically last?',
    optionA: '5 years',
    optionB: '10 years',
    optionC: '25 years or more',
    optionD: '50 years',
    correctAnswer: 'C',
    level: 1
  },
  {
    id: 'L1-5',
    question: 'What time of day do solar panels generate the most electricity?',
    optionA: 'Morning',
    optionB: 'Noon',
    optionC: 'Evening',
    optionD: 'Night',
    correctAnswer: 'B',
    level: 1
  },
  {
    id: 'L1-6',
    question: 'What is the name of the part of a wind turbine that converts mechanical energy into electricity?',
    optionA: 'Rotor',
    optionB: 'Gearbox',
    optionC: 'Generator',
    optionD: 'Tower',
    correctAnswer: 'C',
    level: 1
  },
  {
    id: 'L1-7',
    question: 'Modern wind turbines typically start producing power at what wind speed?',
    optionA: '2 m/s',
    optionB: '5 m/s',
    optionC: '10 m/s',
    optionD: '15 m/s',
    correctAnswer: 'B',
    level: 1
  },
  {
    id: 'L1-8',
    question: 'Which country has the largest installed wind power capacity?',
    optionA: 'USA',
    optionB: 'China',
    optionC: 'Germany',
    optionD: 'India',
    correctAnswer: 'B',
    level: 1
  },
  {
    id: 'L1-9',
    question: 'Offshore wind farms are located:',
    optionA: 'On top of mountains',
    optionB: 'In rural fields',
    optionC: 'In deserts',
    optionD: 'In oceans or large bodies of water',
    correctAnswer: 'D',
    level: 1
  },
  {
    id: 'L1-10',
    question: 'What does "WTG" stand for in the wind energy sector?',
    optionA: 'Wind Turbine Generator',
    optionB: 'Wind Technology Grid',
    optionC: 'Wind Torque Gear',
    optionD: 'Wind Tower Group',
    correctAnswer: 'A',
    level: 1
  },
  {
    id: 'L1-11',
    question: 'What is the full form of BESS in renewable energy?',
    optionA: 'Battery Energy Storage System',
    optionB: 'Basic Electric Solar Setup',
    optionC: 'Balanced Energy Saving System',
    optionD: 'Battery Efficiency Smart System',
    correctAnswer: 'A',
    level: 1
  },
  {
    id: 'L1-12',
    question: 'Which Indian state leads in wind power generation?',
    optionA: 'Gujarat',
    optionB: 'Maharashtra',
    optionC: 'Tamil Nadu',
    optionD: 'Karnataka',
    correctAnswer: 'C',
    level: 1
  },
  {
    id: 'L1-13',
    question: 'The main advantage of hybrid renewable systems (solar + wind) is:',
    optionA: 'Lower cost',
    optionB: 'Continuous power generation',
    optionC: 'Smaller land area',
    optionD: 'Easier installation',
    correctAnswer: 'B',
    level: 1
  },
];

// Level 2: Intermediate questions (medium difficulty) - From Quiz Level 2
export const level2Questions: Question[] = [
  {
    id: 'L2-1',
    question: 'What is the typical efficiency range of commercial solar PV modules?',
    optionA: '5–10%',
    optionB: '12–18%',
    optionC: '18–23%',
    optionD: '25–35%',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-2',
    question: 'In a solar PV system, which device converts DC to AC power?',
    optionA: 'Controller',
    optionB: 'Transformer',
    optionC: 'Inverter',
    optionD: 'Rectifier',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-3',
    question: 'What is the "tilt angle" in solar installation?',
    optionA: 'The height of the panel',
    optionB: 'The direction of the sunlight',
    optionC: 'The angle between the solar panel and the ground',
    optionD: 'The distance between panels',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-4',
    question: 'What is the function of an MPPT in a solar inverter?',
    optionA: 'Measures panel temperature',
    optionB: 'Maximizes power output by tracking voltage & current',
    optionC: 'Controls current flow from the grid',
    optionD: 'Stores backup power',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-5',
    question: 'What are bifacial solar panels designed to do?',
    optionA: 'Operate in two climates',
    optionB: 'Generate power from both sides',
    optionC: 'Function as cooling panels',
    optionD: 'Work without sunlight',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-6',
    question: 'The lifespan of a solar inverter is typically:',
    optionA: '2–3 years',
    optionB: '5–7 years',
    optionC: '10–12 years',
    optionD: '25 years',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-7',
    question: 'The rotor blades of a wind turbine are designed similar to:',
    optionA: 'Helicopter blades',
    optionB: 'Airplane wings',
    optionC: 'Boat propellers',
    optionD: 'Fan blades',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-8',
    question: 'What is the "cut-out" wind speed for most modern wind turbines?',
    optionA: '10 m/s',
    optionB: '15 m/s',
    optionC: '25 m/s',
    optionD: '40 m/s',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-9',
    question: 'In a WTG, the "yaw system" is responsible for:',
    optionA: 'Controlling blade speed',
    optionB: 'Aligning the rotor to face the wind',
    optionC: 'Regulating turbine temperature',
    optionD: 'Storing generated power',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-10',
    question: 'Which type of generator is commonly used in modern wind turbines?',
    optionA: 'DC generator',
    optionB: 'Synchronous generator',
    optionC: 'Induction generator',
    optionD: 'Step-up generator',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-11',
    question: 'The capacity factor of a wind turbine typically ranges between:',
    optionA: '5–10%',
    optionB: '15–25%',
    optionC: '30–45%',
    optionD: '60–70%',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-12',
    question: 'What is the purpose of the nacelle in a wind turbine?',
    optionA: 'To store electricity',
    optionB: 'To house mechanical components like gearbox, generator, etc.',
    optionC: 'To increase rotor speed',
    optionD: 'To connect tower to the foundation',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-13',
    question: 'What does "Hybrid Power System" typically combine?',
    optionA: 'Wind and hydro',
    optionB: 'Solar and wind',
    optionC: 'Biomass and coal',
    optionD: 'Diesel and hydro',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-14',
    question: 'Which component in BESS controls charge and discharge cycles?',
    optionA: 'BMS (Battery Management System)',
    optionB: 'Inverter',
    optionC: 'Controller',
    optionD: 'Charger',
    correctAnswer: 'A',
    level: 2
  },
  {
    id: 'L2-15',
    question: 'What is the main advantage of integrating BESS with solar/wind systems?',
    optionA: 'Reduced land use',
    optionB: 'Power availability even when generation stops',
    optionC: 'Easier grid synchronization',
    optionD: 'Less maintenance',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-16',
    question: 'Which battery type is most commonly used in grid-scale energy storage?',
    optionA: 'Lead-acid',
    optionB: 'Nickel-cadmium',
    optionC: 'Lithium-ion',
    optionD: 'Alkaline',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-17',
    question: 'What does SCADA stand for in renewable energy operations?',
    optionA: 'Supervisory Control and Data Acquisition',
    optionB: 'Smart Control and Data Application',
    optionC: 'Solar Control and Distribution Algorithm',
    optionD: 'Systematic Communication and Data Automation',
    correctAnswer: 'A',
    level: 2
  },
  {
    id: 'L2-18',
    question: 'What is the primary function of an MPPT (Maximum Power Point Tracker) in a solar inverter?',
    optionA: 'Track solar radiation intensity',
    optionB: 'Adjust voltage and current to extract maximum power from PV modules',
    optionC: 'Control inverter temperature',
    optionD: 'Synchronize inverter with the grid',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-19',
    question: 'The tilt angle of a solar panel should ideally be:',
    optionA: 'Equal to the site latitude',
    optionB: 'Equal to 45°',
    optionC: 'Equal to the declination angle',
    optionD: 'Always fixed horizontally',
    correctAnswer: 'A',
    level: 2
  },
  {
    id: 'L2-20',
    question: 'What is the primary reason for PID (Potential Induced Degradation) in solar panels?',
    optionA: 'Dust accumulation',
    optionB: 'Voltage stress and humidity causing leakage current',
    optionC: 'UV radiation exposure',
    optionD: 'Mechanical bending',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-21',
    question: 'What determines the cut-in speed of a wind turbine?',
    optionA: 'Blade length',
    optionB: 'Generator rating',
    optionC: 'Aerodynamic design and inertia',
    optionD: 'Hub height',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-22',
    question: 'The height of a wind turbine tower primarily affects:',
    optionA: 'Electrical efficiency',
    optionB: 'Wind speed availability and turbulence',
    optionC: 'Blade load',
    optionD: 'Generator synchronization',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-23',
    question: 'A site with average wind speed of 7 m/s is considered:',
    optionA: 'Poor for wind energy',
    optionB: 'Moderate',
    optionC: 'Good',
    optionD: 'Excellent',
    correctAnswer: 'C',
    level: 2
  },
  {
    id: 'L2-24',
    question: 'Which of these factors reduces turbine performance the most?',
    optionA: 'Increased wind shear',
    optionB: 'Blade erosion or fouling',
    optionC: 'Lower air density',
    optionD: 'Over-speed control',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-25',
    question: 'What does SoC stand for in a BESS?',
    optionA: 'Speed of Charge',
    optionB: 'State of Charge',
    optionC: 'Source of Capacity',
    optionD: 'System of Cells',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-26',
    question: 'The lifespan of a Li-ion battery depends heavily on:',
    optionA: 'Ambient temperature and charge cycles',
    optionB: 'Battery weight',
    optionC: 'Inverter type',
    optionD: 'Discharge cable rating',
    correctAnswer: 'A',
    level: 2
  },
  {
    id: 'L2-27',
    question: 'What does DoD (Depth of Discharge) indicate?',
    optionA: 'Total number of charge cycles',
    optionB: 'The percentage of energy extracted from total battery capacity',
    optionC: 'Voltage threshold',
    optionD: 'Efficiency loss',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-28',
    question: 'Which application benefits most from fast-responding batteries?',
    optionA: 'Peak shaving',
    optionB: 'Frequency regulation',
    optionC: 'Backup power',
    optionD: 'Off-grid systems',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-29',
    question: 'The energy capacity of a battery is measured in:',
    optionA: 'kW',
    optionB: 'kWh',
    optionC: 'Amperes',
    optionD: 'Volts',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-30',
    question: 'What is "net metering"?',
    optionA: 'Selling power to multiple buyers',
    optionB: 'A billing system that credits solar energy fed into the grid',
    optionC: 'Measurement of grid power losses',
    optionD: 'Metering for backup generators',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-31',
    question: 'Which government agency regulates renewable energy in India?',
    optionA: 'NTPC',
    optionB: 'MNRE',
    optionC: 'BEE',
    optionD: 'IREDA',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-32',
    question: 'What does "hybrid power plant" mean?',
    optionA: 'A plant that uses both fossil and renewable sources',
    optionB: 'A plant that combines two renewable sources (like solar + wind)',
    optionC: 'A plant with both AC and DC circuits',
    optionD: 'A plant with hybrid inverters only',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-33',
    question: 'What is the main environmental benefit of renewable energy?',
    optionA: 'Reduces electricity prices',
    optionB: 'Minimizes greenhouse gas emissions',
    optionC: 'Increases land use',
    optionD: 'Reduces employment in traditional sectors',
    correctAnswer: 'B',
    level: 2
  },
  {
    id: 'L2-34',
    question: 'Which Indian state currently leads in installed wind capacity (as of 2025)?',
    optionA: 'Maharashtra',
    optionB: 'Tamil Nadu',
    optionC: 'Gujarat',
    optionD: 'Rajasthan',
    correctAnswer: 'B',
    level: 2
  },
];

// Level 3: Advanced questions (expert level) - From Quiz Level 3
export const level3Questions: Question[] = [
  {
    id: 'L3-1',
    question: 'The temperature coefficient of a solar module represents:',
    optionA: 'How efficiently it cools under sunlight',
    optionB: 'The rate at which module efficiency decreases per °C rise in temperature',
    optionC: 'The module\'s maximum operating temperature',
    optionD: 'The inverter\'s correction factor',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-2',
    question: 'A 1 MWp solar PV plant in Tamil Nadu produces ~1.6 million units annually. What\'s its average CUF (Capacity Utilization Factor)?',
    optionA: '10%',
    optionB: '14%',
    optionC: '18%',
    optionD: '25%',
    correctAnswer: 'C',
    level: 3
  },
  {
    id: 'L3-3',
    question: 'Why is anti-reflective coating applied on solar glass?',
    optionA: 'To improve aesthetics',
    optionB: 'To enhance light absorption',
    optionC: 'To reduce wind load',
    optionD: 'To increase surface hardness',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-4',
    question: 'Which of the following increases the fill factor (FF) of a solar cell?',
    optionA: 'High series resistance',
    optionB: 'Low shunt resistance',
    optionC: 'Reduced contact losses',
    optionD: 'Higher ambient temperature',
    correctAnswer: 'C',
    level: 3
  },
  {
    id: 'L3-5',
    question: 'In a solar plant, string mismatch losses occur due to:',
    optionA: 'Voltage drop in cables',
    optionB: 'Unequal current generation among panels',
    optionC: 'Faulty inverters',
    optionD: 'Transformer harmonics',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-6',
    question: 'What is the typical tip speed ratio (TSR) for modern horizontal-axis wind turbines?',
    optionA: '2–3',
    optionB: '5–8',
    optionC: '10–12',
    optionD: '15–20',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-7',
    question: 'If wind speed doubles, the available power increases by approximately:',
    optionA: '2 times',
    optionB: '4 times',
    optionC: '6 times',
    optionD: '8 times',
    correctAnswer: 'D',
    level: 3
  },
  {
    id: 'L3-8',
    question: 'The Betz limit states that the maximum extractable power from wind is:',
    optionA: '33%',
    optionB: '45%',
    optionC: '59.3%',
    optionD: '75%',
    correctAnswer: 'C',
    level: 3
  },
  {
    id: 'L3-9',
    question: 'The gearbox in a wind turbine primarily:',
    optionA: 'Controls generator output',
    optionB: 'Converts low-speed shaft rotation to high-speed rotation for the generator',
    optionC: 'Reduces yaw misalignment',
    optionD: 'Maintains turbine stability',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-10',
    question: 'A typical 2 MW turbine produces approx. 6 million kWh per year. What\'s its average capacity factor?',
    optionA: '20%',
    optionB: '30%',
    optionC: '35%',
    optionD: '45%',
    correctAnswer: 'C',
    level: 3
  },
  {
    id: 'L3-11',
    question: 'Round-trip efficiency of Li-ion battery systems generally lies between:',
    optionA: '50–60%',
    optionB: '65–70%',
    optionC: '85–95%',
    optionD: '98–100%',
    correctAnswer: 'C',
    level: 3
  },
  {
    id: 'L3-12',
    question: 'In a hybrid solar-wind microgrid, the inverter synchronization ensures:',
    optionA: 'Equal current output',
    optionB: 'Phase and frequency alignment with the grid',
    optionC: 'Voltage drop compensation',
    optionD: 'Battery protection',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-13',
    question: 'What parameter of a battery indicates how much charge can be drawn relative to its rated capacity?',
    optionA: 'C-rate',
    optionB: 'Depth of discharge (DoD)',
    optionC: 'State of charge (SoC)',
    optionD: 'Cycle life',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-14',
    question: 'What\'s the main function of an Energy Management System (EMS) in a renewable microgrid?',
    optionA: 'Switching generators',
    optionB: 'Real-time optimization of generation, storage, and load',
    optionC: 'Weather forecasting',
    optionD: 'Load shedding',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-15',
    question: 'Flow batteries are preferred for long-duration storage because:',
    optionA: 'They have higher energy density',
    optionB: 'They separate power and energy capacity',
    optionC: 'They\'re cheaper than Li-ion',
    optionD: 'They don\'t need cooling',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-16',
    question: 'India\'s National Green Hydrogen Mission aims for hydrogen production capacity of:',
    optionA: '1 MTPA by 2030',
    optionB: '3 MTPA by 2030',
    optionC: '5 MTPA by 2030',
    optionD: '10 MTPA by 2030',
    correctAnswer: 'C',
    level: 3
  },
  {
    id: 'L3-17',
    question: 'Which of the following is a grid ancillary service provided by battery energy storage?',
    optionA: 'Power factor correction',
    optionB: 'Frequency regulation',
    optionC: 'Reactive load balancing',
    optionD: 'Voltage trip reduction',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-18',
    question: 'Curtailment in renewable energy refers to:',
    optionA: 'Energy lost due to line faults',
    optionB: 'Deliberate reduction of output despite available resource',
    optionC: 'Power consumed in startup',
    optionD: 'Transformer inefficiency',
    correctAnswer: 'B',
    level: 3
  },
  {
    id: 'L3-19',
    question: 'What\'s the term for the ability of a system to recover quickly after a grid disturbance?',
    optionA: 'Stability',
    optionB: 'Inertia',
    optionC: 'Resilience',
    optionD: 'Restoration',
    correctAnswer: 'C',
    level: 3
  },
  {
    id: 'L3-20',
    question: 'Which technology is being explored for next-generation solar modules?',
    optionA: 'Cadmium telluride (CdTe)',
    optionB: 'Monocrystalline',
    optionC: 'Tandem perovskite',
    optionD: 'Thin-film silicon',
    correctAnswer: 'C',
    level: 3
  },
];

// Combined array of all questions (for backward compatibility)
export const questions: Question[] = [
  ...level1Questions,
  ...level2Questions,
  ...level3Questions
];

// Get questions by level with specified count
export function getQuestionsByLevel(level: 1 | 2 | 3, count: number): Question[] {
  let sourceQuestions: Question[];

  switch (level) {
    case 1:
      sourceQuestions = [...level1Questions];
      break;
    case 2:
      sourceQuestions = [...level2Questions];
      break;
    case 3:
      sourceQuestions = [...level3Questions];
      break;
  }

  // Use crypto.getRandomValues for better randomness if available, fallback to Math.random
  const getRandomIndex = (max: number): number => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] % max;
    }
    return Math.floor(Math.random() * max);
  };

  // Fisher-Yates shuffle
  for (let i = sourceQuestions.length - 1; i > 0; i--) {
    const j = getRandomIndex(i + 1);
    [sourceQuestions[i], sourceQuestions[j]] = [sourceQuestions[j], sourceQuestions[i]];
  }

  return sourceQuestions.slice(0, Math.min(count, sourceQuestions.length));
}

// Get level-wise questions: 3 from level 1, 4 from level 2, 3 from level 3
export function getLevelWiseQuestions(): Question[] {
  const level1Qs = getQuestionsByLevel(1, 3);
  const level2Qs = getQuestionsByLevel(2, 4);
  const level3Qs = getQuestionsByLevel(3, 3);

  return [...level1Qs, ...level2Qs, ...level3Qs];
}

// Legacy function for backward compatibility
export function getRandomQuestions(count: number = 10): Question[] {
  // Create a copy of the questions array
  const shuffled = [...questions];

  // Use crypto.getRandomValues for better randomness if available, fallback to Math.random
  const getRandomIndex = (max: number): number => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint32Array(1);
      crypto.getRandomValues(array);
      return array[0] % max;
    }
    return Math.floor(Math.random() * max);
  };

  // Fisher-Yates shuffle with enhanced randomization
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = getRandomIndex(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
