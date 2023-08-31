console.log("Warsztat");

let endOfThePage = 0;

let prealoading = false;

const showPreloader = () => {
  let preloader = document.getElementById("preloader");
  console.log("show prealoader");
  preloader.style.display = "block";
  prealoading = true;
};

const hidePreloader = () => {
  let preloader = document.getElementById("preloader");
  console.log("hide prealoader");
  preloader.style.display = "none";
  prealoading = false;
};

const getData = () => {
  if (!prealoading) {
    showPreloader();

    fetch(" https://akademia108.pl/api/ajax/get-users.php")
      .then((res) => res.json())
      .then((data) => {
        let body = document.body;
        let hr = document.createElement("hr");
        body.appendChild(hr);

        for (let user of data) {
          let pId = document.createElement("p");
          let pName = document.createElement("p");
          let pWebside = document.createElement("p");

          pId.innerText = `User ID: ${user.id}`;
          pName.innerText = `User Name: ${user.name}`;
          pWebside.innerHTML = `User URL: ${user.webside} <br/>-------- `;

          body.appendChild(pId);
          body.appendChild(pName);
          body.appendChild(pWebside);
        }

        hidePreloader();

        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
const scrollToEndOfPage = () => {
  let d = document.documentElement;

  let scrollHeight = d.scrollHeight;

  let scrollTop = d.scrollTop;

  let clientHeight = d.clientHeight;

  let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

  console.log(`scrollHeight: ${scrollHeight}`);
  console.log(`scrollTopt: ${scrollTop}`);
  console.log(`clientHeight: ${clientHeight}`);
  console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
  console.log(`===========================`);

  if (sumScrollTopClientHeight >= scrollHeight) {
    endOfThePage += 1;

    console.log(`scroll to the end of page: ${endOfThePage}`);

    getData();
  }
};

window.addEventListener("scroll", scrollToEndOfPage);
