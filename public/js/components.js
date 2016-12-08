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
      console.log(this.layername+' currentcolor changed from %s to %s', oldcolor, currentcolor);
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
  data: function() {
    return {
      selectorModel: '',
    }
  },
  created: function() {

  },
  template:
    `
      <div class="form-group">
          <label for="sizes">{{ title }}</label>
          <select v-model="selectorModel" class="form-control">
            <option v-for="item in available" :value="item.value">{{ item.value }}</option>
          </select>
      </div>
    `
});
