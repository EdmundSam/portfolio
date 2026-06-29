import { musicManager } from "../entities/musicManager.js";

export function schoolPage(k) {
    musicManager.play('./assets/Audio/School.wav');

    const schoolOverlay = document.createElement("div");
    schoolOverlay.id = "school-overlay";
    schoolOverlay.style.position = "fixed";
    schoolOverlay.style.top = "0";
    schoolOverlay.style.left = "0";
    schoolOverlay.style.width = "100%";
    schoolOverlay.style.height = "100%";
    schoolOverlay.style.background = "url('./assets/Images/Desk.png') no-repeat center center";
    schoolOverlay.style.backgroundSize = "cover";
    schoolOverlay.style.display = "flex";
    schoolOverlay.style.justifyContent = "center";
    schoolOverlay.style.alignItems = "center";
    schoolOverlay.style.zIndex = "999";

    schoolOverlay.innerHTML = `
        <!-- Close button -->
        <button 
            id="close-school" 
            style="position:absolute; 
            top:20px; 
            right:20px; 
            width:40px; 
            height:40px; 
            border-radius:50%; 
            font-size:22px; 
            font-weight:bold; 
            cursor:pointer;"
            >✕
        </button>

        <!-- Resume Container -->
        <div
            style="
                position: relative;
                width: 25%;
                aspect-ratio: 8.5 / 11;
                display: flex;
                justify-content: center;
                align-items: center;
            "
        >
            <!-- Paper Background -->
            <img 
                src="./assets/Images/ResumePaper.png" 
                alt="Resume Paper"
                style="
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: contain;
                "
            >

            <!-- Resume Image -->
            <a
                href="./assets/Images/Resume.pdf"
                target="_blank"
                style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 93%;
                    height: 95%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
            >
                <img
                    src="./assets/Images/ResumeImage.png"
                    alt="Resume Preview"
                    style="
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        display: block;
                    "
                >
            </a>
        </div>

        <!-- Credits -->
        <div style="
                position: fixed;
                bottom: .5vh;
                left: .5vw;
                color: white;
                font-family: 'Pokemon';
                font-size: 1.25vh;
                padding: .5vh .5vw;
                border-radius: 1vh;
                white-space: normal;
                word-wrap: break-word;
                background: rgba(0, 0, 0, 0.5);
            ">
                Custom Music: 
                <a href="https://www.youtube.com/@ronjoshtin" target="_blank" style="
                    color: #00d0ff;
                    text-decoration: underline;
                    cursor: pointer;
                ">
                Aaron Hipolito<br>
                </a>
                Art: ME!
        </div>
    `;

    document.body.appendChild(schoolOverlay);

    // Close Button
    document.getElementById("close-school").addEventListener("click", () => {
        document.body.removeChild(schoolOverlay);
        musicManager.stop();
        k.go("HomePage", { spawn: "School Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.focus();
        }
    });
}