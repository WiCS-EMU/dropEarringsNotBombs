var bus = new Vue();

Vue.component('colorpicker', {
  props: ["layername"],
  data: function() {
      return {
        currentcolor: '',
        availableColors: availableColors,
      }
  },
  watch: {
    'currentcolor': function (currentcolor, oldcolor) {
      console.log('currentcolor changed from %s to %s', oldcolor, currentcolor);
      bus.$emit(this.layername, currentcolor);
    }
  },
  template:
    `
      <select v-model="currentcolor">
        <option v-for="color in availableColors" :value="color.value"> {{color.value}} </option>
      </select>
    `,
});

//The select inputs
Vue.component('selector', {
  props: ['model', 'available', 'title'],
  created: function() {

  },
  template:
    `
      <div class="form-group">
          <label for="sizes">{{ title }}</label>
          <select v-model="model" class="form-control">
            <option v-for="item in available" :value="item.value">{{ item.value }}</option>
          </select>
      </div>
    `
});
