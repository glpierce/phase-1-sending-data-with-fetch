function createRequestObj(nameInput, emailInput) {
    const formData = {name: nameInput, email: emailInput};
    const requestObj = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify(formData)
                        };
    return requestObj;
}


function submitData(nameInput, emailInput) {
   return fetch("http://localhost:3000/users", createRequestObj(nameInput, emailInput))
    .then((resp) => resp.json())
    .then((data) => {
        const id = document.createElement('p')
        id.textContent = data.id
        document.querySelector('body').append(id)
    })
    .catch((error) => {
        const errorMessage = document.createElement('p')
        errorMessage.textContent = error.message
        document.querySelector('body').append(errorMessage)
    })
}