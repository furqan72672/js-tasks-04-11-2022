function findNumberType(){
    let num=document.getElementById("numTypeInput").value
    num=parseInt(num)
    let res
    if(num<0)res = "Negative"
    if(num>0)res = "Positive"
    if(num===0)res = "Zero"
    document.getElementById("numTypeRes").innerHTML=res
}


