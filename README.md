# dropEarringsNotBombs
* On layers only remove if goes back up to size or whatever.  So don't hav eto reselect to try out different color types.

#TODO
updated readme


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Earring Creator </title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <div id="app">
    <div class="container">
        <h1 class="hero-title"> Custom Earrings </h1>
        <br />
        <div class="row">
          <div class="col-md-6 border">
                 {{ earrings | json }}
          </div>


            <!-- Dropdowns -->
            <div class="col-md-3">

                <!-- Sizes -->
                <div class="form-group">
                  <label for="sizes">Sizes</label>
                  <!-- Vue Sizes model -->
                  <select v-model="earrings.size" class="form-control" id="size">
                    <option> Full </option>
                  </select>
                </div>

                <!-- Frames -->
                <div class="form-group" v-show="earrings.size != ''">
                  <label for="sizes">Frames</label>
                  <!-- Vue Frames model -->
                  <select v-model="earrings.frame" class="form-control" id="frames">
                    <option> Silver </option>
                    <option> Gold </option>
                  </select>
                </div>

                <!-- Styles -->
                <div class="form-group" v-show="earrings.frame != ''">
                  <label for="styles">Styles</label>
                  <!-- Vue Frames model -->
                  <select v-model="earrings.style" class="form-control" id="styles">
                    <!-- v-for="option in earrings.styles" track-by="$index" -->
                    <option> Classic </option>
                  </select>
                </div>

                <!-- Layer 1-->
                <div class="form-group" v-show="earrings.style != ''">
                  <label for="layer1">Layer One</label>
                  <input type="radio" value="One" v-model="earrings.color.layer1" @click="greet()">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="earrings.color.layer1" @click="greet()">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>

                  <div class="colorPicker">
                    <div class="row">
                      <input type="radio" name="hat-color" value="venetian-red" class="venetian-red" v-model="earrings.color.layer1" @click="greet()" />
                      <label for="hat-color-venetian-red" class="venetian-red">Venetian Red</label>
                      <input type="radio" name="hat-color" value="hot-pink" class="hot-pink" v-model="earrings.color.layer1"/>
                      <label for="hat-color-hot-pink" class="hot-pink">Hot Pink</label>
                      <input type="radio" name="hat-color" value="fuchsia" class="fuchsia"/>
                      <label for="hat-color-fuchsia" class="fuchsia">Fuchsia</label>
                      <input type="radio" name="hat-color" value="bubble-gum-pink" class="bubble-gum-pink"/>
                      <label for="hat-color-bubble-gum-pink" class="bubble-gum-pink">Bubble Gum Pink</label>
                      <input type="radio" name="hat-color" value="classic-rose" class="classic-rose"/>
                      <label for="hat-color-classic-rose" class="classic-rose">Classic Rose</label>
                      <input type="radio" name="hat-color" value="coral-pink"  class="coral-pink"/>
                      <label for="hat-color-coral-pink" class="coral-pink">Coral Pink</label>
                      <input type="radio" name="hat-color" value="burnt-orange"  class="burnt-orange"/>
                      <label for="hat-color-burnt-orange" class="burnt-orange">Burnt Orange</label>
                      <input type="radio" name="hat-color" value="gold-poppy"  class="gold-poppy"/>
                      <label for="hat-color-gold-poppy" class="gold-poppy">Gold Poppy</label>
                    </div>

                    <div class="row">
                      <input type="radio" name="hat-color" value="yellow"  class="yellow"/>
                      <label for="hat-color-yellow" class="yellow">Yellow</label>
                      <input type="radio" name="hat-color" value="light-yellow"  class="light-yellow"/>
                      <label for="hat-color-light-yellow" class="light-yellow">Light Yellow</label>
                      <input type="radio" name="hat-color" value="mint-green" class="mint-green"/>
                      <label for="hat-color-mint-green" class="mint-green">Mint Green</label>
                      <input type="radio" name="hat-color" value="pistachio"  class="pistachio"/>
                      <label for="hat-color-pistachio" class="pistachio">Pistachio</label>
                      <input type="radio" name="hat-color" value="olive-green"  class="olive-green"/>
                      <label for="hat-color-olive-green" class="olive-green">Olive Green</label>
                      <input type="radio" name="hat-color" value="forest-green"  class="forest-green"/>
                      <label for="hat-color-forest-green" class="forest-green">Forest Green</label>
                      <input type="radio" name="hat-color" value="teal"  class="teal"/>
                      <label for="hat-color-teal" class="teal">Teal</label>
                      <input type="radio" name="hat-color" value="sky-blue"  class="sky-blue"/>
                      <label for="hat-color-sky-blue" class="sky-blue">Sky Blue</label>
                    </div>

                      <div class="row">
                        <input type="radio" name="hat-color" value="powder-blue"  class="powder-blue"/>
                        <label for="hat-color-powder-blue" class="powder-blue">Powder Blue</label>
                        <input type="radio" name="hat-color" value="cobalt"  class="cobalt"/>
                        <label for="hat-color-cobalt" class="cobalt">Cobalt</label>
                        <input type="radio" name="hat-color" value="orchid"  class="orchid"/>
                        <label for="hat-color-orchid" class="orchid">Orchid</label>
                        <input type="radio" name="hat-color" value="eggplant"  class="eggplant"/>
                        <label for="hat-color-eggplant" class="eggplant">Eggplant</label>
                        <input type="radio" name="hat-color" value="blackcurrant"  class="blackcurrant"/>
                        <label for="hat-color-blackcurrant" class="blackcurrant">Blackcurrant</label>
                        <input type="radio" name="hat-color" value="white"  class="white"/>
                        <label for="hat-color-white" class="white">White</label>
                        <input type="radio" name="hat-color" value="cocoa-brown"  class="cocoa-brown"/>
                        <label for="hat-color-cocoa-brown" class="cocoa-brown">Cocoa Brown</label>
                        <input type="radio" name="hat-color" value="tan"  class="tan"/>
                        <label for="hat-color-tan" class="tan">Tan</label>
                    </div>
                  </div>
                </div>

                <!-- Layer 2-->
                <div class="form-group" v-show="earrings.color.layer1 != ''">
                  <label for="layer2">Layer Two</label>
                  <!-- Vue Frames model
                  <select v-model="earrings.color.layer2" class="form-control" id="layer2">
                    <option> Red </option>
                  </select>
                  -->
                  <div class="colorPicker">
                    <div class="row">

                    </div>
                  </div>
                </div>

                <!-- Layer 3-->
                <div class="form-group" v-show="earrings.color.layer2 != ''">
                  <label for="layer3">Layer Three</label>
                  <!-- Vue Frames model
                  <select v-model="earrings.color.layer3" class="form-control" id="layer3">
                    <option> Red </option>
                  </select>
                  -->
                  <div class="colorPicker">
                    <div class="row">

                    </div>
                  </div>

                </div>

                <!-- Layer 4-->
                <div class="form-group" v-show="earrings.color.layer3 != ''">
                  <label for="layer4">Layer Four</label>
                  <!-- Vue Frames model
                  <select v-model="earrings.color.layer4" class="form-control" id="layer4">
                    <option> Red </option>
                  </select>
                  -->
                  <div class="colorPicker">
                    <div class="row">

                    </div>
                  </div>
                </div>

                <!-- Layer 5-->
                <div class="form-group" v-show="earrings.color.layer4 != ''">
                  <label for="layer5">Layer Five</label>
                  <!-- Vue Frames model
                  <select v-model="earrings.color.layer5" class="form-control" id="layer5">
                    <option> Red </option>
                  </select>
                  -->
                  <div class="colorPicker">
                    <div class="row">

                    </div>
                  </div>

                </div>

                <!-- Beads -->
                <div class="form-group" v-show="earrings.color.layer5 != ''">
                  <label for="beads">Beads</label>
                  <!-- Vue Frames model -->
                  <select v-model="earrings.bead" class="form-control" id="beads">
                    <option> Some </option>
                    <option> None </option>
                  </select>
                </div>

            </div>
        </div>
    </div>
   </div>
</body>

    <!-- Jquery -->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

    <!-- Bootstrap  -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>

    <!--Vue.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.28/vue.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.4/vue.min.js"></script> -->
    <script src="./app.js"></script>

</html>
