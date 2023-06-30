// 接口与type的区别 , type可以定义所有类型
// 接口只能定义对象的类型


{
    interface Ipersen {
        name:string
        age:number
        gender:string
    }
    
    
    let yfm:Ipersen = {
         name:"YFM",
         age:18,
         gender:"男"
    }


    console.log(yfm)
}