import { musicManager } from "../entities/musicManager.js";

export function museumPage(k) {
    musicManager.play('./assets/Audio/Museum.wav');

    if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
    }

    const museumOverlay = document.createElement("div");
    museumOverlay.id = "museum-overlay";
    museumOverlay.style.position = "fixed";
    museumOverlay.style.top = "0";
    museumOverlay.style.left = "0";
    museumOverlay.style.width = "100%";
    museumOverlay.style.height = "100%";
    museumOverlay.style.background = "url('./assets/Images/Gradient.png') no-repeat center center";
    museumOverlay.style.backgroundSize = "100% 100%";
    museumOverlay.style.display = "flex";
    museumOverlay.style.flexDirection = "column";
    museumOverlay.style.justifyContent = "space-between";
    museumOverlay.style.padding = "60px";
    museumOverlay.style.overflowY = "auto";
    museumOverlay.style.boxSizing = "border-box";
    museumOverlay.style.zIndex = "999";
    museumOverlay.innerHTML = `
        <!-- Close button -->
        <button 
            id="close-museum" 
            style="position:fixed; 
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
        
        <!--  HERO SECTION -->
        <section style="
            position:relative;
            display:flex;
            width:100%;
            min-height:92vh;
            justify-content:space-between;
            align-items:stretch;
            gap:4vw;
            flex-wrap:wrap;
            padding:60px;
            box-sizing:border-box;
        ">
    
            <!-- Left Column -->
            <div style="
            flex: 0 0 60%; 
            min-width: 300px; 
            display:flex; 
            flex-direction:column; 
            align-items:center; 
            justify-content:center">
                
                <!-- Video and frame -->
                <div id="video-container" style="
                    width: 100%;           
                    aspect-ratio: 16 / 9;
                    background: url('./assets/Images/PictureFrame.png') no-repeat center center;
                    background-size: contain;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                ">

                    <div id="player" style="
                        width: 94%;
                        height: 95%;
                    "></div>

                </div>
            </div>

            <!-- Right Column -->
            <div style="
                flex: 0 0 35%;
                min-width: 250px;
                display: flex;
                justify-content: center;
                align-items: center;
            ">
                
                <div style="
                    display: inline-block;
                    max-width: 100%;

                    background: rgba(185, 236, 252, 0.45);
                    backdrop-filter: blur(10px);

                    border: 3px solid rgba(255, 255, 255, 0.45);
                    border-radius: 3px;

                    box-shadow: 
                        0 8px 32px rgba(0, 0, 0, 0.7),
                        inset 0 0 20px rgba(255, 255, 255, 0.05);

                    padding: 24px 28px;
                    box-sizing: border-box;

                    color: rgba(0, 0, 0, 0.85);
                    font-family: Charter;

                    text-align: left;
                ">

                    <!-- Title -->
                    <h2 style="
                        text-align: center;
                        font-size: clamp(22px, 1.6vw, 34px);
                        margin: 0 0 16px 0;
                        letter-spacing: 1px;
                    ">
                        Cat Burglars
                    </h2>

                    <!-- Game Description -->
                    <p style="
                        font-size: clamp(13px, 1.3vw, 18px);
                        line-height: 1.2;
                        margin: 0 0 16px 0;
                        max-width: 60ch;
                    ">
                        Cat Burglars is a two-player asymmetric co-op puzzle game built around communication and shared inference.
                        <br><br>
                        The Field Cat explores a real-time museum environment, while the Systems Cat interacts with a blueprint-based UI that represents each room’s layout and embedded puzzle hints.
                        <br><br>
                        Since neither player has a complete view of the problem, they must continuously communicate to interpret clues, reconstruct the puzzle logic, and determine the correct solution together.
                    </p>

                    <!-- Divider -->
                    <div style="
                        width: 100%;
                        height: 2px;
                        background: rgba(0,0,0,0.25);
                        margin: 10px 0 14px 0;
                    "></div>

                    <!-- Game Info -->
                    <div style="
                        font-size: clamp(12px, 1vw, 15px);
                        line-height: 1.8;
                        opacity: 0.9;
                    ">
                        <div><strong>Role:</strong> Gameplay Programmer / UI / Networking</div>
                        <div><strong>Engine:</strong> Unity</div>
                        <div><strong>Team:</strong> 2 Developers</div>
                        <div><strong>Genre:</strong> Asymmetric Co-op Puzzle</div>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div id="scroll-down" style="
                position:absolute;
                bottom:20px;
                left:50%;
                transform:translateX(-50%);
                display:flex;
                flex-direction:column;
                align-items:center;
                color:white;
                cursor:pointer;
                user-select:none;
                animation:scrollBounce 2s infinite;
            ">
                <span style="
                    font-size:13px;
                    letter-spacing:1px;
                    text-transform:uppercase;
                    margin-bottom:6px;
                ">
                    Scroll for More Information
                </span>

                <span style="
                    font-size:32px;
                    line-height:1;
                ">
                    ↓
                </span>
            </div>

        </section>

        <!-- Details -->
        <section style="
            width: 100%;
            padding: 80px 60px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 60px;
        ">

            <div style="
                display:flex;
                align-items:center;
                gap:50px;
                margin-bottom:80px;
            ">

                <div style="
                    flex:1;
                ">
                    <div style="
                        background:rgba(185, 236, 252, 0.4);
                        backdrop-filter:blur(8px);
                        padding:28px;
                        border-left:3px solid rgba(255,255,255,.5);
                        border-radius:4px;
                    ">
                        <h2>Design Goal: Communication-Driven Co-Op</h2>
                        <p>
                            Cat Burglars was designed around a core goal of fostering chaotic, fun, and at times frustrating communication between two players.
                            <br><br>
                            This design direction was inspired by asymmetric co-op games such as <i>Keep Talking and Nobody Explodes</i> and <i>We Were Here</i>, where communication itself becomes the primary gameplay mechanic rather than a supporting feature.
                            <br><br>
                            To achieve this, we adopted an asymmetric structure where each player has incomplete information and must rely on constant verbal coordination to progress. Even when players are not actively interacting with objects in the world, they remain engaged through interpretation, explanation, and shared problem-solving.
                            <br><br>
                            The result is a cooperative experience where success depends less on individual execution and more on how effectively players communicate under uncertainty.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Role Separation -->
            <div style="
                display:flex;
                align-items:center;
                gap:50px;
                margin-bottom:80px;
            ">
                
                <!-- IMAGES -->
                <div style="
                    flex:1;
                    display:flex;
                    justify-content:center;
                    align-items:flex-start;
                    gap:40px;
                ">

                    <!-- Systems Cat Image -->
                    <div style="
                        flex: 1;
                        text-align:center;
                    ">
                        <a href="./assets/Images/Aquarium Blueprint.png" target="_blank">
                            <img
                                src="./assets/Images/Aquarium Blueprint.png"
                                alt="Blueprint"
                                style="
                                    width:100%;
                                    aspect-ratio:16/9;
                                    object-fit:cover;
                                    cursor:pointer;
                                "
                            >
                        </a>

                        <p style="
                            color:white;
                            margin-top:12px;
                            font-weight:600;
                        ">
                            Systems Cat View
                        </p>
                    </div>

                    <!-- Field Cat Image -->
                    <div style="
                        flex: 1;
                        text-align:center;
                    ">
                        <a href="./assets/Images/Aquarium.png" target="_blank">
                            <img
                                src="./assets/Images/Aquarium.png"
                                alt="Gameplay"
                                style="
                                    width:100%;
                                    aspect-ratio:16/9;
                                    object-fit:cover;
                                    border-radius:4px;
                                "
                            >
                        </a>

                        <p style="
                            color:white;
                            margin-top:12px;
                            font-weight:600;
                        ">
                            Field Cat View
                        </p>
                    </div>
                </div>

                <!-- TEXT -->
                <div style="
                    flex:1;
                ">
                    <div style="
                        background:rgba(185, 236, 252, 0.4);
                        backdrop-filter:blur(8px);
                        padding:28px;
                        border-left:3px solid rgba(255,255,255,.5);
                        border-radius:4px;
                    ">
                        <h2>Role Separation: Systems Cat vs Field Cat</h2>
                        <p>
                            To encourage constant communication, each player receives incomplete but complementary information.
                            <br><br>
                            The Systems Cat views a top-down blueprint of the museum, including room layouts and puzzle objectives, but cannot directly observe the environment.
                            <br><br>
                            The Field Cat explores the museum in real time, using the information and puzzle objectives provided by the Systems Cat to investigate the environment, gather clues, and help piece together the solution.
                            <br><br>
                            This ensures that no puzzle can be solved independently and forces collaboration.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Example Puzzle -->
            <div style="
                display:flex;
                align-items:center;
                gap:50px;
                margin-bottom:80px;
            ">

                <!-- TEXT -->
                <div style="
                    flex:1;
                ">
                    <div style="
                        padding: 24px;
                        background: rgba(185, 236, 252, 0.4);
                        border-left: 3px solid rgba(255,255,255,0.5);
                        ">
                            <h2>Example Puzzle: Animal Room</h2>
                            <p>
                                One puzzle required players to count specific animals displayed throughout a two-floor museum exhibit.
                                <br><br>

                                The Systems Cat receives the objective and can view a blueprint of both floors. However, the blueprint only contains simplified icons, making it impossible to determine which animal each icon represents.
                                <br><br>

                                Meanwhile, the Field Cat explores the museum and can identify the animals in the environment. While they can see the first floor and partially observe the second floor from below, they cannot access the upper level to accurately inspect or count the animals.
                                <br><br>

                                Players often begin by counting only the animals visible to the Field Cat, resulting in an incorrect answer. To solve the puzzle, they must realize that the second floor contains additional animals that only the Systems Cat can count from the blueprint.
                                <br><br>

                                From there, the players work together: the Field Cat describes the visible animals so the Systems Cat can identify which blueprint icons correspond to each animal. Once those symbols are identified, the Systems Cat can correctly count the matching animals across both floors and determine the solution.
                            </p>
                    </div>
                </div>

                <!-- IMAGES -->
                <div style="
                    flex:1;
                    display:flex;
                    justify-content:center;
                    align-items:flex-start;
                    gap:40px;
                ">

                    <!-- Systems Cat Image -->
                    <div style="
                        flex: 1;
                        text-align:center;
                    ">
                        <a href="./assets/Images/Animal Blueprint.png" target="_blank">
                            <img
                                src="./assets/Images/Animal Blueprint.png"
                                alt="Blueprint"
                                style="
                                    width:100%;
                                    aspect-ratio:16/9;
                                    object-fit:cover;
                                    cursor:pointer;
                                "
                            >
                        </a>

                        <p style="
                            color:white;
                            margin-top:12px;
                            font-weight:600;
                        ">
                            Systems Cat View
                        </p>
                    </div>

                    <!-- Field Cat Image -->
                    <div style="
                        flex: 1;
                        text-align:center;
                    ">
                        <a href="./assets/Images/AnimalRoom.png" target="_blank">
                            <img
                                src="./assets/Images/AnimalRoom.png"
                                alt="Gameplay"
                                style="
                                    width:100%;
                                    aspect-ratio:16/9;
                                    object-fit:cover;
                                    border-radius:4px;
                                "
                            >
                        </a>

                        <p style="
                            color:white;
                            margin-top:12px;
                            font-weight:600;
                        ">
                            Field Cat View
                        </p>
                    </div>
                </div>
            </div>

            <!-- Role Separation -->
            <div style="
                display:flex;
                align-items:center;
                gap:50px;
                margin-bottom:80px;
            ">
                
                <!-- IMAGES -->
                <div style="
                    flex:1;
                    display:flex;
                    justify-content:center;
                    align-items:flex-start;
                    gap:40px;
                ">

                    <!-- Systems Cat Image -->
                    <div style="
                        flex: 1;
                        text-align:center;
                    ">
                        <a href="./assets/Images/Foyer Prototype.png" target="_blank">
                            <img
                                src="./assets/Images/Foyer Prototype.png"
                                alt="Prototype"
                                style="
                                    width:100%;
                                    aspect-ratio:16/9;
                                    object-fit:cover;
                                    cursor:pointer;
                                "
                            >
                        </a>

                        <p style="
                            color:white;
                            margin-top:12px;
                            font-weight:600;
                        ">
                            Prototype Blueprint
                        </p>
                    </div>

                    <!-- Field Cat Image -->
                    <div style="
                        flex: 1;
                        text-align:center;
                    ">
                        <a href="./assets/Images/Foyer Blueprint.png" target="_blank">
                            <img
                                src="./assets/Images/Foyer Blueprint.png"
                                alt="Blueprint"
                                style="
                                    width:100%;
                                    aspect-ratio:16/9;
                                    object-fit:cover;
                                    border-radius:4px;
                                "
                            >
                        </a>

                        <p style="
                            color:white;
                            margin-top:12px;
                            font-weight:600;
                        ">
                            Final Blueprint
                        </p>
                    </div>
                </div>

                <!-- TEXT -->
                <div style="
                    flex:1;
                ">
                    <div style="
                        background:rgba(185, 236, 252, 0.4);
                        backdrop-filter:blur(8px);
                        padding:28px;
                        border-left:3px solid rgba(255,255,255,.5);
                        border-radius:4px;
                    ">
                        <h2>UI Design for Communication</h2>
                        <p>
                            Designing the Systems Cat blueprints required carefully balancing how much information to present to the player. Providing too much information reduced the challenge by making puzzle solutions too obvious, while providing too little often left players unsure of how to begin.
                            <br><br>
                            The original version of this puzzle intentionally provided very little guidance. Players were given a blueprint containing relevant information but no clear indication of the room's objective or what information they were expected to communicate. To solve the puzzle, they first had to infer the goal, then identify four paintings throughout the museum and extract a digit from each one to form the password. While the puzzle was logically sound, many players became overwhelmed by the amount of information before they understood the core gameplay loop.
                            <br><br>
                            Because this was the first puzzle in the game, we redesigned it to better introduce the cooperative experience. We simplified the objective so the Systems Cat only needed to identify the highlighted painting, while the Field Cat located it in the museum and communicated the year it was created to unlock the door. We also added concise instructions that established the goal of the room without revealing the solution.
                            <br><br>
                            This gave players an opportunity to learn how to read the blueprint, orient themselves within the museum, and practice communicating effectively before encountering more open-ended puzzles. Once players understood the core gameplay loop, later rooms gradually reduced the amount of guidance, encouraging them to apply what they had learned to solve increasingly complex challenges independently.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Playtesting / Iteration -->
            <div style="
                padding: 24px;
                background: rgba(185, 236, 252, 0.4);
                border-left: 3px solid rgba(255,255,255,0.5);
            ">
                <h2>Playtesting & Iteration</h2>
                <p>
                    Throughout development, we regularly playtested the game with classmates who were randomly paired together. While the puzzles were technically solvable, many groups communicated less than we had anticipated, making the experience feel quieter and less engaging than intended.
                    <br><br>
                    When we conducted additional playtests with groups of friends, the experience was dramatically different. Players were far more willing to banter, challenge each other, and work through moments of confusion together, resulting in the chaotic and collaborative gameplay we had originally envisioned.
                    <br><br>
                    This reinforced an important design lesson: <i>Cat Burglars</i> was designed for friends that are comfortable communicating with no filter. Rather than indicating a flaw in the core mechanics, our playtests highlighted how strongly the social dynamic between players influenced the overall experience.
                    <br><br>
                    However to ensure the game remained enjoyable in a classroom setting, we did simplify several puzzles and reduced unnecessary complexity while preserving the communication-driven gameplay. These adjustments made the experience more approachable for randomly paired players without changing the core design goal of encouraging collaboration through shared information.
                </p>
            </div>

            <!-- Lessons Learned & Looking Forward -->
            <div style="
                padding: 24px;
                background: rgba(185, 236, 252, 0.4);
                border-left: 3px solid rgba(255,255,255,0.5);
            ">
                <h2>Lessons Learned & Looking Forward</h2>
                <p>
                    One of the biggest lessons I took away from this project was how heavily player familiarity influences communication. It was fascinating to watch how different groups approached the exact same puzzles. Friends were naturally louder, challenged each other often, joked around, and weren't afraid to yell when they thought someone was wrong. That openness led to much more effective communication and created a chaotic, fun, and cooperative experience.
                    <br><br>
                    In contrast, unfamiliar players were much more reserved. They often communicated only what they thought was immediately necessary instead of sharing every observation that could help solve the puzzle. Some groups would even wait quietly for the other player to take the initiative, despite knowing the game was built around constant communication. Watching these different interactions was the most interesting part of development and reinforced how closely game mechanics are tied to player dynamics.
                    <br><br>
                    Given more development time, I would expand the gameplay beyond communication alone by introducing more active mechanics for both roles. The Systems Cat could remotely disable security cameras or clear software bugs that disrupt their interface. Likewise, the Field Cat could sneak around roaming guards and other environmental hazards. These additions would create moments where players alternate between solving puzzles and reacting to dynamic situations, further strengthening the cooperative experience.
                </p>
            </div>
        </section>
    `;
    
    document.body.appendChild(museumOverlay);

    // Scroll hint animation
    const style = document.createElement("style");
    style.textContent = `
    @keyframes scrollBounce {
        0%,20%,50%,80%,100% {
            transform: translateX(-50%) translateY(0);
        }
        40% {
            transform: translateX(-50%) translateY(-8px);
        }
        60% {
            transform: translateX(-50%) translateY(-4px);
        }
    }
    `;
    document.head.appendChild(style);

    const scrollHint = museumOverlay.querySelector("#scroll-down");

    scrollHint.addEventListener("click", () => {
        museumOverlay.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: "smooth"
        });
    });

    let player;

    window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player("player", {
            videoId: "aVZ_uZB_F7M",
            playerVars: {
                controls: 1,
                rel: 0
            },
            events: {
                onStateChange: (event) => {
                    if (event.data === YT.PlayerState.PLAYING) {
                        musicManager.setVolume(0.00);
                    }

                    if (
                        event.data === YT.PlayerState.PAUSED ||
                        event.data === YT.PlayerState.ENDED
                    ) {
                        musicManager.setVolume(0.10);
                    }
                }
            }
        });
    };

    // Close Button
    document.getElementById("close-museum").addEventListener("click", () => {
        document.body.removeChild(museumOverlay);
        k.go("HomePage", { spawn: "Museum Spawn" });

        const canvas = document.querySelector("canvas");
        if (canvas) {
            canvas.focus();
        }
    });
}
