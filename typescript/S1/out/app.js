console.log("first");
let x = 5;
let a = 5;
const b = "3";
let num = [1, 2, 3, 4, 5];
num.push(3);
let num2 = ["sdf", "sfd", "eqw"];
let num3 = [{ df: 2 }, { asd: "212" }];
let myTuple;
myTuple = ["23", 223];
myTuple.push(23);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Blue;
console.log(selectedColor);
var Tshirt;
(function (Tshirt) {
    Tshirt["Small"] = "S";
    Tshirt["Medium"] = "M";
    Tshirt["Large"] = "L";
})(Tshirt || (Tshirt = {}));
let userSize = Tshirt.Large;
