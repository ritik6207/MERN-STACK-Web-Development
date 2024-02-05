// Case Studey
// Consider an e-commerece system where a user wants to purchase an item. The system has to check if the item is in stock before porcessding with the purchase:

let inStock = false;

if(inStock){
    console.log("Item is instock, Proceeding with your purchase");
}else{
    console.log("Item is not inStock");
}


//! ---- ELSE-IF STATEMENT ----
// Let's consider a traffic light system where you want to tell a driver what to do based on the color of the trafic light. Here's how you might use an elese if statement for this purpose:

let trafficLight = "yellow";

if (trafficLight === "red") {
    console.log("Stop");
}else if(trafficLight === "yellow"){
    console.log("Prepare to stop");
}else if(trafficLight == "green"){
    console.log("Go");
}else{
    console.log("Invalid Traffic");
}

