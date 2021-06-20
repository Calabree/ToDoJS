class ToDo {
    constructor() {}

    addToList(input) {
        let liDiv = document.createElement('div')
        let li = document.createElement('li')
        let del = document.createElement('BUTTON')
        liDiv.setAttribute('class', 'new-entry')
        del.setAttribute('div-entry', '')
        del.textContent = "Del"
        li.textContent = input
        liDiv.append(li, del)
        toDoListUl.append(liDiv)
        
    }

    delete(){
        console.log("del")
    }
}


const submit = document.querySelector('[submit-button]')
const newToDo = document.querySelector('input[new-todo]')
const toDoListUl = document.querySelector('ul[item-list]')
const deleteBtn = document.querySelectorAll('button[div-entry]')

const toDo = new ToDo()


submit.addEventListener('click', button => {
    toDo.addToList(newToDo.value)
})

deleteBtn.addEventListener('click', button => {
    toDo.delete()
})
