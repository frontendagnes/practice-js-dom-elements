console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const parent = document.querySelector('.parent-for-button');
const button = document.createElement('button')

for(const prop in buttonSettings.attr){
    button.setAttribute(prop, buttonSettings.attr[prop])
}

for (const prop in buttonSettings.css){
    button.style[prop] = buttonSettings.css[prop]
}

button.innerText = buttonSettings.text

console.log(button)
parent.appendChild(button)