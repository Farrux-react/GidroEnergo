// CHART - 14
const chart14 = new Chart(document.querySelector('#chart14'), {
    type: 'line',
    data: {
        labels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        datasets: [{
            label: '',
            data: [280, 245, 265, 380, 320, 300, 345, 260, 245, 345, 310, 280],
            borderColor: '#01F5F5',
            borderWidth: 2,
            pointBackgroundColor: '',
            pointBorderColor: '#01F5F5',
            pointRadius: 4,
            pointStyle: 'circle',
            tension: 0.5,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#323232'
                },
                ticks: {
                    color: '#01F5F5',
                    font: {
                        weight: '500',
                        size: 12,
                    }
                }
            },
            y: {
                grid: {
                    color: '#323232'
                },
                ticks: {
                    color: '#01F5F5',
                    font: {
                        weight: '500',
                        size: 12,
                    }
                },
                min: 200,
                max: 400
            }
        },
        elements: {
            line: {
                borderJoinStyle: 'round'
            }
        }
    }
});