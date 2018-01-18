(function(window, document, undefined) {

    var token = '529743973.a19f73e.c7f00ca7bcfb422ab09d1c592119c218',
    username = 'Snip_art', // rudrastyh - my username :)
    hashtag = 'snipart'
    num_photos = 16;
                                                     
  // $.ajax({ // the first ajax request returns the ID of user rudrastyh
  //   url: 'https://api.instagram.com/v1/users/search',
  //   dataType: 'jsonp',
  //   type: 'GET',
  //   data: {access_token: token, q: username}, // actually it is just the search by username
  //   success: function(data){
  //     console.log(data);
  //     $.ajax({
  //       url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
  //       dataType: 'jsonp',
  //       type: 'GET',
  //       data: {access_token: token, count: num_photos},
  //       success: function(data2){
  //         console.log(data2);
  //         for(x in data2.data){
  //           $('ul').append('<li><img src="'+data2.data[x].images.low_resolution.url+'"></li>');  
  //         }
  //           },
  //       error: function(data2){
  //         console.log(data2);
  //       }
  //     });
  //   },
  //   error: function(data){
  //     console.log(data);
  //   }
  // });     

  $.ajax({
    url: 'https://api.instagram.com/v1/tags/' + hashtag + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
      console.log(data);
      for(x in data.data){
        $('ul').append('<li><img src="'+data.data[x].images.standard_resolution.url+'"></li>');  
      }
    },
    error: function(data){
      console.log(data);
    }
  });    

})(this, this.document);
