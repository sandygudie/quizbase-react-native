const baseUrl = `https://quizbase.onrender.com/api/v1`;

export const getQuestionQuiz = async (category, difficulty) => {
  let response = await fetch(
    `${baseUrl}/quiz?limit=4&category=${category}&difficulty=${difficulty}`
  );
  return response;
};
