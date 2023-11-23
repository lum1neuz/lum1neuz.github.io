$(".back").on('click', function(){
    $("#main").load('main.html');
    return false;
});
$(document).on("click", "a", function(e) {
    e.preventDefault();
    $("#main").load($(this).attr("href"));
    return false;
});