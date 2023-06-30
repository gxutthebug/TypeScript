// js可以给对象随意的添加或者减少属性方法 ,即obj.xxx 就能简单实现
// 但是ts中是不能随便给一个对象新增 或 减少它的属性的 , 就像Java一样
// 在ts中想要给一个对象新增 或 减少它的属性 , 只能从根源上去修改这个对象的类型(接口)


let obj: {
    name:string,
    age:number,
    gender:string,
    hobby: string,
    // 对象里定义函数类型的两种方式
    sayHi :(content: string) => void,   
    sayHi2(content: string) :void
    // 注意这里的void你不能省略 , 你都没写具体的函数逻辑根本就不知道会return什么
    // ts 没办法自动推断
} = {
    name:'yfm',   
    age:18,
    gender:"未知",
    hobby:"前端",
    sayHi(content) {
        console.log("啦啦啦啦",+ content)
    },
    sayHi2(content) {
        console.log("哈哈哈哈哈",+ content)
    }
}


type persen = {
    name:string,
    age:number,
    gender:string,
    hobby: string,
    sayHi :(content: string) => void,
    sayHi2(content: string) :void
}

let obj2:persen =  {
    name:'wql',
    age:18,
    gender:"未知",
    hobby:"前端",
    sayHi(content) {
        console.log("啦啦啦啦",+ content)
    },
    sayHi2(content) {
        console.log("哈哈哈哈哈",+ content)
    },
}

