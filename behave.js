let input = document.querySelector('.entered_list');
let addBtn = document.querySelector('.add_list');
let tasks = document.querySelector('.takes');


input.addEventListener('keyup',function() {
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
    }
    else 
    {
        addBtn.classList.remove('active');
    }
})

addBtn.addEventListener('click', ()=>{
    if(input.value.trim() != 0 ) {
    let newItem = document.createElement('div');
    newItem .classList.add('item');
    newItem.innerHTML =  '<p >{input.value}</p><div class="item_btn"><i class="fa fa-trash" ></i><i class="fa fa-check"></i></div>';
    tasks.appendChild(newItem);
    input.value = " ";
    }
    else{
        alert('please enter a task here!')
    }
})
tasks.addEventListener('click',(e) =>{
    if(e.target.classList.contains('fa-check')){
        e.target.parentElement.parentElement.remove();
    }
})
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.classList.toggle('completed');

    }
})