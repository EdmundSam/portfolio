import { musicManager } from "../entities/musicManager.js";

export function towerPage(k) {
    musicManager.stop();

    const towerOverlay = document.createElement("div");
    towerOverlay.id = "tower-overlay";
    towerOverlay.style.position = "fixed";
    towerOverlay.style.top = "0";
    towerOverlay.style.left = "0";
    towerOverlay.style.width = "100%";
    towerOverlay.style.height = "100%";
    towerOverlay.style.background = "url('./assets/Images/Typomancers Background.png') no-repeat center center";
    towerOverlay.style.backgroundSize = "100% 100%";
    towerOverlay.style.display = "flex";
    towerOverlay.style.flexDirection = "column";
    towerOverlay.style.justifyContent = "flex-start";
    towerOverlay.style.padding = "60px";
    towerOverlay.style.boxSizing = "border-box";
    towerOverlay.style.zIndex = "999";
    towerOverlay.innerHTML = `
        <!-- Close button -->
        <button 
            id="close-tower" 
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

        <!-- Logo -->
        <div style="
            top: 0;
            left: 0;
            width: 100%;
            height: 18%;  
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
        ">
            <img
                src="./assets/Images/Typomancers Logo.png"
                style="
                    max-height: 70%;
                    max-width: 100%;
                    height: auto;
                    width: auto;
                "
            />
        </div>

        <!-- Columns -->
        <div style="
            display: flex;
            flex: 1;
            width: 100%;
            justify-content: space-between;
            align-items: stretch;
            gap: 4vw;
            flex-wrap: wrap;">

            <!-- Left Column -->
            <div style="
            flex: 0 0 50%; 
            min-width: 300px; 
            display:flex; 
            flex-direction:column; 
            align-items:center; 
            justify-content:center">
                
                <!-- Video and frame -->
                <div style="
                    width: 100%;           
                    aspect-ratio: 16 / 9;
                    background: url('./assets/Images/Display Scroll.png') no-repeat center center;
                    background-size: contain;
                    display: flex;
                    justify-content: center;
                    align-items: center;">
                    <iframe 
                        src="https://www.youtube.com/embed/lQJdwiku8lM?si=ooYJS74KZNp_SVh_"
                        allowfullscreen
                        style="width: 80%; height: 70%; margin-bottom: 3%;"
                    ></iframe>
                </div>
            </div>

            <!-- Right Column -->
            <div style="
            flex: 0 0 45%; 
            min-width: 250px; 
            display:flex; 
            justify-content:center; 
            align-items:center;">
            <div style="max-width:60%; line-height:1.6;">
                <h2 style="font-family: EagleLake; font-size: 3vh; text-align:center; color: #2d6fbc;">Contributions</h2>
                <ul" style="font-family: EagleLake; text-align:left; font-size: clamp(10px, 2vh, 30px); color: white;">
                    <li>Directed a team by delegating and prioritizing tasks based on individual roles and strengths, ensuring steady progress</li>
                    <li>Conceived game concept and mechanics, iterating on gameplay through regular playtests and player feedback</li>
                    <li>Built and integrated the core typing gameplay and UI systems, including real-time user input handling, error detection, and words-per-minute calculation</li>
                    <li>Created visual assets for title and scrolls, to establish the game’s aesthetic and thematic identity, using Aseprite</li>
                    <li>Edited a gameplay video under a tight deadline to support project presentation and evaluation</li>
                </ul>
            </div>
        </div>
    </div>
`;
    
    document.body.appendChild(towerOverlay);

    // Close Button
    document.getElementById("close-tower").addEventListener("click", () => {
        document.body.removeChild(towerOverlay);
        k.go("HomePage", { spawn: "Tower Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.focus();
        }
    });
}
