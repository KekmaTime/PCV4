var apiKey = 'Y6VAMZXHF4GKMSSM';
var symbol = 'GOOGL'; //you can use any other company code as

async function getStock() {
    var Url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=' + apiKey;
    
    try {
        var response = await fetch(Url);
        var data = await response.json();

        console.log(data);

        const timeSeries = data['Time Series (Daily)'];
        for (const date in timeSeries) {
            if (timeSeries.hasOwnProperty(date)) {
              const dailyData = timeSeries[date];
              console.log('Date:', date,'High:', dailyData['2. high']);
            }
        }
    } catch(error) {
        console.log('Error fetching data: ' + error);
    }
}

getStock();