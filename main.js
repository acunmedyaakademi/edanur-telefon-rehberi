/* İsim ve numara bilgilerini içeren bir rehber yap.
Kullanıcıya kişi ekleme, kişi bulma ve kişi silme seçenekleri sun. */

const people = [
  {
    name: "Edanur",
    surname: "Korkmaz",
    phone: "05432948275",
  },
  {
    name: "Elif",
    surname: "Güner",
    phone: "05438893858",
  },
  {
    name: "Ekin",
    surname: "Çoban",
    phone: "05239394492",
  },
  {
    name: "Eylül",
    surname: "Usta",
    phone: "05420393022",
  },
];

const choices = ["kisi ekleme", "kisi bulma", "kisi silme"];
// console.log(choices);

alert(`Ne yapmak istiyorsun? (${choices})`);
const choice = prompt().toLowerCase();

if (choice === choices[0]) {
  const newName = prompt("Eklemek istediginiz kisinin adini giriniz.");
  const newSurname = prompt("Eklemek istediginiz kisinin soyadini giriniz.");
  const newPhoneNumber = prompt(
    "Eklemek istediginiz kisinin numarasini giriniz."
  );

  const newPerson = {
    name: newName,
    surname: newSurname,
    phone: newPhoneNumber,
  };
  people.push(newPerson);
  alert(
    `Yeni kisi eklendi: ${newPerson.name} ${newPerson.surname}, Telefon: ${newPerson.phone}`
  );
} else if (choice === choices[1]) {
  const findingPerson = prompt("Bulmak istediginiz kisinin adini giriniz.");
  let found = false;

  for (const person of people) {
    if (findingPerson === person.name) {
      alert(
        `Bulunan Kisi: ${person.name} ${person.surname}, Telefon: ${person.phone}`
      );
      found = true;
      break;
    }
  }
  if (!found) {
    alert("Burada o isimde biri bulunmamaktadir.");
  }
} else if (choice === choices[2]) {
  const deletingPerson = prompt("Silmek istediginiz kisinin ismini giriniz.");
  let deleted = false;

  for (let i = 0; i < people.length; i++) {
    if (deletingPerson === people[i].name) {
      people.splice(i, 1);
      alert(`${deletingPerson} silindi.`);
      deleted = true;
      break;
    }
  }
  if (!deleted) {
    alert("Silmek istediginiz kisi bulunamadi.");
  }
}
