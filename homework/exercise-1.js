/*
    Given the same "house" object again

    Write the code for the functions as per the description above them
*/

var kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com"
  }
};

var parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com"
  }
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/



// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  return house.currentOwner.firstName + " " + house.currentOwner.lastName;

}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {

  EmailAddresses = []
  for (i = 0; i < arguments.length; i++) {
    EmailAddresses.push(arguments[i].currentOwner.email);
  }
  return EmailAddresses;

}



// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  var Prices = [];
  var houses = [];
  for (i = 0; i < arguments.length; i++) {
    Prices.push(arguments[i].price);
    houses.push(arguments[i]);
  }

  chipestIndex = indexOfPrice(Prices);

  function indexOfPrice(a) {
    var chipest = 0;
    for (var c = 1; c < a.length; c++) {
      if (a[c] < a[chipest]) chipest = c;
    }
    return chipest;
  }
  return houses[chipestIndex].address;


}


/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log("Expected result: Margaret Conway. Actual result: " + getOwnerFullName(kinningParkHouse));
console.log("Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: " + getEmailAddresses(kinningParkHouse, parkAvenueHouse));
console.log("Expected result: 1 Kinning Park. Actual result: " + getCheapestAddress(parkAvenueHouse, kinningParkHouse));