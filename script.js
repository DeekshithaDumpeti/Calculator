let inputEl=document.getElementById("inputElement");
function displayNum(number){
    inputEl.value=inputEl.value+number;
    inputEl.style.color= black;
}
function result(){
    try{
        inputEl.value=eval(inputEl.value);
    }
    catch(err){
        alert("Enter the Valid Input");
    }
}
function clearAll(){
    inputEl.value="";
}
function deleteIcon(){
    inputEl.value=inputEl.value.slice(0,-1);
}