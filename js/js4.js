function f1(...a) {
    console.log(a);
    var v=a.pop;
    console.log(v,a);
}
f1(1,2,4)