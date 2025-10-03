export interface Question {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
}

export const questions: Question[] = [
  {
    id: '1',
    question: 'What is the capital of France?',
    optionA: 'London',
    optionB: 'Berlin',
    optionC: 'Paris',
    optionD: 'Madrid',
    correctAnswer: 'C'
  },
  {
    id: '2',
    question: 'Which planet is known as the Red Planet?',
    optionA: 'Venus',
    optionB: 'Mars',
    optionC: 'Jupiter',
    optionD: 'Saturn',
    correctAnswer: 'B'
  },
  {
    id: '3',
    question: 'Who painted the Mona Lisa?',
    optionA: 'Vincent Van Gogh',
    optionB: 'Pablo Picasso',
    optionC: 'Leonardo da Vinci',
    optionD: 'Michelangelo',
    correctAnswer: 'C'
  },
  {
    id: '4',
    question: 'What is the largest ocean on Earth?',
    optionA: 'Atlantic Ocean',
    optionB: 'Indian Ocean',
    optionC: 'Arctic Ocean',
    optionD: 'Pacific Ocean',
    correctAnswer: 'D'
  },
  {
    id: '5',
    question: 'In which year did World War II end?',
    optionA: '1943',
    optionB: '1944',
    optionC: '1945',
    optionD: '1946',
    correctAnswer: 'C'
  },
  {
    id: '6',
    question: 'What is the chemical symbol for gold?',
    optionA: 'Go',
    optionB: 'Au',
    optionC: 'Gd',
    optionD: 'Ag',
    correctAnswer: 'B'
  },
  {
    id: '7',
    question: 'How many continents are there?',
    optionA: '5',
    optionB: '6',
    optionC: '7',
    optionD: '8',
    correctAnswer: 'C'
  },
  {
    id: '8',
    question: 'What is the smallest prime number?',
    optionA: '0',
    optionB: '1',
    optionC: '2',
    optionD: '3',
    correctAnswer: 'C'
  },
  {
    id: '9',
    question: 'Who wrote "Romeo and Juliet"?',
    optionA: 'Charles Dickens',
    optionB: 'William Shakespeare',
    optionC: 'Jane Austen',
    optionD: 'Mark Twain',
    correctAnswer: 'B'
  },
  {
    id: '10',
    question: 'What is the speed of light?',
    optionA: '300,000 km/s',
    optionB: '150,000 km/s',
    optionC: '450,000 km/s',
    optionD: '600,000 km/s',
    correctAnswer: 'A'
  },
  {
    id: '11',
    question: 'Which element has the atomic number 1?',
    optionA: 'Helium',
    optionB: 'Hydrogen',
    optionC: 'Oxygen',
    optionD: 'Carbon',
    correctAnswer: 'B'
  },
  {
    id: '12',
    question: 'What is the tallest mountain in the world?',
    optionA: 'K2',
    optionB: 'Kangchenjunga',
    optionC: 'Mount Everest',
    optionD: 'Lhotse',
    correctAnswer: 'C'
  },
  {
    id: '13',
    question: 'How many bones are in the human body?',
    optionA: '206',
    optionB: '208',
    optionC: '210',
    optionD: '212',
    correctAnswer: 'A'
  },
  {
    id: '14',
    question: 'What is the capital of Japan?',
    optionA: 'Seoul',
    optionB: 'Beijing',
    optionC: 'Tokyo',
    optionD: 'Bangkok',
    correctAnswer: 'C'
  },
  {
    id: '15',
    question: 'Who developed the theory of relativity?',
    optionA: 'Isaac Newton',
    optionB: 'Albert Einstein',
    optionC: 'Galileo Galilei',
    optionD: 'Stephen Hawking',
    correctAnswer: 'B'
  },
  {
    id: '16',
    question: 'What is the largest mammal in the world?',
    optionA: 'African Elephant',
    optionB: 'Blue Whale',
    optionC: 'Giraffe',
    optionD: 'Polar Bear',
    correctAnswer: 'B'
  },
  {
    id: '17',
    question: 'In which year did the Titanic sink?',
    optionA: '1910',
    optionB: '1911',
    optionC: '1912',
    optionD: '1913',
    correctAnswer: 'C'
  },
  {
    id: '18',
    question: 'What is the currency of the United Kingdom?',
    optionA: 'Euro',
    optionB: 'Dollar',
    optionC: 'Pound Sterling',
    optionD: 'Franc',
    correctAnswer: 'C'
  },
  {
    id: '19',
    question: 'How many sides does a hexagon have?',
    optionA: '5',
    optionB: '6',
    optionC: '7',
    optionD: '8',
    correctAnswer: 'B'
  },
  {
    id: '20',
    question: 'What is the boiling point of water at sea level?',
    optionA: '90°C',
    optionB: '95°C',
    optionC: '100°C',
    optionD: '105°C',
    correctAnswer: 'C'
  },
  {
    id: '21',
    question: 'Who invented the telephone?',
    optionA: 'Thomas Edison',
    optionB: 'Nikola Tesla',
    optionC: 'Alexander Graham Bell',
    optionD: 'Guglielmo Marconi',
    correctAnswer: 'C'
  },
  {
    id: '22',
    question: 'What is the largest desert in the world?',
    optionA: 'Sahara Desert',
    optionB: 'Arabian Desert',
    optionC: 'Gobi Desert',
    optionD: 'Antarctic Desert',
    correctAnswer: 'D'
  },
  {
    id: '23',
    question: 'How many strings does a standard guitar have?',
    optionA: '4',
    optionB: '5',
    optionC: '6',
    optionD: '7',
    correctAnswer: 'C'
  },
  {
    id: '24',
    question: 'What is the smallest country in the world?',
    optionA: 'Monaco',
    optionB: 'Vatican City',
    optionC: 'San Marino',
    optionD: 'Liechtenstein',
    correctAnswer: 'B'
  },
  {
    id: '25',
    question: 'Which gas do plants absorb from the atmosphere?',
    optionA: 'Oxygen',
    optionB: 'Nitrogen',
    optionC: 'Carbon Dioxide',
    optionD: 'Hydrogen',
    correctAnswer: 'C'
  },
  {
    id: '26',
    question: 'What is the hardest natural substance on Earth?',
    optionA: 'Gold',
    optionB: 'Iron',
    optionC: 'Diamond',
    optionD: 'Platinum',
    correctAnswer: 'C'
  },
  {
    id: '27',
    question: 'How many planets are in our solar system?',
    optionA: '7',
    optionB: '8',
    optionC: '9',
    optionD: '10',
    correctAnswer: 'B'
  },
  {
    id: '28',
    question: 'What is the capital of Australia?',
    optionA: 'Sydney',
    optionB: 'Melbourne',
    optionC: 'Canberra',
    optionD: 'Brisbane',
    correctAnswer: 'C'
  },
  {
    id: '29',
    question: 'Who was the first person to walk on the moon?',
    optionA: 'Buzz Aldrin',
    optionB: 'Neil Armstrong',
    optionC: 'Yuri Gagarin',
    optionD: 'John Glenn',
    correctAnswer: 'B'
  },
  {
    id: '30',
    question: 'What is the largest organ in the human body?',
    optionA: 'Heart',
    optionB: 'Brain',
    optionC: 'Liver',
    optionD: 'Skin',
    correctAnswer: 'D'
  },
  {
    id: '31',
    question: 'In which country is the Eiffel Tower located?',
    optionA: 'Italy',
    optionB: 'Spain',
    optionC: 'France',
    optionD: 'Germany',
    correctAnswer: 'C'
  },
  {
    id: '32',
    question: 'What is the freezing point of water?',
    optionA: '-5°C',
    optionB: '0°C',
    optionC: '5°C',
    optionD: '10°C',
    correctAnswer: 'B'
  },
  {
    id: '33',
    question: 'How many hours are in a day?',
    optionA: '12',
    optionB: '20',
    optionC: '24',
    optionD: '48',
    correctAnswer: 'C'
  },
  {
    id: '34',
    question: 'What is the main language spoken in Brazil?',
    optionA: 'Spanish',
    optionB: 'Portuguese',
    optionC: 'English',
    optionD: 'French',
    correctAnswer: 'B'
  },
  {
    id: '35',
    question: 'Who painted "The Starry Night"?',
    optionA: 'Claude Monet',
    optionB: 'Vincent van Gogh',
    optionC: 'Pablo Picasso',
    optionD: 'Salvador Dali',
    correctAnswer: 'B'
  },
  {
    id: '36',
    question: 'What is the square root of 144?',
    optionA: '10',
    optionB: '11',
    optionC: '12',
    optionD: '13',
    correctAnswer: 'C'
  },
  {
    id: '37',
    question: 'Which ocean is the Bermuda Triangle located in?',
    optionA: 'Pacific Ocean',
    optionB: 'Atlantic Ocean',
    optionC: 'Indian Ocean',
    optionD: 'Arctic Ocean',
    correctAnswer: 'B'
  },
  {
    id: '38',
    question: 'How many days are in a leap year?',
    optionA: '364',
    optionB: '365',
    optionC: '366',
    optionD: '367',
    correctAnswer: 'C'
  },
  {
    id: '39',
    question: 'What is the chemical formula for water?',
    optionA: 'H2O',
    optionB: 'CO2',
    optionC: 'O2',
    optionD: 'H2O2',
    correctAnswer: 'A'
  },
  {
    id: '40',
    question: 'Who wrote "The Great Gatsby"?',
    optionA: 'Ernest Hemingway',
    optionB: 'F. Scott Fitzgerald',
    optionC: 'John Steinbeck',
    optionD: 'William Faulkner',
    correctAnswer: 'B'
  },
  {
    id: '41',
    question: 'What is the capital of Canada?',
    optionA: 'Toronto',
    optionB: 'Vancouver',
    optionC: 'Montreal',
    optionD: 'Ottawa',
    correctAnswer: 'D'
  },
  {
    id: '42',
    question: 'How many teeth does an adult human have?',
    optionA: '28',
    optionB: '30',
    optionC: '32',
    optionD: '34',
    correctAnswer: 'C'
  },
  {
    id: '43',
    question: 'What is the longest river in the world?',
    optionA: 'Amazon River',
    optionB: 'Nile River',
    optionC: 'Yangtze River',
    optionD: 'Mississippi River',
    correctAnswer: 'B'
  },
  {
    id: '44',
    question: 'Which planet is closest to the Sun?',
    optionA: 'Venus',
    optionB: 'Earth',
    optionC: 'Mercury',
    optionD: 'Mars',
    correctAnswer: 'C'
  },
  {
    id: '45',
    question: 'What is the national animal of China?',
    optionA: 'Tiger',
    optionB: 'Dragon',
    optionC: 'Giant Panda',
    optionD: 'Lion',
    correctAnswer: 'C'
  },
  {
    id: '46',
    question: 'How many colors are in a rainbow?',
    optionA: '5',
    optionB: '6',
    optionC: '7',
    optionD: '8',
    correctAnswer: 'C'
  },
  {
    id: '47',
    question: 'What is the capital of Italy?',
    optionA: 'Venice',
    optionB: 'Milan',
    optionC: 'Rome',
    optionD: 'Florence',
    correctAnswer: 'C'
  },
  {
    id: '48',
    question: 'Who invented the light bulb?',
    optionA: 'Thomas Edison',
    optionB: 'Nikola Tesla',
    optionC: 'Benjamin Franklin',
    optionD: 'Alexander Graham Bell',
    correctAnswer: 'A'
  },
  {
    id: '49',
    question: 'What is the main ingredient in guacamole?',
    optionA: 'Tomato',
    optionB: 'Avocado',
    optionC: 'Onion',
    optionD: 'Pepper',
    correctAnswer: 'B'
  },
  {
    id: '50',
    question: 'How many sides does a triangle have?',
    optionA: '2',
    optionB: '3',
    optionC: '4',
    optionD: '5',
    correctAnswer: 'B'
  }
];

export function getRandomQuestions(count: number = 6): Question[] {
  // Fisher-Yates shuffle algorithm for true randomization
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
