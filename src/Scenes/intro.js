export function intro(k) {
    // Background
    k.add([
        k.rect(k.width(), k.height()),
        k.color(0, 0, 0),
        k.pos(0, 0),
    ]);

    const introOverlay = document.createElement("div");
    introOverlay.id = "intro-overlay";
    introOverlay.style.position = "fixed";
    introOverlay.style.top = "0";
    introOverlay.style.left = "0";
    introOverlay.style.width = "100%";
    introOverlay.style.height = "100%";
    introOverlay.style.display = "flex";
    introOverlay.style.justifyContent = "center";
    introOverlay.style.alignItems = "center";
    introOverlay.style.zIndex = "999";

    introOverlay.innerHTML = `
        <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 100%;
        ">
            <div style="
                color: white;
                text-align: center;
                font-family: 'Pokemon';
            ">
                <p style="font-size: 4vh;">
                    Welcome to Edmund's Portfolio!<br><br>
                    Move around using the arrow keys and enter the buildings to explore my portfolio!<br><br>
                    Click anywhere to continue.
                </p>
            </div>
        </div>
    `;

    document.body.appendChild(introOverlay);

    let proceeded = false;

    const proceed = () => {
        if (proceeded) return;
        proceeded = true;

        introOverlay.remove();
        k.go("HomePage");

        const canvas = document.querySelector("canvas");
        if (canvas) canvas.focus();
    };

    // ✅ Mouse handled by DOM
    introOverlay.addEventListener("click", proceed);

    // ✅ Keyboard handled by Kaboom
    k.onKeyPress(["space", "enter"], proceed);
}
