import { createVerticalWord } from './src/js/vertical-word';
import { createTunnel } from './src/js/tunnel';
import onCirclePress from './src/js/center';
import mirror from './src/js/mirror';

//Create Vertical Word
const verticalWord = document.querySelector('.vertical-word');
verticalWord.appendChild(createVerticalWord('Find out the solution'));

//Create Tunnel
const tunnel = document.querySelector('.challenge--tunnel');
let secretKey = false;
tunnel.appendChild(
  createTunnel(5, 22.5, isSolved => {
    secretKey = isSolved;
  })
);

//Circle animation
let expanded = false;
let circle = document.querySelector('.circle--inner');
circle.addEventListener('click', () => {
  if (!expanded && secretKey) {
    onCirclePress(circle, secretKey);
    expanded = true;
  } else {
    onCirclePress(circle, secretKey);
    expanded = false;
  }
});

//handling mirror
mirror();
