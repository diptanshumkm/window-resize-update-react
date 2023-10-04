
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [width, setWidth] = useState(window.innerWidth)

  function updateSize(){
    setWidth(width)
  }

  useEffect( () => {
    // add eventlistener when the component mounts
    window.addEventListener('resize', updateSize);

    return () => {
      // remove eventlistener when the component unmount
      // window.removeEventListener('resize', updateSize);
    }

  }, [] )

  return (
    <div className="App">
      Window width : {width}
    </div>
  );
}

export default App;
