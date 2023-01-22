import {FC, memo, useCallback, useMemo, useState} from "react";

export const Test = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  const someObj = useMemo(() => ({id: Math.random()}), [count])
  const increment = () => setCount(prev => prev + 1)
  const toggleHandler = () => setToggle(prev => !prev)

  console.log('App rendered')

  return <div>
    <Display count={count} increment={increment} someObj={someObj}/>
    <div>
      <div style={{height: '30px', width: '30px', backgroundColor: toggle ? 'red' : 'green'}}></div>
      <button onClick={toggleHandler}>toggle</button>
    </div>
  </div>
}

interface DisplayProps {
  count: number
  increment: () => void
  someObj: {
    id: number
  }
}

const Display: FC<DisplayProps> = memo(({count, increment, someObj}) => {
  console.log('Display rendered')
  // const [id, setId] = useState<null | number>(null)

  // useLayoutEffect(() => {
  //   const newObj = Object.assign({}, someObj)
  //   newObj.id += 1
  //   setId(newObj.id)
  // }, [someObj])

  const id = useMemo(() => Number(someObj?.id) + 1, [someObj])

  return <div>
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <h2>{id}</h2>
    <DisplayInner/>
  </div>
})

const DisplayInner = () => {
  console.log('DisplayInner rendered')
  return <div>
    di
  </div>
}