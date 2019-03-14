const ctx = document.getElementById("myChart").getContext('2d');

const type_myChart = 'polarArea'

const data = {
  labels: ["IRIS", "ZDC", "Département", "France"],
  datasets: [{
    label: 'Densité de MG / 100.000 habitants',
    data: [44, 49, 76, 69],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)'
    ],
    borderWidth: 1
  }]
}

const option = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}
//  console.log(ctx)
// ctx.canvas.height = 100


const myChart = new Chart(ctx, {
  type: type_myChart,
  data: data,
  options: option
});