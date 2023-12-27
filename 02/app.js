console.log('DOM');

const links = document.querySelectorAll(`[data-url]`)

links.forEach((item) =>{
    item.href = item.dataset.url
})