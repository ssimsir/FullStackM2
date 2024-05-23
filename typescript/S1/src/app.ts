console.log("first")

let x=5

//merhaba ts

let a:number = 5
const b:string = "3"

let num:number[] = [1,2,3,4,5]

num.push(3)

let num2:Array<string> = ["sdf", "sfd", "eqw"] //Generik array tanımlama yöntemi

let num3:Array<object> = [{df:2}, {asd:"212"}]

//!Tuple

let myTuple :  [string, number] ;

myTuple = ["23" , 223]
myTuple.push(23)

enum Color {
   red,
   Green,
   Blue
}
let selectedColor : Color = Color.Blue
console.log(selectedColor)

enum Tshirt {
   Small = "S",
   Medium = "M",
   Large = "L"
}

let userSize : Tshirt = Tshirt.Large