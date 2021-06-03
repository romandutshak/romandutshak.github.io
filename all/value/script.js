let apiUrlBase = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
$('#calculate').click(function(event){
  let sum = $('#sum').val();
  let currencyCode1 = $('#currency1').val();
  let currencyCode2 = $('#currency2').val();
  let url1 = apiUrlBase + '&' + currencyCode1;
  let url2 = apiUrlBase + '&' + currencyCode2;
  $.get(url1, function(data) {
    console.log("Request success", data);
    var values = Object.values(data);
    for (var i in values) {
      if (values[i].ccy == currencyCode1) {
        console.log(values[i]);
      }
    }
  });
}); 
