// CHART - 7
const chart7 = new Chart(document.querySelector('#chart7'), {
    type: 'line',
    data: {
        labels: ['01 Апр', '03 Апр', '05 Апр', '07 Апр', '09 Апр', '11 Апр', '13 Апр', '15 Апр', '17 Апр', '19 Апр', '21 Апр', '23 Апр', '25 Апр', '27 Апр', '29 Апр', '31 Апр', '01 Май', '03 Май', '05 Май', '07 Май', '09 Май', '11 Май', '13 Май', '15 Май', '17 Май', '19 Май', '21 Май', '23 Май', '25 Май', '27 Май', '29 Май', '31 Май'],
        datasets: [
            {
                label: '',
                data: [1010, 1030, 1045, 1035, 1050, 1040, 1055, 1045, 1055, 1040, 1060, 1050, 1045, 1050, 1048, 1055, 1065, 1055, 1040, 1060, 1055, 1040, 1050, 1045, 1050, 1040, 1065, 1045, 1050, 1075, 1050, 1045, 1050, 1040, 1065, 1045, 1050, 1075],
                borderColor: 'cyan',
                backgroundColor: 'transparent',
                borderWidth: 1,
                pointRadius: 3,
                pointBackgroundColor: '#01F5F5',
                pointBorderColor: '#01F5F5',
            },
            {
                label: '',
                data: [10, 15, 30, 25, 30, 55, 40, 35, 39, 100, 45, 50, 150, 60, 55, 170, 70, 80, 90, 100, 110, 120, 140, 150, 160, 190, 210, 220, 240, 250, 200, 290],
                borderColor: 'red',
                backgroundColor: 'transparent',
                borderWidth: 1,
                pointRadius: 3,
                pointBackgroundColor: '#F00',
                pointBorderColor: '#F00',
                yAxisID: 'y1',
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    color: '#2D2D2D'
                },
                ticks: {
                    stepSize: 5,
                    color: '#0FF',
                    font: {
                        weight: '500',
                        size: 14,
                    }
                },
                title: {
                    display: true,
                    text: 'Сув сатҳи, м',
                    color: '#fff',
                    font: {
                        size: 14,
                        weight: '600',
                    }
                },
            },

            y1: {
                beginAtZero: false,
                type: 'linear',
                position: 'right',
                ticks: {
                    color: '#fff',
                }
            },

            x: {
                grid: {
                    color: '#2D2D2D'
                },
                ticks: {
                    color: '#0FF',
                    font: {
                        weight: '500',
                        size: 14,
                    }
                },
                title: {
                    display: true,
                    text: 'Сув сатхи',
                    color: '#fff',
                    font: {
                        size: 14,
                        weight: '500',
                    }
                },
            },
        },

        plugins: {
            legend: { display: false },
        }
    }
});