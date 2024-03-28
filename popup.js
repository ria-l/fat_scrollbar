document.getElementById('button').onclick = myf;

function myf() {
  let hearts = [
    '🩷',
    '❤️',
    '🧡',
    '💛',
    '💚',
    '🩵',
    '💙',
    '💜',
    '🤎',
    '🖤',
    '🩶',
    '🤍',
  ];
  const picks = [];
  let heart_string = '';
  for (let i = 0; i < 3; i++) {
    const n = Math.floor(Math.random() * hearts.length);
    const picked = hearts.splice(n, 1)[0];
    heart_string = `${picked}${heart_string}${picked}`;
  }
  document.getElementById('hearts').textContent = heart_string;
}
