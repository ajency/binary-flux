$(document).ready(function(){

    if($(".select2-outline-dark").length){
        $(".select2-outline-dark").select2({
            minimumResultsForSearch: -1,
            containerCssClass: "select-out-dark-wrap",
            dropdownCssClass: "select-out-dark-result",
            allowClear: true
        });
    } 
    
    $('.side-menu-toggle').click(function () {
        $('html,body').addClass('overflow-hidden');
        $(".sidear-container").addClass('show');
    });

    $('.mobile-slide-in .close').click(function () {
        $('html,body').removeClass('overflow-hidden');
        $(".sidear-container").removeClass('show');
    });

    $('.openDefault').modal('show');

    $('.nav-lists li a').click(function() {
        $('.nav-lists li a').removeClass('active');
        $(this).addClass('active');
    });

    Highcharts.chart('container', {
        chart: {
            type: 'area'
        },
        accessibility: {
            description: 'Test'
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        yAxis: {
            tickInterval: 100,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        xAxis: {
            allowDecimals: false,
            tickInterval: 1,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            },
            accessibility: {
                rangeDescription: 'Range: 0 to 24.'
            }
        },

        tooltip: {
            color: '#455B99',
            pointFormat: '{point.y}',
            backgroundColor: '#3A678B',
            borderRadius: 0
        },

        plotOptions: {
            area: {
                pointStart: 0,
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 0,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USSR/Russia',
            data: [100, 120, 175, 180, 130, 215, 285, 175, 150, 205, 140, 450, 310, 335, 200, 210, 25, 200, 160, 310, 175, 210, 225, 165,],
        }]
    });


});