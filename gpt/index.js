


const button = document.getElementById("button");
const websites = [
    


  
  "zoomquilt.org",
  "internetlivestats.com",
  "supercook.com",
  "maninthedark.com",
  "musiclab.chromeexperiments.com",
  "littlealchemy2.com",
  "soap2day.ac",
  "webgi-jewelry.vercel.app",
  "pixelthoughts.co",
  "lacquerlacquer.com",
  "stars.chromeexperiments.com",
  "omfgdogs.com",
  "webxr-sneakers.lusion.co",
    "staggeringbeauty.com",
    "patatap.com",
    "en.akinator.com",
    "eyebleach.me",
    "incredibox.com",
  "thisisnotajumpscare.com",
  "docutyper.com",
  "neal.fun",
  "cat-bounce.com",
  "longdogechallenge.com",
  "cursoreffects.com",
  "smashthewalls.com",
  "radio.garden",
  "10minutemail.com",
  "futureme.org",
  "boredbutton.com",
  "eelslap.com",
  "everydayim.com",
  "papertoilet.com",
  "2050.earth",
    "pointerpointer.com",
    "spend-elon-fortune.com",
    "quickdraw.withgoogle.com",
    "maninthedark.com",
    "musiclab.chromeexperiments.com",
    "littlealchemy2.com",
    "soap2day.ac",
    "webgi-jewelry.vercel.app",
    "pixelthoughts.co",
    "lacquerlacquer.com",
    "stars.chromeexperiments.com",
    "trypap.com",
    "heeeeeeeey.com",
    "neave.tv",
    "webamp.org",
    "funswitcher.com",
    "weavesilk.com",
    "typedrummer.com",
   

  ];







button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * websites.length);
  const randomWebsite = websites[randomIndex];
  window.open(`http://${randomWebsite}`, "_blank");
});








