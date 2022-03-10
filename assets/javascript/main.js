

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getMenu = $('.menu-on-tab-mob');
const menu = $('.nav-menu');
const overlayMenu = $('.overlay-menu');
const ticketBtn = $('.book-ticket');
const infoByTicket = $('.info');
const closeBtnTicket = $('.close-icon');
const preBtn = $('.customers-review__icon-left');
const nextBtn = $('.customers-review__icon-right');
const boxImages = $$('.customers-review__wrap');
const mainSlide =  $('.customers-review');
const mainSize = $('.customers-container__main');
const size = boxImages[0].clientWidth;
// const size = mainSize.clientWidth;



console.log(size)

const app = {

    handleEvent: function() {
        // xử lý menu on tab mobile
        if( getMenu) {

            getMenu.addEventListener('click', function() {
                menu.style.transform = 'translateX(0px)';
                overlayMenu.style.display = 'block';

            })

            overlayMenu.onclick = function() {
                menu.style.transform = 'translateX(-100%)';
                overlayMenu.style.display = 'none';
                //  infoByTicket.style.display = 'none';
                

            }
        }

        // Xử lý buy tickets
        ticketBtn.onclick = function() {
            infoByTicket.style.display = 'flex';
            overlayMenu.style.display = 'block';
            
        }

        // Xử lý đóng buytickets
        closeBtnTicket.onclick = function() {
            overlayMenu.style.display = 'none';
            infoByTicket.style.display = 'none';
            
        }

        // Xử lý sider
        
        let counter = 1;

        mainSlide.style.transform = `translateX(${-size * counter}px)`;
        
        nextBtn.addEventListener('click', function() {
            if(counter >= boxImages.length) return;
            mainSlide.style.transition = "transform 0.4s ease-in-out";
            counter++;
            mainSlide.style.transform = `translateX(${-size * counter}px)`
           
        });

        preBtn.addEventListener('click', function() {
            if(counter <= 0) return;
            mainSlide.style.transition = "transform 0.4s ease-in-out";
            counter--;
            mainSlide.style.transform = `translateX(${-size * counter}px)`
           
        });

        mainSlide.addEventListener('transitionend', function() {
            if(boxImages[counter].id === 'lastClone') {
                mainSlide.style.transition = "none";
                counter = boxImages.length - 2;
                mainSlide.style.transform = `translateX(${-size * counter}px)`

            }
            if(boxImages[counter].id === 'firstClone') {
                console.log(counter)
                mainSlide.style.transition = "none";
                counter = boxImages.length - counter;
                mainSlide.style.transform = `translateX(${-size * counter}px)`

            }
        })

    },


    start: function() {
        this.handleEvent();
    }
}

app.start();