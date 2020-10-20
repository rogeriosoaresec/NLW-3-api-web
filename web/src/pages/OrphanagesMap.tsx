import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import { FiPlus, FiArrowRight } from 'react-icons/fi'
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [180, 2]
})

function OrphanagesMap() {

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map
                center={[38.6892484, -9.3545738]}
                zoom={20}
                style={{ width: '100%', height: '100%' }}>

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                    position={[38.6892484, -9.3545738]}
                    icon={mapIcon}>
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        lar da meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={ 20 } color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;