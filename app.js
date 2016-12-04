var app = new Vue({
    el: "#app",
    data: {
      earrings: {
        size: '',
        frame: '',
        style: '',
        color: '',
        //Computed properties based on styles/layers
        color: {
              layer1: '',
              layer2: '',
              layer3: '',
              layer4: '',
              layer5: '',
        },
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
