console.log("JavaScript About is running.");

const videos = document.querySelectorAll(".about .video  .controls .youtube--link ") //select all span buttons below youtube video
console.log(videos);

videos.forEach (btn => { //converts every span into a btn
    btn.onclick = () => { //when click some btn, do
        let newSrc = btn.getAttribute("data-src"); //gets the src from the span data-src
        document.querySelector(".about .video .youtube").src = newSrc; //changes the video src for the new obtainet above
    };
}
);