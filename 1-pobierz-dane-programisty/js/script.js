console.log("zaczynamy");

let btnGetData = document.getElementById("get-data");
let dane = document.getElementById("dane-programisty");

console.log(btnGetData);

const getData = () => {
  fetch(
    "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
  )
    .then((res) => res.json())
    .then((data) => {
      let pImie = document.createElement("p");
      let pNazwisko = document.createElement("p");
      let pZawod = document.createElement("p");
      let pFirma = document.createElement("p");

      pImie.innerText = `Post ID: ${data.imie}`;
      pNazwisko.innerText = `Post ID: ${data.nazwisko}`;
      pZawod.innerText = `Post ID: ${data.zawod}`;
      pFirma.innerText = `Post ID: ${data.firma}`;

      dane.appendChild(pImie);
      dane.appendChild(pNazwisko);
      dane.appendChild(pZawod);
      dane.appendChild(pFirma);

      console.log(pImie);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("GetData()");
};

btnGetData.addEventListener("click", getData);
