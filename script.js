let api = "https://api.sheetbest.com/sheets/5d75f3cf-e321-4970-a619-fe4562b71465"
const name = document.getElementById("nameInput")
const email = document.getElementById("emailInput")
const age = document.getElementById("ageInput")
const address = document.getElementById("addressInput")
const btn = document.getElementById("addUserButton")
const ul = document.getElementById('userList');



async function fetchData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log("Data1 :", data)
        return data;
    } catch (error) {
        console.error("Getting this error:", error);
    }
}


async function showData() {
    let data = await fetchData();
    console.log('data2 :', data);
    data.map(ele => {
        ul.innerHTML += `<div class="list-items">
                            <h2>${ele.NAME}</h2>
                            <p>${ele.EMAIL}</p>
                            <p>${ele.AGE}</p>
                        </div>`
    });
}

showData();