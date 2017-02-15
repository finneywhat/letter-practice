$(document).ready(function(){
  $("#userInput").submit(function(event) {
    var nameInput = $("input#inputName").val();

    $(".inputName1").text(nameInput);

    $("#generatedLetter").show();
    event.preventDefault();
  });
});
