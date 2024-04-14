document.getElementById("recipe1Btn").addEventListener("click", function() {
  document.getElementById("recipeContent").innerHTML = `
    <h3>Babka</h3>
    <ul>
      <li>2 Large Eggs</li>
      <li>1/2 cup whole milk</li>
      <li>1 + 1/2 Stick Butter</li>
      <li>18 oz Flour</li>
      <li>3 oz Sugars</li>
      <li>1 packet yeast</li>
    </ul>`;
});

document.getElementById("recipe2Btn").addEventListener("click", function() {
  document.getElementById("recipeContent").innerHTML = `
    <h3>Pancakes</h3>
    <ul>
      <li>3 oz sugar</li>
      <li>1 + 1/2 cup buttermilk</li>
      <li>1 cup flour</li>
      <li>2 Large Eggs</li>
    </ul>`;
});

document.getElementById("recipe3Btn").addEventListener("click", function() {
  document.getElementById("recipeContent").innerHTML = `
    <h3>Cinnamon Rolls</h3>
    <ul>
      <li>1/2 cup buttermilk</li>
      <li>2 Large Eggs</li>
      <li>4 Tbsp Cinnamon</li>
      <li>1 + 1/2 cup bread flour</li>
      <li>1 yeast packet</li>
      <li>2 Tbsp sugar</li>
      <li>Half Cup sugar (for filling)</li>
    </ul>`;
});
