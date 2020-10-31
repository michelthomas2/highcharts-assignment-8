Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: "America's Economic Sectors' Growth"
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['2005', '2010', '2019']
    },
    yAxis: {
        title: {
            text: '% of Gross Value Added'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Agriculture',
        data: [1, 1, 0.9]
    }, {
        name: 'Industry',
        data: [21.5, 19.7, 18.5]
    }, {
      name: 'Services and other Activites',
      data: [77.5, 79.3, 80.7]
    }]
});

Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'American Employment Sectors'
    },
    xAxis: {
        categories: ['2005', '2010', '2015']
    },
    yAxis: {
    	title: {
      text: 'Percent of Employed'
      }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Agriculture',
        data: [1.6, 1.6, 1.6]
    }, {
        name: 'Services',
        data: [77.4, 79.9, 79.7]
    }, {
        name: 'Industry',
        data: [21, 18.5, 18.7]
    }]
});
