const colors = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0'];

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  particle.style.width = `${Math.random() * 20}px`;
  particle.style.height = `${Math.random() * 20}px`;
  particle.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 3000);
}

setInterval(createParticle, 100);
