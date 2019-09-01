//Business Logic (USING ES6/BABEL)
class Pizza{
  constructor(type, size, toppings, crust, delivery, orders){
    this.type = type;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.delivery = delivery;
    this.orders = orders;
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
    if (this.size === "Large") {
      typePrice += 500;
      return typePrice;
    } else if (this.size === "Medium"){
      typePrice += 300;
      return typePrice;
    } else {
      return typePrice;
    }
  }

  addToppings(){
    if (this.toppings === "Double Toppings") {
      return 200;
    } else if (this.toppings === "Extra Cheese"){
      return 50;
    } else if (this.toppings === "Extra Dip"){
      return 100;
    } else if (this.toppings === "Diced Pineapples") {
      return 50;
    } else {
      return 0;
    }
  }

  chooseCrust(){
    if (this.crust === "Italian Thin Crust"){
      return 50;
    } else if (this.crust === "Pan Pizza"){
      return 100;
    } else if (this.crust === "American Hand Tossed") {
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

  quantityPrice(){
    let grossPrice = this.getTotal();
    return grossPrice * this.orders;
  }

  getTotalPlusDelivery(){
    let cumulativePrice = this.quantityPrice();
    let deliveryFee = this.toDeliver();

    return cumulativePrice + deliveryFee;
  }

}

// let oldie = new Pizza ("Stripylicious", "large", "extra-dip", "standard", true, 3);

$("#to-be-delivered").click(()=>{
  $("#location-hide").show();
});

$("#to-be-picked").click(()=>{
  $("#location-hide").hide();
});

$("#total").click(()=>{
  $("div#price-breakdown").show();
});

$("#div#price-breakdown").click(()=>{
  $("div#price-breakdown").hide();
});

//ui logic
$("#pizza-one-form").submit((event)=>{
  event.preventDefault();
  let pizzaName = $("#pizza-one-label").text();
  let pizzaSize = $("#size-selector").val();
  let toppingType = $("#topping-selector").val();
  let crustType = $("#crust-selector").val();
  let delivery = $("#to-be-delivered").is(":checked");

  let pickUp = $("#to-be-picked").is(":checked");
  const getDeliveryOption = () => {
    if (delivery == true && pickUp == false){
      return true;
    } else if (delivery == false && pickUp == true) {
      return false;
    }
  }


  let optionOfDelivery = getDeliveryOption();
  let pizzaQuantity = Number($("#pizza-quantity").val());

  //creating an instance of the Pizza class
  let cheesey = new Pizza(pizzaName, pizzaSize, toppingType, crustType, optionOfDelivery, pizzaQuantity);
  $("#total-price").text("Ksh. " + cheesey.getTotalPlusDelivery());
  $("#size-price").text(cheesey.size + ": " + cheesey.pricePerSize());
  $("#toppings-price").text(cheesey.toppings + ": " + cheesey.addToppings());
  $("#crust-price").text(cheesey.crust + ": " + cheesey.chooseCrust());
  $("#delivery-price").text("Delivery fee: " + cheesey.toDeliver());


});
