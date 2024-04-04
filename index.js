function submitData(name, email) {
    const destinationURL = 'http://localhost:3000/users';

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    // Return the fetch chain for the tests 
    return fetch(destinationURL, configurationObject)
        .then(response => response.json())
        .then(data => {
            // Update the DOM with the new id
            const idElement = document.createElement('p'); 
            idElement.textContent = `New User ID: ${data.id}`;
            document.body.appendChild(idElement);
        })
        .catch(error => {
            // Update the DOM with the error message
            const errorElement = document.createElement('p'); 
            errorElement.textContent = `Error: ${error.message}`;
            document.body.appendChild(errorElement);
        });
}
