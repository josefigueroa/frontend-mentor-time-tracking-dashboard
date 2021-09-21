import elipsisImg from '../../img/icon-ellipsis.svg';
import data from '../../core/data.json'

export class Tracking {
  constructor(){
    this.targetCards = document.querySelector('.card__group');
    this.label = {
      daily: 'Yesterday',
      weekly: 'Last Week',
      monthly: 'Last Month',
    }
  }

  activeStatus(target){
    let linkActive = 'profile__link--active';
    
    document.querySelectorAll('.profile__link').forEach(item =>{
      item.classList.remove(linkActive);
    });

    target.classList.add(linkActive);    
  }
  
  trackingState(cat){
    let htmlTemplate= '';

    data.forEach(item =>{
      let timeframe = item.timeframes[cat];
      let classItem = item.title.toLowerCase();

      if (item.title === 'Self Care'){
        classItem = 'self-care';
      }

      htmlTemplate +=  `
          <div class="card card--${classItem}">
            <div class="card__body">
              <div class="card__timeframe">
                <h2 class="card__title">${item.title}</h2>
                <figure class="card__img">
                  <img width="21" height="5" src="${elipsisImg}" alt="Icon elipsis">
                </figure>
              </div>
            <div class="card__time">
              <span class="card__current-time">${timeframe.current}hrs</span>
              <span class="card__prev-time">${this.label[cat]} - ${timeframe.previous}hrs</span>
            </div>
          </div>
        </div>    
      `;

      this.targetCards.innerHTML = htmlTemplate;

      this.cardsDisplay();
    })
  }

  cardsDisplay(){
    let cards = document.querySelectorAll('.card');    
    let index = 0;

    let cardsShowing = setInterval(() => {
      if(typeof cards[index] !== 'undefined'){    
        cards[index].style.opacity = 1;
        index++
      }else{
        clearInterval(cardsShowing);
      }     
    }, 80);  
  }
}