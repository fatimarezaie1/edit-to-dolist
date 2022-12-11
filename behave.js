let input= document.querySelector(".entered_list");
let addbtn= document.querySelector(".add_list");
let tasks= document.querySelector(".tasks");

input.addEventListener('keyup',() => {
    if(input.Value.trim() != 0){
        addbtn.classList.add('active') ;
    }
else
{
    addbtn.classList.remove('active');
}
})
addbtn.addEventListener('click', ()=>{
    if (input.Value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add(item);
        newItem.innerHTML= "
        <p> $ {input.value} </p>
        <div class="item_btn">
            <i class="fa-check"></i>
            <i class="fa-trash"></i>
        </div>
        "
        
        tasks.appendChild(newItem)
       input.Value='';
    }
       else {
        alert('please enter a task')
       }

    }
)
tasks.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-marks')){
        e.target.parentelement.parentelement.remove();

    }
}
)
tasks.addEventListener ('click', e=>
{
    if(e.target.classList.contains(fa-pen-to-squre))
    {
        e.target.parentelement.parentelement.classList.toggle('completed');
    }
}


)