var app = new Vue({
    el: "#app",
    data: {
      earrings: {
        size: '',
        frame: '',
        style: '',
        //Computed properties based on styles/layers
              layer1: '',
              layer2: '',
              layer3: '',
              layer4: '',
              layer5: '',
        bead: '',
        message: 'message',
    },
    computed: {
      image: function() {
          //Where selected is an array of the currenlty selected earring options
          var selected = [];
          selected.push(this.earrings.size);
          return this.earrings.size;
      },
    },
    methods: {
      greet: function() {
          console.log('test');

      },
    },
    ready: function() {
        console.log("Vue app instance loaded");
		
    },


  }

});

var color_1;

$('input[name=hat-color]').on('change', function() {
   //alert($('input[name=hat-color]:checked').val()); 
   alert($(this).val());
   color_1 = $(this).val();
   //to do: assign color_1 to the fill property on the polygon

});
/*
$("input") // select the radio by its id
		.change(function(){ // bind a function to the change event
        if( $(this).is(":checked") ){ // check if the radio is checked
            var val = $(this).val(); // retrieve the value
			alert( val );
        }
		alert("method called");
    });
*/

/*$( "input" ).change(function() {
  
	var selectedVal = "a";
	var selected = $("#cpID input[type='radio']:checked");
	if (selected.length > 0) {
		selectedVal = selected.val();
	}
	alert( selectedVal );
	
});
*/