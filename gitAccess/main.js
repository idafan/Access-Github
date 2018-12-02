$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    let username = e.target.value;
    let data = {};
    // Make request to Github
    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'e5de2b9fce0593bf30ec',
        client_secret:'0bd8a6ab845e6bfb029d866988355910fb87c03d'
      }
    }).done(function(user){
      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'e5de2b9fce0593bf30ec',
          client_secret:'0bd8a6ab845e6bfb029d866988355910fb87c03d',
          sort: 'created: asc',
          per_page: 20
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          if(repo.language){
            if(!data[repo.language])
              data[repo.language]=1;
            else
              data[repo.language]+=1;
          }
          $('#repos').append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>:
                </div>
                <div class="col-md-3">
                  <span>${repo.language}</span>
                </div>
              </div>
            </div>
          `);
        });
      });

      $('#profile').html(`
        <div id="repos"></div>
      `);
    });
    //new jsonData(data);
  });
});
