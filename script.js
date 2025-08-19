let input = document.getElementById("input");
const addBtn = document.querySelector(".addBtn");
const ul = document.getElementById("ul");
const colorChangeBtn = document.querySelector('.light-dark')




colorChangeBtn.addEventListener('click' , () => {
  const body = document.body
   body.classList.toggle('background-dark')
  if (  body.classList.contains('background-dark')) {
        colorChangeBtn.textContent = 'Dark Mode'
        colorChangeBtn.classList.add('btn-dark')
        colorChangeBtn.classList.rmeove('btn-light')


  } else  {
    colorChangeBtn.textContent = 'Light Mode'
     colorChangeBtn.classList.remove('btn-dark')
     colorChangeBtn.classList.add('btn-light')
  }

 


})



addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  let span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  

// giving class names 
checkbox.className = 'checkbox';
checkbox.type = 'checkbox';
label.className = 'label';
span.className = 'list-text';
deleteBtn.className = "delete-btn";
deleteBtn.textContent = "X";



  if (input.value.trim() === "") {
    alert("Please write something");
    return;
  }



  span.textContent = input.value;
  
  input.value = "";

  
  label.appendChild(checkbox)
  label.appendChild(span)
  li.appendChild(label)
  li.appendChild(deleteBtn)
  ul.appendChild(li)


 


  checkbox.addEventListener('change' , () => {
    if (checkbox.checked) {
      deleteBtn.textContent = '✔'
      deleteBtn.style.color = "green"; 
    
    } else {
      deleteBtn.textContent = 'X'
      deleteBtn.style.color = "rgb(250, 10, 10)"; 
      

      
    }
 
    
  })



  deleteBtn.addEventListener("click", () => {
    li.remove();
   
  


  });
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }





});


