let input = document.getElementById('input')
const addBtn = document.querySelector('.addBtn')
const ul = document.getElementById('ul')

addBtn.addEventListener('click' , () => {
  const li = document.createElement('li')
  let span = document.createElement('span')
  const deleteBtn = document.createElement('button')

  if (input.value.trim() === "") {
  alert('Please write something')
  return;
}

deleteBtn.className = "delete-btn"

 span.textContent = input.value
 deleteBtn.textContent = 'X'
 input.value = ""

 deleteBtn.addEventListener('click' , () => {
  li.remove()
 })

li.appendChild(span)
ul.appendChild(deleteBtn)
ul.appendChild(li)

})

input.addEventListener("keydown" , (e) => {
  if(e.key === "Enter") {
    addBtn.click()
  }
})
