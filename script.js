window.onload = getGames()

async function getGames() {

    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8"
        }
    })
    const games = await response.json()
    console.log(games)

    let gamesContainer = ""

    games.map((game) => {
        gamesContainer += `
        <div class="card" style="width: 18rem;">
  <img src=${game.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${game.name}</h5>
    <p class="card-text">${game.price} €</p>
  </div>
  
  <div class="card-body">
    <a href="./details.html?name=${game.name}&imageUrl=${game.imageUrl}&brand=${game.brand}&description=${game.description}&price=${game.price}" class="card-link">Dai un'occhiata</a>
    <button class="btn btn-danger" onclick="deleteGame2('${game._id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg></button>
                  <button type="button" class="btn btn-success" data-bs-toggle="modal" onclick="editGame2('${game._id}')" data-bs-target="#editGame">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>  
                </button>
  </div>
  
</div>
 `
        document.getElementById("games").innerHTML = gamesContainer
    })
}

function addGame() {


    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8",
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: document.getElementById("name").value,
            brand: document.getElementById("brand").value,
            description: document.getElementById("description").value,
            imageUrl: document.getElementById("imageUrl").value,
            price: document.getElementById("price").value
        })
    })
        .then(response => {
            if (response.status === 200) {
                alert("Hai aggiunto il prodotto")
                getGames()
            } else if (name === "" || brand === "" || description === "" || imageUrl === "" || price === "") {
                alert("Inserisci prima dei parametri")

            } else {
                alert("Il prodotto è già stato creato")
            }
        })

}

function deleteGame() {
    id = document.getElementById("gameID").value

    fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8",
            "Content-Type": "application/json"
        },

    })
        .then(response => {
            if (response.status === 200) {
                alert("Hai eliminato il prodotto")
                getGames()
            } else (
                alert("Inserisci prima dei parametri")
            )
        })
}

function editGame() {


    id = document.getElementById("id").value

    fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
        method: "PUT",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            name: document.getElementById("name2").value,
            brand: document.getElementById("brand2").value,
            description: document.getElementById("description2").value,
            imageUrl: document.getElementById("imageUrl2").value,
            price: document.getElementById("price2").value
        })
    }).then(response => {
        if (response.status === 200) {
            alert("Hai modificato il prodotto")
            getGames()
        } else (
            alert("Inserisci prima dei parametri")
        )
    })

}

function deleteGame2(id) {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8",
            "Content-Type": "application/json"
        },

    })
        .then(response => {
            if (response.status === 200) {
                alert("Hai eliminato il prodotto")
                getGames()
            } else (
                alert("Inserisci prima dei parametri")
            )
        })
}

function editGame2(id) {
    let ID = document.getElementById("id")
    ID.setAttribute("class", "d-none")

    fetch("https://striveschool-api.herokuapp.com/api/product/" + id, {
        method: "PUT",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8",
            "Content-Type": "application/json"
        },

    }).then(response => {
        response.json().then(game => {
            document.getElementById("id").value = game._id
            document.getElementById("name2").value = game.name
            document.getElementById("brand2").value = game.brand
            document.getElementById("description2").value = game.description
            document.getElementById("imageUrl2").value = game.imageUrl
            document.getElementById("price2").value = game.price
        })
    })
    
}



function search() {
    console.log("ciao")
    let search = document.getElementById("search").value.toUpperCase()

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8",
            "Content-Type": "application/json"
        },
    }).then((response) => {
        response.json()
            .then((games) => {
                console.log(games)

                let allGames = ""

                games.forEach((game) => {
                    let gameUpperCase = game.name.toUpperCase()
                    let includes = gameUpperCase.includes(search)

                    if (includes === true) {
                        allGames += `
        <div class="card" style="width: 18rem;">
  <img src=${game.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${game.name}</h5>
    <p class="card-text">${game.price} €</p>
  </div>
  
  <div class="card-body">
    <a href="./details.html?name=${game.name}&imageUrl=${game.imageUrl}&brand=${game.brand}&description=${game.description}&price=${game.price}" class="card-link">Dai un'occhiata</a>
    <button class="btn btn-danger" onclick="deleteGame2('${game._id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg></button>
                  <button type="button" class="btn btn-success" data-bs-toggle="modal" onclick="editGame2('${game._id}')" data-bs-target="#editGame">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                  </svg>  
                </button>
  </div>
  
</div>
 `
                    }
                    
                })
                document.getElementById("games").innerHTML = allGames
            })
    })

}
