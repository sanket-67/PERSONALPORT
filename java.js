var tl = gsap.timeline()

tl.fromTo(".load", { opacity: 0 }, {
    opacity: 1,
    duration: 1,
    delay: 1,
});
tl.to(".text", { opacity: 0 });
tl.fromTo(".name", { y: 50, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 3,
});
tl.to(".load", { y: -1200 });
tl.to(".text", { opacity: 0, y: -1200, width: "0", height: "0" });
tl.from("#logo", { x: -40, opacity: 0, duration: 0.3 });
tl.from(".nav-menu ul li a", { x: -40, duration: 0.4, stagger: 0.3, opacity: 0 });
tl.from(".search", { x: -40, duration: 0.4, opacity: 0 });
tl.from(".bar1", { x: -40, duration: 1, opacity: 0 });
tl.to(".main-co h2", { fontWeight: "999", x: -200, duration: 0.4, opacity: 1 });
tl.from(".blue", { y: -1000, duration: 0.8, delay: 0.3, opacity: 0 });
tl.from(".red", { y: -1000, duration: 0.8, opacity: 0 });
tl.to(".main-co h4", { x: 600, duration: 0.8, opacity: 1 });
tl.to("#img1", { y: 1000, duration: 0.8, opacity: 1 });
tl.from("#developer-role", { duration: 0.8, x: -1100 });
tl.from("#linked", { y: -1000, duration: 1.5 });
tl.from("#git", { y: -1000, duration: 2 });
tl.from("#insta", { y: -1000, duration: 2.5 });
tl.from(".bar",{ x:-1550, duration:0.8 ,stagger: 0.3})
tl.from("#down", { y: 30, duration: 0.3, yoyo: true, repeat: -1, opacity: 0 });

if (window.innerWidth <= 993) {
    // Specific animations for smaller screens
    tl.to(".main-co h4", { x: 300, duration: 2.5, opacity: 1 });
    tl.to("#img1", { y: 500, duration: 2.5, opacity: 1 });
}
