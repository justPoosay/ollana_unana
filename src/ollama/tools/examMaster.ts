import { ToolFunction } from "../toolsLoader";

const functions: ToolFunction[] = [
  {
    type: "function",
    function: {
      name: "examMaster",
      description: "Generates a school exam based on subject, difficulty level, and number of questions.",
      parameters: {
        type: "object",
        properties: {
          subject: {
            type: "string",
            description: "The school subject (e.g. Math, History, Biology)",
          },
          level: {
            type: "string",
            enum: ["easy", "medium", "hard"],
            description: "The difficulty level of the exam",
          },
        },
        required: ["subject", "level", "questionsCount"],
      },
    },
    execute: async ({ subject, level, questionsCount }) => {
      // Fejkowy generator pytań
      const exam = Array.from({ length: questionsCount }, (_, i) => ({
        question: `(${i + 1}) [${level}] Question about ${subject}?`,
        options: ["A", "B", "C", "D"],
        answer: "A",
      }));

      return {
        subject,
        level,
        questions: exam,
      };
    },
  },
];

export default functions;
