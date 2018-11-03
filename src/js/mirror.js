export default () => {
    let mirror = document.querySelector('.challenge--mirror-box');
    let rotation = 0;
    let timer;
    let rotationSpeed = 10;
    mirror.addEventListener(
        'mousedown',
        () => {
            timer = setInterval(() => {
                rotation += 1;
                mirror.style.cssText = `transform: rotate(${rotation}deg)`;
                rotation === 360 ? (rotation = 0) : null;
                if (rotation > 120 && rotation < 150) {
                    console.log("WHAT");

                }
            }, rotationSpeed);
        },
        150
    );
    mirror.addEventListener('mouseup', () => {
        if (timer) {
            clearInterval(timer);
        }
    });
};

function* generator() {
    while (true) {
        yield 'hella';
    }
}
