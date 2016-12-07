var bus = new Vue();

Vue.component('colorpicker', {
  data: function() {
      return {
        currentlayer: availableColors,
        availableColors: availableColors,
      }
  },
  watch: {
    'currentlayer': function (currentlayer, oldLayer) {
      console.log('currentlayer changed from %s to %s', oldLayer, currentlayer);
      bus.$emit('test', 'hi');

      bus.$emit('layer-changed', currentlayer);
    }
  },
  template:
    `
    <div class="colorPicker">
      <!-- only display 8 per row -->
      <template v-for="subarray in availableColors">
          <div class="row">
            <template v-for="color in subarray">
                <input v-model="currentlayer"  type="radio" name="hat-color" :value="color.value"  :class="color.value" :id="color.value "/>
                <label :for="color.value" :class="color.value">{{ color.value }}</label>
            </template>
          </div>
      </template>

    `,
});
