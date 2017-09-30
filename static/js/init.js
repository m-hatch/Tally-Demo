// initialize tweens
(function($) {
'use strict';

      $(document).ready(function() {
            // variables
            var animationsController = new ScrollMagic();
            var $window = $(window),
                  windowHeight = $window.innerHeight(),
                  windowWidth = $window.width(),
                  phoneWidth = $('#phone2').width(),
                  phoneHeight = $('#phone2').innerHeight(),
                  wrapperWidth = $('.wrapper').width(),
                  phone1El = $('#phone1'),
                  phone2El = $('#phone2');

            // recalculate on resize
            window.onresize = function(event) {
                  windowHeight = $window.innerHeight();
                  windowWidth = $window.width();
                  wrapperWidth = $('.wrapper').width();
            };

      // Scene 1 =================================

            /* 
            *
            Up to you
            *
            */

            // pin panel-1 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-1', duration: 1800}) 
                  .setPin('#panel-1', {pushFollowers: true})
                  .addTo(animationsController);

            // title fade out
            new ScrollScene({triggerHook: "onLeave", triggerElement: '#panel-1', duration: 1800})
                  .setTween(TweenMax.to('#p1-content', 1, {
                        autoAlpha: 0
                  }))
                  .addTo(animationsController);

            // change background color (necessary for refresh)
            /*new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-1'})
                  .setTween(TweenMax.to('#color', 0, {
                        backgroundColor: "#6dd9d1"
                  }))
                  .addTo(animationsController);*/

      // ======================== pin phone1 container ====================

            // pin phone 1
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#phone-container-1', duration: (windowHeight * 8 + 7200)})  //unpin phone: panels 1-4 (height + pin)
                  .setPin('#phone-container-1', {pushFollowers: false})
                  .addTo(animationsController);

      // Scene 2 ==================================

            // pin panel-2 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-2', duration: (windowHeight + 800)}) 
                  .setPin('#panel-2', {pushFollowers: true})
                  .addTo(animationsController);

            // slide tween
            var slideTween = new TimelineMax()
                  // phone shake
                  .add(TweenMax.from(phone1El, 2, {bottom: "-=" + windowHeight, autoAlpha: 0}))
                  .add(TweenMax.to(phone1El, 0.3, {bottom: "-=" + 30}));

            // build slide scene
            new ScrollScene({triggerHook: "onEnter", triggerElement: "#panel-2", duration: 2000})
                  .setTween(slideTween)
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onEnter', triggerElement: '#panel-2'})
                  .setTween(TweenMax.to('#color', 0, {
                        backgroundColor: "#6dd9d1"
                  }))
                  .addTo(animationsController);

      // Scene 3 ==================================

            // pin panel-3 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-3', duration: (windowHeight + 800)}) 
                  .setPin('#panel-3', {pushFollowers: true})
                  .addTo(animationsController);

            // shake tween
            var shakeTween = new TimelineMax()
                  // phone shake
                  .add(TweenMax.to(phone1El, 0.3, {rotation: -3}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: 0}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: 3}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: 0}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: -3}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: 0}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: 3}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: 1.5}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: -1.5}))
                  .add(TweenMax.to(phone1El, 0.3, {rotation: 0}));

            // build shake scene
            new ScrollScene({triggerHook: "onCenter", triggerElement: "#panel-3", duration: 1000})
                  .setTween(shakeTween)
                  .addTo(animationsController);

      // Scene 4 ==================================

            // pin panel-4 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-4', duration: (windowHeight + 3600)}) 
                  .setPin('#panel-4', {pushFollowers: true})
                  .addTo(animationsController);

            // steps tween
            var stepsTween = new TimelineMax()
                  .add([
                        TweenMax.from("#breakfast img", 8, {delay: 5, top: "-150", right: "-300"}),
                        TweenMax.from("#receipt img", 8, {delay: 5, top: "150", right: "-300"}),
                        TweenMax.from("#ipad img", 8, {delay: 5, top: "150", left: "-300"}),
                        TweenMax.from("#coins img", 8, {delay: 5, top: "-150", left: "-300"})
                  ])
                  .add([
                        TweenMax.to("#breakfast p", 0.1, {autoAlpha: 1}),
                        TweenMax.to("#receipt p", 0.1, {autoAlpha: 1}),
                        TweenMax.to("#submit", 0.1, {autoAlpha: 1}),
                        TweenMax.to("#ipad p", 0.1, {autoAlpha: 1}),
                        TweenMax.to("#coins p", 0.1, {autoAlpha: 1}),
                        TweenMax.to("#phone1 .steps-arrow", 0.1, {autoAlpha: 1})
                  ])
                  .add([
                        TweenMax.to("#breakfast", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#arrow1", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#receipt", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#arrow2", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#submit", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#arrow3", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#ipad", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#arrow4", 10, {delay: 10, autoAlpha: 0}),
                        TweenMax.to("#coins", 10, {delay: 10, autoAlpha: 0})
                  ]);

            // build steps scene
            new ScrollScene({triggerHook: "onEnter", triggerElement: "#panel-4", duration:4000})
                  .setTween(stepsTween)
                  .addTo(animationsController);

            // unpin phone

      // Scene 5 =================================

            // pin panel-5 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-5', duration: (windowHeight * 2 + 2000)}) 
                  .setPin("#panel-5", {pushFollowers: true})
                  .addTo(animationsController);

            // wipe 1 tween
            var wipe1Tween = new TimelineMax()
                  .add(TweenMax.to('#wipe-1', 1, {bottom: "0"}))
                  .add([
                        TweenMax.from('.expense-sheet', 2, {autoAlpha: 0, bottom: "-=" + windowHeight}),
                        TweenMax.from('.report h3', 2, {autoAlpha: 0, rotationX: 90}),
                        TweenMax.from('.pen', 3, {delay: 1, right: "-=" + windowWidth})
                  ]);
                  
            // build wipe 1 scene
            new ScrollScene({triggerHook: "onLeave", triggerElement: "#panel-5", duration: (windowHeight * 2 + 1600)})
                  .setTween(wipe1Tween)
                  .addTo(animationsController);

      // Scene 6 =================================

            // pin panel-6 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-6', duration: (windowHeight + 2000)}) 
                  .setPin("#panel-6", {pushFollowers: true})
                  .addTo(animationsController);

            // stopwatch
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-6', duration: windowHeight + 1600})
                  .setTween([
                        TweenMax.from('.stop-watch', 3, {delay: 2, autoAlpha: 0}),
                        TweenMax.from('.timer h3', 2, {autoAlpha: 0, rotationX: 90})
                  ])
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onEnter', triggerElement: '#panel-6', duration: 1})
                  .setTween(TweenMax.to('#color', 1, {
                        backgroundColor: "#bae674"
                  }))
                  .addTo(animationsController);

      // Scene 7 ==================================

            // pin panel-7 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-7', duration: (windowHeight + 2000)}) 
                  .setPin('#panel-7', {pushFollowers: true})
                  .addTo(animationsController);

            // lunch
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-7', duration: windowHeight + 1600})
                  .setTween([
                        TweenMax.from('.platter', 3, {delay: 2, autoAlpha: 0}),
                        TweenMax.from('.lunch h3', 2, {autoAlpha: 0, rotationX: 90})
                        //TweenMax.from('.fork', 3, {delay: 2, autoAlpha: 0, left: "-=" + windowWidth})
                  ])
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-7', duration: 800})
                  .setTween(TweenMax.to('#color', 0.5, {
                        backgroundColor: "#d6df68"
                  }))
                  .addTo(animationsController);

      // Scene 8 ==================================

            // pin panel-8 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-8', duration: (windowHeight + 2000)}) 
                  .setPin('#panel-8', {pushFollowers: true})
                  .addTo(animationsController);

            // coffee
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-8', duration: windowHeight + 1600})
                  .setTween([
                        TweenMax.from('.coffee', 2, {autoAlpha: 0, bottom: "-=" + windowHeight}),
                        TweenMax.from('.coffeebox h3', 2, {autoAlpha: 0, rotationX: 90}),
                        TweenMax.from('.coffee-beans', 3, {delay: 2, autoAlpha: 0})
                  ])
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-8', duration: 800})
                  .setTween(TweenMax.to('#color', 0.5, {
                        backgroundColor: "#ecd05c"
                  }))
                  .addTo(animationsController);

            $('.coffee-beans').hover(function(){     
                  $('#bean-1').addClass('bounce1'),
                  $('#bean-2').addClass('bounce2'),
                  $('#bean-3').addClass('bounce3');   
            },     
            function(){    
                  $('#bean-1').removeClass('bounce1'),
                  $('#bean-2').removeClass('bounce2'),
                  $('#bean-3').removeClass('bounce3'); 
            });

      // ====================== pin phone2 container ====================

            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-9', duration: (windowHeight * 12 + 9000)})  //unpin phone: panels 11-14
                  .setPin('#phone-container-2', {pushFollowers: false})
                  .addTo(animationsController);

      // Scene 9 ==================================

            // pin panel-9 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-9', duration: (windowHeight * 2 + 3000)}) 
                  .setPin('#panel-9', {pushFollowers: true})
                  .addTo(animationsController);

            // wipe 2 tween
            var wipe2Tween = new TimelineMax()
                  .add([
                        TweenMax.from('.bowling-pins', 3, {delay: 1, autoAlpha: 0}),
                        TweenMax.from('.bowling h3', 8, {autoAlpha: 0, rotationX: 90}),
                        TweenMax.from('.bowling-ball', 8, {delay: 2, right: "-=" + windowWidth, rotation:1440})
                  ])
                  .add([
                        TweenMax.to('#pin1', 3, {delay: 0, rotation: -90}),
                        TweenMax.to('#pin2', 2, {delay: 2, rotation: -90}),
                        TweenMax.to('#pin3', 3, {delay: 1, rotation: -90})
                  ])
                  .add([
                        TweenMax.to('#pin1', 3, {delay: 0, rotation: -50}),
                        TweenMax.to('#pin2', 4, {delay: 3, rotation: -45}),
                        TweenMax.to('#pin3', 3, {delay: 1, rotation: -80})
                  ])
                  .add([
                        TweenMax.to('#pin1', 3, {delay: 0, rotation: -90}),
                        TweenMax.to('#pin2', 4, {delay: 3, rotation: -90}),
                        TweenMax.to('#pin3', 3, {delay: 1, rotation: -90})
                  ])
                  .add(TweenMax.to('#wipe-2', 8, {delay: 5, bottom: "0"}))
                  .add(TweenMax.to(phone2El, 8, {delay: 5, autoAlpha: 1}));
                  
            // build wipe 2 scene
            new ScrollScene({triggerHook: "onLeave", triggerElement: "#panel-9", duration: windowHeight * 2 + 2600})
                  .setTween(wipe2Tween)
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-9'})
                  .setTween(TweenMax.to('#color', 0.5, {
                        backgroundColor: "#ffc950"
                  }))
                  .addTo(animationsController);

      // Scene 10 =================================

            // pin panel-10 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-10', duration: windowHeight + 1200}) 
                  .setPin('#panel-10', {pushFollowers: true})
                  .addTo(animationsController);

            // set first phone screen
            new ScrollScene({triggerHook: 'onEnter', triggerElement: '#panel-10', duration: 1})
                  .setTween(TweenMax.to('.phone-mobile', 1, {
                        autoAlpha: 1
                  }))
                  .addTo(animationsController);

            // phone to right
            new ScrollScene({triggerHook: "onLeave", triggerElement: '#panel-10', duration: windowHeight + 1200})
                  .setTween(TweenMax.to(phone2El, 1, {
                        delay: 1, right: "-=" + (wrapperWidth/2 - phoneWidth/2), ease: Sine.easeInOut
                  }))
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onEnter', triggerElement: '#panel-10', duration: 1})
                  .setTween(TweenMax.to('#color', 1, {
                        backgroundColor: "#73d2cb"
                  }))
                  .addTo(animationsController);

      // Scene 11 =================================
            
            // pin panel-11 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-11', duration: (windowHeight + 1200)})
                  .setPin('#panel-11', {pushFollowers: true})
                  .addTo(animationsController);

            // goMobile
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-11', duration: windowHeight})
                  .setTween([
                        //TweenMax.from(phone2El, 1, {right: "-=" + windowWidth}),
                        TweenMax.from('#mobile', 1, {left: "-=" + windowWidth})
                  ])
                  .addTo(animationsController);

      // Scene 12 ==================================

            // pin panel-12 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-12', duration: (windowHeight + 1200)})
                  .setPin('#panel-12', {pushFollowers: true})
                  .addTo(animationsController);

            // receipts
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-12', duration: windowHeight})
                  .setTween([
                        TweenMax.from('#receipts', 1, {left: "-=" + windowWidth}),
                        TweenMax.to('.phone-mobile', 1, {autoAlpha: 0}),
                        TweenMax.to('.phone-receipts', 1, {autoAlpha: 1})
                  ])
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-12', duration: 800})
                  .setTween(TweenMax.to('#color', 0.5, {
                        backgroundColor: "#59cac2"
                  }))
                  .addTo(animationsController);

      // Scene 13 ==================================

            // pin panel-13 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-13', duration: (windowHeight + 1200)})
                  .setPin('#panel-13', {pushFollowers: true})
                  .addTo(animationsController);

            // phone rotate
            new ScrollScene({triggerHook: "onCenter", triggerElement: '#panel-13', duration: windowHeight})
                  .setTween(TweenMax.to(phone2El, 1, {
                        //top: "+=" + (windowHeight * 0.6 - phoneHeight), 
                        right: "+=" + (wrapperWidth - phoneWidth), rotation: -360
                  }))
                  .addTo(animationsController);

            // limits
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-13', duration: windowHeight})
                  .setTween([
                        TweenMax.from('#limits', 1, {right: "-=" + windowWidth}),
                        TweenMax.to('.phone-receipts', 1, {autoAlpha: 0}),
                        TweenMax.to('.phone-limits', 1, {autoAlpha: 1})
                  ])
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-13', duration: 800})
                  .setTween(TweenMax.to('#color', 0.5, {
                        backgroundColor: "#4dc6bd"
                  }))
                  .addTo(animationsController);

      // Scene 14 ==================================

            // pin panel-14 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-14', duration: (windowHeight + 1200)})
                  .setPin('#panel-14', {pushFollowers: true})
                  .addTo(animationsController);

            // work
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-14', duration: windowHeight})
                  .setTween([
                        TweenMax.from('#work', 1, {right: "-=" + windowWidth}),
                        TweenMax.to('.phone-limits', 1, {autoAlpha: 0}),
                        TweenMax.to('.phone-work', 1, {autoAlpha: 1})
                  ])
                  .addTo(animationsController);

            // change background color
            new ScrollScene({triggerHook: 'onLeave', triggerElement: '#panel-14', duration: 800})
                  .setTween(TweenMax.to('#color', 0.5, {
                        backgroundColor: "#3fc2b8"
                  }))
                  .addTo(animationsController);

            // unpin phone

      // Scene 15 ==================================

            // pin panel-15 container 
            new ScrollScene({triggerHook: "onLeave",triggerElement: '#panel-15', duration: (windowHeight + 3000)}) 
                  .setPin("#panel-15", {pushFollowers: true})
                  .addTo(animationsController);

            // features tween
            var featTween = new TimelineMax()
                  .add([
                        TweenMax.to("#track", .6, {autoAlpha: 1}),
                        TweenMax.to("#add", .6, {autoAlpha: 1}),
                        TweenMax.to("#export", .6, {autoAlpha: 1})
                  ])
                  .add([
                        TweenMax.to("#group", .6, {autoAlpha: 1}),
                        TweenMax.to("#chat", .6, {autoAlpha: 1})
                  ]);

            // build steps scene
            new ScrollScene({triggerHook: "onLeave", triggerElement: "#panel-15", duration: 2000})
                  .setTween(featTween)
                  .addTo(animationsController);
      
            // change background color
            new ScrollScene({triggerHook: 'onCenter', triggerElement: '#panel-15'})
                  .setTween(TweenMax.to('#color', 0.5, {
                        backgroundColor: "#f2f2f2"
                  }))
                  .addTo(animationsController);

      });

})(jQuery);
