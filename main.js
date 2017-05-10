////////////////////////////////
// IGM-590 
//Project 1
//Name: Alexia Munoz
//Due: 4/10/2017
////////////////////////////////

    'use strict'
      const canvas = document.querySelector( 'canvas' )
      const ctx = canvas.getContext( '2d' )        
    
///////////////////////////// GRID ////////////////////////////////////////////////////////
      const width = 200
      const height = 200

      let grid = []
      let temp = []
      
      let bgColor = '#DDDDDD'
      let cColor = '#C73E1D'
      let currentpattern = 'pattern1'
      
      
      let pattern1 = 'pattern1'
      let pattern2 = 'pattern2'
      
      var intervalThree
      var intervalTwo
      var intervalOne
      
      //Changable Values
      let colorWhite ='#DDDDDD' // White
      let colorOrange ='#C73E1D' // orange
      let colorGrey = '#333232' //grey
      let colorGreen = '#A6D49F' //green
      
      let timerOne = 2000;
      let timerTwo = 2500;
      let timerThree = 3000;
     

      canvas.width = width
      canvas.height = height
      
   

      for( let y = 0; y < height; y++ ) {
        grid[ y ] = []
        temp[ y ] = [] 

        for( let x = 0; x < width; x++ ) {
          grid[ y ][ x ] = Math.round( Math.random() )
          temp[ y ][ x ] = 0 
        }
      }

//Sets the state of the new cells
    function fourStateChange( cellOne, cellTwo, cellThree, cellFour) {
       
        
            if(cellOne === 1){ //Cell One On
            
            if(cellTwo === 1){ //Cell Two On
                
                if(cellThree === 1){ //Cell Three On
                    
                    if(cellFour === 1){ //Cell Four On
                        return 0
                    }
                    else{  //Cell Four Off
                        return 1
                    }
                    
                }
               else{ //Cell Three Off
                          
                    if(cellFour === 1){ //Cell Four On
                        return 1
                    }
                    else{ // Cell Four Off
                        return 1
                    }
                    
               }  
                
            }
            else{   // Cell Two Off
                
                if(cellThree === 1){ // Cell Three On
                    
                    if(cellFour === 1){ // Cell Four On
                        return 0
                    }
                    else{ //Cell Four Off
                        return 1
                    }
                    
                }
               else{ //Cell Three Off
                          
                    if(cellFour == 1){ // Cell Four On
                        return 1
                    }
                    else{ // Cell Four Off
                        return 1
                    }
                    
               }
                 
            } 
            
        }
                     else{
            return 0
        }
    
        
        return 0
        
    }

      let runAutomata = function() {
        // loop through every cell
        // look at cell neighbors and count the live ones
        // determine next cell state based on neighbor count
        // set temp[y][x] -> new cell state
        if (grid == undefined){  //incase of error
               for( let y = 0; y < height; y++ ) {
        grid[ y ] = []
        temp[ y ] = [] 

        for( let x = 0; x < width; x++ ) {
          grid[ y ][ x ] = Math.round( Math.random() )
          temp[ y ][ x ] = 0 
        }
        }
     }
        else{
        for( let y = 0; y < height; y++ ) {
        
        for( let x = 0; x < width; x++ ) {
            

            let liveCount = 0
   
       //Check which neightbors are alive and are not */
            let tL, tM, tR, mL ,mR ,bL , bM ,bR 
         
            if(y == 0){
                if(x == 0){
                    
                     tL = grid[height-1][width-1] //topLeft
                     tM = grid[height-1][x] //topMiddle
                     tR = grid[height-1][x+1] //topRight
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y+1][width-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][x+1] //BottomRight
                }
                else if(x == width){
                     tL = grid[height-1][x-1] //topLeft
                     tM = grid[height-1][x] //topMiddle
                     tR = grid[height-1][0] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                     bL = grid[y+1][x-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][0] //BottomRight
                }
                else{
                     tL = grid[height-1][x-1] //topLeft
                     tM = grid[height-1][x] //topMiddle
                     tR = grid[height-1][x+1] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y+1][x-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][x+1] //BottomRight
                }
            }
            else if(y == (width-1)){
                if(x == 0){
                     tL = grid[y-1][width-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[0][width-1]  //BottomLeft
                     bM =grid[0][x] //BottomMiddle
                     bR =grid[0][x+1] //BottomRight
                }
                else if(x==width){
                     tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][0] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                     bL = grid[0][x-1]  //BottomLeft
                     bM =grid[0][x] //BottomMiddle
                     bR =grid[0][0] //BottomRight
                }
                else{
                     tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[0][x-1]  //BottomLeft
                     bM =grid[0][x] //BottomMiddle
                     bR =grid[0][x+1] //BottomRight
                }
                
            }
            
            else if(x == 0){
                     tL = grid[y-1][width-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][width-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y+1][width-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][x+1] //BottomRight
            }
            
            else if(x == width){
                    tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][0] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][0] //MiddleRight
                     bL = grid[y+1][x-1]  //BottomLeft
                     bM =grid[y+1][x] //BottomMiddle
                     bR =grid[y+1][0] //BottomRight
            }

            
            else{
                    tL = grid[y-1][x-1] //topLeft
                     tM = grid[y-1][x] //topMiddle
                     tR = grid[y-1][x+1] //topRight
                     mL = grid[y][x-1] //MiddleLeft
                     mR =grid[y][x+1] //MiddleRight
                     bL = grid[y-1][x-1]  //BottomLeft
                     bM =grid[y-1][x] //BottomMiddle
                     bR =grid[y-1][x+1] //BottomRight
            }
            
          if(currentpattern === pattern1){
             temp[y][x] = fourStateChange(tM, mR, mL, bM)
             }
            else{
                   liveCount = tL + tM + tR + mL +mR+ bL+ bM+ bR //Add up the population
            if(liveCount > 3 || liveCount < 2){ //Dies if over populated or underpopulated
                temp[x][y] = 0
            }
            else{ //Become Alive due to repopulation or continues to live
                temp[x][y]= 1
            }
            }
   
        }
            
        }

        }  

        // after for loop, swap grid and temp arrays
        let swap = grid
        grid = temp
        temp = swap
        
         }
 /////////////////////////////////// End of Grid //////////////////////////////////////////////     

            
//////////////////////////////////// SOUND ///////////////////////////////////////////
//Reference:
//https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type

    
window.AudioContext = window.AudioContext||window.webkitAudioContext
var context = new AudioContext()
    
/////////////////////////////////////////////////////////////////////////
//https://dev.opera.com/articles/drum-sounds-webaudio/
function Kick(context) {
     
	this.context = context;
     
}

Kick.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Kick.prototype.trigger = function(time) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(150, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + 0.5)

}
        
function Snare(context) {
	this.context = context
}

Snare.prototype.noiseBuffer = function() {
	var bufferSize = this.context.sampleRate
	var buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate)
	var output = buffer.getChannelData(0)

	for (var i = 0; i < bufferSize; i++) {
		output[i] = Math.random() * 2 - 1
	}

	return buffer;
};
        
Snare.prototype.setup = function() {
	this.noise = this.context.createBufferSource()
	this.noise.buffer = this.noiseBuffer()
	var noiseFilter = this.context.createBiquadFilter()
	noiseFilter.type = 'highpass'
	noiseFilter.frequency.value = 1000
	this.noise.connect(noiseFilter)

    
    this.noiseEnvelope = this.context.createGain()
    noiseFilter.connect(this.noiseEnvelope)

    this.noiseEnvelope.connect(this.context.destination)

        this.osc = this.context.createOscillator()
    this.osc.type = 'triangle'

    this.oscEnvelope = this.context.createGain()
    this.osc.connect(this.oscEnvelope);
    this.oscEnvelope.connect(this.context.destination);
    
};
        
Snare.prototype.trigger = function(time) {
	this.setup()

	this.noiseEnvelope.gain.setValueAtTime(1, time);
	this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2)
	this.noise.start(time)

	this.osc.frequency.setValueAtTime(100, time)
	this.oscEnvelope.gain.setValueAtTime(0.7, time)
	this.oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1)
	this.osc.start(time)

	this.osc.stop(time + 0.2)
	this.noise.stop(time + 0.2)
};
///////////////////////////////////////////////////////////////////////////

///////////// Altered Examples ///////////////////////////////////////

function Snare2(context) {
	this.context = context
}

Snare2.prototype.noiseBuffer = function() {
	var bufferSize = this.context.sampleRate
	var buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate)
	var output = buffer.getChannelData(0)

	for (var i = 0; i < bufferSize; i++) {
		output[i] = Math.random() * 2 - 1
	}

	return buffer;
};
        
Snare2.prototype.setup = function() {
	this.noise = this.context.createBufferSource()
	this.noise.buffer = this.noiseBuffer()
	var noiseFilter = this.context.createBiquadFilter()
	noiseFilter.type = 'highshelf'
	noiseFilter.frequency.value = 100
	this.noise.connect(noiseFilter)

    
    this.noiseEnvelope = this.context.createGain()
    noiseFilter.connect(this.noiseEnvelope)

    this.noiseEnvelope.connect(this.context.destination)

        this.osc = this.context.createOscillator()
    this.osc.type = 'sine'

    this.oscEnvelope = this.context.createGain()
    this.osc.connect(this.oscEnvelope);
    this.oscEnvelope.connect(this.context.destination);
    
};
        
Snare2.prototype.trigger = function(time) {
	this.setup()

	this.noiseEnvelope.gain.setValueAtTime(1, time);
	this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2)
	this.noise.start(time)

	this.osc.frequency.setValueAtTime(45, time)
	this.oscEnvelope.gain.setValueAtTime(0.2, time)
	this.oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1)
	this.osc.start(time)

	this.osc.stop(time + 0.2)
	this.noise.stop(time + 0.7)
};
  
function Expermental(context) {
     
	this.context = context;
     
}

Expermental.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-100, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(1, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + 0.8)

}
function Expermental2(context) {
     
	this.context = context;
     
}
Expermental2.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental2.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-900, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(0.5, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + 0.8)

}
function Expermental3(context) {

	this.context = context

     
}
Expermental3.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental3.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-1200, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(.5, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + length)

}
function Expermental4(context) {

	this.context = context

     
}
Expermental4.prototype.setup = function() {
    
	this.osc = this.context.createOscillator()
	this.gain = this.context.createGain()
	this.osc.connect(this.gain)
	this.gain.connect(this.context.destination)
}

Expermental4.prototype.trigger = function(time, length) {
    
	this.setup()

	this.osc.frequency.setValueAtTime(-1800, time)
	this.gain.gain.setValueAtTime(1, time)

	this.osc.frequency.exponentialRampToValueAtTime(.5, time + 0.5)
	this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5)

	this.osc.start(time)

	this.osc.stop(time + length)

}

//////////////////////////////
        
var beat = function(){
          
         intervalOne = setInterval(function(){ 

            var kick = new Kick(context)
         
            var snare = new Snare(context)
            
             var snare2 = new Snare2(context) // altered Snare
         
            var now = context.currentTime
         
         kick.trigger(now) 
         kick.trigger(now +.25)
         kick.trigger(now + .75)
         
         snare.trigger(now + 1)
         
         kick.trigger(now + 1.75)
         kick.trigger(now + 1.85)  
         
         //Change the Color the cells and canvas
         if(cColor === colorOrange){
             cColor = colorGreen
             bgColor = colorGrey
         }
         else{
              cColor = colorOrange
              bgColor = colorWhite
         }
             
            currentpattern = pattern2
       
             
     }, timerOne)
         
      intervalTwo = setInterval(function(){ 
             
   
             var snare2 = new Snare2(context)
         
            var now = context.currentTime
 
         
         snare2.trigger(now + 1)
             
     
            currentpattern = pattern1

             
     }, timerTwo)
       
 intervalThree = setInterval(function(){ 
             
                // Higher pitch melody, based off Kick 
              var exp1 = new Expermental(context)
              var exp2 = new Expermental2(context)
              var exp3 = new Expermental3(context)
             var exp4 = new Expermental3(context)
         
            var now = context.currentTime
    
            exp1.trigger(now + .25, .5 )
            exp1.trigger(now + .50, .5 )
            exp1.trigger(now + .75, .5 )
            exp1.trigger(now + 1.25, .5 )
            exp1.trigger(now + 1.50, .5 )
            exp1.trigger(now + 1.75, .5 )
            exp1.trigger(now + 2.25, .5 )
            exp1.trigger(now + 2.50, .5 )
            exp1.trigger(now + 2.75, .5 )
         
       
         
         exp2.trigger(now + .30,.5)
         exp3.trigger(now + .55, .5)
         exp4.trigger(now + .80, .5)
         exp3.trigger(now + 1.05, .5)
    
         exp2.trigger(now + 2.30,.5)
         exp4.trigger(now + 2.55, .5)
         exp3.trigger(now + 2.80, .5)

        //Color Change
       cColor = colorGrey
        bgColor =colorWhite

             
     }, timerThree)
         
      
     }
        
/////////////////////////////////////////////////////////////////////////////////////////////
 
///////////////////////////// DRAW FUNCTION //////////////////////////////////////////
     let count = 0 
       
        beat()
      
      let draw = function() {
       
        runAutomata()
          
  
        ctx.fillStyle = bgColor
        ctx.fillRect( 0,0,width,height )
        ctx.fillStyle = cColor


        for( let y = 0; y < height; y++ ) {
          for( let x = 0; x < width; x++ ) {
            if( grid[ y ][ x ] === 1 ) {
              ctx.fillRect( x,y,1,1 ) 
            } 
          }
        }
         
        window.requestAnimationFrame( draw )
      }
      
         
     
      window.requestAnimationFrame( draw )
     
      
      //////////////// USER INPUT ////////////////////////////////////////////////////

      ////NOT IN USE////////////
 /*canvas.addEventListener("mousedown", function(){
     
     var y = random()
     var x = random()
     console.log(x,y)
    
   grid[y][x] = 0;
     
 }, false)    */ 
      
document.querySelector("#OneButton").onclick = function(){
    var colorValue = document.getElementById("colorOne").value
    colorOrange = colorChange(colorValue,colorOrange)
    
}
document.querySelector("#TwoButton").onclick = function(){
    var colorValue = document.getElementById("colorTwo").value
    colorWhite = colorChange(colorValue,colorWhite)
    
}
document.querySelector("#ThreeButton").onclick = function(){
    var colorValue = document.getElementById("colorThree").value
    colorGreen = colorChange(colorValue,colorGreen)
    
}
document.querySelector("#FourButton").onclick = function(){
    var colorValue = document.getElementById("colorFour").value
    colorGrey = colorChange(colorValue,colorGrey)

}

document.querySelector("#OneTimerButton").onclick = function(){
    var timer = document.getElementById("timerOne").value
   timerOne = timerCheck(timer ,timerOne)
   clear()
     beat()
}
document.querySelector("#TwoTimerButton").onclick = function(){
    var timer  = document.getElementById("timerTwo").value
    timerTwo = timerCheck(timer ,timerTwo)
    clear()
     beat()
}
document.querySelector("#ThreeTimerButton").onclick = function(){
    var timer  = document.getElementById("timerThree").value
    timerThree = timerCheck(timer ,timerThree)
    clear()
    beat()
    
}

function clear(){
    clearInterval(intervalOne)
    clearInterval(intervalThree)
    clearInterval(intervalTwo)
}

//Valid hex check
///http://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
function colorChange(value,color){
    var check = /^#[0-9A-F]{6}$/i.test(value)
    if(check === true){
        return value
    }

       return color
    
}
function timerCheck(value,current){
    if(value > 1000){
        return value
    }
    return current
}

////////// WASN'T FINISHED//////////////
/*function random(){
    return Math.floor(Math.random() * width) 
}*/

/////////////// END OF USER INPUT //////////////////////////////////////////