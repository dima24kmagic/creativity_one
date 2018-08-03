export const createTunnel = (squares = 5, gapBetween = 10, cb) => {
  const tunnelHolder = document.createElement('div');
  let summ = 0;
  for (let i = 0; i < squares; i++) {
    let tunnelSquare = document.createElement('div');

    //add clicked prop to check, either square clicked or not
    tunnelSquare.clicked = false;

    tunnelSquare.classList.add('challenge--tunnel__square');
    tunnelSquare.style.cssText = `top: ${i * gapBetween}px;`;
    //animation: tunnel-light 1s ease ${i * 0.05}s infinite;`;

    //add click handler
    tunnelSquare.addEventListener('click', e => {
      tunnelSquare.clicked = !tunnelSquare.clicked;
      if (tunnelSquare.clicked) {
        summ += i + 1;
        if (summ === 7) {
          console.log('square puzzle solved,  MUHFUCKA');
          let allSquares = document.querySelectorAll('.challenge--tunnel__square');
          for (let i = 0; i < allSquares.length; i++) {
            allSquares[i].classList.add('solved');
            cb(true);
          }
        } else {
          let allSquares = document.querySelectorAll('.challenge--tunnel__square');
          for (let i = 0; i < allSquares.length; i++) {
            allSquares[i].classList.remove('solved');
            cb(false);
          }
        }
        e.target.style.cssText = `top: ${i * gapBetween}px;
        transform: translateX(35px) translateY(-20px) rotate(135deg);`;
      } else {
        e.target.style.cssText = `top: ${i * gapBetween}px;`;
        summ -= i + 1;
        if (summ === 7) {
          console.log('square puzzle solved, MUHFUCKA');
          let allSquares = document.querySelectorAll('.challenge--tunnel__square');
          for (let i = 0; i < allSquares.length; i++) {
            console.log(allSquares[i]);
            allSquares[i].classList.add('solved');
            cb(true);
          }
        } else {
          let allSquares = document.querySelectorAll('.challenge--tunnel__square');
          for (let i = 0; i < allSquares.length; i++) {
            allSquares[i].classList.remove('solved');
            cb(false);
          }
        }
      }
    });

    tunnelHolder.appendChild(tunnelSquare);
  }
  return tunnelHolder;
};
