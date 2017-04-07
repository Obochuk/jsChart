google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

var t = 0;
var s = 2;
var dt = Math.random();

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'T');
    data.addColumn('number', 'S');


    data.addRows([
        [t, s]
    ]);

    for (var i = 1; i <= 100; i++) {
        t = dt * i;
        data.addRows([
            [t, 2 - Math.cos(t)]
        ]);
    }

    var options = {
        hAxis: {
            title: 'Час'
        },
        vAxis: {
            title: 'Шлях'
        },
        chart: {
            title: 'Траєкторія процесу функціонування системи',
            subtitle: 'Прямолінійний фух тіла в часіPrjzmoliniynuy ruh tila v chasi'
        },
        width: 1000,
        height: 600
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_id'));

    chart.draw(data, options);
}

function Calculate() {
    var ti = prompt("Точка t: ", "");
    var s = 2 - Math.cos(ti);
    alert('Знаходження тіла: ' + s);
}