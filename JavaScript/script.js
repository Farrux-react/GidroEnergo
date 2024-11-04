Chart.register(ChartDataLabels);
Chart.defaults.color = '#fff';

// CHART - 1
const chart1 = new Chart(document.querySelector('#chart1'), {
    type: 'bar',
    data: {
        labels: ['Андижон', 'Оҳангарон', 'Пском', 'Чотқол', 'Чорвоқ', 'Угам', 'Сардоба', 'Ҳисорак', 'Тўполанг'],
        datasets: [{
            label: '',
            data: [300, 50, 220, 300, 620, 30, 50, 50, 170],
            backgroundColor: [
                '#2BA9BA',
            ],
            datalabels: {
                color: '#EC0000'
            },
            borderWidth: 1,
        },
        {
            label: '',
            data: [400, 60, 230, 400, 650, 40, 60, 50, 180],
            backgroundColor: [
                '#4EEEFE',
            ],
            datalabels: {
                color: '#fff'
            },
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    font: {
                        weight: '500',
                        size: 10,
                    }
                }
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
                labels: [{
                    anchor: 'end',
                    align: 'top',
                    offset: -2,
                    font: { size: 8 },
                    formatter: (value) => value > 0 ? value : "",
                }],
            }
        }
    },
    plugins: [ChartDataLabels],
});

// DIAGRAMMA 2 STATISTICS
const data = [
    { label: 'Андижон', percentage: 98 },
    { label: 'Чорвоқ', percentage: 64 },
    { label: 'Угам', percentage: 73 },
    { label: 'Хисобрак', percentage: 64 },
    { label: 'Тўполанг', percentage: 44 },
    { label: 'Оҳангарон', percentage: 68 },
    { label: 'Пском', percentage: 49 },
    { label: 'Чотқол', percentage: 61 }
];

function createProgressBar(label, percentage) {
    const totalBlocks = 44;
    const filledBlocks = Math.round((percentage / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;

    const progressItem = document.createElement('div');
    progressItem.className = 'progress-item';

    const header = document.createElement('div');
    header.className = 'progress-header';
    header.innerHTML = `<span>${label}</span><span>${percentage}%</span>`;

    const blocksContainer = document.createElement('div');
    blocksContainer.className = 'progress-blocks';

    for (let i = 0; i < filledBlocks; i++) {
        const block = document.createElement('div');
        block.className = 'block filled';
        blocksContainer.appendChild(block);
    }

    for (let i = 0; i < emptyBlocks; i++) {
        const block = document.createElement('div');
        block.className = 'block empty';
        blocksContainer.appendChild(block);
    }

    progressItem.appendChild(header);
    progressItem.appendChild(blocksContainer);
    return progressItem;
}

function renderProgressBars(data) {
    const container = document.getElementById('progressContainer');
    data.forEach(item => {
        const progressBar = createProgressBar(item.label, item.percentage);
        container.appendChild(progressBar);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    renderProgressBars(data);
});

// CHART - 2
const chart2 = new Chart(document.querySelector('#chart2'), {
    type: 'line',
    data: {
        labels: ['01 Апр', '03 Апр', '05 Апр', '07 Апр', '09 Апр', '11 Апр', '13 Апр', '15 Апр', '17 Апр', '19 Апр', '21 Апр', '23 Апр', '25 Апр', '27 Апр', '29 Апр', '31 Апр', '01 Май', '03 Май', '05 Май', '07 Май', '09 Май', '11 Май', '13 Май', '15 Май', '17 Май', '19 Май', '21 Май', '23 Май', '25 Май', '27 Май', '29 Май', '31 Май'],
        datasets: [
            {
                label: '',
                data: [1020, 1030, 1045, 1035, 1050, 1040, 1055, 1045, 1055, 1040, 1060, 1050, 1045, 1050, 1048, 1055, 1065, 1055, 1040, 1060, 1055, 1040, 1050, 1045, 1050, 1040, 1065, 1045, 1050, 1075],
                borderColor: 'cyan',
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: '#01F5F5',
                pointBorderColor: '#01F5F5',
            },
            {
                label: '',
                data: [1015, 1020, 1025, 1030, 1035, 1035, 1040, 1035, 1040, 1035, 1038, 1035, 1040, 1035, 1038, 1035, 1040, 1035, 1030, 1035, 1035, 1032, 1030, 1030, 1025, 1020, 1035, 1028, 1030, 1035],
                borderColor: 'red',
                backgroundColor: 'transparent',
                borderWidth: 2,
                pointRadius: 3,
                pointBackgroundColor: '#F00',
                pointBorderColor: '#F00',
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
                    color: '#fff',
                    font: {
                        weight: '500',
                        size: 10,
                    }
                }
            },
            x: {
                grid: {
                    color: '#2D2D2D'
                },
                ticks: {
                    color: '#fff',
                    font: {
                        weight: '500',
                        size: 10,
                    }
                }
            }
        },

        plugins: {
            legend: { display: false },
            datalabels: {
                labels: [{
                    color: '',
                }],
            }
        }
    }
});