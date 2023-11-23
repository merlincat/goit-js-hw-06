'use strict';
// Задача 3. Конструктор рядків
// Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості  value об'єкта, який викликає цей метод.

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
    // this.#value = this.#value.padEnd(this.#value.length + str.length, str);
  }
  padStart(str) {
    // this.#value = this.#value.padStart(this.#value.length + str.length, str);
    this.#value = str + this.#value;
  }
  padBoth(str) {
    // this.#value = this.#value.padBoth(this.#value.length + 2 * str.length, str); // не працює
    this.#value = str + this.#value + str;
  }
}
// можна використати одноіменні методи стрічки, але мені здалось, вони набагато довші по запису, тому використала прості +

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
