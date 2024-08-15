gsap.registerPlugin("ScrollTrigger");



let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: 'circle',
        pin: true, // pin the trigger element while active // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    
    }
});

tl.to('.circle', { 
    scale: 10.3, 
    rotation: 45
})
 
 tl.from(".headerOne",{
    autoAlpha: 1
 }) 
 tl.to(".headerOne",{
    autoAlpha: 0
 })
 tl.from(".headerTwo",{
    autoAlpha: 0
 }) 
 tl.to(".headerTwo",{
    autoAlpha: 1
 })


 tl.from('.rightBlock',{
    yPercent: 10,
    autoAlpha: 1
 })
 tl.to('.rightBlock',{
    yPercent: 1.1,
    autoAlpha: 0
 })

 tl.from(document.querySelectorAll(".block"),{
    autoAlpha: 0
 })
