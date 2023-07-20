import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import React from "react";

const Map = ({ position }) => {
  const [selected, setSelected] = React.useState(false);

  const onSelect = () => {
    setSelected(true);
  };

  const containerStyle = {
    width: "100%",
    height: "50vh",
  };

  return (
    // we want to pull the API key from an environment variable
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} zoom={14} center={position}>
        <div className='h-96 lg:w-96 w-72'>
          <MarkerF key={position.lat} position={position} onClick={onSelect} />
          {selected && (
            <InfoWindow
              position={position}
              clickable={true}
              onCloseClick={() => setSelected(false)}
            >
              <p>420 Higgins - Just down from the XXX&apos;s</p>
            </InfoWindow>
          )}
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
