'use strict';

let myStorage = window.sessionStorage;
let elementId = myStorage.length;

document.addEventListener("DOMContentLoaded", () => {
  displayLinksFromStorage();
})

const storingNote = (elementId, noteText) => {
  myStorage.setItem(noteText, elementId)
}

const getTitle = () => {
  let note = myStorage.getItem(elementId);
  return note.length < 20 ? note : note.slice(0, 19)
}

const makeClickSubmitCreateLink = () => {
  elementId += 1;
  let noteText = document.getElementById('note-text').value;
  storingNote(noteText, elementId);
  createLink();
}

const createLink = () => {
  let title = getTitle();
  let newEl = document.createElement('li');
  let newText = document.createTextNode(title);
  addingNewElement(newEl, newText);
}

const addingNewElement = (newEl, newText) => {
  newEl.appendChild(newText);
  newEl.setAttribute('id', elementId)
  let listPosition = document.getElementsByTagName('ul')[0];
  listPosition.appendChild(newEl);
}

const displayLinksFromStorage = () => {
  for (let i = 1; i < elementId; i++) {
    // Get the note

    // Create the title and ensure 20 chars.
    let note = myStorage.getItem(i);
    let title = note.length < 20 ? note : note.slice(0, 19);

    let existingEl = document.createElement('li');
    let existingText = document.createTextNode(title);
    existingEl.appendChild(existingText);
    existingEl.setAttribute('id', i)
    let listPosition = document.getElementsByTagName('ul')[0];
    listPosition.appendChild(existingEl);
    makeClickLinkDisplayNote(i);
  }
}

const makeClickLinkDisplayNote = (i) => {
  document
    .getElementById(i)
    .addEventListener("click", function(clickEvent) {
    console.log(`I have clicked an item in the list ${i}`);
    })
}
