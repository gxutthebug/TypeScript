

function getid (id: string | number |boolean) {
     return id
}


function getid2<T> (id: T) {
    return id
}


// 泛型方法调用时
getid2<string> ("yfm")

// 简化写法 (ts可以自动推断)
getid2 ("yfm")