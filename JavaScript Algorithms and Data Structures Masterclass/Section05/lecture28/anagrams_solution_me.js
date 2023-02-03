function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const str1_counter = {};
  const str2_counter = {};

  for (let str of str1) {
    str1_counter[str] = (str1_counter[str] || 0) + 1;
  }

  for (let str of str2) {
    str2_counter[str] = (str2_counter[str] || 0) + 1;
  }

  for (let key in str1_counter) {
    if (!str2_counter[key]) return false;
    if (str1_counter[key] !== str2_counter[key]) return false;
  }

  return true;
}

function solution() {
  return validAnagram("anagram", "nagarma");
}

console.log(solution());
