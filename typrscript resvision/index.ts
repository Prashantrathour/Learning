
type address={
  city:string
  pincode:number
}
interface user{
    name:string;
    age:number;
}

function getUser(user:address){
    console.log(user)
}
getUser({city:"prasjamt",pincode:12})

// // interface user1{
// //     name:string;
// //     age:number;
// // }
// // function getUser1(user:user1){
// //     console.log(user)
// // }
// // getUser1({name:"prasjamt",age:12})
// // Interface for a basic shape
// interface Shape {
//     name: string;
//     color: string;
//     calculateArea(): number;
// }

// // Implementing the interface for a Circle
// class Circle implements Shape {
//     constructor(public name: string, public color: string, public radius: number) {}

//     calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
// }




// // Numeric Enum
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// // String Enum
// enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE",
// }

// // Using Enums
// const playerDirection: Direction = Direction.Right;
// const selectedColor: Color = Color.Blue;

// if (playerDirection === Direction.Right) {
//     console.log("Player is moving to the right.");
// }

// console.log(`Selected color is ${selectedColor}.`);

// // Reverse Mapping
// const colorName: string = Color[2];
// console.log(`Color name for value 2 is ${colorName}.`);


// // Implementing the interface for a Rectangle
// class Rectangle implements Shape {
//     constructor(public name: string, public color: string, public width: number, public height: number) {}

//     calculateArea(): number {
//         return this.width * this.height;
//     }
// }

// // Usage
// const circle = new Circle('Circle', 'red', 5);
// const rectangle = new Rectangle('Rectangle', 'blue', 4, 6);

// console.log(circle.calculateArea()); // Output: 78.53981633974483
// console.log(rectangle.calculateArea()); // Output: 24
// Numeric Enum
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// // String Enum
// enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE",
// }

// // Using Enums
// const playerDirection: Direction = Direction.Right;
// const selectedColor: Color = Color.Blue;

// if (playerDirection === Direction.Right) {
//     console.log("Player is moving to the right.");
// }

// console.log(`Selected color is ${selectedColor}.`);

// // Reverse Mapping
// const colorName: string = Color['Blue'];
// console.log(`Color name for value 2 is ${colorName}.`);
// let  user:readonly[number,number,number]=[1,2,3]

// // user.push(4)
// console.log(user)


