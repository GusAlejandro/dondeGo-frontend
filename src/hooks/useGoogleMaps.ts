import { useJsApiLoader } from "@react-google-maps/api";


export function useGoogleMaps(apiKey: string){
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script', 
    googleMapsApiKey: apiKey,
  });

  return isLoaded
}