$(document).ready(function(){$.ajax({url: "/notificaciones/alert",type: "get",success: function(res){if(res>0){$('#cantobject').text(res);$('#cantobject').show();}else{$('#cantobject').css('display','none');}}});})
