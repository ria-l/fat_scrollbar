// alert('working?');
// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.insertCSS({
//     target: {
//       tabId: tab.id,
//     },
//     css: `body {background-color: pink !important; border: 20px dotted pink; }`,
//   });
// });
chrome.windows.getCurrent(function (currentWindow) {
  chrome.tabs.query(
    { active: true, windowId: currentWindow.id },
    function (activeTabs) {
      activeTabs.map(function (tab) {
        chrome.scripting.insertCSS({
          target: {
            tabId: tab.id,
          },
          files: ['style.css'],
        });
      });
    }
  );
});
