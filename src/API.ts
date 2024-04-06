import { shuffleArray } from './utils';
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}
export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }
  const data = await response.json();
  if (data.results && data.results.length > 0) {
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } else {
    throw new Error("Apidan ma'lumot yo'q");
  }
};

