$(function(){
	https://en.wikipedia.org/w/api.php?action=opensearch&search=zyz&limit=1&namespace=0&format=jsonfm

	$('#search').click(function(){

		var searchTerm = $('#searchTerm').val();//give tahe value from the input 
		var x;

		$.ajax({
			type:'GET',
			url:'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=' + searchTerm + '&callback=?',
			async: false,
			datatype: 'json',
			success:function(data){
				var formatData;
				var lengthData;

				try {
					formatData = JSON.parse(data.slice(5,data.length - 1));
					lengthData = formatData[1].length;
				} catch(e) {
					console.log(e);
				}

				for(var i = 0; i < lengthData ; i++){
					$('#results').append('<a class="text-center" href=' + formatData[3][i] + ' target="blank"><h1>'
					 + formatData[1][i] + '</h1></a><h3>' + formatData[2][i] + '</h3><br>');
				}
				
			
			},
			error: function(err){
				console.log('error');
			}
		});
	});

	$('#searchTerm').bind('keypress',function(e){
		if (e.keyCode == 13) { //keycode 13 mean enter
			$('#search').click();
		}
	});
});