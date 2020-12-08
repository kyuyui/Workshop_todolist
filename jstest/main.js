// TO DO
document.addEventListener('DOMContentLoaded', function(){
    let list = document.querySelector('ul')
    document.querySelector('#addBtn').addEventListener('click', function(){
      console.log('click')
      let inputValue = document.querySelector('#input').value
      addItem(inputValue)
      document.querySelector('#input').value = ''
    })
    const todos = []
    for (let todo of todos){
      addItem(todo)
    }
    function addItem(text){
      let newItem = document.createElement('li')
      newItem.innerHTML = ${text}  <span class="close">x</span>
      list.appendChild(newItem)
    }
    list.addEventListener('click', function(event){
      console.log(this)
      console.log(event.target)
      if (event.target.classList.contains('close')){
        let li = event.target.parentElement
        li.remove()
      }
    })
    list.addEventListener('click', function(e){
      e.target.classList.toggle('checked')
    })
  })