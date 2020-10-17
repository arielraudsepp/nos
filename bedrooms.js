// program to determine the bedroom size
// Based on National Occupancy Standard. This standard requires one bedroom for:
// - each cohabiting adult couple (spouses or adult interdependent partners);
// - each household member 18 years of age and over;
// - each pair of children under age 18 who are the same gender;
// - each pair of children under the age of 5 who are different genders


//data for testing logic
// there is a spouse, another adult
let spouse = 'yes';
let adults = 1;
let female_5_to_17 = 2

//body of code
let bedroom = 0;
console.log(bedroom);

//one bedroom for spouse
if (spouse = 'yes') {
    bedroom += 1;
}
//one more bedroom for each additional adult
if (adults > 0) {
    bedroom += adults;
}



console.log(bedroom)
