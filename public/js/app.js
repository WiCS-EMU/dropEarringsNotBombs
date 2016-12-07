
var app = new Vue({
    el: "#app",
    data: {
      earrings: {
        size: '',
        frame: '',
        style: '',
        color: {
          //Contains an array of the colors available for the given layer
          layer1: availableColors,
          layer2: availableColors,
          layer3: availableColors,
          layer4: availableColors,
          layer5: availableColors,
        },
        bead: '',
    },
    computed: {
      image: function() {
          //Where selected is an array of the currently selected earring options
          var selected = [];
          selected.push(this.earrings.size);
          return this.earrings.size;
      },
    },
    methods: {

    },
    created: function() {
      console.log("Vue app instance created");
      var self = this;
      //The coloripicker layer-changed listener
      bus.$on('layer-changed', function (layer) {
       Vue.set(self, 'layer', layer)
      });

    },
  }
});
