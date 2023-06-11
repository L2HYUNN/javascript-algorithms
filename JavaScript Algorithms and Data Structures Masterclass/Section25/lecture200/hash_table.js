class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    const hashedKey = this._hash(key);

    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }

    this.keyMap[hashedKey].push([key, value]);
  }
  get(key) {
    const hashedKey = this._hash(key);

    if (this.keyMap[hashedKey]) {
      for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
        if (this.keyMap[hashedKey][i][0] === key)
          return this.keyMap[hashedKey][i][1];
      }
    }

    return undefined;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
