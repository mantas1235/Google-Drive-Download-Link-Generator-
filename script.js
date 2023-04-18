"use strict"


//variables


const gLink = document.getElementById("glink")
const btn = document.getElementById("btn")
const downloadLink = document.getElementById("download-link")

btn.addEventListener("click", generateLink)

function generateLink(e) {
    e.preventDefault();
    // console.log(gLink.value);

    const gLinkValue = gLink.value;
    const confirmLink = gLink.value.includes("https://docs.google.com/document/d/");

    if (confirmLink === true) {
        const getDownloadLink = gLinkValue.replace("https://docs.google.com/document/d/", "https://drive.google.com/uc?export=download&id=").replace("/edit?usp=share_link", "")

        downloadLink.value = getDownloadLink

        function copyText(target) {
            if (target.value == "") {
                alert("Please generate a download link")
            }

            else {
                target.select()
                navigator.clipboard.writeText(target.value).then(() => {
                    alert("Link has copied to clipbord")
                })
            }
        }

        const copyBtn = document.querySelector(".copy")

        copyBtn.addEventListener("click", () => {
            return copyText(downloadLink)
        })


        //EMBED AUDIO FUNCTION


        const audio1 = '<audio width="300" height="32" controls="controls" src="'

        const audio2 = '" type=audio/mp3"></audio>'

        const embedAudio = document.getElementById('embed-audio');

        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`

        // console.log(embedAudio);

        //COPY AUDIO EMBED CODE

        const copyAudio = document.querySelector(".copy-audio")

        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio)
        })


        //EMBED VIDEO
        const getVideoLink = glink.value.replace("/edit?usp=share_link", "")
        const video1 = '<iframe src "'
        const video2 = '/preview" width = "560" height="315"></iframe>'


        const embedVideo = document.getElementById("embed-video")

        embedVideo.value = `${video1}${getVideoLink}${video2}`;


        const copyVideo = document.querySelector(".copy-video")

        copyVideo.addEventListener("click", () => {
            return copyText(embedVideo)
        })

    }
    else {
        alert("Please enter a Google Drive file link")
    }



}

