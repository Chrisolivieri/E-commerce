const params = new URLSearchParams(window.location.search)

console.log(window.location.search)

const img = params.get("imageUrl")
const title = params.get("name")
const brand = params.get("brand")
const description = params.get("description")
const price = params.get("price")

console.log(img)
console.log(brand)

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4NjJiOThmYzBmMzAwMTU1ZTVhZjMiLCJpYXQiOjE3MTgxMTcwNDksImV4cCI6MTcxOTMyNjY0OX0.XdkzLUGrc70DZI1lO4GINc99NUPwSMNi559Y6v9EcP8",
      },
    }
  );
  const games = await response.json()
  console.log(games)

  let game = ` <div class="card mb-3" ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${img} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text"><small class="text-body-secondary">€ ${price}</small></p>
        
      </div>
    </div>
  </div>
</div>
                  `
  document.getElementById("game").innerHTML = game
})


