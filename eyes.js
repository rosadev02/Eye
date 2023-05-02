const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  for(let aux = 0; aux < balls.length; aux++){
    balls[aux].style.left = x;
    balls[aux].style.top = y;
    balls[aux].transform = 'translate(-' + x + ',-' + y + ')';
  }
};