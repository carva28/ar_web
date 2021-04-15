
  var setProperty_2 = window.AFRAME.utils.entity.setComponentProperty;

AFRAME.registerComponent("foo", {
	init: function() {
		this.el.addEventListener("hitstart", (e) => {
				//console.log(e);
			 document.getElementById("box_colidida").setAttribute('color', "red");
			 document.getElementById("box_colidida_2").setAttribute('color', "red");
			 // document.getElementById("box_home").setAttribute('color', "red");
				
		})
	},

});

var count = 0;
AFRAME.registerComponent("foo_sphere", {
	init: function() {
		this.el.addEventListener("hitstart", (e) => {
			//console.log(e);
		
			if(count == 0){
				document.getElementById("box_colidida").setAttribute('color', "green");
				document.getElementById("box_colidida_2").setAttribute('color', "green");
				count = 1;
			}else{
				document.getElementById("box_colidida").setAttribute('color', "pink");
				document.getElementById("box_colidida_2").setAttribute('color', "pink");
				count = 0;
			}

			
				
		})
	},

});



