var data = {
    labels: ["0", "", "", "", "01-11-14", "", "", "", "01-12-14"],
    datasets: [{
        label: "New",
        backgroundColor: "#34495e",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 0,
        data: [85, 70, 90, 70, 85,80,90,85,70]

    },{
        label: "Sales",
        backgroundColor: "#1efe00",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 0,
        data: [62, 50, 62, 85, 62,31,93,62,80] 
    }]
};

// Опції графіку
var options = {
    plugins:{
        legend:{
            
            display:true,
            position:'bottom',
            
            align:'start'
        }
    
    },
    scales: {
        x:{
            grid:{
                display:false
            },
            ticks: { color: 'black',beginAtZero: true }

        },
        y: {
            min: 0,      // Мінімальне значення
          max: 100,
            
            grid: {
                color: '#ffffff',
                
              },
            
            ticks: { color: 'black', stepSize:20,beginAtZero: true }
            
        }
    }
};

// Отримайте контекст canvas та створіть графік
var ctx = document.getElementById('myChartq').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
async function getData() {
    const response = await fetch("data.json");
    data = await response.json();
    return data;
  }
  async function buildChart() {
    try {
      let data = await getData();
      console.log(data);
      if (!data || !Array.isArray(data)) {
        console.error("Invalid or missing data.");
        return;
      }
  
      myChart.data.datasets[0].data = newData.value;
      myChart.data.datasets[1].data = newData.value2;

    // Викличіть метод оновлення для оновлення графіку з новими даними
    myChart.update();
    } catch (e) {
      console.error("Error building chart:", e);
    }
  }
  buildChart();