// Create a Car class that takes the miles per gallon and gallons in a tank.
function Car(mpg,gallons){
  this.mpg = mpg;
  this.gallons = gallons;
}
// Create a Route class that takes the total miles to the destination, the destination name, and location (city and state).
function Route(miles,name,location){
  this.miles = miles;
  this.name = name;
  this.location = location;
}
// Create two instances of each.
var car1 = new Car(20,18);
var car2 = new Car(120,2);

var route1 = new Route(1200,'Disney Land', 'Los Angeles, CA');
var route2 = new Route(300, 'Hippie Haven', 'Nederland, CO');
// Write a function that takes a car object and a route object as arguments and determines if the car has enough gas to make the entire route (return true or false).
Route.prototype.enoughGas = function(car){
  if(car.mpg * car.gallons > this.miles){
    return true;
  } else {return false;}
}
