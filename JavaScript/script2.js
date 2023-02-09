var todos=["Clean room","Brush teeth","Exercise","Study","Eat Healthy"];
for(var i=0;i<todos.length;i++)
{
	todos[i]+="!"
}
console.log(todos);
counterOne=0;
while(counterOne<10){
	console.log(counterOne);
	counterOne++;
}
var counterTwo=10;
 do {
 	console.log(counterTwo);
 	counterTwo--;
 } while(counterTwo>0);

todos.forEach(function(i){
	i+=" FUCK ME";
	console.log(i);
})