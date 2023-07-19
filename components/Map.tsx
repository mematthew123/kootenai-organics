import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const mapStyles = {
  height: "100%",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "10px",
};

const defaultCenter = {
  lat: 46.8746,
  lng: -113.9931,
};

const defaultMapOptions = {
  disableDefaultUI: true,
};

const SimpleMap = () => {
  return (
    <div className='mt-10 mb-10 mx-auto h-[50vh] w-full md:w-[50vw] rounded-lg overflow-hidden'>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
          options={defaultMapOptions}
        >
          <MarkerF position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default SimpleMap;
