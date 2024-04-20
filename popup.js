document.getElementById('button').addEventListener('click', function () {
  myf(false, 'mirror');
  myf(true, 'mirror');
  myf(false, 'random');
  myf(true, 'random');
});

function myf(dupe, type) {
  const hearts = dupe
    ? [
        '🩷',
        '❤️',
        '🧡',
        '💛',
        '💚',
        '🩵',
        '💙',
        '💜',
        '🖤',
        '🩶',
        '🤍',
        '💖',
        '🩷',
        '❤️',
        '🧡',
        '💛',
        '💚',
        '🩵',
        '💙',
        '💜',
        '🖤',
        '🩶',
        '🤍',
        '💖',
        '🩷',
        '❤️',
        '🧡',
        '💛',
        '💚',
        '🩵',
        '💙',
        '💜',
        '🖤',
        '🩶',
        '🤍',
        '💖',
      ]
    : ['🩷', '❤️', '🧡', '💛', '💚', '🩵', '💙', '💜', '🖤', '🩶', '🤍', '💖'];
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

    switch (true) {
      case type === 'mirror' && dupe === false:
        document.getElementById('mhnd').textContent = heart_string;
        break;
      case type === 'mirror' && dupe === true:
        document.getElementById('mhd').textContent = heart_string;
        break;
      case type != 'mirror' && dupe === false:
        document.getElementById('rhnd').textContent = heart_string;
        break;
      case type != 'mirror' && dupe === true:
        document.getElementById('rhd').textContent = heart_string;
        break;
    }
  }
}
