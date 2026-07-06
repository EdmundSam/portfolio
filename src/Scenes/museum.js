import { musicManager } from "../entities/musicManager.js";

function ensureYouTubeApi() {
  if (window.YT) return;

  const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
  if (existing) return;

  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
}

function injectMuseumStylesheet() {
    return new Promise((resolve, reject) => {
        const existing = document.getElementById("museum-page-css");
        if (existing) {
            resolve(existing);
            return;
        }

        const link = document.createElement("link");
        link.id = "museum-page-css";
        link.rel = "stylesheet";
        link.href = "./src/css/museum.css";

        document.head.appendChild(link);
    });
}

export function museumPage(k) {
    injectMuseumStylesheet()
        .then(() => {
            const cssStatus = document.getElementById("museum-css-status");
        })
        .catch(() => {
            const cssStatus = document.getElementById("museum-css-status");
        });

    musicManager.play("./assets/Audio/Museum.wav");
    ensureYouTubeApi();

    const museumOverlay = document.createElement("div");
    museumOverlay.id = "museum-overlay";
    museumOverlay.innerHTML = `

        <!-- Close button -->
        <button id="close-museum" class="museum-close-btn">✕</button>

        <!--  HERO SECTION -->
        <section id="Intro" class="museum-hero">

            <!--  Left Column -->
            <div class="museum-left-column">
                <div id="video-container" class="museum-video-container">
                    <div id="player"></div>
                </div>
            </div>

            <!--  Right Column -->
            <div class="museum-right-column">
                <div class="museum-info-card">
                    <h2 class="museum-info-title">Cat Burglars</h2>

                    <!-- Game Description -->
                    <p class="museum-info-text">
                        Cat Burglars is a two-player asymmetric co-op puzzle game built around communication and shared inference.
                        <br><br>
                        The Field Cat explores a real-time museum environment, while the Systems Cat interacts with a blueprint-based UI that represents each room’s layout and embedded puzzle hints.
                        <br><br>
                        Since neither player has a complete view of the problem, they must continuously communicate to interpret clues, reconstruct the puzzle logic, and determine the correct solution together.
                    </p>

                    <div class="museum-divider"></div>

                    <div class="museum-misc-details">
                        <div><strong>Role:</strong> Gameplay Programmer / UI / Networking</div>
                        <div><strong>Engine:</strong> Unity</div>
                        <div><strong>Team:</strong> 2 Developers</div>
                        <div><strong>Genre:</strong> Asymmetric Co-op Puzzle</div>
                    </div>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div id="scroll-down" class="scroll-hint">
                <span class="scroll-hint-text">Scroll for More Information</span>
                <span class="scroll-hint-arrow">↓</span>
            </div>
        </section>

        <!-- Detail Sections -->
        <section class="museum-details">
            <nav class="museum-map" aria-label="Museum Navigation">
                <h3>Contents</h3>
                <a href="#Design">01 Design Goal</a>
                <a href="#Roles">02 Role Separation</a>
                <a href="#Puzzle">03 Puzzle Design</a>
                <a href="#UI">04 UI Design</a>
                <a href="#Playtesting">05 Playtesting</a>
                <a href="#Reflection">06 Reflection</a>
            </nav>

            <div class="museum-content">
                <!-- Design Goal -->
                <div id="Design" class="museum-soft-panel">
                    <h2>
                        01
                        <br>
                        Design Goal
                        <br>
                        Communication-Driven Co-Op
                    </h2>

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

                <!-- Role Separation -->
                <div id="Roles" class="museum-row">
                    <div class="museum-half museum-image-pair">
                        <div class="museum-image-card">
                            <a href="./assets/Images/Aquarium Blueprint.png" target="_blank" class="museum-image-link">
                                <img src="./assets/Images/Aquarium Blueprint.png" alt="Blueprint">
                            </a>

                            <p class="museum-caption">Systems Cat View</p>
                        </div>

                        <div class="museum-image-card">
                            <a href="./assets/Images/Aquarium.png" target="_blank" class="museum-image-link">
                                <img src="./assets/Images/Aquarium.png" alt="Gameplay">
                            </a>

                            <p class="museum-caption">Field Cat View</p>
                        </div>
                    </div>

                    <div class="museum-half">
                        <div class="museum-soft-panel">
                            <h2>
                                02
                                <br>
                                Role Separation
                                <br>
                                Systems Cat vs Field Cat
                            </h2>

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
                <div id="Puzzle" class="museum-row">

                    <div class="museum-half">
                        <div class="museum-soft-panel">
                            <h2>
                                03
                                <br>
                                Puzzle Design
                                <br>
                                Animal Room
                            </h2>

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

                    <div class="museum-half museum-image-pair">
                        <div class="museum-image-card">
                            <a href="./assets/Images/Animal Blueprint.png" target="_blank" class="museum-image-link">
                                <img src="./assets/Images/Animal Blueprint.png" alt="Blueprint">
                            </a>

                            <p class="museum-caption">Systems Cat View</p>
                        </div>

                        <div class="museum-image-card">
                            <a href="./assets/Images/AnimalRoom.png" target="_blank" class="museum-image-link">
                                <img src="./assets/Images/AnimalRoom.png" alt="Gameplay">
                            </a>

                            <p class="museum-caption">Field Cat View</p>
                        </div>
                    </div>
                </div>

                <!-- Designing for Communication -->
                <div id="UI" class="museum-row">
                    <div class="museum-half museum-image-pair">
                        <div class="museum-image-card">
                            <a href="./assets/Images/Foyer Prototype.png" target="_blank" class="museum-image-link">
                                <img src="./assets/Images/Foyer Prototype.png" alt="Blueprint">
                            </a>

                            <p class="museum-caption">Prototype Blueprint</p>
                        </div>

                        <div class="museum-image-card">
                            <a href="./assets/Images/Foyer Blueprint.png" target="_blank" class="museum-image-link">
                                <img src="./assets/Images/Foyer Blueprint.png" alt="Gameplay">
                            </a>

                            <p class="museum-caption">Final Blueprint</p>
                        </div>
                    </div>

                    <div class="museum-half">
                        <div class="museum-soft-panel">
                            <h2>
                                04
                                <br>
                                UI Design
                            </h2>

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

                <!-- Playtesting & Iteration -->
                <div id="Playtesting" class="museum-soft-panel">
                    <h2>
                        05
                        <br>
                        Playtesting & Iteration
                    </h2>

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
                <div id="Reflection" class="museum-soft-panel">
                    <h2>
                        06
                        <br>
                        Reflection
                    </h2>

                    <p>
                        One of the biggest lessons I took away from this project was how heavily player familiarity influences communication. It was fascinating to watch how different groups approached the exact same puzzles. Friends were naturally louder, challenged each other often, joked around, and weren't afraid to yell when they thought someone was wrong. That openness led to much more effective communication and created a chaotic, fun, and cooperative experience.
                        <br><br>
                        In contrast, unfamiliar players were much more reserved. They often communicated only what they thought was immediately necessary instead of sharing every observation that could help solve the puzzle. Some groups would even wait quietly for the other player to take the initiative, despite knowing the game was built around constant communication. Watching these different interactions was the most interesting part of development and reinforced how closely game mechanics are tied to player dynamics.
                        <br><br>
                        Given more development time, I would expand the gameplay beyond communication alone by introducing more active mechanics for both roles. The Systems Cat could remotely disable security cameras or clear software bugs that disrupt their interface. Likewise, the Field Cat could sneak around roaming guards and other environmental hazards. These additions would create moments where players alternate between solving puzzles and reacting to dynamic situations, further strengthening the cooperative experience.
                    </p>
                </div>
            </div>
        </section>
    `;

    document.body.appendChild(museumOverlay);

    const scrollHint = museumOverlay.querySelector("#scroll-down");
    scrollHint.addEventListener("click", () => {
        museumOverlay.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: "smooth"
        });
    });

    window.onYouTubeIframeAPIReady = () => {
        new YT.Player("player", {
        videoId: "aVZ_uZB_F7M",
        playerVars: { controls: 1, rel: 0 },
        events: {
            onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
                musicManager.setVolume(0.00);
            } else if (
                event.data === YT.PlayerState.PAUSED ||
                event.data === YT.PlayerState.ENDED
            ) {
                musicManager.setVolume(0.10);
            }
            }
        }
        });
    };

    const sections = Array.from(
    museumOverlay.querySelectorAll("#Design, #Roles, #Puzzle, #UI, #Playtesting, #Reflection")
    );

    const navLinks = Array.from(museumOverlay.querySelectorAll(".museum-map a"));

    function setActiveSection(id) {
    navLinks.forEach((link) => {
        const linkId = link.getAttribute("href")?.replace("#", "");
        link.classList.toggle("active", linkId === id);
    });
    }

    function updateActiveSection() {
    const triggerLine = museumOverlay.clientHeight * 0.3;
    let currentId = sections[0]?.id;

    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const overlayRect = museumOverlay.getBoundingClientRect();

        const topRelativeToOverlay = rect.top - overlayRect.top;

        if (topRelativeToOverlay <= triggerLine) {
        currentId = section.id;
        }
    }

    const atBottom =
        museumOverlay.scrollTop + museumOverlay.clientHeight >= museumOverlay.scrollHeight - 8;

    if (atBottom && sections.length) {
        currentId = sections[sections.length - 1].id;
    }

    if (currentId) setActiveSection(currentId);
    }

    navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href")?.slice(1);
        const target = museumOverlay.querySelector(`#${targetId}`);
        if (!target) return;

        target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        });

        setActiveSection(targetId);
    });
    });

    museumOverlay.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

        museumOverlay.querySelector("#close-museum").addEventListener("click", () => {
            museumOverlay.remove();
            k.go("HomePage", { spawn: "Museum Spawn" });

            const canvas = document.querySelector("canvas");
            if (canvas) canvas.focus();
        });
    }