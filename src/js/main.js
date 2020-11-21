// Remove if not using parcel
if (module.hot) {
  module.hot.accept()
}
let childrenShown = false;
//logic portion for allocating bedroom size based on family composistion
var adult_bedrooms = (adults,spouse,children) => {
  let bedrooms = adults;
  if (spouse) {
    bedrooms -= 1;
  }
  if ((children === false) && (adults === 1)){
    bedrooms -= 1;
  }
  return bedrooms
}

var children_bedrooms = (f_under_5, f_5_to_17, m_under_5, m_5_to_17) => {
  let bedrooms = 0;
  let females = f_5_to_17 + f_under_5;
  let males = m_5_to_17 + m_under_5;
  let remainder_under_5 = 0;

  if (females % 2 === 0) {
    bedrooms += (females / 2);
  } else if  (f_5_to_17 % 2 === 1) {
    bedrooms += (((females - 1) / 2) + 1);
  } else {
    bedrooms += ((females - 1) / 2);
    remainder_under_5 += 1;
  }

  if (males % 2 === 0) {
    bedrooms += (males / 2);
  } else if (m_5_to_17 % 2 === 1) {
    bedrooms += (((males - 1) / 2) + 1);
  } else {
    bedrooms += ((males - 1) / 2);
    remainder_under_5 += 1;
  }

  if (remainder_under_5 % 2 === 0) {
    bedrooms += (remainder_under_5 / 2)
  } else {
    bedrooms += (((remainder_under_5 - 1) / 2) + 1);
  }

  return bedrooms
}


let formData = {};

let init = () => {
  let calculate = document.getElementById("rooms");
  calculate.onsubmit = showCalculation;

  let children = document.getElementById("children");
  children.onchange = showChildren;
};

let showChildren = (_event) => {
  let container = document.getElementById("container");
  if (!childrenShown) {
    container.style = "display: block;";
  }
  else{
    container.style = "display: none;";
  }

  childrenShown = !childrenShown;
};



let convertToNumber = (value) => {
  let result = parseInt(value, 10);
  if (!isNaN(result)) {
    console.log(result);
    return parseInt(value, 10);
  } else {
    console.error(`Can not convert ${value} into a number`);
    return 0;
  }
};

function showCalculation(event) {
  event.preventDefault();

  const formData = {
    adults: convertToNumber(event.target[0].value),
    spouse: event.target[1].checked,
    children: event.target[2].checked,
    f_under_5: convertToNumber(event.target[3].value),
    f_5_to_17: convertToNumber(event.target[4].value),
    m_under_5: convertToNumber(event.target[5].value),
    m_5_to_17: convertToNumber(event.target[6].value)
  };

  let output = document.getElementById("output");
  let total_bedrooms = adult_bedrooms(formData.adults,formData.spouse,formData.children) + children_bedrooms(formData.f_under_5, formData.f_5_to_17, formData.m_under_5, formData.m_5_to_17);

    if (total_bedrooms < 1) {
      output.innerHTML = 'You qualify for a bachelor or a 1 bedroom home.'
    } else if (total_bedrooms > 5) {
      output.innerHTML = `You qualify for a ${total_bedrooms} bedroom home. We not have housing that can accomodate your household's needs.`
    } else {
      output.innerHTML = `You qualify for a ${total_bedrooms} bedroom home.`
    }
};
$('.ui.checkbox').checkbox();
window.onload = init;
