<script>
    import { onMount } from 'svelte';

    const { count, prizes } = $props();

    const prize = prizes.find(p => p.Hoeveelheid === count) ?? null;

    let launchConfetti;
    let hasCelebrated = false;

    // https://codepen.io/Franbeltramella/pen/emNdVBP
    onMount(() => {
        const canvas = document.getElementById('confetti-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let confettis = [];

        launchConfetti = (
            x = window.innerWidth / 2,
            y = window.innerHeight / 2
        ) => {
            for (let i = 0; i < 80; i++) {
                confettis.push({
                    x,
                    y,
                    dx: (Math.random() - 0.5) * 8,
                    dy: Math.random() * -6 - 4,
                    width: 4,
                    height: 10,
                    angle: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 10,
                    color: `hsl(${Math.random() * 360}, 80%, 60%)`,
                    alpha: 1
                });
            }
        };

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confettis.forEach((c, i) => {
                c.x += c.dx;
                c.y += c.dy;
                c.dy += 0.25;
                c.angle += c.rotationSpeed;
                c.alpha -= 0.005;

                if (c.alpha < 0.2) return;

                ctx.save();
                ctx.translate(c.x, c.y);
                ctx.rotate((c.angle * Math.PI) / 180);
                ctx.fillStyle = c.color;
                ctx.globalAlpha = c.alpha;
                ctx.fillRect(
                    -c.width / 2,
                    -c.height / 2,
                    c.width,
                    c.height
                );
                ctx.restore();

                if (c.alpha <= 0) confettis.splice(i, 1);
            });

            requestAnimationFrame(animate);
        }

        animate();
    });

    $effect(() => {
        if (hasCelebrated) return; // als confetti al een keer is afgespeeld, stop meteen
        if (!prize) return; // als er geen prijs is, niks doen

        hasCelebrated = true; // hasCelebrated is nu true waardoor als $effect weer draaid er niet weer confetti komt
        launchConfetti();
    });
</script>


{#if prize}
<dialog open>
    <h2>Bingo!</h2>

    <p>Je wint een <strong>{prize.titel}</strong>!</p>

    <form method="dialog">
        <button type="submit">
            <p>Sluiten</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                <path fill="#fff" d="M10.969 3.219a.574.574 0 1 1 .812.812L8.313 7.5l3.468 3.469l.074.09a.575.575 0 0 1-.796.796l-.09-.074L7.5 8.312l-3.469 3.47a.574.574 0 1 1-.812-.813L6.688 7.5l-3.47-3.469l-.073-.09a.575.575 0 0 1 .796-.797l.09.075L7.5 6.687z"/>
            </svg>
        </button>
    </form>
</dialog>
{/if}

<canvas id="confetti-canvas"></canvas>


<style>
    dialog {
        container-type: inline-size;
        &:not([open]) {
            display: none;
        }

        position: fixed;
        inset: 50% auto auto 50%;
        transform: translate(-50%, -50%);

        z-index: 1000;
        overflow: hidden;

        max-width: 25rem;
        min-width: 15rem;
        width: 50%;

        padding: 1rem;
        border: none;
        border-radius: .5rem;

        background-color: white;

        box-shadow: 0 0 100vmax 100vmax rgba(0, 0, 0, 0.5);

        img {
            width: 60%;
            object-fit: cover;
            display: block;
            margin: 0 auto;
        }

        form {
            position: absolute;
            top: 0;
            right: 0;
            margin: 1rem;
            
            button {
                cursor: pointer;
                border: none;
                border-radius: .2rem;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                padding: .5rem;
                background-color: #0B4989;
                color: white;
                

                height: 2rem;

                p {
                    display: none;
                    cursor: pointer;
                }
            }
        }
    }

    @container (width > 15rem) {
        dialog form button p {
            display: block;
        }
    }

    #confetti-canvas {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 2000;
    }

</style>