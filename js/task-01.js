const categoriesList = document.getElementById('categories');
const totalCategories = categoriesList.querySelectorAll('.item').length;
console.log(`Number of categories: ${totalCategories}`);

const categoryItems = categoriesList.querySelectorAll('.item');
categoryItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul li');
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});