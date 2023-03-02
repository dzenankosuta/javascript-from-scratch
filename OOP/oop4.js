class Osoba {
  #ime;
  #prezime;
  constructor(ime, prezime) {
    this.#ime = ime;
    this.#prezime = prezime;
  }

  get pozdrav() {
    console.log(`Pozdrav, ${this.#ime} ${this.#prezime}!`);
  }
}

const haris = new Osoba("Haris", "Muslic");

console.log(haris.pozdrav);
// console.log(haris.#ime);
