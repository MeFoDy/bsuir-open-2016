"use strict"

var timeout = 10000;
var autoplay = true;

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


    // svg path for target icon
    var targetSVG =
        "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

    var images = [{
        id: "minsk",
        type: "circle",
        //svgPath: targetSVG,
        title: "Минск",
        latitude: 53.9,
        longitude: 27.5667,
        scale: 1,
    }, {
        id: "kaliningrad",
        svgPath: targetSVG,
        title: "Калининград",
        latitude: 54.7104,
        longitude: 20.4522,
        scale: 0.5
    }, {
        id: "novosibirsk",
        svgPath: targetSVG,
        title: "Новосибирск",
        latitude: 55.0083,
        longitude: 82.9357,
        scale: 0.5
    }, {
        id: "moscow",
        svgPath: targetSVG,
        title: "Москва",
        latitude: 55.7558,
        longitude: 37.6176,
        scale: 0.5
    }, {
        id: "ufa",
        svgPath: targetSVG,
        title: "Уфа",
        latitude: 54.7388,
        longitude: 55.9721,
        scale: 0.5
    }, {
        id: "saint",
        svgPath: targetSVG,
        title: "Санкт-Петербург",
        latitude: 59.89444,
        longitude: 30.26417,
        scale: 0.5
    }, {
        id: "harkov",
        svgPath: targetSVG,
        title: "Харьков",
        latitude: 49.98081,
        longitude: 36.25272,
        scale: 0.5
    }, {
        id: "odessa",
        svgPath: targetSVG,
        title: "Одесса",
        latitude: 46.47747,
        longitude: 30.73262,
        scale: 0.5
    }, {
        id: "lviv",
        svgPath: targetSVG,
        title: "Львов",
        latitude: 49.83826,
        longitude: 24.02324,
        scale: 0.5
    }, {
        id: "almaty",
        svgPath: targetSVG,
        title: "Алматы",
        latitude: 43.15,
        longitude: 76.54,
        scale: 0.5
    }, {
        id: "vroclav",
        svgPath: targetSVG,
        title: "Вроцлав",
        latitude: 51.0989844,
        longitude: 17.0366461,
        scale: 0.5
    }, {
        id: "vilnus",
        svgPath: targetSVG,
        title: "Вильнюс",
        latitude: 54.651162,
        longitude: 25.280067,
        scale: 0.5
    }, {
        id: "riga",
        svgPath: targetSVG,
        title: "Рига",
        latitude: 56.946,
        longitude: 24.10589,
        scale: 0.5
    }];

    var lines = images.map(function(image) {
        return {
            latitudes: [image.latitude, 53.9],
            longitudes: [image.longitude, 27.5667],
            id: "line" + image.id
        }
    });

    var l = images.length;
    for (var i = 0; i < l; i++) {
        images.push({
            svgPath: planeSVG,
            positionOnLine: 0,
            color: "#aa0000",
            alpha: 0.9,
            animateAlongLine: true,
            lineId: "line" + images[i].id,
            flipDirection: true,
            loop: true,
            scale: 0.03,
            positionScale: 1
        });
    }

    var map = AmCharts.makeChart("chartmap", {
        type: "map",
        "theme": "dark",
        selectable: true,
        dataProvider: {
            map: "worldLow",
            zoomLevel: 4.5,
            zoomLongitude: 52.9,
            zoomLatitude: 49.5667,
            areas: [{
                title: "Беларусь",
                id: "BY",
                color: "#87577c",
                customData: "28",
                groupId: "1"
            }, {
                title: "Россия",
                id: "RU",
                color: "#97b7dc",
                customData: "13",
                groupId: "2"
            }, {
                title: "Украина",
                id: "UA",
                color: "#37b7dc",
                customData: "5",
                groupId: "3"
            }, {
                title: "Казахстан",
                id: "KZ",
                color: "#7777dc",
                customData: "1",
                groupId: "4"
            }, {
                title: "Польша",
                id: "PL",
                color: "#97d79c",
                customData: "1",
                groupId: "5"
            }, {
                title: "Литва",
                id: "LT",
                color: "#a7b7ac",
                customData: "2",
                groupId: "6"
            }, {
                title: "Латвия",
                id: "LV",
                color: "#a7b77c",
                customData: "1",
                groupId: "7"
            }],

            lines: lines,
            images: images
        },

        areasSettings: {
            unlistedAreasColor: "#FFCC00",
            unlistedAreasAlpha: 0.9,
            balloonText: "[[title]] (команд: [[customData]])"
        },

        imagesSettings: {
            color: "#CC0000",
            rollOverColor: "#CC0000",
            selectedColor: "#000000"
        },

        linesSettings: {
            //arc: -0.1, // this makes lines curved. Use value from -1 to 1
            arrow: "middle",
            color: "#CC0000",
            alpha: 0.4,
            arrowAlpha: 1,
            arrowSize: 2
        },
        zoomControl: {
            gridHeight: 100,
            draggerAlpha: 1,
            gridAlpha: 0.2
        },

        backgroundZoomsToTop: true,
        linesAboveImages: true
    });
});