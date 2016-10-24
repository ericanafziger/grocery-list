var blanks = [1, 2, 3];
var userInputList = [];

$(document).ready(function(){
 $("#blanks form").submit(function(event){

   blanks.forEach(function(item){// Loop on blank array to create users array
    var userInput = $("input#"+item).val();

      if (userInput) {
        userInputList.push(userInput);

      }
  });
    userInputList.sort();

   var outputList = userInputList.map(function(item) {
     return item.toUpperCase();
     console.log(outputList);
   });
   outputList.forEach(function(item) {
     $("#show ul").append("<li>"+item+"</li>")

   });

   $("#show").show();
   $("#blanks").hide();
   event.preventDefault();
 });

 $("#newRow").click(function() {

   blanks.push(blanks.length + 1);
   var newRowNumber = (blanks.length);
   console.log(newRowNumber);

   console.log(blanks);

   $("#formItems").append(

     "<div class='form-group'>"+
     "<label>Item " + newRowNumber + "</label>"+
     "<input class='form-control' id='"+newRowNumber+ "' placeholder='List item " + newRowNumber +"''></input>"+
     "</div>"

   )

 });
 $("#refresh").click(function() {
   location.reload();
 });
}); //end document ready
