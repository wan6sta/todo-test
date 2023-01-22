import { useEffect, useRef } from 'react'

export const MouseListener = () => {
  const mousePosition = useRef<null | [number, number]>(null)

  const mouseMoveHandler = (e: any) => {
    // console.log([e.x, e.y])
    mousePosition.current = [e.x, e.y]
  }

  useEffect(() => {
    const body = document.body

    body.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      body.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return null
}
