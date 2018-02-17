function Phone(brand, price, color){
	this.brand = brand;
	this.price = price;
	this.color = color;
}
 Phone.prototype.printInfo = function() {
 	console.log("The phone brand is " + this.brand + " the color is " + this.color + " and the price is " + this.price + "Eur.");	
 }

 Phone.prototype.calling = false;
 Phone.prototype.telDzwoni = function() {
 	console.log("Your phone " + this.brand + " is ringing! Pick up!");
 	this.calling = true;
 }

Phone.prototype.wiadomosci = false;
 Phone.prototype.maszWiadomosc = function() {
 	if ( this.calling === true ) {
	console.log("Odsluchaj wiadomosc na swoim " + this.brand + " ktos przed chwila dzwonil i cos nagral. ");
 	this.wiadomosci = true;}
 	else console.log(" Niestety nie masz wiadomosci na swoim " + this.brand + ", bo nikt dzis nie dzwonil.");
 }


var nowyTel1 = new Phone("Samsung Galaxy S6", 150, "black");
var nowyTel2 = new Phone("iPhone 6s", 1000, "sillver");
var nowyTel3 = new Phone("OnePlus One", 500, "white");


nowyTel1.printInfo(); 
nowyTel3.printInfo();
nowyTel3.telDzwoni();
nowyTel2.maszWiadomosc();
nowyTel3.maszWiadomosc();