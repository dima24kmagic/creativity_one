export const createTunnel = (squares = 5, gapBetween = 10) => {
  const tunnelHolder = document.createElement('div');
  for (let i = 0; i < squares; i++) {
    let tunnelSquare = document.createElement('div');
    tunnelSquare.classList.add('challenge--tunnel__square');
    tunnelSquare.style.cssText = `top: ${i * gapBetween}px;`
    //animation: tunnel-light 1s ease ${i * 0.05}s infinite;`;
    tunnelHolder.appendChild(tunnelSquare);
  }
  return tunnelHolder;
};
