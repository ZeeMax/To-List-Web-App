//Click on the input and add to the list 
$("input").keydown(function(e) {

  if (e.keyCode == 13) {
    var Input = $(this).val();

    //Append the to the first list
    $(this).parent().parent().append("<li>" + Input + "</li");
    $(this).val("");

  }
  
//make the list sortable 
  $("#todoList ul").sortable({
    items: "li:not('.listTitle, .addItem')",
    connectWith:"ul",
    dropOnEmpty:true,
    placeholder:"emptySpace"
  });
  
 
//rmove the item  once  put on the trash
  
  $("img").droppable({
    drop: function(event, ui){
      ui.draggable.remove();
    }
    
  });
  
});