//define functions here

$(document).ready(function(){
  
getIt();
frameIt();  
submitIt();
});

function getIt() {
  $('p').on('click', function(){
  alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty')
  })
}

function submitIt() {
  $(document).on('keydown', function(key){
    if(key.which === 71) {
      alert('You pressed G')
    }
  })
}

