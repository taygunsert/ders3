let eleman1 = document.querySelector("#kutu1");

let eleman2 = document.querySelector("#kutu2");

console.log(eleman1.id);

eleman1.style.backgroundColor = "red";
eleman1.style.minHeight = "50px";

/*
eleman1.onclick = function () {
  console.log("Kutu1 tıklandı");
};
*/

eleman1.addEventListener("click", function () {
  console.log("Kutu 1 tıklandı");
});

let sinifVarmi = eleman1.hasAttribute("class");

console.log(sinifVarmi);
