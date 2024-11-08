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

// CHART - 4
const chart4 = new Chart(document.querySelector('#chart4'), {
    type: 'bar',
    data: {
        labels: ['Оҳангарон', 'Пскем', 'Чотқол', 'Чорвоқ', 'Угам', 'Сардоба', 'Ҳисорак', 'Туполанг'],
        datasets: [{
            label: '',
            data: [302, 150, 270, 390, 450, 200, 350, 250],
            backgroundColor: [
                '#E6B068',
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
                '#FC602A',
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

// CHART - 5
const chart5 = new Chart(document.querySelector('#chart5'), {
    type: 'line',
    data: {
        labels: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
        datasets: [
            {
                label: "",
                data: [1101.0, 1101.1, 1101.2, 1101.3, 1101.4, 1101.5, 1101.6, 1101.7, 1101.8, 1101.9],
                borderColor: '#F8CA4D',
                backgroundColor: '#F8CA4D',
                fill: false,
                pointStyle: 'circle',
                pointRadius: 2,
                pointHoverRadius: 7,
                borderWidth: 1,
            },
            {
                label: "",
                data: [1100.7, 1100.7, 1100.7, 1100.7, 1100.7, 1100.7, 1100.7, 1100.7, 1100.7, 1100.7],
                borderColor: 'blue',
                backgroundColor: 'blue',
                fill: false,
                pointStyle: 'circle',
                pointRadius: 2,
                pointHoverRadius: 7,
                borderWidth: 1,
            },
        ],
    },

    options: {
        scales: {
            x: {
                grid: {
                    color: '#2D2D2D'
                },
            },

            y: {
                beginAtZero: false,
                min: 1100.4,
                max: 1102.0,
                ticks: {
                    stepSize: 0.1,
                },
                grid: {
                    color: '#2D2D2D'
                },
            }
        },
        plugins: {
            legend: { display: false },
            datalabels: {
                labels: [{
                    color: '',
                }],
            },
        },
    },
});

// CHART - 6
const chart6 = new Chart(document.querySelector('#chart6'), {
    type: 'line',
    data: {
        labels: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
        datasets: [
            {
                label: "",
                data: [109.5, 109.5, 109.6, 109.7, 109.8, 109.9, 109.8, 109.7, 109.6, 109.5,],
                borderColor: '#00C1FF',
                backgroundColor: 'rgba(0, 193, 255, 0.2)',
                fill: true,
                pointStyle: 'circle',
                pointRadius: 2,
                pointHoverRadius: 7,
                borderWidth: 1,
                order: 1,
            },
            {
                label: "",
                data: [107.0, 107.2, 107.3, 107.4, 107.5, 107.6, 107.5, 107.4, 107.3, 107.0],
                borderColor: '#00C1FF',
                backgroundColor: 'rgba(0, 193, 255, 0.6)',
                fill: true,
                pointStyle: 'circle',
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 1,
            },
        ],
    },

    options: {
        scales: {
            x: {
                grid: {
                    color: '#2D2D2D'
                },
            },

            y: {
                beginAtZero: false,
                min: 106.0,
                max: 111.5,
                ticks: {
                    stepSize: 0.2,
                },
                grid: {
                    color: '#2D2D2D'
                },
            }
        },
        plugins: {
            legend: { display: false },
            datalabels: {
                labels: [{
                    color: '',
                }],
            },
        },
    },
});