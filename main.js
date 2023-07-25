//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

function EspressoMachine(name, cost, color,warranty) {
  this.name = name;
  this.cost = cost;
  this.color = color;
  this.warranty = warranty;

  this.makeEspresso = function() {
    console.log(`${this.name} is making a 4 shot espresso, WAKE UP!`);
  }
  this.receipt = function() {
    console.log(`${this.name} machine is $${this.cost}.00 + shipping. It is the ${this.color} color.`);

  this.help = function() {
    console.log(`If you have any trouble with your ${this.name} machine, please call 1-800-We-HelpU and your Warranty will cover all issues for ${this.warranty} years from date of purchase on your receipt.`);
    }
  }
}

const espressoBest = new EspressoMachine('Espresso Best', 189, 'black/chrome', 5);
const hotEspresso = new EspressoMachine('Hot Espresso', 109, 'red/black', 2);

espressoBest.receipt();
espressoBest.makeEspresso();
hotEspresso.receipt();
hotEspresso.help();

//Create an espresso machine class that makes machines with 4 properties and 3 methods
class MakeEspresso {
  constructor(name, cost, color,warranty) {
    this.name = name
    this.cost = cost
    this.color = color
    this.warranty = warranty
 }

  makeEspresso() {
    console.log(`${this.name} is making a 4 shot espresso, WAKE UP!`);
  }

  receipt() {
    console.log(`${this.name} machine is $${this.cost}.00 + shipping. It is the ${this.color} color.`)
  }

  help() {
    console.log(`If you have any trouble with your ${this.name} machine, please call 1-800-We-HelpU and your Warranty will cover all issues for ${this.warranty} years from date of purchase on your receipt.`)
  }
}

const amazingEspresso = new MakeEspresso('Amazing Espresso', 189, 'stainless steel', 5);
amazingEspresso.help();
amazingEspresso.receipt();
amazingEspresso.makeEspresso();
