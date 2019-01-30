function displayDropdownColors() {
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

export default displayDropdownColors;