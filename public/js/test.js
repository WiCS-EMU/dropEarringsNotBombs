new Vue({
    el: '#app',
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
    },
    created: function() {
      console.log('hit');
    },
});
