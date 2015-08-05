// Create a Child class that takes a height, name, and age.
function Child(height,name,age){
  this.height = height;
  this.name = name;
  this.age = age;
}

var kid1 = new Child(3,'Julian',3);
var kid2 = new Child(4,'Cero',4);

function Ride(min,max){
  this.minHeight = min;
  this.maxHeight = max;
}

var ride1 = new Ride(3,7);
var ride2 = new Ride(4,7);

Ride.prototype.isTallEnough = function(child){
  if(child.height >= this.minHeight && child.height <= this.maxHeight){
    return true;
  } else { return false; }
}
