const button = document.querySelector(".click");
const displayDiv = document.querySelector(".display-api-content");
const loader = document.getElementById("loader");
async function fetchData() {
  try {
    loader.style.display = "block";
    const response = await fetch("https://dummyjson.com/carts");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    const cartsHtmlArray = data.carts.map((cart) => {
      return `
      <p>
      User ID: ${cart.userId} | Total Products: ${cart.totalProducts} | Total Quantity: ${cart.totalQuantity} | Total Price: $${cart.total}
      
      `;
    });
    displayDiv.innerHTML = `
            <h3>🛒 All Cart Contents</h3>
            ${cartsHtmlArray.join("")}
        `;
    loader.style.display = "none";
  } catch (error) {
    displayDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    console.log(error);
  }
}

button.addEventListener("click", fetchData);
