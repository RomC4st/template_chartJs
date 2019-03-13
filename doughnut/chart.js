const canvas = document.getElementById("myChart").getContext('2d');
const type_myChart = 'doughnut'
const labels_myChart = ["%Secteur1", "%Secteur2", "%Secteur3"]
const data_myChart = [54.6, 44.4, 1]
const label_myChart = 'IRIS'

// console.log(canvas)
// canvas.canvas.height = 100

const backgroundColor_myChart = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
]
const borderColor_myChart = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
]

const myChart = new Chart(canvas, {
  type: type_myChart,
  data: {
    labels: labels_myChart,
    datasets: [{
      label: label_myChart,
      data: data_myChart,
      backgroundColor: backgroundColor_myChart,
      borderColor: borderColor_myChart,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});