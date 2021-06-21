class ToDo {
    constructor() {}

    addToList(input, inputText) {
        let liDiv = document.createElement('div')
        let li = document.createElement('li')
        let del = document.createElement('BUTTON')
        liDiv.setAttribute('class', 'new-entry')
        del.setAttribute('div-entry', '')
        del.textContent = "Del"
        li.textContent = inputText
        liDiv.append(li, del)
        toDoListUl.append(liDiv)
        input.innerText = ""
    }

    delete(parentNode){
        let userConfirmDelete = confirm(`Hold On! You are about to delete the following ToDo: \n ${parentNode.children[0].innerText}Are you sure you would like to continue?`)
       
        if(userConfirmDelete){
             parentNode.remove()
             
        }
        else return
        
    }
}


const submit = document.querySelector('[submit-button]')
const newToDo = document.querySelector('input[new-todo]')
const toDoListUl = document.querySelector('ul[item-list]')


const toDo = new ToDo()


submit.addEventListener('click', button => {
    toDo.addToList(newToDo, newToDo.value)
    const deleteBtn = document.querySelectorAll('button[div-entry]')
   
    deleteBtn.forEach(button =>
        button.addEventListener('click', () => {
           let deleteParentNode = button.parentNode
           //let toDoText = 
           toDo.delete(deleteParentNode)
        }))
    
    
})


