import { TweenLite, TimelineMax, Power0, Elastic, Power2, Power4 } from 'gsap';

export default (element, expanded, secretKey, cb) => {
  console.log(expanded, secretKey);
  if (!expanded && secretKey) {
    //Animating element if secret key was founded
    let tl = new TimelineMax();
    tl.to(element, 0.2, { transform: `translateY(-120px)` });
    tl.to(element, 0.75, { transform: `translateY(-170px) rotateX(-180deg)` });
    tl.to(element, 0.55, { transform: `translateY(0px) rotateX(-180deg)` });
    tl.fromTo(
      element,
      0.75,
      { background: `rgba(255,255,255,0.95)` },
      {
        borderRadius: '4px',
        position: 'absolute',
        background: `rgba(0,0,0, 0.95)`
      }
    );
    tl.to(element, 1, {
      transform: `translateY(0px) rotateX(-180deg)`,
      height: '100vh',
      width: '100vw',
      cursor: 'auto'
    });

    if (cb) cb()
  } else {
    //Animating element if secret key not founded
    let outterCircle = document.querySelector('.circle__orbit');
    let tl = new TimelineMax();
    tl.to(element, 0.45, {
      transform: `translateY(-120px)`,
      ease: Power3.easeInOut
    });
    tl.to(outterCircle, 2, { rotation: '+=360_cw', ease: Power2.easeInOut });
    tl.to(element, 0.45, {
      transform: `translateY(0px)`,
      ease: Power3.easeInOut
    });
    tl.to(element, 0.1, { border: '1px solid #ff008a', transform: 'translateX(4px)' });
    tl.to(element, 0.1, { border: '1px solid #ff008a', transform: 'translateX(-4px)' });
    tl.to(element, 0.1, { border: '1px solid #ff008a', transform: 'translateX(4px)' });
    tl.to(element, 0.1, { border: '1px solid #ff008a', transform: 'translateX(-4px)' });
    tl.to(element, 0.1, { border: '0px solid white', transform: 'translateX(0px)' });
  }
};
