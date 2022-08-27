import React from 'react';
import '../styles/NosotrosPage.css'
const NosotrosPage = (props) => {
return (
    <main className="holder">
        <div className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, consectetur illum ipsum libero quis
                provident. Dicta quam, esse cupiditate laboriosam optio dolores fugit non obcaecati, aliquam minima
                impedit incidunt deleniti!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis accusamus quae sed voluptatibus
                magnam doloribus, porro delectus incidunt amet animi corrupti, explicabo assumenda maiores perspiciatis
                labore asperiores facere mollitia.</p>
        </div>
        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/dario.jpg" alt="Darío Schmunk"/>
                    <div className="texto">
                        <h5>Darío Schmunk</h5>
                        <h6>Patrón</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos possimus soluta illo
                            aspernatur
                            iusto eum temporibus eius suscipit facilis maiores! Ducimus, amet eum. Eligendi voluptatibus
                            asperiores sit ea atque laborum.</p>
                    </div>
                </div>
                <div className="persona">
                    <img src="img/cristian.png" alt="Cristian Celeste"/>
                    <div className="texto">
                        <h5>Cristian Celeste</h5>
                        <h6>Patrón</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos possimus soluta illo
                            aspernatur
                            iusto
                            eum temporibus eius suscipit facilis maiores! Ducimus, amet eum. Eligendi voluptatibus
                            asperiores
                            sit ea atque laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
 );
 }
export default NosotrosPage;