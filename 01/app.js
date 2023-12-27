console.log("DOM");

const element = document.querySelector(
  ".comments__item.comments__item--newest"
);
console.log("element>>", element);

const data = element.querySelectorAll('[data-info]')

console.log(data.length);
