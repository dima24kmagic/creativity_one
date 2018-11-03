import { createVerticalWord } from './src/js/vertical-word';
import { createTunnel } from './src/js/tunnel';
import onCirclePress from './src/js/center';
import mirror from './src/js/mirror';
import { navs } from './src/js/nav.animation';

//Create Vertical Word
const verticalWordContainer = document.querySelector('.vertical-word');

const verticalWord = createVerticalWord('Find out the solution');

verticalWordContainer.appendChild(verticalWord);

//Create Tunnel
const tunnelContainer = document.querySelector('.challenge--tunnel');

let secretKey = false;

const tunnel = createTunnel(5, 22.5, isSolved => {
  secretKey = isSolved;
});

tunnelContainer.appendChild(tunnel);

//Circle animation
let expanded = false;
let circle = document.querySelector('.circle--inner');
circle.addEventListener('click', () => {
  if (!expanded && secretKey) {
    onCirclePress(circle, expanded, secretKey, () => {
      expanded = true;
    });
  } else if (!expanded && !secretKey) {
    onCirclePress(circle, expanded, secretKey);
  }
});

//handling mirror
mirror();

// navigation animation
navs();
