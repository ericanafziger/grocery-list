var blanks = ["item1", "item2", "item3"];
var userInputList = [];

$(document).ready(function(){
 $("#blanks form").submit(function(event){

   blanks.forEach(function(item){// Loop on blank array to create users array

    //  if (item1, item2, item3) {
     if (item1 === "") {
       console.log("no data");
     }
     else {


       var userInput = $("input#"+item).val();
       userInputList.push(userInput);
     };

     userInputList.sort();

   });
   var outputList = userInputList.map(function(item) {
     return item.toUpperCase();
     console.log(outputList);
   });
   outputList.forEach(function(item) {
     $("#show ul").append("<li>"+item+"</li>")

   });

   $("#show").show();
   event.preventDefault();
 });

});
