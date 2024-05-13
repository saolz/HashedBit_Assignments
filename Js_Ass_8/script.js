document.addEventListener('DOMContentLoaded', function () {
  fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => a.NRR - b.NRR);
      const tableBody = document.getElementById('table-body');
      sortedData.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${team.Team}</td>
          <td>${team.Matches}</td>
          <td>${team.Won}</td>
          <td>${team.Lost}</td>
          <td>${team.Tied}</td>
          <td>${team.NRR}</td>
          <td>${team.Points}</td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
