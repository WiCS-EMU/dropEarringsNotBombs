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
      currentmodel: '',
    }
  },
  created: function() {
    console.log(this.model);
  },
  watch: {
    'currentmodel': function(currentmodel, oldModel) {
      console.log(this.title+' model value changed');
      bus.$emit(this.title, currentmodel);
    }
  },
  template:
    `
      <div class="form-group">
          <label for="sizes">{{ title }}</label>
          <select v-model="currentmodel" class="form-control">
            <option v-for="item in available" :value="item">{{ item.value }}</option>
          </select>
      </div>
    `
});
