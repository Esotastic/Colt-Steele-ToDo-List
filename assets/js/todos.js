//Check off specific todos by clicking.
$("li").click(function(){
  $(this).toggleClass("completed");
});

//Click on X to delete todo
$("span").click(function(){
  alert("clicked on a span");
})
