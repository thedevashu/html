// function f1(a)
// {
//     console.log(`hello ${a}`);

// }
// f1();
// f1(12);
// console.log(typeof(`${12}`))

// function f(s)
// {
//     if(typeof(s) == `string`)
//         console.log(s.toUpperCase())
// }
// f(1)

// function  f(...a)
// {
//     while(a.length > 0)
//     {
//          var k = a.pop()
//     console.log(a);
//     }
// }
// f(1,2,3,4,5,6)
destructuring()
function destructuring()
{
    var obj = {name:"ashu",mark:34,f:function(n){
        console.log(n)
    }}

    //with alias
    var {mark:m,f:display}=obj;
    console.log(m);
    display("girgoti")

    // var {name,f}=obj
    // console.log(name);
    // f("namaskar");


    // var nm =obj["name"]
    // var m =obj.mark;
    // console.log(nm,m);
    // var fun=obj["f"]
    // fun("pashupati");

    // var arr = [12,23,34,56,7]
    // var [a,,,,b]=arr
    // console.log(a,b)
}