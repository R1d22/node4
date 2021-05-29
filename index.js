const axios = require('axios');
const fs = require('fs-extra');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&cnt=5&units=metric&appid=9a71fe4699d310980eb61997880dc26b'
const interval = setInterval(() => {
    axios.get(url).then((response) => {
        const temp = response.data.main.temp;
        const strTemp = temp.toString();
        const city = response.data.name;
        const date = response.headers.date;
        console.log('temp:', temp);
        console.log('city:', city);
        console.log('date:', date);
        function dateHandler(){

            fs.appendFile('weather.txt', date, (err) => {
                if(err) throw err;
            });
        
        }
        dateHandler();
         function cityHandler(){

             fs.appendFile('weather.txt', city, (err) => {
                 if(err) throw err;
             });
        
         }
         cityHandler();
        function tempHandler(){

            fs.appendFile('weather.txt', strTemp, (err) => {
                if(err) throw err;
            });
        
        }
        tempHandler();
    });
},300000);






