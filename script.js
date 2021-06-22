class ToDo {
    constructor() {}

    addToList(input, inputText) {
        //creates elements for new todo input
        let liDiv = document.createElement('div')
        let li = document.createElement('li')
        let del = document.createElement('BUTTON')
        //assigns attributes to allows css to manip
        liDiv.setAttribute('class', 'new-entry')
        del.textContent = "Del"
        //creates event listener for new delete button 
        del.addEventListener('click', () => {
            let deleteParentNode = del.parentNode
            toDo.delete(deleteParentNode)
        })
        //sets text content of new todo and append it to ul
        li.textContent = inputText
        liDiv.append(li, del)
        toDoListUl.append(liDiv)

        input.value=''
    }

    delete(parentNode) {
        var userConfirmDelete = confirm(`Hold On! You are about to delete the following ToDo: \n${parentNode.children[0].innerText}\nAre you sure you would like to continue?`)

        if (userConfirmDelete) {
            parentNode.remove()

        } else return

    }
}


const submit = document.querySelector('[submit-button]')
const newToDo = document.querySelector('input[new-todo]')
const toDoListUl = document.querySelector('ul[item-list]')
let btn = null;

const toDo = new ToDo()


submit.addEventListener('click', () => {
    toDo.addToList(newToDo, newToDo.value)

})
