/*let n=5;
let string="";
for(let i=0;i<n;i++)
{
for(let j=0;j<n;j++)
{
    string += "*";
    
}
string += "\n";
}
console.log(string);
*/

  


/*let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) 
{ // external loop
  for(let j = 0; j < n; j++)
   { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
*/
/*function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    console.log("Welcome to 10 Days of JavaScript!");
    
}
greeting();*/
/*function stdtomil(time)
{
  let mil=time+12;
  document.write("military standard time:"+mil);
}
stdtomil(6);
*/
/*function timeConversion(s) {


  let mil=s+12;
    if(mil>(11.59))
  document.write("military standard time:"+mil+"pm");
    else
        document.write("military standard time:"+mil+"am");
}

timeConversion(1);
*/
/*function timeConversion( s) 
  {
    var s;
    
    if(s>12)
    {
 mil=s+12;
document.write("military standard time:"+mil);
  }
  else 
  {
  
   document.write("military standard time:"+s);
  }
}
timeConversion(12);
*/

/*function integer(num[])
{
    const divisor[];
  
  for(let digits in num )
  if(num%i==0)
  {
   document.write("divisible by"+i);
   
  }
  
  document.write("<br>");
 
  
}
integer(124);
*/
/*const array=[1,2,3,4,5,6,7];
const newarray=array.filter(n=>n%2===0)
document.write(newarray);

const array1=[1,2,3,4,5,6,7];
const arr=array1.map(n=>n*n)
document.write("<br>"+arr);


//all elements in an array in to single-reduce
const arr1=[1,4,3,7];
const sum=arr1.reduce((num1,num2 )=>{
  return num1+num2;
})
document.write("sum="
  +sum);
*/
const s=[1,2,3,4,5,6,7,10]
//document.write(s);

/*const e=s.filter(f=>f%2===0)
//document.write(e);
       .map(f=>f*f)
       .reduce((a,b)=>
        a+b);
       document.write(e);*/
     //  const big=s.reduce((a,b)=>a>b?a:b);
      /* {
         if(a>b)
          a=b;
          return a;


        })*/
    // document.write(big);
    //duplication in an aray
    let a=[2,3,6,7,8,9,7,8,9];
   /* let b=[];
     let len=a.length;
     for(let i=0;i<len;i++)
     {
       if(b.indexOf(a[i])===-1){
       b.push(a[i]);
      }
     }
     document.write(b);
*/
//document.write([...new Set(a)]);
/*let pop1=a.pop();
document.write(a);
*/
a=[1,2,3];
let b=[...a];
document.write(b);
