let api = "https://api.sheetbest.com/sheets/5d75f3cf-e321-4970-a619-fe4562b71465"
const name = document.getElementById("nameInput")
const email = document.getElementById("emailInput")
const age = document.getElementById("ageInput")
const address = document.getElementById("addressInput")
const btn = document.getElementById("addUserButton")

function fetchData(){
    fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data;
    })
}
fetchData()