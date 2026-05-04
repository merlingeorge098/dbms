document.getElementById('btn').onclick=function(){
    let city=document.getElementById('city').value.trim();
    if(city===''){ alert('Enter city name'); return; }
    document.getElementById('loading').textContent='Loading...';
    // First AJAX request gets latitude and longitude for the city.
    let geo=new XMLHttpRequest();
    geo.open('GET','https://geocoding-api.open-meteo.com/v1/search?name='+encodeURIComponent(city)+'&count=1');
    geo.onload=function(){
        if(geo.status!==200){ showError('City search failed'); return; }
        let data=JSON.parse(geo.responseText); if(!data.results){ showError('Invalid city name'); return; }
        let place=data.results[0];
        // Second AJAX request gets current weather using coordinates.
        let weather=new XMLHttpRequest();
        weather.open('GET','https://api.open-meteo.com/v1/forecast?latitude='+place.latitude+'&longitude='+place.longitude+'&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code');
        weather.onload=function(){
            document.getElementById('loading').textContent='';
            if(weather.status!==200){ showError('Weather API failed'); return; }
            let w=JSON.parse(weather.responseText).current;
            document.getElementById('result').innerHTML='<b>'+place.name+'</b><br>Temperature: '+w.temperature_2m+' °C<br>Humidity: '+w.relative_humidity_2m+'%<br>Condition Code: '+w.weather_code+'<br>Wind Speed: '+w.wind_speed_10m+' km/h';
        };
        weather.onerror=function(){ showError('Network error'); }; weather.send();
    };
    geo.onerror=function(){ showError('Network error'); }; geo.send();
};
function showError(msg){ document.getElementById('loading').textContent=''; document.getElementById('result').innerHTML='<span class="error">'+msg+'</span>'; }
