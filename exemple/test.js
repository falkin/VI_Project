   // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});
      google.load('visualization', '1.0', {'packages': ['geochart']});
      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn(' number', 'Number of pizza');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':800,
					    'is3D':true,
                       'height':600};
                       
                

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
		
        function selectHandler() {
          var selectedItem = chart.getSelection()[0];
          if (selectedItem) {
            var topping = data.getValue(selectedItem.row, 0);
            alert('The user selected ' + topping);
          }
        }

        google.visualization.events.addListener(chart, 'select', selectHandler);    
		
        chart.draw(data, options);
		 var chart2 = new google.visualization.PieChart(document.getElementById('chart2_div'));
        chart2.draw(data, options);
		
	  };
	    google.load('visualization', '1', {'packages': ['geochart']});
     google.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
		  
	   var jsonData = $.ajax({
          url: "http://ws.parlament.ch/Cantons?format=JSON",
          dataType:"json",
          async: true
          }).responseText;
		  
		//var datad = new google.visualization.DataTable(jsonData);
		  
        var data = google.visualization.arrayToDataTable([
          ['region','City', 'Popularity'],
          ['CH-AG','', 200],
          ['CH-AR','', 300],
          ['CH-FR','Fribourg', 400]
        ]);
     var data3 = google.visualization.arrayToDataTable([
          ['region','City', 'Popularity'],
          ['bern','', 200],
          ['fribourg','', 300],
          ['lausanne','Fribourg', 400]
        ]);
        var options = {
			
			colorAxis:  {minValue: 0,  colors: ['#FFFFFF', '#FFFFFF']},
			datalessRegionColor: '#FFFFFF',
			      region: 'CH',
				  resolution:'provinces',
        displayMode: 'regions',
		magnifyingGlass:  {enable: true, zoomFactor: 7.5},
		enableRegionInteractivity:'true',
        colorAxis: {colors: ['green', 'blue']}
		};
		
		
        var optionss = {
			
	   	colorAxis:  {minValue: 0,  colors: ['#FFFFFF', '#FFFFFF']},
			datalessRegionColor: 'white',
			      region: 'CH',
				  resolution:'provinces',
        displayMode: 'markers',
		magnifyingGlass:  {enable: true, zoomFactor: 7.5},
		enableRegionInteractivity:'true',
        colorAxis: {colors: ['green', 'blue']}
		
		};

        var chart3 = new google.visualization.GeoChart(document.getElementById('chart3_div'));
    //   chart3.draw(data, options);
		chart3.draw(data3, optionss);
    };