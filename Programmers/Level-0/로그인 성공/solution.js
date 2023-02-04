function solution(id_pw, db) {
  const searchResult = db.filter((v) => v[0] === id_pw[0]);

  if (searchResult.length === 0) return "fail";

  return id_pw[1] === searchResult[0][1] ? "login" : "wrong pw";
}
