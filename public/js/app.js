var app = new Vue({
    el: "#app",
    data: {
      earrings: {
        //TODO make ajax with laravel
        availableStyles: availableStyles,
        availableFrames: availableFrames,
        availableSizes: availableSizes,
        availableBeads: availableBeads,
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
    },
    computed: {
      image: function() {
          //Where selected is an array of the currently selected earring options
          var selected = [];
          selected.push(this.earrings.size);
          return this.earrings.size;
      },
      json: function() {
        return JSON.stringify(this.data);
      }
    },
    methods: {
      registerColorpickerListeners: function() {
        //Register all the layer event bus listeners
        bus.$on('layer1', function (layer) {
          app.earrings.color.layer1 = layer;
        });
        bus.$on('layer2', function (layer) {
          app.earrings.color.layer2 = layer;
        });
        bus.$on('layer3', function (layer) {
          app.earrings.color.layer3 = layer;
        });
        bus.$on('layer4', function (layer) {
          app.earrings.color.layer4 = layer;
        });
        bus.$on('layer5', function (layer) {
          app.earrings.color.layer5 = layer;
        });
      },
      registerSelectorListeners: function() {
        bus.$on('Frames', function (frame) {
          app.earrings.frame = frame;
        });
      },
    },
    created: function() {
      console.log("Vue app instance created");
      var self = this;
      this.registerColorpickerListeners();
      this.registerSelectorListeners();

    },
});
