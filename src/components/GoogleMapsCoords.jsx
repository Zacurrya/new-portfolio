import useScene from '@hooks/useScene'

const GoogleMapsCoords = () => {
    const { activeScene } = useScene();

    const sceneMap = {
        main: { lat: 51.524325, lng: -0.011351 },
        about: { lat: 35.659476, lng: 139.700507 },
        projects: { lat: 35.710054, lng: 139.810714 }
    };

    const { lat, lng } = sceneMap[activeScene] || { lat: 0, lng: 0 };

    return (
        <div className="fixed bottom-2 left-2 font-mono text-md text-white/20">
            <span>@</span>
            <span>{lat}, {lng}</span>
        </div>
    );
}

export default GoogleMapsCoords