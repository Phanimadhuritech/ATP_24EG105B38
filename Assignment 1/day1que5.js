//write a function that recieves 3 number args and return big number 
function big(a,b,c)
{
    if(a>b&&a>c){
    return a
}
else if(b>a&&b>c){
    return b
}
else if(c>a&&c>b)
{
    return c 
}
}
console.log(big(1,2,3))