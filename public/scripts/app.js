
(function(){
  const Http = new XMLHttpRequest();
  Http.addEventListener("load", reqListener);

  navigator.geolocation.getCurrentPosition(function(position) {
    console.log('got you');
    getData(position.coords.latitude, position.coords.longitude);
  });
  //

  function getData(lat,long){
    const url=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=AIzaSyCVJ0YII572y2t-IVUMgKyQ_NvEHGvO9Hw`;
    Http.open("GET", url);
    Http.send();
    console.log('sent req');
  }

  function reqListener(event){
    console.log('got it', event);
    console.log(JSON.parse(this.responseText)) //Waterloo, ON
    var data = JSON.parse(this.responseText);

    var firstResult = data.results[0];

    if(firstResult.formatted_address.includes('Waterloo, ON')){
      document.querySelector('h1').innerHTML = 'You are in Waterloo!';
    }else{
      document.querySelector('h1').innerHTML = 'You are NOT in Waterloo!';
    }
    document.querySelector('p').innerHTML = `currently you are near ${firstResult.formatted_address}`
  }
}())

