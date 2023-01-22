import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState
} from 'react'

type ProviderProps = null | [number, number]

export const MousePositionContext = createContext<ProviderProps>(null)

export const MousePositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const mousePosition = useRef<ProviderProps>(null)
  let mousePos: ProviderProps = null
  const [state, setState] = useState<ProviderProps>(null)

  const mouseMoveHandler = (e: any) => {
    // console.log([e.x, e.y])
    mousePosition.current = [e.x, e.y]
    mousePos = [e.x, e.y]
    // @ts-ignore
    if (mouseMoveHandler.timerId) return
    const timerId = setTimeout(() => {
      setState([e.x, e.y])
      // @ts-ignore
      mouseMoveHandler.timerId = 0
    }, 1500)
    // @ts-ignore
    mouseMoveHandler.timerId = timerId
  }

  useEffect(() => {
    const body = document.body

    body.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      body.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <MousePositionContext.Provider value={state}>
      {children}
    </MousePositionContext.Provider>
  )
}
