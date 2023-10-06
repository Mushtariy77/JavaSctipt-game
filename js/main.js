// // Xatoliklarni ushlab olish
// let password = "Maqsadbek";
// try {
//   console.log(efisruhriu);
// } catch (error) {
//   h2.innerText = error;
// }

// const number = 40;
// try {
//   if (number > 50) {
//     console.log("Success");
//   } else {
//     throw new Error("16-qator");
//   }
//   // Agar throw ishlasa bundan pastdagi kodlar ishlamaydi
//   console.log("hello");
// } catch (error) {
//   console.log("Error message: " + error);
// }

let count = 0;

if (localStorage.getItem("ball") !== null) {
  count = localStorage.getItem("ball");
}

let h3 = document.querySelector("h3");
let form = document.querySelector("#form");
let h2 = document.querySelector("h2");

h3.innerHTML = count;

form.addEventListener("submit", (e) => {
  let input = document.getElementById("input");
  e.preventDefault();
  let inputValue = e.target.input.value;
  let random = Math.round(Math.random() * 10);
  if (inputValue == random) {
    h2.innerHTML = "Siz tog'ri topdingiz !";
    count++;
    h3.innerHTML = count;
    localStorage.setItem("ball", count);
  } else {
    h2.innerHTML = `Siz topa olmadingiz biz o'ylagan son ${random}raqami edi`;
  }
  input.value = "";
});

function restart() {
  localStorage.clear();
  count = 0;
  h3.innerHTML = count;
}
