/**
 * @Author: Martin Adamko <@martin_adamko>
 * @Date: 2020-11-28T21:11:44+01:00
 * @Copyright: Martin Adamko
 * @flow
**/

(function (window: Window) {
  let devicePixelRatio = window.devicePixelRatio

  function dispatchZoomEvent () {
    devicePixelRatio = window.devicePixelRatio
    window.dispatchEvent(new Event('resize'))
  }

  let animationFrameID

  function debouncedDetectZoomChange () {
    if (window.devicePixelRatio !== devicePixelRatio) {
      if (animationFrameID) {
        cancelAnimationFrame(animationFrameID)
      }

      animationFrameID = requestAnimationFrame(dispatchZoomEvent)
    }
  }

  setInterval(debouncedDetectZoomChange, 100)
}(window))
