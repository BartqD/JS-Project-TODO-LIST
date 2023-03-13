let todoInput //miejsce gdzie użytkownik wpisuje treść zadania 
let errorInfo // info o braku zadań
let addBtn // przycisk ADD dodaje nowe elementy do listy
let ulLIst //list zadań, tagi UL

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const  prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulLIst = document.querySelector('.todolist ul')
}
const prepareDOMEvents = () => {
    
}

document.addEventListener('DOMContentLoaded', main)