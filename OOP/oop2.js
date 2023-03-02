class Osoba {
  constructor(ime, prezime) {
    this._ime = ime;
    this._prezime = prezime;
  }

  get ime() {
    return this._ime;
  }

  set ime(novoIme) {
    this._ime = novoIme;
  }

  get prezime() {
    return this._prezime;
  }

  set prezime(novoPrezime) {
    this._prezime = novoPrezime;
  }
}

let osoba = new Osoba("Marko", "Markovic");

console.log(osoba.ime); // 'Marko'
console.log(osoba.prezime); // 'Markovic'

osoba.ime = "Petar";
osoba.prezime = "Petrovic";

console.log(osoba.ime); // 'Petar'
console.log(osoba.prezime); // 'Petrovic'
