class Osoba {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }

  pozdrav() {
    console.log(`Pozdrav, ${this.ime} ${this.prezime}!`);
  }
}

class Student extends Osoba {
  constructor(ime, prezime, brojIndeksa) {
    super(ime, prezime);
    this.brojIndeksa = brojIndeksa;
  }

  prijaviIspit(predmet) {
    console.log(
      `${this.ime} ${this.prezime} je prijavio ispit iz predmeta ${predmet}.`
    );
  }
}

let student = new Student("Marko", "Markovic", "12345");

student.pozdrav(); // Pozdrav, Marko Markovic!
student.prijaviIspit("Matematika"); // Marko Markovic je prijavio ispit iz predmeta Matematika.
