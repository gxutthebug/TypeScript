// 枚举类型可以通过enum关键字进行定义
//  枚举类型的意义就是把常量组织起来 能通过obj.xxx的形式访问一组常量 , 你也可以理解为Java中一个类中的若干static属性
// 详见有道云笔记
enum HttpStatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500,
  }


//默认情况下，枚举类型的值从0开始自增，也可以手动指定每个命名值的值
//这里定义了一个名为Direction的枚举类型，它包含四个命名值：
enum Direction2 {
    Up,
    Down,
    Left,
    Right,
  }
console.log(Direction2.Up , Direction2.Down ,Direction2.Left ,Direction2.Right)  // 0  1  2  3



enum Direction3 {
    Up = 1,
    Down,
    Left,
    Right,
  }

  console.log(Direction3.Up , Direction3.Down ,Direction3.Left ,Direction3.Right)  // 1  2  3  4