import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';

export default function(props){
  // 连个属性：名称，设置属性的方法
  const [count, setCount] = useState(0)
  const [text, setText] = useState('test-demo')

  // 假如要使用 async await（方法一）
  async function demo() {
    console.log('demo')
  }

  // 一般用于异步操作
  useEffect(() => {
    console.log('useEffect')

    // （方法二）
    // async function demo() {
    //   console.log('demo')
    // }
    demo()

    // fetch('/api/getLists') // 实现异步操作，并不直接支持 async await
  }, [count]) // 数组为依赖项

  // 多个 useEffect 之间互不干扰
  useEffect(() => {
    console.log('useEffect 2')
  })

  // 一般用于操作 dom，或改变浏览器显示效果
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  // const handleCount = () => {
  //   setCount(count + 1)
  // }

  const handleCount = useCallback(() => {
      console.log('count changed')
      setCount(count + 1)
  }, [count])

  const noCacheText = () => {
    console.log('text changed')
    return text
  }

  const memoText = useMemo(()=>{
    console.log('text changed')
    return text
  }, [text])

  return (
    <div>
      <h1 onClick={handleCount}>count: {count}</h1>
      {/* <h1>text: {noCacheText()}</h1> */}
      <h1>text: {memoText}</h1>
    </div>
  )
}