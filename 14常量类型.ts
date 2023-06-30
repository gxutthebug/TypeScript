
//  字面量类型结合 type来声明常量

type Direction = 'Up' | 'Down' | 'Left' | 'Right';
function changeDirection(direction:Direction) {
    console.log(direction)
}



type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;


type IsLoggedIn = true | false;