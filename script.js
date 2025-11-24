const button = document.querySelector("button");
const displayDiv = document.querySelector(".display-api-content");

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayDiv.innerHTML = `
      <h2> API response:</h2>
      <p><strong>Total Products:</strong> ${data.total}</p>
      <p><strong>Products:</strong> ${data.products
        .map((product) => product.title)
        .join("    ,     ")}</p>
      `;
  } catch (error) {
    displayDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
  }
}
button.addEventListener("click", fetchData);

const numbers = [1, 2, 3, 4, 5];
const doubleNums = numbers.map((num) => num * 2);
console.log(doubleNums);
