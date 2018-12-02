
var jsonData = function(data){
	console.log(data);
	console.log(Object.keys(data)); //Check what's inside

	/*Object
	HTML: 1
	Python: 1
	__proto__: Object

	Array(2)
	0: "HTML"
	1: "Python"
	length: 2
	__proto__: Array(0)*/

		$('#count').html(`
			<div class="well">
				${data.Python}
			</div>`)

};
