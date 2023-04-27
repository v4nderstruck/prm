import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  // @ts-ignore
  return (h[st]! || b[st]!) / ((h[sh]! || b[sh]!) - h.clientHeight) * 100;
}

function getWindowScrollPosition() {
  if (!isBrowser) return 0

  return getScrollPercent()
}

export function useScrollPosition(
  effect: (a: number) => void,
  deps: any[],
  wait: number | null) {
  let throttleTimeout: ReturnType<typeof setTimeout> | null = null

  const callBack = () => {
    const scrolled = getWindowScrollPosition()
    effect(scrolled)
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}
