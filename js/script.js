let elSelect = document.querySelector(".form__select");
let elInputRadioContent = document.querySelector(".form__radio");
let elInputChekContentLonger = document.querySelector(".form__checkbox-1");
let elInputChekContentMore = document.querySelector(".form__checkbox-2");

let resultBread = document.querySelector(".pizza__choice-bread");
let resultLong = document.querySelector(".pizza__big");
let resultTopList = document.querySelector(".pizza__top-list");
let resultBottomList = document.querySelector(".pizza__button-list");

let selectArr = ["Katta non", "O'rtacha non", "Kichik non"];
let arreyRadio = [25, 30, 35];
let pizzaIngredients = ["Pomidor", "Kurka go`shti", "Zaytun", "Tuzlangan bodring", "Qo`ziqorin", "Qazi"];
let pizzaTaste = ["Achchiq", "Sosiskali"];

let resultArr = [];
let resultArr2 = [];


for (let option = 0; option < selectArr.length; option++) {
  let selectOpt = document.createElement("option");
  selectOpt.value = selectArr[option];
  selectOpt.textContent = selectArr[option];
  elSelect.appendChild(selectOpt);

  elSelect.addEventListener('change', function (evt) {
    resultBread.textContent = evt.target.value;
  })
}

for (let radio = 0; radio < arreyRadio.length; radio++) {
  let inputRadio = document.createElement("input");
  inputRadio.setAttribute("type", "radio");
  inputRadio.setAttribute("name", "PIZZA-THICKNESS");
  inputRadio.setAttribute("class", "me-1");
  let labelRadio = document.createElement("label");
  labelRadio.setAttribute("class", "me-3");

  inputRadio.value = `${arreyRadio[radio]}sm`
  labelRadio.textContent = `${arreyRadio[radio]}sm`;
  labelRadio.prepend(inputRadio);
  elInputRadioContent.appendChild(labelRadio);

  elInputRadioContent.addEventListener('change', function (evt2) {
    resultLong.textContent = evt2.target.value;
  })  
}

for (let check = 0; check < pizzaIngredients.length; check++) {
  let inputCheckTop = document.createElement("input");
  inputCheckTop.setAttribute("type", "checkbox");
  inputCheckTop.setAttribute("name", "PIZZA-ISSUES");
  inputCheckTop.setAttribute("class", "me-3");
  let labelCheck = document.createElement("label");
  labelCheck.setAttribute("class", "me-3");

  inputCheckTop.value = pizzaIngredients[check];
  labelCheck.textContent = pizzaIngredients[check];
  labelCheck.prepend(inputCheckTop);
  elInputChekContentLonger.appendChild(labelCheck);



  let resultItem = document.createElement("li");
  elInputChekContentLonger.addEventListener("click", function (evt3) {


    if (inputCheckTop.checked) {
      resultArr.push(pizzaIngredients[check]);
      resultTopList.appendChild(resultItem);
      resultItem.textContent = pizzaIngredients[check];
    } else {
      resultTopList.removeChild(resultItem);
    }
  })


}


for (let checkMore = 0; checkMore < pizzaTaste.length; checkMore++) {
  let inputCheckBottom = document.createElement("input");
  inputCheckBottom.setAttribute("type", "checkbox");
  inputCheckBottom.setAttribute("name", "TASTE-PIZZA");
  inputCheckBottom.setAttribute("class", "me-3 input-checked");

  let labelCheckMore = document.createElement("label");
  labelCheckMore.setAttribute("class", "me-3");

  inputCheckBottom.value = pizzaTaste[checkMore];
  labelCheckMore.textContent = pizzaTaste[checkMore];
  labelCheckMore.prepend(inputCheckBottom);
  elInputChekContentMore.appendChild(labelCheckMore);
}

let resultItemMores = document.querySelectorAll(".input-checked")
  for(let el = 0; el < resultItemMores.length; el++) {
   let resultItemMore = document.createElement("li");

   resultItemMores[el].addEventListener("change", function () {

    if(resultItemMores[el].checked) {
      resultArr2.push(resultItemMores[el].value)
      
      for(let i = 0; i < resultArr2.length; i++) {
        resultItemMore.textContent = resultArr2[i];
        resultBottomList.appendChild(resultItemMore);
      }
    }else {
      resultBottomList.removeChild(resultItemMore);
    }
   })
} 


