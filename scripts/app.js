console.log("JS is working")
$(document).on("ready", function(){
  $('form').on("submit", searchReq);
});
function searchReq(event){
  console.log("searchReq function");
  event.preventDefault();
  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search",
    dataType: "json",
    data: $("form").serialize(),
    success: successCallback,
    error: errorCallback,
  })
}
function successCallback(response){
   response.data.forEach(function(element,i){
     $(".gif-gallery").append($("<img src="+ element.images.fixed_height.url +">"));
   });
}
function errorCallback(){
  console.log("error");
}
