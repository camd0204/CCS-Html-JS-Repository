var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
function inputLength(){
    return input.value.length;

}
function createListElement(){
    var li=document.createElement("li");//Se crea el elemento vacio
    li.appendChild(document.createTextNode(input.value));//Se anade el hijo nodo
    ul.appendChild(li);//Se anade a ul. con input.value
    input.value="";// Reset del input

}
function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
        console.log("DONE");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick)


button.addEventListener("click",function(){

    if(inputLength()>0){
        createListElement();
       
    }
    else{
        console.log("Error");
    }

})
input.addEventListener("keypress",function(event){//Ahora hacemos evento con enter
    
    if(inputLength()>0 && event.code=="Enter"){
        createListElement();
    }
    else{
        console.log("Error");
    }

})