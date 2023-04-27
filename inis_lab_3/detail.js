import { shirts } from "./shirts.js";

let main_inner = document.querySelector(".main_inner");

function detailView() {
  let index = localStorage.getItem("index");

  let block = document.createElement("div")
  block.classList.add("block")

  let img_container = document.createElement("div")
  img_container.classList.add("img_container")
  
  let detail_img = document.createElement("img")
  detail_img.classList.add("detail_img")
  detail_img.src = shirts[index].colors.white.front

  let info_block = document.createElement("div")
  info_block.classList.add("info_block")

  let detail_name = document.createElement("h3")
  detail_name.classList.add("detail_name")
  detail_name.innerText = shirts[index].name

  let detail_price = document.createElement("p")
  detail_price.classList.add("detail_price")
  detail_price.innerText = shirts[index].price

  let back_link = document.createElement("a")
  back_link.classList.add("back_link")
  back_link.innerText = "Back"
  back_link.setAttribute("href", "https://main--mellow-arithmetic-c1683f.netlify.app/inis_lab_3/inis_lab_3.html")

  let detail_description = document.createElement("p")
  detail_description.classList.add("detail_description")
  detail_description.innerText = shirts[index].description
  
  info_block.appendChild(detail_name)
  info_block.appendChild(detail_price)
  info_block.appendChild(detail_description)
  info_block.appendChild(back_link)
  img_container.appendChild(detail_img)
  block.appendChild(img_container)
  block.appendChild(info_block)
  main_inner.appendChild(block)
};

detailView()