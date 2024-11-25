let url = "https://api.spoonacular.com/recipes/complexSearch?query";

let token = "fe6805627f824e0288a2929a160f325b";

async function foodMeal() {
  let food = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${token}&query=mexican&number=20`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  let foodDisplay = await food.json();
  console.log(foodDisplay);
}

foodMeal();

// let url2 = `https://api.spoonacular.com/recipes/4632/card
// `;
// async function displayCard() {
//   const cont = document.getElementById("container");
//   let food = await fetch(`${url2} + &${token}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   let finalFood = await food.json();
//   // console.log(finalFood);
// cont.innerHTML =finalFood;
// }

// displayCard();
