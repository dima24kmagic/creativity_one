export const createVerticalWord = word => {
  let wordWrapper = document.createElement('div');
  wordWrapper.classList.add('vertical-word--wrapper');
  for (let i = 0; i < word.length; i++) {
    let individChar = document.createElement('div');
    individChar.classList.add('vertical-word--char');
    individChar.innerText = word.charAt(i) === ' ' ? '\n' : word.charAt(i);
    wordWrapper.appendChild(individChar);
  }
  return wordWrapper;
};
