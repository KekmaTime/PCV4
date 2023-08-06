const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let symbol;

r1.question('Enter the Stock Name: ', (inputSymbol) => {
    symbol = inputSymbol;
    getStock(); 
    r1.close();
});

const apiKey = 'Y6VAMZXHF4GKMSSM';

async function getStock() {
    var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=' + apiKey;
    var response = await fetch(url);
    var data = await response.json();
    const timeSeries = data['Time Series (Daily)'];
    for (const date in timeSeries) {
        if (timeSeries.hasOwnProperty(date)) {
            const dailyData = timeSeries[date];
            console.log('Date:', date, 'High:', dailyData['2. high']);
        }
    }
}