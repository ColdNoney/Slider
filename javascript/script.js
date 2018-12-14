$(document).ready(function(){
  $("#left").click(function(){
    $(".firstRow").append( $(".firstRow li").first() );

    $(".secondRow").append( $(".secondRow li").first() );
  });

  $("#right").click(function(){
    $(".firstRow").prepend( $(".firstRow li").last() );

    $(".secondRow").prepend( $(".secondRow li").last() );
  });
});
