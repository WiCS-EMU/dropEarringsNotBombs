Vue.component('colorpicker', {
  props: ['layer'],
  template:
    `
    <div class="colorPicker">
        <div class="row">
        {{ layer }}
        <input v-model="layer" type="radio" name="hat-color" value="venetian-red" id="hat-color-venetian-red" class="venetian-red"/>
        <label for="hat-color-venetian-red" class="venetian-red">Venetian Red</label>
        <input v-model="layer" type="radio" name="hat-color" value="hot-pink" id="hat-color-hot-pink" class="hot-pink"/>
        <label for="hat-color-hot-pink" class="hot-pink">Hot Pink</label>
        <input v-model="layer" type="radio" name="hat-color" value="fuchsia" id="hat-color-fuchsia" class="fuchsia"/>
        <label for="hat-color-fuchsia" class="fuchsia">Fuchsia</label>
        <input v-model="layer" type="radio" name="hat-color" value="bubble-gum-pink" id="hat-color-bubble-gum-pink" class="bubble-gum-pink"/>
        <label for="hat-color-bubble-gum-pink" class="bubble-gum-pink">Bubble Gum Pink</label>
        <input v-model="layer" type="radio" name="hat-color" value="classic-rose" id="hat-color-classic-rose" class="classic-rose"/>
        <label for="hat-color-classic-rose" class="classic-rose">Classic Rose</label>
        <input v-model="layer" type="radio" name="hat-color" value="coral-pink" id="hat-color-coral-pink" class="coral-pink"/>
        <label for="hat-color-coral-pink" class="coral-pink">Coral Pink</label>
        <input v-model="layer" type="radio" name="hat-color" value="burnt-orange" id="hat-color-burnt-orange" class="burnt-orange"/>
        <label for="hat-color-burnt-orange" class="burnt-orange">Burnt Orange</label>
        <input v-model="layer" type="radio" name="hat-color" value="gold-poppy" id="hat-color-gold-poppy" class="gold-poppy"/>
        <label for="hat-color-gold-poppy" class="gold-poppy">Gold Poppy</label>
      </div>

      <div class="row">
        <input v-model="layer" type="radio" name="hat-color" value="yellow" id="hat-color-yellow" class="yellow"/>
        <label for="hat-color-yellow" class="yellow">Yellow</label>
        <input v-model="layer" type="radio" name="hat-color" value="light-yellow" id="hat-color-light-yellow" class="light-yellow"/>
        <label for="hat-color-light-yellow" class="light-yellow">Light Yellow</label>
        <input v-model="layer" type="radio" name="hat-color" value="mint-green" id="hat-color-mint-green" class="mint-green"/>
        <label for="hat-color-mint-green" class="mint-green">Mint Green</label>
        <input v-model="layer" type="radio" name="hat-color" value="pistachio" id="hat-color-pistachio" class="pistachio"/>
        <label for="hat-color-pistachio" class="pistachio">Pistachio</label>
        <input v-model="layer" type="radio" name="hat-color" value="olive-green" id="hat-color-olive-green" class="olive-green"/>
        <label for="hat-color-olive-green" class="olive-green">Olive Green</label>
        <input v-model="layer" type="radio" name="hat-color" value="forest-green" id="hat-color-forest-green" class="forest-green"/>
        <label for="hat-color-forest-green" class="forest-green">Forest Green</label>
        <input v-model="layer" type="radio" name="hat-color" value="teal" id="hat-color-teal" class="teal"/>
        <label for="hat-color-teal" class="teal">Teal</label>
        <input v-model="layer" type="radio" name="hat-color" value="sky-blue" id="hat-color-sky-blue" class="sky-blue"/>
        <label for="hat-color-sky-blue" class="sky-blue">Sky Blue</label>
      </div>

      <div class="row">
        <input v-model="layer" type="radio" name="hat-color" value="powder-blue" id="hat-color-powder-blue" class="powder-blue"/>
        <label for="hat-color-powder-blue" class="powder-blue">Powder Blue</label>
        <input v-model="layer" type="radio" name="hat-color" value="cobalt" id="hat-color-cobalt" class="cobalt"/>
        <label for="hat-color-cobalt" class="cobalt">Cobalt</label>
        <input v-model="layer" type="radio" name="hat-color" value="orchid" id="hat-color-orchid" class="orchid"/>
        <label for="hat-color-orchid" class="orchid">Orchid</label>
        <input v-model="layer" type="radio" name="hat-color" value="eggplant" id="hat-color-eggplant" class="eggplant"/>
        <label for="hat-color-eggplant" class="eggplant">Eggplant</label>
        <input v-model="layer" type="radio" name="hat-color" value="blackcurrant" id="hat-color-blackcurrant" class="blackcurrant"/>
        <label for="hat-color-blackcurrant" class="blackcurrant">Blackcurrant</label>
        <input v-model="layer" type="radio" name="hat-color" value="white" id="hat-color-white" class="white"/>
        <label for="hat-color-white" class="white">White</label>
        <input v-model="layer" type="radio" name="hat-color" value="cocoa-brown" id="hat-color-cocoa-brown" class="cocoa-brown"/>
        <label for="hat-color-cocoa-brown" class="cocoa-brown">Cocoa Brown</label>
        <input v-model="layer" type="radio" name="hat-color" value="tan" id="hat-color-tan" class="tan"/>
        <label for="hat-color-tan" class="tan">Tan</label>
      </div>
    </div>
    `,
});
