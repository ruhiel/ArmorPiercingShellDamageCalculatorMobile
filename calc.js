$(function() {
	$("select,input").change(function() {
		var num = $('#power').val() / $('input[name="type"]:checked').val();
		var limit = Math.round(num * 2);
		$('#weaponpowerlimit').val(limit);
		
		$(".mul").each(function(index, element){
			num *= $(element).val();
		});
		$(".add").each(function(index, element){
			num += Number($(element).val());
		});
  		$('#weaponpower').val(Math.round(num));
  		
  		var result = Math.round(num) > limit ? limit : Math.round(num);
  		
  		$('#lv3').val(Math.round(result * 0.24));
  		$('#lv2').val(Math.round(result * 0.17));
  		$('#lv1').val(Math.round(result * 0.12));
	});
});
