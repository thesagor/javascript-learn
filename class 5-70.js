//today we learn how to show number series
//s0: 1,2,3,4,5,6,7,8,9.....
//s01 2,4,,6,8,10,12,14.....
//s02 1,4,7,10,13,16......
//s03 1,3,3,15,24,35....
 
// var series=" ";
// for (i=1;i<=10;i++){
//     var num=i*i-1;
//     series=series+num+" ";
// }
// console.log(series);

//reset factorial
// series=" ";
// for(i=1;i<=10;i++){
//     num=i;
//     if(num%2==0){
//         num=num*2;
//     }
//     series=series+ num+ " ";
// }
// console.log(series);


//reset series
var series= " ";
var n=0;
var x=0;
var y=1;
for(i=0;i<=10;i++){
    n=x+y;
    x=y;
    y=n;
    series= series+ n+ " ";
}
console.log(series);