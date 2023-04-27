import { shirts } from './shirts.js'


let main_inner = document.querySelector(".main_inner")

let content = document.createElement("div");
content.classList.add("content")

function build_goods_list(){

    shirts.forEach((shirt, iterator) => {
        let card_container = document.createElement("div");
        card_container.classList.add('card_container');

        let card_image = document.createElement("img");
        card_image.classList.add('card_image');
        card_image.src = shirt.colors.white?.front

        let card_counter = document.createElement("p");
        card_counter.classList.add('card_header')
        card_counter.innerText = iterator + 1

        let card_header = document.createElement("h3");
        card_header.classList.add('card_header');
        card_header.innerText = shirt.name

        let card_available_count = document.createElement("p")
        card_available_count.classList.add('card_available_count');
        card_available_count.innerText = string_available(Object.keys(shirt.colors).length)

        let quick_view_button = document.createElement("button");
        quick_view_button.classList.add('quick_view_button');
        quick_view_button.innerText = 'Quick View'
        quick_view_button.setAttribute("type","submit")

        let detail_view_button = document.createElement("button");
        detail_view_button.classList.add('quick_view_button')
        detail_view_button.innerText = 'Detail View'
        detail_view_button.setAttribute("type", "submit")
        detail_view_button.setAttribute("id", iterator)
        
        card_container.appendChild(card_image)
        card_container.appendChild(card_counter)
        card_container.appendChild(card_header)
        card_container.appendChild(card_available_count)
        card_container.appendChild(quick_view_button)
        card_container.appendChild(detail_view_button)
        content.appendChild(card_container)
    });
    main_inner.appendChild(content)

}

document.addEventListener('click',e => {
    let button_obj = document.createElement("button")
    button_obj = e.target;
    let id = button_obj.getAttribute('id')
    localStorage.setItem('index', id)
    window.open('https://main--mellow-arithmetic-c1683f.netlify.app/inis_lab_3/detail.html')
    console.log(id)
})


function string_available(quantity) {
    return `Available in ${quantity} colors`
}


build_goods_list();