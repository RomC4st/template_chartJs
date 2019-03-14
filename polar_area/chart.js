const ctx = document.getElementById("myChart").getContext('2d');
const type_myChart = 'polarArea'
const labels_myChart = ["IRIS", "ZDC", "Département", "France"]
const data_myChart = [44, 49, 76, 69]
const label_myChart = 'Densité de MG / 100.000 habitants'

// console.log(ctx)
// ctx.canvas.height = 100

const backgroundColor_myChart = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)'
]
const borderColor_myChart = [
  'rgba(255,99,132,1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)'
]

const myChart = new Chart(ctx, {
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