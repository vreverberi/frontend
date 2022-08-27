import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
// import '../styles/NovedadesPage.css'

import '../styles/ViajesPage.css' // Para armar layout


const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);
    return (
        <section className="holder">
            {/* <h2>Novedades</h2> */}
            <h2>Próximos Viajes</h2>
            <div className="info">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />)
                )
                }
            </div>
        </section>
    );
}


//             <div className="novedades">
//                 <h3>TITULO</h3>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel veniam consectetur distinctio ipsa
//                     totam id optio tempore quas laborum necessitatibus assumenda, temporibus ratione mollitia quos modi
//                     dolores nihil animi?
//                 </p>
//                 <hr />
//             </div>
//             <div className="novedades">
//                 <h3>TITULO</h3>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel veniam consectetur distinctio ipsa
//                     totam id optio tempore quas laborum necessitatibus assumenda, temporibus ratione mollitia quos modi
//                     dolores nihil animi?
//                 </p>
//                 <hr />
//             </div>
//             <div className="novedades">
//                 <h3>TITULO</h3>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel veniam consectetur distinctio ipsa
//                     totam id optio tempore quas laborum necessitatibus assumenda, temporibus ratione mollitia quos modi
//                     dolores nihil animi?
//                 </p>
//                 <hr />
//             </div>
//         </main>
//     );
// }
export default NovedadesPage;