$(document).ready(function() {

	function type(ld1, ld2, ld3){

		if (ld1 > ld2 + ld3 || ld2 > ld1 + ld3 || ld3 > ld1 + ld2){
			return "invalido, no se puede construir"	
		} else {
			if(ld1 === ld2 && ld1 ===ld3) {
				return "valido y es equilatero";
			} else {
				if(ld1 === ld2 || ld1 === ld3 || ld2 === ld3) {
					return "valido y es isoceles"
				} else {
					return "valido y es escaleno"
				}
					
			}
		}
	}

		$("form").on("submit", function(event) {
			event.preventDefault();

			var ld1 = parseInt($("input#lad1").val());
			var ld2 = parseInt($("input#lad2").val());
			var ld3 = parseInt($("input#lad3").val());

			console.log (ld1 + ld2 + ld3);

			var que = type(ld1, ld2, ld3);

			$("span#sino").text("El triangulo que ingresaste es " + que)
	})

})