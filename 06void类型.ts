// 如果不加return 我们知道默认返回的是undefined , 但是 ts 给我们自动推断的返回类型为 void
// 在 ts 中写: undefind设置返回值的意思是 , 必须返回一个undefined
// ts 给我们提供了一个返回值类型 :void 意思是没有返回值
// 所以在ts中要想函数没有返回值不是定义为undefined 而是void



const sayHi = (content: string): undefined => {
    console.log(content )
}


const sayHi2 = (content: string): void=> {  // 由于可以自动推断 , 所以void可以省略不写
    console.log(content )
}