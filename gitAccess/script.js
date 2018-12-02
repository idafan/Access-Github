//Input för vad diagrammet ska visas, taget från exemplet på hemsidan
var jsonData = function(data){
	console.log(data); //data är en dictionary med alla språk och hur många repos som var skrivna i det språket
	//Kolla i consolen vad som skrivs ut
	console.log(Object.keys(data));

	/*Object
	HTML: 1
	Python: 1
	__proto__: Object

	Array(2)
	0: "HTML"
	1: "Python"
	length: 2
	__proto__: Array(0)*/

		$('#ida').html(`
			<div class="well">
				${data.Python}
			</div>`)

};
