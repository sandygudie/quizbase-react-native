export const getQuestionQuiz = async (category, difficulty) => {
  let response = await fetch(
    `/quiz?category=${category}&difficulty=${difficulty}`
  )
  return response;
};
