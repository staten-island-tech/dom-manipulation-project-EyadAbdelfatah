const DOMSelectors = {
  container: document.querySelector(".container"),
  imgInput: document.querySelector("#img-input"),
  button: document.querySelector(".btn"),
  nameInput: document.querySelector("#name-input"),
  form: document.querySelector("form"),
  removeButton:document.querySelector("#remove")
};
function createCard() {
  event.preventDefault();

  const imgUrl = DOMSelectors.imgInput.value;
  const name = DOMSelectors.nameInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" >
    <h2 class="card-header"> ${name} </h2>
        <img src="${imgUrl}" alt="User Image" id = "card img">
    </div>
    <button type="submit" class="btn" id = "remove">Remove</button> `

  );

  DOMSelectors.imgInput.value = "";
  DOMSelectors.nameInput.value = "";
}
function removeCard(){
  event.preventDefault();
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" >

    </div>`
  );
}
DOMSelectors.form.addEventListener("submit", createCard );
DOMSelectors.removeButton.addEventListener("click", removeCard );