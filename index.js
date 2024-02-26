// Write your solution in this file!

var customerName;
customerName = `bob`;
console.log(customerName);

function upperCaseCustomerName() {
  if (customerName) {
    return (customerName = customerName.toUpperCase());
  } else undefined;
}
customerName = upperCaseCustomerName(customerName);

console.log(upperCaseCustomerName(customerName));

// second part
function setBestCustomer() {
  bestCustomer = "not bob";
}

setBestCustomer();
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "someone";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone else";
}
