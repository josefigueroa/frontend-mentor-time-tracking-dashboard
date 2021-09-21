import { Tracking } from "./modules/tracking";

import "../scss/style.scss";

const tracking = new Tracking();
const nav = document.querySelector('.profile__list');

nav.addEventListener('click', (e) => {
  if(e.target.className === 'profile__link'){
    e.preventDefault();
    let target = e.target;
    let cat = target.dataset.cat;

    tracking.activeStatus(target);
    tracking.trackingState(cat);
  }
})

window.addEventListener('DOMContentLoaded', () => { 
  let navLinkActive = document.querySelector('.profile__link--active');
  let cat = (navLinkActive) ? navLinkActive.dataset.cat : 'weekly';
  
  tracking.trackingState(cat);
})