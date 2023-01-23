import React , {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
    return (
    <div>
        <h2>The Count is</h2> <h1>{count}</h1>
        <button onClick={() =>setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count -1)}>Decrement</button>
    </div>
  )
}

export default Counter