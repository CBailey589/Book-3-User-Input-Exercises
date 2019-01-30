function createLegoObject() {
    const creator = document.querySelector("#creatorNameInput").value
    const color = parseInt(document.querySelector("#workColorSelect").value)
    const shape = document.querySelector("#workShapeInput").value
    const creation = document.querySelector("#workNameInput").value

    const legoToSave = {
        creator: creator,
        color: color,
        shape: shape,
        creation: creation
    }

    return(legoToSave)
}

export default createLegoObject;