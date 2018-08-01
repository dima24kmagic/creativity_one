import { createVerticalWord } from './src/js/vertical-word';
import { createTunnel } from './src/js/tunnel';
import onCirclePress from './src/js/center';
//Create Vertical Word
const verticalWord = document.querySelector('.vertical-word');
verticalWord.appendChild(createVerticalWord('Find out the solution'));

//Create Tunnel
const tunnel = document.querySelector('.challenge--tunnel');
tunnel.appendChild(createTunnel(5, 22.5));

//Circle animation
let expanded = false;
let circle = document.querySelector('.circle--inner');
let circleExpanded = document.querySelector('.circle--inner--expanded');
circle.addEventListener('click', () => {
  if (expanded) {
  } else {
    onCirclePress(circle, expanded);
    expanded = true;
  }
});
