Chart.register(ChartDataLabels);
Chart.defaults.color = '#01F5F5';

// CHART - 3
const chart3 = new Chart(document.querySelector('#chart3'), {
    type: 'bar',
    data: {
        labels: ['Оҳангарон', 'Пскем', 'Чотқол', 'Чорвоқ', 'Угам', 'Сардоба', 'Ҳисорак', 'Туполанг'],
        datasets: [{
            label: '',
            data: [302, 150, 270, 390, 450, 200, 350, 250],
            backgroundColor: [
                '#0FF',
            ],
            datalabels: {
                color: '#EC0000'
            },
            borderWidth: 0,
            barThickness: 40,
        },
        {
            label: '',
            data: [238, 238, 290, 650, 380, 100, 300, 270],
            backgroundColor: [
                '#00C1FF',
            ],
            datalabels: {
                color: '#fff'
            },
            borderWidth: 0,
            barThickness: 40,
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    color: '#2D2D2D'
                },

                ticks: {
                    font: {
                        weight: '400',
                        size: 10,
                    }
                },
                barPercentage: 1.0,
                categoryPercentage: 1.0
            },
            y: {
                grid: {
                    color: '#2D2D2D'
                },
            }
        },

        plugins: {
            legend: { display: false },
            datalabels: {
                color: 'red',
                labels: [{
                    anchor: 'end',
                    align: 'top',
                    offset: -2,
                    font: { size: 10 },
                    formatter: (value) => value > 0 ? value : "",
                }],
            }
        }
    },
    plugins: [ChartDataLabels],
});