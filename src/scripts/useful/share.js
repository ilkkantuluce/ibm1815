// social buttons
window.socialShare = function (url, title, w, h, e) {
  let left = screen.width / 2 - w / 2;
  let top = screen.height / 2 - h / 2;
  return window.open(
    url,
    title,
    "toolbar=no, menubar=no, scrollbars=yes, resizable=yes, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );
};