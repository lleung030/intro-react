import { useState } from 'react'

export default function Contact(props) {
    // const [count, setCount] = useState(props.default ? props.default : 0)
    // const [count, setCount] = useState(props.default ?? 0)
/*     let initialCount = 0

    if (props.default) {
        initialCount = props.default
    }

    const [count, setCount] = useState(initialCount) */
    const [count, setCount] = useState(props.default || 0)
    let name = props.name ?? "Default Counter"
    /* 
    * Define a prop of name, and display the counter's "name"
    * in the JSX output, above the count itself. If there is no
    * name prop passed in, set the name to "Default Counter"
    */
  
    function increment(incrementor) {
      setCount(count + incrementor)
      // count++
    }
  
    return (
      <div className="counter">
        <h2>{ name }</h2>
        <h2>DEFAULT COUNTER</h2>
        Count: { count }
        <button onClick={ () => increment(1) }>Increment</button>
        <button onClick={ () => increment(2) }>Increment By 2</button>
        {
          (count > 0) ?
          // Output if condition is met (if)
          <button onClick={ () => increment(-1) }>Decrement</button> :
          // Output if condition is not met (else)
          <></>
        }
        {
          (count > 1) ?
          <button onClick={ () => increment(-2) }>Decrement By 2</button> :
          <></>
        }
      </div>
    );
}