import './App.css';
import StreetView from './components/StreetView';
import { useGoogleMaps } from './hooks/useGoogleMaps';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
  const loaded = useGoogleMaps(API_KEY);

  if (!loaded) return <p>Loading Google Maps...</p>;

  return (
    <StreetView lat={37.710829509385604} lng={-121.92524826953631} />
  // 37.710829509385604, -121.92524826953631
  );
}

export default App;
