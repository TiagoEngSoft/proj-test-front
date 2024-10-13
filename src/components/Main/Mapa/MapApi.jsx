import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

function MapApi({ localizacoes }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // Adiciona uma verificação para garantir que localizacoes não seja nulo e tenha pelo menos um item
  const canRenderMap = isLoaded && localizacoes && localizacoes.length > 0;

  return (
    <Fragment>
      {canRenderMap ? (
        <GoogleMap
          center={{ lat: -7.205128254367043, lng: -39.311278810244076 }}
          zoom={10}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ width: "100%", height: "50vh" }}
        >
          {localizacoes.map(({ id, name, position }) => (
            <MarkerF
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
            // Descomente e ajuste o ícone se necessário
            // icon={{
            //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
            //   scaledSize: { width: 50, height: 50 }
            // }}
            >
              {activeMarker === id ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>
                    <p style={{color: 'black'}}>{name}</p>
                  </div>
                </InfoWindowF>
              ) : null}
            </MarkerF>
          ))}
        </GoogleMap>
      ) : <p>Loading...</p>}
    </Fragment>
  );
}

export default MapApi;
