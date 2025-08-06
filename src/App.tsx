import './App.css';
import { useState } from 'react';
import StreetView from './components/StreetView';
import { useGoogleMaps } from './hooks/useGoogleMaps';
import StreetViewPlaceHolder from './components/StreetViewPlaceHolder';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {

  const [gameStarted, setGameHasStarted] = useState(false);

  return (
    <div className='app-container'>
      <div className='app-content'>
        <h1 className='app-title'>DondeGo</h1>

        {/* { !gameStarted && <h1 className='app-title'>DondeGo</h1>} */}
        {/* { gameStarted && <h1 className='app-title'>DondeGo</h1>} */}

        { gameStarted && (
          
          <StreetViewPlaceHolder lat={59.93352865426394} lng={30.306587832924127}/>
        )}

        { !gameStarted && (
          <button className='play-button' onClick={() => setGameHasStarted(true)}>Play</button>
        )}
      </div>
    </div>
  );
}

export default App;
