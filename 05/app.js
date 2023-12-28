console.log("DOM");

const curr = document.querySelector(".js-curr");

const parentCurr = curr.parentElement;

const buttonSib = document.createElement("button");
buttonSib.innerText = "usuń z koszyka";

parentCurr.appendChild(buttonSib);

const sibiling = [...parentCurr.children];
// console.log(sibiling);

for (let item in sibiling) {
  sibiling[item].classList.add("sibilings");
  curr.classList.remove("sibilings");
}

const nextArticle = parentCurr.nextElementSibling;

nextArticle.classList.add("nextElementSibling");

const lastArticle = parentCurr.parentElement.lastElementChild;

const lastBtn = lastArticle.lastElementChild;

const paragraf = document.createElement("p");

paragraf.innerText = "nowy paragraf fajny do tego";

lastBtn.before(paragraf);

const wrapper = parentCurr.parentElement;

const article = document.createElement("article");
article.classList.add("articles__item");
article.classList.add("article");
const naglowek = document.createElement("h1");
naglowek.classList.add("article__title");
naglowek.innerText = "Nagłówek";

const par = document.createElement("p");
par.classList.add("article__description");
par.innerText = "lorem sorem ipsum porem";

const btn = document.createElement("button");
btn.classList.add("article__btn");
btn.innerText = "Cos tam";

article.appendChild(naglowek);
article.appendChild(par);
article.appendChild(btn);

console.log(article);

parentCurr.before(article);