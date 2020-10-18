if (module.hot) {
  module.hot.accept()
}
let formData = {};

let init = () => {
  let calculate = document.getElementById("rooms");
  calculate.onsubmit = showCalculation;

  let yesChildren = document.getElementById("yesChildren");
  let noChildren = document.getElementById("noChildren");
  yesChildren.onclick = showChildren;
  noChildren.onclick = hideChildren;
};

let showChildren = () => {
  let container = document.getElementById("children");
  container.style = "display: block;";
};

let hideChildren = () => {
  let container = document.getElementById("children");
  container.style = "display: none;";
};

let convertToNumber = (value) => {
  let result = parseInt(value, 10);
  if (result !== NaN) {
    return parseInt(value, 10);
  } else {
    console.error(`Can not convert ${value} into a number`);
  }
};

function showCalculation(event) {
  event.preventDefault();

  //debugger;
  let formData = {
    adults: convertToNumber(event.target[0].value),
    spouse: event.target[1].checked,
    children: event.target[3].checked,
    f_5_to_17: convertToNumber(event.target[5].value),
    f_under_5: convertToNumber(event.target[6].value),
    m_5_to_17: convertToNumber(event.target[7].value),
    m_under_5: convertToNumber(event.target[8].value)
  };

  let output = document.getElementById("output");

  output.innerHTML = JSON.stringify(formData, null, "\t");
}


window.onload = init;
