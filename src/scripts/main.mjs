displayDropdownColors = function () {
    fetch("http://localhost:8088/colors")
        .then(colors => colors.json())
        .then(parsedColors => {
            let dropdown = document.querySelector("#workColorSelect")
            parsedColors.forEach(color => {
                console.log(color)
                dropdown.innerHTML +=
                 `
                 <option value="${color.id}">${color.name}<option
                 `
            });
        })
}
 displayDropdownColors();



document.querySelector("#legoFormSave").addEventListener("click", event => {
    const creator = document.querySelector("#creatorNameInput").value
    const color = document.querySelector("#workColorSelect").value
    const shape = document.querySelector("#workShapeInput").value
    const creation = document.querySelector("#workNameInput").value


    const legoToSave = {
        creator: creator,
        color: parseInt(color),
        shape: shape,
        creation: creation
    }

    fetch("http://localhost:8088/creations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })


})

