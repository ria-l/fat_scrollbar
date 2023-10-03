async function changeBodyClass() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);

  // Execute script in the current tab
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      body = document.getElementsByTagName('body');
      for (let i = 0; i < body.length; i++) {
        body[i].classList.add('fatscrollbarsarecool');
      }
    },
  });
  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    css: `.fatscrollbarsarecool {::-webkit-scrollbar-thumb {background-color: red !important;}`,
  });
}
document.getElementById('button').addEventListener('click', function () {
  changeBodyClass();
});
