function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

console.log(areThereDuplicates("a", "b", "c", "a"));
