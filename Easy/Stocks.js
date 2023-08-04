var apiKey = 'Y6VAMZXHF4GKMSSM';
var symbol = 'GOOGL';

async function getStock() {
    var Url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=' + apiKey;
    
    try {
        var response = await fetch(Url);
        var data = await response.json();

        console.log(data);

        var Daily = data['Time Series (Daily)'];


    } catch(error) {
        console.log('Error fetching data: ' + error);
    }
}

getStock();