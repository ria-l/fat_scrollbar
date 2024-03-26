document.getElementById('button').onclick = myf;

// Yes I know this isn't elegant, no I don't care.
function myf() {
  var hearts =
      ['🩷', '❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🤎', '🖤', '🩶', '🤍'];
  var random1 = Math.floor(Math.random() * hearts.length - 1 + 1);
  var random2 = Math.floor(Math.random() * hearts.length - 1 + 1);
  var random3 = Math.floor(Math.random() * hearts.length - 1 + 1);
  var heart_string = hearts[random1] + hearts[random2] + hearts[random3] +
      hearts[random3] + hearts[random2] + hearts[random1];
  document.getElementById('hearts').textContent = heart_string;
}
