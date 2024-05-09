var graphCanvas = document.getElementById("myChart");
var graphContext = graphCanvas.getContext('2d');

graphCanvas.style.border = "1px solid black";

graphContext.font = "30px Arial";
graphContext.fillText("Fruit Inventory", 320, 30);

var fruit = [
    {name: "Apple", quantity: 20, color: "red"},
    {name: "Orange", quantity: 10, color: "orange"},
    {name: "Banana", quantity: 15, color: "yellow"},
    {name: "Kiwi", quantity: 5, color: "green"},
    {name: "Blueberry", quantity: 5, color: "blue"},
    {name: "Grapes", quantity: 10, color: "purple"}
]

for(let i in fruit) {
    graphContext.fillStyle = fruit[i].color;
    graphContext.fillRect(0, 50 + (i * 120), fruit[i].quantity * 30, 100);
    graphContext.fillStyle = "black";
    graphContext.font = "25px Arial";
    graphContext.fillText(fruit[i].name, 0, 80 + (i * 120));
    graphContext.fillText(fruit[i].quantity, 0, 120 + (i * 120));
}