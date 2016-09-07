(function() {
  var a = window.opener || window.parent,
    b = 'fb_xdm_frame_' + location.protocol.replace(':', '');

  function c() {
    try {
      a.frames[b].proxyMessage(message, origin);
    } catch (e) {
      setTimeout(c, 100);
    }
  }

  function d() {
    __fbNative.postMessage(message, origin);
  }
  if (window == top && /FBAN\/\w+;/i.test(navigator.userAgent)) {
    if (window.__fbNative && __fbNative.postMessage) {
      d();
    } else window.addEventListener('fbNativeReady', d);
  } else c();
})();
