import { useEffect, useState } from "react"

const FollowMouse = () => {
  //We must be able to enable and disable the effect
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY }) // Update the position
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //Clean up
    //We need to remove the event listener or subscriptions when the component is unmounted
    //or when the depebdencies change
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> only runs once when the component is mounted
  // [enabled] -> runs when 'enabled' changes and when the component is mounted
  // undefined -> runs every time the component is rendered
  // change body className
   useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>


      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} Follow pointer
      </button>

    </>


  )

}


function App() {

  


  return (
    <main>
      <FollowMouse />
    </main>

  )
}

export default App
