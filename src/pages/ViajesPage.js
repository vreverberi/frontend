// import React from 'react';
import '../styles/ViajesPage.css'
const ViajesPage = (props) => {
return (
    <main className="holder">
    <h2>Próximos Viajes</h2>
    <div className="servicio">
        <img src="img/angra.png" alt="Angra" />
        <div className="info"/>
        <h4>Navegación por Angra Dos Reis</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aspernatur quis cupiditate provident
            natus impedit. Atque reprehenderit quidem ea officia possimus voluptatum, quasi asperiores impedit
            voluptas sequi voluptate corrupti animi!</p>
    </div>
    <div className="servicio">
        <img src="img/mallorca.png" alt="Mallorca" />
        <div className="info"/>
        <h4>Salón Náutico de Barcelona + Navegación por Palma de Mallorca</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aspernatur quis cupiditate provident
            natus impedit. Atque reprehenderit quidem ea officia possimus voluptatum, quasi asperiores impedit
            voluptas sequi voluptate corrupti animi!</p>
    </div>
</main>
 );
 }
export default ViajesPage;