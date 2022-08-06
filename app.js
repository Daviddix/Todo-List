let add = document.getElementById('add')
let container = document.getElementById('list-items')
let input = document.getElementById('inputS')  
let value = input.value
let clearAll = document.getElementById('clear-all')
let itemsArray = []

//focus input
input.focus()
//add stuff on click of add button
add.addEventListener('click', ()=>{
    newItem()
})

//add stuff when you press enter
input.addEventListener('keydown', (e)=>{
    if (e.key == 'Enter') {
        newItem()
    }
})

//delete button and mark as done button

let item = document.getElementById('list-items')
item.addEventListener('click', (e)=>{
    if (e.target.id == 'trash') {
    let paragraph = e.target.previousElementSibling.previousElementSibling.textContent
    let localArr = JSON.parse(localStorage.getItem("items"))
    let itemIndex = localArr.indexOf(paragraph)
    localArr.splice(itemIndex, 1)
    localStorage.setItem("items", JSON.stringify(localArr))
    let listItem = e.target.parentElement
    listItem.remove()
    }
    else if(e.target.id == 'done'){
        let para = e.target.previousElementSibling

        para.classList.toggle('done')
    }
})

//creates new item
function newItem(){
    let val = input.value
      if(input.value.trim() != ''){   
      container.innerHTML += `  
      <div class="items">
      <p>${input.value}</p>
      <img src="/check.svg" id="done" alt="">
      <img src="/trash.svg" id="trash" alt="">
      </div>`
      itemsArray.push(val)
      if (localStorage.getItem("items") == null) {
        localStorage.setItem("items", JSON.stringify(itemsArray))
      }else{
        let newArr = JSON.parse(localStorage.getItem("items"))
        newArr.push(val)
        localStorage.setItem("items", JSON.stringify(newArr))
      }
      input.value = ''
      }
      else{
          alert('please add an item')
          input.value = ''
      }
}

function checkLocalStorage(){
    if (localStorage.getItem("items") == null) {
        
    } else {
        let items = JSON.parse(localStorage.getItem("items"))
        items.forEach((item)=>{
            let newDiv = `  
            <div class="items">
            <p>${item}</p>
            <img src="/check.svg" id="done" alt="">
            <img src="/trash.svg" id="trash" alt="">
            </div>`
            container.innerHTML += newDiv
        })
    }
}

checkLocalStorage()