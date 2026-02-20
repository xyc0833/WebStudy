// const arr = [0, 2, 1, 5, 9, 3, 4, 6, 7, 8]
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if(arr[j] > arr[j+1]){
//             const tmp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = tmp
//         }
//     }
// }
//
// window.alert(arr)

// let a = 10;
// a++;
//window.alert(a);

let a = 10;
console.info(typeof a)
a = 'Hello World'
console.info(typeof a)

console.info(666 > 777)
console.info('aa' > 'ab')

console.info('10' == 10)
console.info('10' === 10)

//console.log('计算结果：', result); // 终端输出：计算结果： NaN

console.info(4 & 7)
console.info(4 | 7)

console.info(true || false)

console.info(!0)
console.info(!1)
console.info("===========")
console.info(!"a")
console.info(!"")

//如果字符串是一个空串 返回空
console.info("") //默认内部的逻辑是 false

console.info(true || 7)
console.info(7 || true)

console.info(!undefined)
console.info(!null)
console.info(!NaN)

let a01 = true ? "xx" : 20
console.info(a01)

if("lbwnb"){   //非空串为true
    console.info("!!!")
} else {
    console.info("???")
}

if(""){
    console.info("!!!")
} else if(-666){
    console.info("???")
} else {
    console.info("O.O")
}

let a02 = "a"
switch (a02){
    case "a":
        console.info("1")
        break
    case "b":
        console.info("2")
        break
    case "c":
        console.info("3")
        break
    default:
        console.info("4")
}

let i = 5
while(i--){
    console.info("100")
}

// function f(a) {
//     console.info("得到的实参为："+a)
//     return 666
// }
//
// f("aa");
// f();

function f(a = "6666") {
    console.info("得到的实参为："+a)
    return 666
}

let k = f;
k();

//直接把函数体赋值给了变量 f
let f01 = function (str) {
    console.info("实参为："+str)
}
f01(123);

// 具名函数：函数名是printStr，可通过名字直接调用
function printStr(str) {
    console.info("实参为："+str);
}

// 调用：直接用函数名
printStr("测试"); // 输出：实参为：测试


function f03(test) {
    test();
}

f03(function () {
    console.info("这是一个匿名函数")
})

//对于所有的匿名函数，可以像Java的匿名接口实现一样编写lambda表达式：
f03(() => {
    console.info("可以，不跟你多bb")
})

f03(param => {
    console.info("接受到回调参数："+param)
})

let arr = [1, "lbwnb", false, undefined, NaN]
console.info(arr[1])
console.info(arr[2])
console.info(arr[3])
arr[5] = "???"
console.info(arr)

arr.push("bbb")

console.info(arr)
console.info(arr.pop())
console.info(arr)

arr.fill(1)
console.info(arr)
console.info(arr.map(o => {
    return 'xxx'+o
}))

// let obj = {}
// obj.name = "伞兵一号"
// console.info(obj)
//
// //let obj = {}
// obj.f = function (){
//     console.info("我是对象内部的函数")
// }
//
// obj.f()

let name = "我是外部变量"
let obj = {}
obj.name = "我是内部变量"
obj.f = function (){
    console.info("name属性为："+this.name)
}

obj.f()


