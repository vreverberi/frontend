import '../../src/styles/HomePage.css'
const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <div className="velero">
                    <img src='img/Velero.JPG' alt='Velero' width='40%'/>
                        <div className="columnas">
                            <section className="bienvenidos">
                                <h2>Bienvenidos</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo repellat ea iste
                                    perferendis
                                    ad doloribus, cumque consequatur praesentium deserunt? Dolore voluptates minima quaerat
                                    voluptatibus distinctio veniam, perspiciatis voluptate autem.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo repellat ea iste
                                    perferendis
                                    ad doloribus, cumque consequatur praesentium deserunt? Dolore voluptates minima quaerat
                                    voluptatibus distinctio veniam, perspiciatis voluptate autem.</p>
                            </section>
                            <section className="testimonios">
                                <h2>Testimonios</h2>
                                <div className="testimonio">
                                    <span className="cita">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                    <span className="autor">Juan Gomez - feb 2022</span>
                                </div>
                            </section>
                        </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;