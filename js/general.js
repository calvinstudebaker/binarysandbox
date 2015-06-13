
$(document).ready(function(){

	//Sort the bits array so they appear in descending order
	var bits = $(".bit").get().sort(function(item1, item2){
		return parseInt($(item1).attr("data-place")) > parseInt($(item2).attr("data-place"));
	});

	//add a click listener to update the decimal sum each time a bit is flipped
	$(".bit").click(function(){
		//flip the bit
		var binaryValue = $(this).html();
		if (binaryValue == "0"){
			$(this).html("1").addClass("on");
		} else {
			$(this).html("0").removeClass("on");
		}

		//calculate the sum
		var resultString = "";
		var binaryString = "";
		var result = 0;
		$.each(bits, function(index, element){
			binaryString = $(this).html() + binaryString;
			if($(element).hasClass("on")){
				var val = $(this).attr("data-place");
				resultString = val + " + " + resultString;
				result += parseInt(val);
			}
		});

		//display sum on page
		if (resultString.length == 0){
			resultString = "0<sub>10</sub> = 0<sub>10</sub>";
		} else{
			resultString = resultString.substring(0, resultString.length-3) + "<sub>10</sub> = " + String(result) + "<sub>10</sub>";
		}

		binaryString = binaryString + "<sub>2</sub> = " + String(result) + "<sub>10</sub>";
		$("#decimalResult").html(resultString);
		$("#binaryResult").html(binaryString);
	})
});