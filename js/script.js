//Business Logic (USING ES6/BABEL)
class Pizza{
  constructor(type, size, toppings, crust, delivery){
    this.type = type;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.delivery = delivery;
    this.price = 500;
  }

  sizePrice(){
    if (this.size === "large") {
      this.price += 500;
      return this.price;
    } else if (this.size === "medium"){
      this.price += 300;
      return this.price;
    } else {
      return this.price;
    }
  }

  addToppings(){
    if (this.toppings === "double-toppings") {
      return 300;
    } else if (this.toppings === "extra-cheese"){
      return 100;
    } else if (this.toppings === "extra-dip"){
      return 150;
    } else if (this.toppings === "diced pineapples") {
      return 100;
    } else {
      return 0;
    }
  }

  chooseCrust(){
    if (this.crust === "italian-thin-crust"){
      return 50;
    } else if (this.crust === "pan-pizza"){
      return 100;
    } else if (this.crust === "american-hand-tossed") {
      return 50;
    } else {
      return 0;
    }
  }

  toDeliver(){
    if (this.delivery === true){
      return 200;
    } else {
      return 0;
    }
  }

  getTotalPickedUp(){
    let pricePerSize = this.sizePrice();
    let extraToppingsPrice = this.addToppings();
    let crustPrice = this.chooseCrust();

    return pricePerSize + extraToppingsPrice + crustPrice;
  }

  getTotalDelivered(){
    let grossPrice = this.getTotalPickedUp();
    let deliveryFee = this.toDeliver();

    return grossPrice + deliveryFee;
  }
}

let oldie = new Pizza ("Peperoni Pizza", "large", "double-toppings", "pan-pizza", true);

alert(oldie.getTotalPickedUp());
