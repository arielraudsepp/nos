const assert = require("assert");

// program to determine the bedroom size
// Based on National Occupancy Standard. This standard requires one bedroom for:
// - each cohabiting adult couple (spouses or adult interdependent partners);
// - each household member 18 years of age and over;
// - each pair of children under age 18 who are the same gender;
// - each pair of children under the age of 5 who are different genders

// calculation for how many bedrooms for adults
// one bedroom for each cohabiting adult couple (spouses or adult interdependent partners)
// one bedroom for each household member 18 years of age and over

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

//test cases for adult bedrooms
// assert.equal(adult_bedrooms(1, false, false), 0);
// assert.equal(adult_bedrooms(2, false, false), 2);
// assert.equal(adult_bedrooms(2, true, false), 1);
// assert.equal(adult_bedrooms(3, false, true), 3);
// assert.equal(adult_bedrooms(1, false, true), 1);

// calculation for how many bedrooms for children
// one bedroom for each pair of children under age 18 who are same gender and
// one bedroom for each pair of children under the age of 5 who are different genders
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

//test cases for children_bedrooms
// assert.equal(children_bedrooms(0,0,0,0), 0);
// assert.equal(children_bedrooms(1,0,0,0), 1);
// assert.equal(children_bedrooms(1,1,0,0), 1);
// assert.equal(children_bedrooms(1,1,1,0), 2);

// assert.equal(children_bedrooms(1,1,1,1), 2);
// assert.equal(children_bedrooms(0,0,0,1), 1);
// assert.equal(children_bedrooms(0,0,1,1), 1);
// assert.equal(children_bedrooms(0,1,1,1), 2);

// assert.equal(children_bedrooms(0,1,0,0), 1);
// assert.equal(children_bedrooms(0,1,1,0), 2);
// assert.equal(children_bedrooms(1,1,1,0), 2);
assert.equal(children_bedrooms(0,1,0,1), 2);

assert.equal(children_bedrooms(1,0,1,0), 1);
// assert.equal(children_bedrooms(1,0,0,1), 2);
// assert.equal(children_bedrooms(1,0,1,1), 2);
// assert.equal(children_bedrooms(0,0,0,1), 1);

var total_bedrooms = adult_bedrooms() + children_bedrooms()
