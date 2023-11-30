const baseUrl = `https://quizbase.onrender.com/api/v1`;

export const getQuestionQuiz = async (category, difficulty) => {
  let response = await fetch(
    `${baseUrl}/quiz?category=${category}&difficulty=${difficulty}`
  );
  return response;
};
