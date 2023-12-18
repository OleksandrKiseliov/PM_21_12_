var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['0', '12-6-14', '12-7-14', '12-8-14', '12-9-14', '12-10-14', '12-11-14',' '],
    datasets: [{
      label: 'Visitors',
      yAxisID: 'left1',
      xAxisID:'x1',
      data: [25000, 30000, 25000, 32000, 30000,35000,33000,42000],
      backgroundColor: ' #ff0000',
      borderColor: '#f2bf41',
      borderWidth: 3,
      fill: false,
      pointRadius: 6,
      pointBorderWidth:1,
      pointBorderColor: 'white'
    },
    {
      label: 'Sales',
      data: [2000, 4200, 2400, 8000, 4000,6000,9000,6000],
      yAxisID: 'left2',
      xAxisID:'x1',
      backgroundColor: '#ff00d8',
      borderColor: '#1efe00',
      borderWidth: 3,
      fill: false,
      pointRadius: 6,
      pointBorderWidth:1,
      pointBorderColor: 'white'
    }]
    
  },
  config: {
  responsive: true,
  plugins: {
    legend: {
      position: 'right'
    }
  }
},

  options: {
    
    
    scales: {
      
      x1:{
        
        grid: {
          color: '#ffffff',
          
        },
        ticks: {
           color: '#ffffff', 
           beginAtZero: true 
          }
        
      },
      left2: {
        type: 'linear',
        position: 'left',
        
        min: 0,      // Мінімальне значення
          max: 10000,
          grid: {
          color: '#ffffff' , // Білий колір сітки для вісі X
        },
        ticks: { color: '#1eff00', stepSize:2000,beginAtZero: true }
        
      },
      left1: {
        type: 'linear',
        position: 'left',
        
        min: 0,      // Мінімальне значення
          max: 50000,
          
          ticks: { color: '#f6ff00',stepSize:10000, beginAtZero: true }
      }
      
    }
  },
  plugins:{
    legend:{
      display:true,
      position:'left'
    }

  }
});