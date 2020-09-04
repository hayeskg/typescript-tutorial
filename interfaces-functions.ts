interface IPerson {
  name: string;
  city: string;
  age: number;
  a: number;
  b: number;
  printDetails(): string;
  anotherFunc(a: number, b: number): number;
}


const tom: IPerson = {
  name: "Tom",
  city: "Munich",
  age: 33,
  a: 1,
  b: 2,
  printDetails: function () {
    return `${this.name} - ${this.city}`;
  },
  anotherFunc(a: number, b: number) {
    return this.a + this.b
  }
};