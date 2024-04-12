document.getElementById('mirror').addEventListener('click', function() {
  myf(false, 'mirror');
});
document.getElementById('mirror-d').addEventListener('click', function() {
  myf(true, 'mirror');
});
document.getElementById('random').addEventListener('click', function() {
  myf(false, 'random');
});
document.getElementById('random-d').addEventListener('click', function() {
  myf(true, 'random');
});

function myf(dupe, type) {
  const hearts = dupe ?
      [
        '🩷', '❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '💖',
        '🩷', '❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '💖',
        '🩷', '❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '💖',
      ] :
      ['🩷', '❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '💖'];
  let heart_string = '';
  const x = type == 'mirror' ? 3 : 6;
  for (let i = 0; i < x; i++) {
    const n = Math.floor(Math.random() * hearts.length);
    const picked = hearts.splice(n, 1)[0];
    if (type == 'mirror') {
      heart_string = `${picked}${heart_string}${picked}`;
    } else {
      heart_string = `${heart_string}${picked}`;
    }
    document.getElementById('hearts').textContent = heart_string;
  }
}
