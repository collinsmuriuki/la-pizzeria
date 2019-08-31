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


  pricePerType(){
    if (this.type === "Cheesey Chicken"){
      this.price = 300;
      return this.price;
    } else if (this.type === "Hippy Hawaiian"){
      this.price = 400;
      return this.price;
    } else if (this.type === "Stripylicious"){
      this.price = 600;
      return this.price;
    } else if (this.type === "Sweet Pie"){
      this.price = 500;
      return this.price;
    } else if (this.type === "Classic Peperoni"){
      this.price = 600;
      return this.price;
    } else if (this.type === "Heissy Hot"){
      this.price = 400;
      return this.price;
    }
  }


  pricePerSize(){
    let typePrice = this.pricePerType();
    if (this.size === "large") {
      typePrice += 500;
      return typePrice;
    } else if (this.size === "medium"){
      typePrice += 300;
      return typePrice;
    } else {
      return typePrice;
    }
  }

  addToppings(){
    if (this.toppings === "double-toppings") {
      return 200;
    } else if (this.toppings === "extra-cheese"){
      return 50;
    } else if (this.toppings === "extra-dip"){
      return 100;
    } else if (this.toppings === "diced pineapples") {
      return 50;
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

  getTotal(){
    let pricePerSizeAndType = this.pricePerSize();
    let extraToppingsPrice = this.addToppings();
    let crustPrice = this.chooseCrust();

    return pricePerSizeAndType + extraToppingsPrice + crustPrice;
  }

  getTotalPlusDelivery(){
    let grossPrice = this.getTotal();
    let deliveryFee = this.toDeliver();

    return grossPrice + deliveryFee;
  }
}

let oldie = new Pizza ("Stripylicious", "large", "extra-dip", "standard", true);

alert(oldie.getTotalPlusDelivery());
