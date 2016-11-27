$(document).ready(function(){
  $("button").click(function(){
    $.getJSON('rest/cliente', function(data, status){
      alert("Nome: " + data[0].nome + "\nStatus: " + status);
      });
    });
  });

