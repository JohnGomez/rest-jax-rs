$(document).ready(function () {
    $("button").click(function () {
        $.getJSON('rest/pessoa', function (data, status) {
            alert("Nome: " + data[0].nome + "\nStatus: " + status);
            var itens =[];
            for (var i = 0; i < data.length; i++) {
                itens.push("<h4>"+data[i].nome+"</h4>");    
            }
        });
    });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
});

