var bus = new Vue();

Vue.component('colorpicker', {
  props: ["layername"],
  data: function() {
      return {
        currentcolor: this.layername,
        availableColors: availableColors,
      }
  },
  watch: {
    'currentcolor': function (currentcolor, oldcolor) {
      console.log('currentcolor changed from %s to %s', oldcolor, currentcolor);
      console.log(this.layername);
      bus.$emit(this.layername, currentcolor);
    }
  },
  created: function() {
    console.log(this.layername);
  },
  template:
    `
    <div class="colorPicker">
      <!-- only display 8 per row -->
      <template v-for="subarray in availableColors">
          <div class="row">
            <template v-for="color in subarray">
                <input v-model="currentcolor"  type="radio" name="hat-color" :value="color.value"  :class="color.value" :id="color.value"/>
                <label :for="color.value" :class="color.value">{{ color.value }}</label>
            </template>
          </div>
      </template>

    `,
});
