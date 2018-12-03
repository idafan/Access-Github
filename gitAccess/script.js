
var jsonData = function(data){
	console.log(data);
	console.log(Object.keys(data)); //Getting all keys/languages

	var values = [];
	var keys = Object.keys(data);
	for (var i=0; i<keys.length;i++){
		values.push(data[keys[i]]);
		}

	console.log(keys);
	console.log(values);


		//prints information
		$('#count').html(`
			<div class="well">
				${keys}
			</div>`)



};

var showd3 = function(data){
	var values = [];
	var keys = Object.keys(data);
	for (var i=0; i<keys.length;i++){
		values.push(data[keys[i]]);
		}

	/*-------------------------------------------------------------------------
	The code below is taken from this link, some smaller changes have been made
	https://www.tutorialspoint.com/d3js/d3js_drawing_charts.htm
	--------------------------------------------------------------------------*/
	var width = 300
      scaleFactor = 20,
      barHeight = 30;

   var graph = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", barHeight * values.length);

   var bar = graph.selectAll("g")
      .data(values)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
         return "translate(0," + i * barHeight + ")";
      });
   bar.append("rect").attr("width", function(d) {
      return d * scaleFactor;
   })

   .attr("height", barHeight - 1);

   bar.append("text")
      .attr("x", function(d) { return (d*scaleFactor); })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d; });

	/*-------------------------------------------------------------------------*/
}
