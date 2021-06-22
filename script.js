class ToDo {
    constructor() {}

    addToList(input, inputText, button) {
        let liDiv = document.createElement('div')
        let li = document.createElement('li')
        let del = document.createElement('BUTTON')
        liDiv.setAttribute('class', 'new-entry')
        //del.setAttribute('div-entry', '')
        del.setAttribute('onclick', 'test(this)')
        del.textContent = "Del"
        li.textContent = inputText
        liDiv.append(li, del)
        toDoListUl.append(liDiv)
        input.innerText = ""
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
let btn=null;

const toDo = new ToDo()


submit.addEventListener('click', () => {
    btn = toDo.addToList(newToDo, newToDo.value)
    
})

function test(elem) {
    let deleteParentNode = elem.parentNode

    toDo.delete(deleteParentNode)
}

