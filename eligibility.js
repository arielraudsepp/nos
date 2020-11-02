const assert = require("assert");

// determines eligibiltiy for Commun programs based on status in Canada, Household Income Level (HILS), and assets
// status in Canada, PR under private sponsorship (excluding private sponsorship ended)
// assets: over $25000
// HILS: based on bedroom size and total annual adjusted income
//  Edmonton: Bach: $35000, 1bd: $40500, 2bd: $51000, 3bd: $64000, 4bd: $71500
// example: https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html


var assets = (amount) => {
    let commun = false;
    
    if (amount < 25000) {
       commun = true;
    }
    return commun
}

assert.equal(assets(3000), true);
assert.equal(assets(300000), false);


// What is your gross monthly income (before deductions)? Please exclude Canada Child Benefit, GST Credit.
var hils = (bedrooms, income) => {
    let annual_income = (income * 12)
}
