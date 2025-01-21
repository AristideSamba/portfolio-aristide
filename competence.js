const pieCanvas = document.getElementById('pieCanvas');

const pieChart = new Chart(pieCanvas, {
  type: 'pie',
  data: {
    labels: ["HTML", "CSS", "PHP", "JAVA", "MYSQL", "JAVASCRIPT"],
    datasets: [{
        data: [80, 60, 30, 35, 65, 25],
        backgroundColor: [
          "#DC4C25",
          "#0975BD",
          "#7C7EB5",
          "#EC272C",
          "#086590",
          "#F8DD43"
        ],
        hoverOffset:10
    }]
  }
})