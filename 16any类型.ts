let b    // 声明不指定类型 , 默认是any 
b = "string"
b = 4444
b = [1,2,3,4]



function fn5 (a:any ,b:any) {  // 函数中参数严格模式下any也要显示声明
    return a +b 
}