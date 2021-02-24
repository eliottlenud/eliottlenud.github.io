var temp = document.getElementById('temp');
var clima = document.getElementById('clima');
var hum = document.getElementById('hum');
var ciudadNom = document.getElementById('ciu');
var blockRes = document.getElementById('result');
var blockWelcome = document.getElementById('welcome');
var blockError = document.getElementById('error');
temp.innerHTML = document.forms.length;
var button = document.getElementById('submit');
var results =[];
var infos = {};
var ciudad, tempCiudad, humCiudad, climCiudad;

button.onclick = function(e){
    e.preventDefault();
    var ciu = document.getElementById("ciudad").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ciu+'&appid=32cec1b7e8873634c7ba8548033cc9ef')
    .then((resp) => resp.json())
    .then(function(data) {
      blockWelcome.style.display = 'none ';
      blockRes.style.display = 'block';
      blockError.style.display = 'none';
      temp.innerHTML=(data.main.temp-273.15).toFixed(2);
      tempCiudad=(data.main.temp-273.15).toFixed(2);
      clima.innerHTML=data.weather[0].main;
      climCiudad=data.weather[0].main;
      hum.innerHTML=data.main.humidity;
      humCiudad=data.main.humidity;
      ciudadNom.innerHTML=data.name;
      ciudad=data.name;
      })
    .catch(function(error) {
      blockError.style.display = 'block';
      blockRes.style.display = 'none';
      blockWelcome.style.display = 'none ';
    });


};
var favs = document.getElementById("favs");

document.getElementById("addFav").onclick = function(e){
  e.preventDefault();
  var node = document.createElement("div");  
  node.className = 'fav flex-column container bg-light';
  var p = document.createElement('p');
  var p2 = document.createElement('p'); 
  var p3 = document.createElement('p');       
  var p4 = document.createElement('p');       
  var textName = document.createTextNode(ciudad);
  var textTemp = document.createTextNode('T° : '+tempCiudad);  
  var textHum = document.createTextNode('H(%) : '+humCiudad);
  var textClim = document.createTextNode(climCiudad);        
  node.appendChild(p);      
  node.appendChild(p2);      
  node.appendChild(p3);     
  node.appendChild(p4);     
  p.appendChild(textName);
  p2.appendChild(textTemp);
  p3.appendChild(textHum);
  p4.appendChild(textHum);                 
  favs.appendChild(node);
}
