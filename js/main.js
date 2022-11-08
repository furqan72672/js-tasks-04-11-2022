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



let arr1=[]
function fibonacci(i,j,x){
    if(x) arr1=[]
    let num=document.getElementById("fibonacciInput").value
    num=parseInt(num)

    if(num<1) {
        document.getElementById("fibonacciRes").innerHTML="Invalid Number"
        return num
    }
    if(num===1){
        arr1=[0,1]
        document.getElementById("fibonacciRes").innerHTML=arr1
        return num
    }
    if(arr1[j]>num){
        arr1.splice(j,1)
        return num
    }
    if(i===0&&j===0){
        arr1.push(0)
        arr1.push(1)
        fibonacci(0,1,0)
        return num
    }
    arr1.push(arr1[i]+arr1[j])
    i++
    j++
    fibonacci(i,j,0)
    document.getElementById("fibonacciRes").innerHTML=arr1
}
// 0 1 1 2 3 5 8 13 21 34 55 



document.getElementById("count").innerHTML=0
function counter(){
    let num=document.getElementById("count").innerHTML
    num=parseInt(num)
    num++
    document.getElementById("count").innerHTML=num
}
function reset(){
    document.getElementById("count").innerHTML=0
}