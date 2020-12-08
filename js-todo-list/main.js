// TO DO
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addBtn').addEventListener('click', function() {
        document.querySelector('ul').insertAdjacentElement('beforeend', addlist())
    })
    //create
    function addlist() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input").value;
        li.textContent = inputValue;
    
        newspan = document.createElement('span')
        newspan.classList.add('close')
        newspan.textContent = 'x'
        li.append(newspan)
        console.log(li)
        return li
      }
    
    //remove
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var li = this.parentElement;
        li.style.display = "none";
      }
    }

    //hover
    var list = document.querySelector('li');
    list.addEventListener('click', function(e) {
    if (e.target.tagName === 'li') {
    e.target.classList.toggle('checked');
    }
    }, false);
})




// function() {
//     document.getElementById('close').addEventListener('click', function() {
//         const lastTime = document.querySelector('.time:last-child')
//         if (lastTime) {
//             lastTime.remove()
//         }
//     })
// }
