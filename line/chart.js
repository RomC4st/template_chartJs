const ctx = document.getElementById("myChart").getContext('2d');

const type_myChart = 'line'

const data = {
  labels: ["%Secteur1", "%Secteur2", "%Secteur3"],
  datasets: [{
    fill: false,
    label: 'IRIS',
    data: [54.6, 44.4, 1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
    ],
    borderWidth: 1
  }]
}

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

// console.log(ctx)
// ctx.canvas.height = 100


const myChart = new Chart(ctx, {
  type: type_myChart,
  data: data,
  options: options
});
