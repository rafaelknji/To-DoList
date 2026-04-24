const add = document.querySelector('#adicionar');
const task = document.querySelector('#text');
const ul = document.querySelector('#lista');

add.addEventListener('click', function(event) {
    create();
})

task.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        create();
    }      
})



function create() {

    //create elements
    const list = document.createElement('li');

    const check = document.createElement('input');
    check.type = 'checkbox';

    const p = document.createElement('p');
    p.textContent = task.value;

    const button = document.createElement('button');
    button.textContent = '×'

    button.classList.add('delete');


    list.appendChild(check);
    list.appendChild(p);
    list.appendChild(button);

    ul.appendChild(list);

    button.addEventListener('click', function(event){
    list.remove();
    })

    task.value = '';
}





