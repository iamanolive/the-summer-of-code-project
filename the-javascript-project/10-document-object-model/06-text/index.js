const mainHeading = document.getElementById("main-heading");

console.log(mainHeading.innerText);

console.log(mainHeading.textContent);
mainHeading.textContent = "this is something else";
console.log(mainHeading.textContent);