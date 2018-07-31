import { TweenLite } from 'gsap';

export default element => {
  //   TweenLite.to(element, 0.75, { transform: `translateY(-250px)` });
  //   TweenLite.to(element, 0.75, { transform: `translatey(0px) rotateX(-180deg)`, delay: 0.75 });
  //   TweenLite.fromTo(
  //     element,
  //     0.75,
  //     { transform: `translateY(-250px)`, width: '100%', height: '100%' },
  //     { transform: `translateY(0px) rotateX(179deg)` }
  //   );
  //   TweenLite.to(element, 0.75, { transform: `scale(5)` });
  //   TweenLite.fromTo(element, 1, { borderRadius: '100%' }, { borderRadius: '2px', delay: 1.5 });
  TweenLite.to(element, 1, { transform: `translateY(-250px)` });
//   TweenLite.fromTo(element, 1, { transform: `translateY(-250px)`, delay: 1 }, {marginLeft: 55, delay: 1});
};
