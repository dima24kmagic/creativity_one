import {TweenMax, Power4} from 'gsap';

export const navs = () => {
    let navs = document.querySelectorAll('.nav--item');
    for (let nav of navs) {
        nav.addEventListener('mouseenter', () => enter(nav));
        nav.addEventListener('mouseleave', () => leave(nav));
    }
};

let enterFrom = {transform: `translateX(-101%)`, ease: Power4.easeIn};
let enterTo = {transform: `translateX(0%)`, ease: Power4.easeOut};

let leaveFrom = {transform: `translateX(0%)`, ease: Power4.easeIn};
let leaveTo = {transform: `translate(101%)`, ease: Power4.easeOut};

let duration = .7;

const enter = el => {
    let bg = el.childNodes[1];
    TweenMax.fromTo(bg, duration, enterFrom, enterTo)
};

const leave = el => {
    let bg = el.childNodes[1];
    TweenMax.fromTo(bg, duration, leaveFrom, leaveTo)
};