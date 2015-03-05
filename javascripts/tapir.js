$.urlParam = function(name){
 var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
 if (!results) { return 0; }
 return results[1] || 0;
}

$('document').ready(function(){
  $('#tapir_search_results').each(function(){
    var results_div = $(this);
    $.getJSON(
      'http://tapirgo.com/api/1/search.json?token=' + results_div.data('api_key') + '&query=' + $.urlParam('query') + '&callback=?',
      function(data){
				if (data.length == 0)
					results_div.html('<div class="alert alert-danger">No results found!</div>')
				else
					results_div.html('')	
        $.each(data, function(key, val) {
					summary = $("<div/>").html(val.summary).text()
					max_length = 300
					if (summary.length > max_length) {
						summary = summary.substring(0, max_length) + ' &hellip;'
					}
          results_div.append('<div class="well result"><h2><a href="' + val.link + '">' + val.title + '</a></h2><p>' + summary + ' <a href="' + val.link + '">Read More &raquo;</a></p></div>');					
        });
      }
    );
  });
});