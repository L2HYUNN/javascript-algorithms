function API(token) {
  return new Promise((resolve) => {
    resolve({ result: "success", token: token || "token" });
  });
}

function solution(callAPI) {
  async function call(prevToken) {
    const { result, token } = await callAPI(prevToken);

    return { result, token };
  }
}

console.log(solution(API));
