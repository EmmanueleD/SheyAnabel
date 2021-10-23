const firstBtn = document.querySelector("#btn-First-CTA");
const lastBtn = document.querySelector("#btn-Last-CTA")
const emmanuele = document.querySelector(".emmanuele");
const strawberry = document.querySelector("#strawberry");
const recover = document.querySelector("#recover");
const beachbar = document.querySelector("#beachbar");
const energize = document.querySelector("#energize");
const collagen = document.querySelector("#collagen");

firstBtn.addEventListener("click", function(){
  return window.open("https://form.jotform.com/212277811830049", '_blank').focus()
})

lastBtn.addEventListener("click", function(){
  return window.open("https://form.jotform.com/212277811830049", '_blank').focus()
})

emmanuele.addEventListener("click", function(){
  return window.open("https://www.emmanuele.xyz/", '_blank').focus()
})

strawberry.addEventListener("click", function(){
  return window.open("https://www.teambeachbody.com/shop/us/d/strawberry-shakeology-SHKStrawberry?referringRepId=2293408", '_blank').focus()
})

recover.addEventListener("click", function(){
  return window.open("https://www.teambeachbody.com/shop/us/d/BBPRecoverAllFlavors?referringRepId=2293408", '_blank').focus()
})

beachbar.addEventListener("click", function(){
  return window.open("https://www.teambeachbody.com/shop/us/d/beachbar-2-box-pack-BBar2BoxCombo?referringRepId=2293408", '_blank').focus()
})

energize.addEventListener("click", function(){
  return window.open("https://www.teambeachbody.com/shop/us/d/BBPEnergizeAllFlavors?referringRepId=2293408", '_blank').focus()
})

collagen.addEventListener("click", function(){
  return window.open("https://www.teambeachbody.com/shop/us/d/BeachbodyCollagenBoost?referringRepId=2293408", '_blank').focus()
})

function newFunction() {
  firstBtn.addEventListener("click", function () {
    return window.open("https://form.jotform.com/212277811830049", '_blank').focus();
  });
}
