let token = "fe6805627f824e0288a2929a160f325b";
let token2 = `cb03b8fb6b2247799546dee2f15bfbcb`;
let token3 = `ec17ab764f424f6ea2d3cdbf4fa69d90`;
let url = ` https://api.spoonacular.com/recipes/complexSearch`;
let infoUrl = `https://api.spoonacular.com/recipes/`;

let info = [
  {
    instructions:
      "<ol><li>Place meat in a medium-size roasting pan. Sprinkle with garlic & cilantro. Season with salt & pepper.</li><li>Squeeze the juice from 1 orange & the lemon over the meat.</li><li>Slice the remaining oranges & place over the meat.</li><li>Cover & bake at 350 degrees for about 2 hours or until meat is tender.</li><li>With a slotted spoon, remove meat & drain well on paper towels.</li><li>Heat a small amount of oil in a skillet & fry meat, 1 lb at a time until brown & crispy.</li><li>Serve warm in flour tortillas garnished with cheese, salsa, & guacamole.</li><li>YIELD: 12-16 servings</li></ol>",

    winePair: ["pinot noir", "riesling", "sparkling rose"],

    tips: {
      health: [
        "Before you pass up garlic because you don't want t…icin (one of garlic's most beneficial compounds)., 'Be conscious of your choicefor high temperature cooking. Do your research!', 'Although the body needs salt to survive, most of u…lt by using more black pepper, herbs, and spices.",
      ],
      price: [
        "If you find meat (especially grassfed and/or organ… chops, etc., will be fine for at least 4 months.",
        "Most dairy products stay good well past their sell…nd it can keep you from wasting food (and money)",
      ],
    },

    sourceUrl: "http://www.foodista.com/recipe/Y3VQVMF2/mexican-carnitas",
  },
];

async function displayMex() {
  let fetchMex = await fetch(`${url}?apiKey=${token3}&query=mexican&number=3`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token3}`,
    },
  });

  let finalDisplay = await fetchMex.json();
  console.log(finalDisplay);
  let mexImages = [];
  let mexId = [];
  let mexTitles = [];
  for (let i = 0; i < finalDisplay.results.length; i++) {
    mexImages.push(finalDisplay.results[i].image);
    mexId.push(finalDisplay.results[i].id);
    mexTitles.push(finalDisplay.results[i].title);
  }
  // console.log(mexImages);
  // console.log(mexId);
  // console.log(mexTitles);

  let fetchMexInfo = await fetch(
    `https://api.spoonacular.com/recipes/informationBulk?ids=${mexId}&apiKey=${token3}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token3}`,
      },
    }
  );

  let finalMexInfo = await fetchMexInfo.json();
  console.log(finalMexInfo);

  console.log(info[0].instructions);

  const rowFood = document.getElementById("row");
  const foodImage = mexImages.map((element, index) => {
    return `<div class="col-lg-4 col-md-6 mb-4">
    <a href="${mexTitles[index]}.html" class="text-decoration-none">
      <div class="card">
        <img src="${element}" class="rounded-3 card-img-top" alt="Food Image">
        <div class="card-body">
          <h5 class="card-title text-center">${mexTitles[index]}</h5>
          <p class="card-text fw-500">Wine-pair: ${info[0].winePair}</p>
          <h5>INSTRUCTIONS:</h5>
          <p class="card-text">${info[0].instructions}</p>
          <h5>Tips:</h5>
          <ul>
            <li>${info[0].tips.health}</li>
            <li>${info[0].tips.price}</li>
          </ul>
          <p class="card-text mb-0">Source-URL:</p>
          <small class="text-body-secondary">${info[0].sourceUrl}</small>
        </div>
      </div>
    </a>
  </div>`;
  });

  // console.log(foodImage);
  const finalFoodImage = foodImage.join("");
  rowFood.innerHTML = finalFoodImage;
}

displayMex();

// ////////////////////////////////////////////////////// INDIAN CUISINE ////////////////////////////////////////////////////
async function displayInd() {
  let fetchInd = await fetch(`${url}?apiKey=${token3}&query=indian&number=3`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token3}`,
    },
  });

  let finalDisplay = await fetchInd.json();
  console.log(finalDisplay);
  let indImages = [];
  let indId = [];
  let indTitles = [];
  for (let i = 0; i < finalDisplay.results.length; i++) {
    indImages.push(finalDisplay.results[i].image);
    indId.push(finalDisplay.results[i].id);
    indTitles.push(finalDisplay.results[i].title);
  }
  // console.log(mexImages);
  // console.log(mexId);
  // console.log(mexTitles);

  let fetchMexInfo = await fetch(
    `https://api.spoonacular.com/recipes/informationBulk?ids=${indId}&apiKey=${token3}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token3}`,
      },
    }
  );

  let finalIndIfo = await fetchMexInfo.json();
  console.log(finalIndIfo);

  console.log(info[0].instructions);

  const rowFood = document.getElementById("row-2");
  const foodImage = indImages.map((elementImage, index) => {
    return `<div class="col-lg-4 col-md-6 mb-4">
    <a href="${indTitles[index]}.html" class="text-decoration-none">
      <div class="card">
        <img src="${elementImage}" class="rounded-3 card-img-top" alt="Food Image">
        <div class="card-body">
          <h5 class="card-title text-center">${indTitles[index]}</h5>
          <p class="card-text fw-500">Wine-pair: ${info[0].winePair}</p>
          <h5>INSTRUCTIONS:</h5>
          <p class="card-text">
          ${info[0].instructions}</p>
          <h5>Tips:</h5>
          <ul>
            <li>${info[0].tips.health}</li>
            <li>${info[0].tips.price}</li>
          </ul>
          <p class="card-text mb-0">Source-URL:</p>
          <small class="text-body-secondary">${info[0].sourceUrl}</small>
        </div>
      </div>
    </a>
  </div>`;
  });

  // console.log(foodImage);
  const finalFoodImage = foodImage.join("");
  rowFood.innerHTML = finalFoodImage;
}

displayInd();

///////////////////////////////////////////////////AMERICAN-CUISINE//////////////////////////////////////////////////////////////
async function displayAme() {
  let fetchAme = await fetch(
    `${url}?apiKey=${token3}&query=american&number=3`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token3}`,
      },
    }
  );

  let finalDisplay = await fetchAme.json();
  console.log(finalDisplay);
  let ameImages = [];
  let ameId = [];
  let ameTitles = [];
  for (let i = 0; i < finalDisplay.results.length; i++) {
    ameImages.push(finalDisplay.results[i].image);
    ameId.push(finalDisplay.results[i].id);
    ameTitles.push(finalDisplay.results[i].title);
  }
  // console.log(mexImages);
  // console.log(mexId);
  // console.log(mexTitles);

  let fetchAmeInfo = await fetch(
    `https://api.spoonacular.com/recipes/informationBulk?ids=${ameId}&apiKey=${token3}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token3}`,
      },
    }
  );

  let finalAmeInfo = await fetchAmeInfo.json();
  console.log(finalAmeInfo);

  // console.log(info[0].instructions);

  const rowFood = document.getElementById("row-3");
  const foodImage = ameImages.map((elementImage2, index) => {
    return `<div class="col-lg-4 col-md-6 mb-4">
    <a href="${ameTitles[index]}.html" class="text-decoration-none">
      <div class="card">
        <img src="${elementImage2}" class="rounded-3 card-img-top" alt="Food Image">
        <div class="card-body">
          <h5 class="card-title text-center">${ameTitles[index]}</h5>
          <p class="card-text fw-500">Wine-pair: ${info[0].winePair}</p>
          <h5>INSTRUCTIONS:</h5>
          <p class="card-text">
          ${info[0].instructions}</p>
          <h5>Tips:</h5>
          <ul>
            <li>${info[0].tips.health}</li>
            <li>${info[0].tips.price}</li>
          </ul>
          <p class="card-text mb-0">Source-URL:</p>
          <small class="text-body-secondary">${info[0].sourceUrl}</small>
        </div>
      </div>
    </a>
  </div>`;
  });

  // console.log(foodImage);
  const finalFoodImage = foodImage.join("");
  rowFood.innerHTML = finalFoodImage;
}

displayAme();
