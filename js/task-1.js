const itemClassEl = document.querySelectorAll(".item");
const categoriesNameEl = document.querySelectorAll("li > h2");
const categoriesNameElArr = Array.from(categoriesNameEl);
const ulItemsCategory = document.querySelectorAll("li>ul");
const ulItemsCategoryArr = Array.from(ulItemsCategory);

for (let i = 0; i < categoriesNameElArr.length; i++){
    ulItemsCategoryArr[i].classList.add(categoriesNameEl[i].textContent);
    
}

function getCategories() {
    console.log("Number of categories: ", itemClassEl.length);
    }
function getCategoryNameAndLength() {
    categoriesNameEl.forEach(item => {
        console.log("Category: ", item.textContent);
        const temp = document.querySelectorAll(`[class = ${item.textContent}] > li`);
        console.log("Elements: ", temp.length);
    });
    
}
function getTask1() {
    getCategories();
    getCategoryNameAndLength();
}


getTask1();