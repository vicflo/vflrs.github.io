(function(window, document, undefined) {

  var token = '1362124742.3ad74ca.6df307b8ac184c2d830f6bd7c2ac5644',
    username = 'rudrastyh', // rudrastyh - my username :)
    num_photos = 15;
                                                     
  $.ajax({ // the first ajax request returns the ID of user rudrastyh
    url: 'https://api.instagram.com/v1/users/search',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, q: username}, // actually it is just the search by username
    success: function(data){
      console.log(data);
      $.ajax({
        url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function(data2){
          console.log(data2);
          for(x in data2.data){
            $('ul').append('<li><img src="'+data2.data[x].images.low_resolution.url+'"></li>');  
          }
            },
        error: function(data2){
          console.log(data2);
        }
      });
    },
    error: function(data){
      console.log(data);
    }
  });         

})(this, this.document);
