import {useState} from 'preact/hooks';

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
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter/>
        </li>
      </ul>
    </>
  )
}

