import createLegoObject from "./createLegoObject.mjs"

function postCreationToDatabase() {
    let createdLegoObject = createLegoObject();
    fetch("http://localhost:8088/creations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createdLegoObject)
    })

}

export default postCreationToDatabase;