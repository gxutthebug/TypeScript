interface Ipersen {
    name:string
    age:number
    gender:string
}


interface Student extends Ipersen{
     stuid:string
     score:number
}

//  注意!:使用type也能实现接口的继承效果 ——————> 使用 & 连接符
//   把 & 改成  |  就变成或了

type Ipersen2 = {
    name:string
    age:number
    gender:string
}

type Student2 = {
    name:string
    age:number
    gender:string
} & Ipersen2 