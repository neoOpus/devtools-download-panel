// Chrome no longer displays icons but Firefox requires them.

chrome.devtools.panels.create(
  'Download',
  'img/icon48.png',
  'panel.html',
  (panel) => panel.onShown.addListener((win) => win.focus()),
);
