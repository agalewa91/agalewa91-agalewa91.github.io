// console.log("Warsztaty");

let btnGetData = document.getElementById("get-data");

console.log(btnGetData);

const getData = () => {
  fetch(" https://akademia108.pl/api/ajax/get-post.php")
    .then((res) => res.json())
    .then((data) => {
      let pId = document.createElement("p");
      let pUserId = document.createElement("p");
      let pTitle = document.createElement("p");
      let pBody = document.createElement("p");

      pId.innerText = `Post ID: ${data.id}`;
      pUserId.innerText = `Post ID: ${data.userId}`;
      pTitle.innerText = `Post ID: ${data.title}`;
      pBody.innerText = `Post ID: ${data.body}`;

      document.body.appendChild(pId);
      document.body.appendChild(pUserId);
      document.body.appendChild(pTitle);
      document.body.appendChild(pBody);

      //   console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  //   console.log("GetData()");
};

btnGetData.addEventListener("click", getData);
