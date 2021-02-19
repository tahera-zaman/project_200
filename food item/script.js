const searchMeal = () => {
  const mealName = document.getElementById("searchFood").value;
  document.getElementById("mealContainer").innerHTML = "";
  document.getElementById("erroMessage").innerHTML = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  //fetching data from server
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMeal(data.meals))
    .catch((error) =>
      errorText("Oops! we couldn't find your food.... Search anything else!")
    );
};
const errorText = (error) => {
  const errText = document.getElementById("erroMessage");
  errText.innerText = error;
};
//creating meal list
const showMeal = (meals) => {
  const mealContainer = document.getElementById("mealContainer");
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = `col`;
    mealDiv.innerHTML = ` 
    <div  onclick="showIngrediants('${meal.strMealThumb}','${meal.strMeal}','${meal.strIngredient1}','${meal.strIngredient2}','${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5}','${meal.strIngredient6}','${meal.strIngredient7}','${meal.strIngredient8}')" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="Food Item" /> 
        <div class="card-body">
            <h5 id="mealName" class="card-title">${meal.strMeal}</h5>
        </div>
    </div>`;
    mealContainer.appendChild(mealDiv);
  });
};
//showing ingrediants
const showIngrediants = (
  mealImage,
  mealName,
  ingrediant1,
  ingrediant2,
  ingrediant3,
  ingrediant4,
  ingrediant5,
  ingrediant6,
  ingrediant7,
  ingrediant8
) => {
  const ingrediantContainer = document.getElementById("showIngrediantName");
  document.getElementById("mealContainer").innerHTML = "";
  const ingrediantDiv = document.createElement("div");
  ingrediantDiv.className = "showingIngrediant";
  ingrediantDiv.innerHTML = `
    <img src="${mealImage}" alt="Food Item" />
    <h3>${mealName}</h3>
    <ul>
        <li>${ingrediant1}</li>
        <li>${ingrediant2}</li>
        <li>${ingrediant3}</li>
        <li>${ingrediant4}</li>
        <li>${ingrediant5}</li>
        <li>${ingrediant6}</li>
        <li>${ingrediant7}</li>
        <li>${ingrediant8}</li>
    </ul>   
  `;
  ingrediantContainer.appendChild(ingrediantDiv);
};
