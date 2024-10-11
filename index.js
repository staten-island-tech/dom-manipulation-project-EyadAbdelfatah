const DOMSelectors = {
  container: document.querySelector(".container"),
  imgInput: document.querySelector("#img-input"), 
  button:document.querySelector(".btn"),
  nameInput: document.querySelector("#name-input"),

};

DOMSelectors.button.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const imgUrl = DOMSelectors.imgInput.value; 
  const name = DOMSelectors.nameInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class="card-header">
      ${name}
        <img src="${imgUrl}" alt="User Image" ">
      </h2>
    </div>`
  );

  DOMSelectors.imgInput.value = "";
  DOMSelectors.name.value = "";
});
