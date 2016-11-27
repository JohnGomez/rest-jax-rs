$(document).ready(function () {
    $("button").click(function () {
        $.getJSON('rest/pessoa', function (data, status) {
            alert("Nome: " + data[0].nome + "\nStatus: " + status);
        });
    });
});

