var bus = new Vue();

Vue.component('colorpicker', {
  data: function() {
      return { layer: availableColors, availableColors: availableColors }
  },
  watch: {
    'layer': function (layer, oldLayer) {
      console.log('layer changed from %s to %s', oldLayer, layer)
      bus.$emit('layer-changed', layer)
    }
  },
  template:
    `
    <div class="colorPicker">
      <!-- only display 8 per row -->
      <template v-for="subarray in availableColors">
          <div class="row">
            <template v-for="color in subarray">
                <input v-model="layer"  type="radio" name="hat-color" :value="color.value"  :class="color.value" :id="color.value "/>
                <label :for="color.value" :class="color.value">{{ color.value }}</label>
            </template>
          </div>
      </template>

    `,
});
