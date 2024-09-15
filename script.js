document.addEventListener('DOMContentLoaded', () => {
    const members = document.querySelectorAll('.member');

    members.forEach(member => {
        member.addEventListener('click', () => {
            const p = member.querySelector('p');
            p.classList.toggle('expanded');
            
            // Adicionar efeito de cor ao texto
            p.style.color = p.style.color === 'red' ? '#555' : 'red';
        });
    });

    const rain = document.getElementById('rain');
    const numberOfDrops = 100; // Ajuste o número de gotas conforme necessário

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        
        // Randomize the position and animation duration
        const xPosition = Math.random() * 100; // Percentage of the width
        const duration = Math.random() * 2 + 2; // Between 2 and 4 seconds
        
        drop.style.left = `${xPosition}%`;
        drop.style.animationDuration = `${duration}s`;

        rain.appendChild(drop);
    }
});
