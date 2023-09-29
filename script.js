gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#web"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#web" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#web", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#web").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();








// navigation button active class
let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbtns a');

window.onscroll = () => {
  Sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.navbtns a[href*=' + id + ']').classList.add('active');
      });
    } else { // Section is not in viewport
      // Remove the 'active' class from the corresponding navigation button
      document.querySelector('.navbtns a[href*=' + id + ']').classList.remove('active');
    }
  });

};
// ------------------------------------------------------------
 

// scroll reveal
ScrollReveal({ 
  reset: true,
  distance : '80px',
  duration : 2500,
  delay : 200
});
// section 1
ScrollReveal().reveal('.anft', { origin:'top'});
ScrollReveal().reveal('.bnft', { origin:'bottom'});
ScrollReveal().reveal('.navbtns', { origin:'left'});
ScrollReveal().reveal('.header', { origin:'top'});
ScrollReveal().reveal('.img-bg', { origin:'bottom'});
ScrollReveal().reveal('.bg-txt1', { origin:'left'});
ScrollReveal().reveal('.bg-txt2, .bg-txt3', { origin:'right'});
ScrollReveal().reveal('.ethcard', { origin:'top'});
ScrollReveal().reveal('.socialbtns li', { origin:'bottom'});
// ------------------------------------------------------------


// api to fetch coins price
var eth1 = document.getElementById("eth");
var btc  = document.getElementById("btc");
var eth  = document.getElementById("eth1");
var link = document.getElementById("link");
var dot  = document.getElementById("dot");
var atom = document.getElementById("atom");

var settings = {
  "async" : true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cavalanche%2Cpolkadot%2Cchainlink%2Ccosmos&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}
// first page
$.ajax(settings).done(function (response){
  console.log(response);
  eth1.innerHTML = response.ethereum.usd;
});

// market page
$.ajax(settings).done(function (response){
  btc.innerHTML = response.bitcoin.usd;
});
$.ajax(settings).done(function (response){
  eth.innerHTML = response.ethereum.usd;
});
$.ajax(settings).done(function (response){
  link.innerHTML = response.chainlink.usd;
});
$.ajax(settings).done(function (response){
  dot.innerHTML = response.polkadot.usd;
});
$.ajax(settings).done(function (response){
  atom.innerHTML = response.cosmos.usd;
});
// ------------------------------------------------------------




// Price Action

// for price 100k, 10k, 100, 100, 100 $
// $.ajax(settings).done(function (response) {
//   var usd1 = parseFloat(response.bitcoin.usd);
//   var prc1 = Math.round(usd1 * 0.003) + "px";
//   console.log(prc1);
//   var c1 = document.getElementById("prc1");
//   c1.style.width = prc1;

//   var usd2 = parseFloat(response.ethereum.usd);
//   var prc2 = Math.round(usd2 * 0.03) + "px";
//   console.log(prc2);
//   var c2 = document.getElementById("prc2");
//   c2.style.width = prc2;

//   var usd3 = parseFloat(response.chainlink.usd);
//   var prc3 = Math.round(usd3 * 3) + "px";
//   console.log(prc3);
//   var c3 = document.getElementById("prc3");
//   c3.style.width = prc3;

//   var usd4 = parseFloat(response.polkadot.usd);
//   var prc4 = Math.round(usd4 * 3) + "px";
//   console.log(prc4);
//   var c4 = document.getElementById("prc4");
//   c4.style.width = prc4;

//   var usd5 = parseFloat(response.cosmos.usd);
//   var prc5 = Math.round(usd5 * 3) + "px";
//   console.log(prc5);
//   var c5 = document.getElementById("prc5");
//   c5.style.width = prc5;
// });

// for price 50k, 5k, 50, 50, 50 $
$.ajax(settings).done(function (response) {
  var usd1 = parseFloat(response.bitcoin.usd);
  var prc1 = Math.round(usd1 * 0.006) + "px";
  console.log(prc1);
  var c1 = document.getElementById("prc1");
  c1.style.width = prc1;

  var usd2 = parseFloat(response.ethereum.usd);
  var prc2 = Math.round(usd2 * 0.06) + "px";
  console.log(prc2);
  var c2 = document.getElementById("prc2");
  c2.style.width = prc2;

  var usd3 = parseFloat(response.chainlink.usd);
  var prc3 = Math.round(usd3 * 6) + "px";
  console.log(prc3);
  var c3 = document.getElementById("prc3");
  c3.style.width = prc3;

  var usd4 = parseFloat(response.polkadot.usd);
  var prc4 = Math.round(usd4 * 6) + "px";
  console.log(prc4);
  var c4 = document.getElementById("prc4");
  c4.style.width = prc4;

  var usd5 = parseFloat(response.cosmos.usd);
  var prc5 = Math.round(usd5 * 6) + "px";
  console.log(prc5);
  var c5 = document.getElementById("prc5");
  c5.style.width = prc5;
});
// ------------------------------------------------------------












// GSAP ScrollTrigger
// -------------------------------section2---------------------
// bgimg
gsap.from(".sec2bg img",{
  y : 180,
  opacity : 0,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".sec2bg img",
    scroller : "#web",
    // markers : true,
    start : "top 65%",
    end : "top 30%",
    scrub : 2
  }
})
// title1
gsap.from(".sec2title h3",{
  x : 95,
  opacity : 0,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".sec2title h3",
    scroller : "#web",
    // markers : true,
    start : "top 70%",
    end : "top 25%",
    scrub : 2
  }
})
// title2
gsap.from(".sec2title h2",{
  x : -100,
  opacity : 0,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".sec2title h2",
    scroller : "#web",
    // markers : true,
    start : "top 80%",
    end : "top 35%",
    scrub : 2
  }
})
// dynamic nfts
gsap.from(".dynamic",{
  y : 100,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".dynamic",
    scroller : "#web",
    // markers : true,
    start : "top 110%",
    end : "top 88%",
    scrub : 2
  }
})


// -------------------------------section3----------------------
// head text
gsap.from(".sec3txt h2",{
  x : -250,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".sec3txt h2",
    scroller : "#web",
    // markers : true,
    start : "top 84%",
    end : "top 40%",
    scrub : 2
  }
})
// nfts
gsap.from("#nft2, #nft3, #nft4",{
  scale : 0,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : "#nft2, #nft3, #nft4",
    scroller : "#web",
    // markers : true,
    start : "top 110%",
    end : "top 62%",
    scrub : 2
  }
})
// enititybox
gsap.from(".sec3bg",{
  x : 80,
  // y : -150,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : "#nft2, #nft3, #nft4",
    scroller : "#web",
    // markers : true,
    start : "top 100%",
    end : "top 70%",
    scrub : 2
  }
})
// entity
gsap.from(".ethbox",{
  opacity : 0,
  // x : 80,
  x : -80,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : "#nft2, #nft3, #nft4",
    scroller : "#web",
    // markers : true,
    start : "top 100%",
    end : "top 65%",
    scrub : 2
  }
})
// entity name
gsap.from(".sec3nftname h2",{
  y : 100,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".sec3nftname",
    scroller : "#web",
    // markers : true,
    start : "top 75%",
    end : "top 50%",
    scrub : 2
  }
})
// artist
gsap.from(".artist .imgcvr , .artisttxt h2",{
  x : -100,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".artisttxt",
    scroller : "#web",
    // markers : true,
    start : "top 100%",
    end : "top 85%",
    scrub : 2
  }
})

// -------------------------------section4-----------------------

// price bars
gsap.from(".cryptobars .cryptobar",{
  x : 150,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".cryptobars .cryptobar",
    scroller : "#web",
    // markers : true,
    start : "top 65%",
    end : "top 10%",
    scrub : 2
  }
})
// crypto boxes
gsap.from(".cryptoboxes .cryptobox",{
  x : -150,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".cryptoboxes .cryptobox",
    scroller : "#web",
    // markers : true,
    start : "top 65%",
    end : "top 10%",
    scrub : 2
  }
})
// nftfour
gsap.from(".frnft",{
  y : 150,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".frnft",
    scroller : "#web",
    // markers : true,
    start : "top 80%",
    end : "top 35%",
    scrub : 2
  }
})
// sec4bgtext
gsap.from(".sec4txt",{
  y : -150,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".sec4txt",
    scroller : "#web",
    // markers : true,
    start : "top 50%",
    end : "top 30%",
    scrub : 2
  }
})

// -------------------------------section4-----------------------

// bgtxt
gsap.from(".bgtxt5",{
  y : 150,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".bgtxt5",
    scroller : "#web",
    // markers : true,
    start : "top 80%",
    end : "top 50%",
    scrub : 2
  }
})
// footer
gsap.from(".footer",{
  y : 10,
  opacity : 0,
  stagger : 0.2,
  ease: "power2.out",
  scrollTrigger : {
    trigger : ".footer",
    scroller : "#web",
    // markers : true,
    start : "top 100%",
    end : "top 95%",
    scrub : 2
  }
})