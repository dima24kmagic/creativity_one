import { TweenLite, TimelineMax } from 'gsap';

export default (element, isExpanded) => {
  console.log(isExpanded);

  if (isExpanded) {
  } else {
    let tl = new TimelineMax();
    tl.to(element, 0.2, { transform: `translateY(-120px)` });
    tl.to(element, 0.75, { transform: `translateY(-170px) rotateX(-180deg)` });
    tl.to(element, 0.55, { transform: `translateY(0px) rotateX(-180deg)` });
    tl.fromTo(
      element,
      0.75,
      { background: `rgba(255,255,255,0.95)` },
      { borderRadius: '4px', position: 'absolute', background: `rgba(0,0,0, 0.95)` }
    );
    tl.to(element, 1, {
      transform: `translateY(0px) rotateX(-180deg)`,
      height: '100vh',
      width: '100vw',
      cursor: 'auto'
    });
    element.classList.add('circle--inner--expanded');
  }
};
