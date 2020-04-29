  google.charts.load("current", {packages:["corechart"]});
  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawtrainee);
  google.charts.setOnLoadCallback(drawproject);
  google.charts.setOnLoadCallback(enagagegraph);
  google.charts.setOnLoadCallback(taskgraph);


  function drawtrainee() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Trainee status'],
      ['Active Trainee',     80],
      ['Offline Trainee',      200],
    ]);

    var options = {
      // title: 'My Daily Activities',
      legend: {poistion:'right',alignment:'center',textStyle:{color:'#E6FFF9',fontSize:12}},
      pieHole: 0.65,
      colors:['brown','#E6FFF9'],
      backgroundColor:{fill:'transparent'},
      pieStartAngle: 120,
      pieSliceText:'none',  //dont show percentege
      pieSliceBorderColor:'#01968C',
      chartArea:{left:0,top:0,width:'100%',height:'100%'},
      fontName:'Roboto',
    };

    var chart = new google.visualization.PieChart(document.getElementById('traineechart'));
    chart.draw(data, options);
  }


  function drawproject() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Project Status'],
      ['Active Project',     30],
      ['Pending Project',      200],
    ]);

    var options = {
      // title: 'My Daily Activities',
      legend: {poistion:'right',alignment:'center',textStyle:{color:'#E6FFF9',fontSize:12}},
      pieHole: 0.65,
      colors:['brown','#E6FFF9'],
      backgroundColor:{fill:'transparent'},
      pieStartAngle: 90,
      pieSliceText:'none',  //dont show percentege
      pieSliceBorderColor:'#01968C',
      chartArea:{left:0,top:0,width:'100%',height:'100%'},
      fontName:'Roboto',
    };

    var chart = new google.visualization.PieChart(document.getElementById('projectchart'));
    chart.draw(data, options);

  }


  function enagagegraph(){
        var data = google.visualization.arrayToDataTable([
          ['', '', ],
          ['',  300, ],
          ['',  200, ],
          ['',  600,  ],
          ['',  600, ],
          ['',  400, ],
          ['',  800, ],

        ]);

        var options = {
          backgroundColor:{fill:'transparent'},
          // colors:'blue',
          // explorer: { axis: 'vertical' },
          hAxis:{baselineColor:'#00c287',textStyle:{color:'#00c287'}},
          vAxis: { gridlines: {color: 'transparent'}},
          colors:['#6cffec','#00c287'],
          chartArea:{left:0,top:0,width:'100%',height:'100%'},


        };

        var chart = new google.visualization.AreaChart(document.getElementById('engagegraph'));
        chart.draw(data, options);
  }

  function taskgraph(){
    var data = new google.visualization.arrayToDataTable([
      ['', ''],
      ["", 44],
      ["", 31],
      ["", 22],
      ["", 30],
      ['', 30],
      ["", 44],
      ["", 35],
      ["", 22],
      ["", 40],
      ['', 30]
    ]);

    var options = {
      legend: { position: 'none' },
      bar: { groupWidth: "70%" },
      vAxis: { gridlines: {color: 'transparent'}},
      axisTitlesPosition:'none',
      hAxis:{baselineColor:'transparent',textPosition:'none'},
      colors:['#5662ab']

    };

    var chart = new google.charts.Bar(document.getElementById('taskgraph'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }


   function drawProgress(id,progress){
      google.charts.setOnLoadCallback(drawprogress);
      function drawprogress() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Trainee status'],
          ['progress', progress],
          ['remaining', 100-progress],
        ]);
    
        var options = {
          // title: 'My Daily Activities',
          legend: {poistion:'right',alignment:'center',textStyle:{color:'#E6FFF9',fontSize:12}},
          pieHole: 0.65,
          colors:['#00c287','#d4d4d4'],
          backgroundColor:{fill:'transparent'},
          pieStartAngle: 120,
          pieSliceText:'none',  //dont show percentege
          // pieSliceBorderColor:'#01968C',
          chartArea:{left:0,top:0,width:'100%',height:'100%'},
          fontName:'Roboto',
        };
    
        var chart = new google.visualization.PieChart(document.getElementById(id));
        chart.draw(data, options);
      }
    }



  