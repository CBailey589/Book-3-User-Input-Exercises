import displayDropdownColors from "./displayDropdownColors.mjs"
import postCreationToDatabase from "./postCreationToDatabase.mjs"

displayDropdownColors()

document.querySelector("#legoFormSave").addEventListener("click",postCreationToDatabase)



