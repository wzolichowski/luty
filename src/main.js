import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Fireworks from 'fireworks-js'

const app = createApp(App)

// Initialize fireworks effect on mount
app.mount('#app')

const fireworks = new Fireworks({
  target: '#app',  // specify the element to attach fireworks to
  hue: { min: 0, max: 360 },  // Optional: change the color range of fireworks
  delay: { min: 20, max: 60 },  // Optional: delay between each firework
  speed: 2,  // Optional: speed of fireworks
  width: window.innerWidth,  // Optional: full screen width
  height: window.innerHeight,  // Optional: full screen height
  num: 5,  // Optional: number of fireworks
})
fireworks.start()
