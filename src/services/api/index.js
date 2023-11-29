let baseURL = "https://quizbase.onrender.com/api/v1"
export const makeApiCall = async (url, method, paylod) => {
  try {
    const response = await fetch( baseURL+url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylod),
    });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};
