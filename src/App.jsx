import './App.css';
import React,{useState,useEffect} from 'react';
import Routes from './Routes';
import Ofline from './components/offline/Ofline';
function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("blur", ()=>{
      document.title="Come back :("
    })
    window.addEventListener("focus",()=>{
      document.title = "Texnomart"
    })
  });
  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);
  return (
    isOnline?
    <div className="App">
    <Routes/>
  </div>
    :<Ofline/> 
  );
}

export default App;
