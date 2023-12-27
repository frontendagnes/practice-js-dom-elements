console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const navi = document.querySelector("nav")

const ul = document.createElement("ul")

navi.appendChild(ul)

// const li = document.createElement("li")
// const href = document.createElement("a")

// href.href = "/"
// href.innerText = "start"

// const li1 = document.createElement("li");
// const href1 = document.createElement("a");

// href1.href = "/gallery";
// href1.innerText = "galeria";

// const li2 = document.createElement("li");
// const href2 = document.createElement("a");

// href2.href = "/constact";
// href2.innerText = "kontakt";

// li.appendChild(href)
// li1.appendChild(href1)
// li2.appendChild(href2);

// ul.appendChild(li)
// ul.appendChild(li1)
// ul.appendChild(li2);


menuItems.forEach((item) => {
    const li = document.createElement("li");
    const href = document.createElement("a");

    href.href = item.url;
    href.innerText = item.text;

    li.appendChild(href);
    ul.appendChild(li);
})