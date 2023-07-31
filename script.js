function loco(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
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
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top 27%",
        end:"top 0",
        scrub:2,
        // markers:true

    }
})
var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    cursor.style.left =dets.x + 20 + "px"
    cursor.style.top =dets.y + 20 + "px"
})

tl.to("#page1 h1",{
    x:-100,   
},"anim")

tl.to("#page1 h2",{
    x:100
},"anim")

tl.to("#page1 video",{
    width:"90%"
},"anim")
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top -115%",
        end:"top -120%",
        scrub:3,
        // markers:true

    }
})
tl2.to("#main",{
    backgroundColor:"#fff"
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top -520%",
        end:"top -550%",
        scrub:3,
        // markers:true

    }
})
tl3.to("#main",{
    backgroundColor:"#0F0D0D"
})

var box = document.querySelectorAll("#box")
box.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width="470px"
        cursor.style.height="380px"
        cursor.style.borderRadius="0"
        cursor.style.backgroundImage =`url(${att})`
        
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.width="20px"
        cursor.style.height="20px"
        cursor.style.borderRadius="50%"
        cursor.style.backgroundImage =`none`
        
    })

})
var h4 = document.querySelectorAll("#nav h4 ,#nav #circle")
var pl = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        pl.style.display = "block"
        pl.style.opacity ="1"
    })
    elem.addEventListener("mouseleave",function(){
        pl.style.display = "none"
        pl.style.opacity ="0"
    })
})
var vdo = document.querySelector("#page1 video")
var csr = document.querySelector("#cusr")
vdo.addEventListener("mouseenter",function(elem){
    csr.style.left =elem.x + 0 + "px"
    csr.style.top =elem.y + 0 + "px"
    csr.style.opacity = "1"
    cursor.style.opacity = "0"
    vdo.addEventListener("mouseleave",function(){
        csr.style.opacity ="0"
        cursor.style.opacity ="1"
    })
})