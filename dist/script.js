// Initializes the Locomotive Scroll and ScrollTrigger plugins.
var loco= function(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco()




var tl = gsap.timeline();

// This function initializes the loader animation.
var loader= function(){
  gsap.from(".timer", {
    opacity: 0,
    duration: 1,
  })
    
  
  tl.from(".load h1, .load h4", {
    y: "150%",
    opacity: 0,
    duration: 1,
    stagger: .2,
  })
  
  tl.from("p",{
    opacity: 0,
    delay: .2,
    duration: 1,
  })
  
  h2 = document.querySelector(".load h2");
  var count = 0;
  
  /**
  * @description This function sets up a counter that increments every 30 milliseconds and updates the innerHTML of an h2 element with the current count value.
  * @returns {number} The ID of the interval timer.
  */
  var counter = setInterval(() => {
    count++;
    if (count < 100)
      h2.innerHTML = count;
    else
      h2.innerHTML = 100;
    console.log("setInterval is prossecing")
  }, 25)
  
  /**
  * Clears the interval after a specified delay.
  * @param {number} delay - The delay in milliseconds before clearing the interval.
  */
  setTimeout(() => {
    clearInterval(counter);
  
  }, 2500);
  
  
  tl.to(".load h1, .timer,.load #now, p", {
    opacity: 0,
    duration: .4,
    delay: 1,
    stagger: -0.2,
  })
  
  tl.to(".loader", {
    y: "-100%",
    ease: "power4.out",
    duration: 1,
    delay: 0.5,
  });
}
// loader()




tl.from(".page1 h1",{
  opacity: 0,
  y: "150%",
  duration: 1,
  delay: -1,
  stagger: 0.05,
})

mouse.makeMagnet(".magnet-target", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});