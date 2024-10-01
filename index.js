let student={
    name:"ryan",
    age:15,
    gf:true
};
const header = document.querySelector("h1")
console.log(student.age)
const DOMSelectors={
    header:document.querySelector("h1"),
    card:document.querySelector(".card"),
    items:document.querySelectorAll("li"),
    cardHeader:document.querySelectorAll(".card-header"),
    button:document.querySelector(".btn"),
    form:document.querySelector("form")
}
console.log(DOMSelectors.card);

DOMSelectors.button.addEventListener("click",function(event){
    console.log(event.target);
    event.target.parentElement.style.backgroundColor="red";
})
DOMSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();

    console.log(document.querySelector("input").value);
})
