function findNumberType(){
    let num=document.getElementById("numTypeInput").value
    num=parseInt(num)
    let res
    if(num<0)res = "Negative"
    if(num>0)res = "Positive"
    if(num===0)res = "Zero"
    document.getElementById("numTypeRes").innerHTML=res
}



let arr=[1,-1,0,-3,5]
document.getElementById("sumOfPositiveInput").innerHTML="Array is => ["+arr+"]"
function sumOfPositive(){
    let s=0
    arr.forEach(elem => {
        if(elem<=0)return
        s+=elem
    });
    document.getElementById("sumOfPositiveRes").innerHTML="Sum of positives in array = "+s
}