function displayData(data)
{
    console.log(data)
    document.querySelector("#inp1").value+=data;
}
function Calculation()
{
    let num=document.querySelector("#inp1").value;
    let a=eval(num);
    document.querySelector("#inp1").value=a;
}
function Clear1()
{
    document.querySelector("#inp1").value="";
}
function Delete1()
{
    let result=document.querySelector("#inp1");
    result.value=result.value.slice(0,-1);
}