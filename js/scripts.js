var blanks = ["item1", "item2", "item3"];
var userInputList = [];

$(document).ready(function(){
 $("#blanks form").submit(function(event){

   blanks.forEach(function(item){// Loop on blank array to create users array
     var userInput = $("input#"+item).val();
     userInputList.push(userInput);
     userInputList.sort();     
   });

console.log(userInputList);
  //   list.map(function(item){
  //    return item.toUpperCase()
  //  });

   $("#show").show();
   event.preventDefault();
 });

});
