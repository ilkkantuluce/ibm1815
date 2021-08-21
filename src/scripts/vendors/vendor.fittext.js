const extend = function (obj, ext) {
  for (let key in ext) if (ext.hasOwnProperty(key)) obj[key] = ext[key];
  return obj;
};
window.fitText = function (el, options, kompressor) {
  const settings = extend(
    {
      minFontSize: -1 / 0,
      maxFontSize: 1 / 0
    },
    options
  );

  const fit = function (el) {
    const compressor = kompressor || 1;

    const resizer = function () {
      el.style.fontSize =
        Math.max(
          Math.min(
            el.clientWidth / (compressor * 10),
            parseFloat(settings.maxFontSize)
          ),
          parseFloat(settings.minFontSize)
        ) + 'px';
    };

    resizer();
    window.addEventListener('resize', resizer);
    window.addEventListener('orientationchange', resizer);
  };

  if (el.length) el.forEach((elem) => fit(elem));
  else fit(el);
};
