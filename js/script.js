"use strict"

var timeout = 10000;
var autoplay = false;

impress().init();

$(function() {
    var api = impress();

    function analyzeStep() {
        var id = $('.step.active').attr('id');
        switch (id) {
            case 'fourth':
                redrawChart();
                break;
            default:
                resetChart();
                break;
        }
    };

    function next() {
        if (!autoplay) {
            return;
        }
        api.next();
        setTimeout(next, timeout);
        analyzeStep();
    };

    setTimeout(next, timeout);
});

var emptyData = [{
    "place": "Беларусь (ВУЗы)",
    "year2015": 0,
    "year2016": 0
}, {
    "place": "Иностранные ВУЗы",
    "year2015": 0,
    "year2016": 0
}, {
    "place": "Школы",
    "year2015": 0,
    "year2016": 0
}];

var fullData = [{
    "place": "Беларусь (ВУЗы)",
    "year2015": 175,
    "year2016": 231
}, {
    "place": "Иностранные ВУЗы",
    "year2015": 21,
    "year2016": 42
}, {
    "place": "Школы",
    "year2015": 63,
    "year2016": 88
}];

function redrawChart() {
    chart.animateData(fullData, {
        duration: 2000
    });
};

function resetChart() {
    chart.animateData(emptyData, {
        duration: 2000
    });
};

var chart = AmCharts.makeChart("chartdiv", {
    "theme": "dark",
    "type": "serial",
    "autoDisplay": true,
    "fontSize": 16,
    "handDrawn": true,
    "startEffect": "elastic",
    "dataProvider": emptyData,
    "valueAxes": [{
        "unit": " команд",
        "position": "left",
        //"title": "Количество участников",
        "maximum": 260,
        "autoGridCount": false,
        "gridCount": 3
    }],
    "startDuration": 0,
    "graphs": [{
        "balloonText": "Участников из [[category]] (2015): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2015",
        "type": "column",
        "valueField": "year2015"
    }, {
        "balloonText": "Участников из [[category]] (2016): <b>[[value]]</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "2016",
        "type": "column",
        "clustered": false,
        "columnWidth": 0.5,
        "valueField": "year2016"
    }],
    "legend": {
        "useGraphSettings": true,
        "align": "center"
    },
    "plotAreaFillAlphas": 0.1,
    "categoryField": "place",
    "categoryAxis": {
        "gridPosition": "start"
    }
});

chart.addListener("init", function() {
    chart.animateData(fullData, {
        duration: 2000
    });
});