const DOMSelectors = {
  container: document.querySelector(".container"),
  imgInput: document.querySelector("#img-input"),
  button: document.querySelector(".btn"),
  nameInput: document.querySelector("#name-input"),
  form: document.querySelector("form"),
  removeButton: document.querySelector("#remove"),
  
};

function createCard(event) {
  event.preventDefault();

  let imgUrl = DOMSelectors.imgInput.value;
  let name = DOMSelectors.nameInput.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" >
    <h2 class="card-header"> ${name} </h2>
        <img src="${imgUrl}" alt="User Image" class = "card-img">
        <button type="submit" class="btn" id = "remove">Remove</button>
    </div>
     `
  );
  clearInput();
}
function removeCard(event) {
  if (event.target.id === "remove") {
    const cardToRemove = event.target.parentElement;
    cardToRemove.remove();
  }
}
function clearInput() {
  name = "";
  imgInput = "";
}

DOMSelectors.form.addEventListener("submit", createCard);

DOMSelectors.container.addEventListener("click", removeCard);
