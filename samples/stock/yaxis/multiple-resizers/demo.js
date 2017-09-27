
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?', function (data) {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'AAPL Stock Price'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        yAxis: [{
            height: '50%',
            resize: {
                enabled: true,
                controlledAxis: {
                    next: [1]
                }
            }
        }, {
            top: '50%',
            height: '25%',
            resize: {
                enabled: true,
                controlledAxis: {
                    next: [2]
                }
            }
        }, {
            top: '75%',
            height: '25%'
        }],

        series: [{
            type: 'ohlc',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: data
        }, {
            yAxis: 1,
            type: 'macd',
            linkedTo: 'aapl'
        }, {
            yAxis: 2,
            type: 'stochastic',
            linkedTo: 'aapl'
        }]
    });
});
