import {useState} from 'preact/hooks';


import { Link } from "../../renderer/Link";

export { Page }

function Counter() {
    const [count, setCount] = useState(0)
  
    return (
      <button onClick={() => setCount((count) => count + 1)}>
        Counter <span>{count}</span>
      </button>
    )
  }

function Page() {
  return (
    <>
        I know things
    </>
  )
}

