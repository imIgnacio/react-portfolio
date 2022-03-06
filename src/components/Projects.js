const styles = {
    h3: {
        color: "black",
        fontSize: '100%',
        display: 'inline-block',
        marginTop: '32px',
        backgroundColor: '#0a3d62',
        padding: '15px 20px 15px 20px',
        borderRadius: '10px',
        boxShadow: 'inset 0 0 10px black',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        color: '#b8e994',
    },
    cardTuna4Sale: {
        background: "url('https://www.exposhowradio.com/wp-content/uploads/ecommerce.jpg')",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
    cardFlightFinder: {
        background: "url('https://www.gannett-cdn.com/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg?width=660&height=517&fit=crop&format=pjpg&auto=webp')",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
    cardWeather: {
        background: "url('https://ichef.bbci.co.uk/images/ic/1200x675/p0617tch.jpg')",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
    cardWarehouse: {
        background: "url('https://auto-types.com/wp-content/uploads/_autonews/Audi-City-London_2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
}

function projects() {
    return <div className="project-container">
         <a href="https://tuna4sale.herokuapp.com" target="_blank">
                <figure className="card" style={styles.cardTuna4Sale}>
                    <h3 style={styles.h3}>Tuna 4 Sale</h3>
                </figure>
            </a>
            <a href="https://github.com/TrangTheDev/flightFinder" target="_blank">
                <figure className="card" style={styles.cardFlightFinder}>
                    <h3 style={styles.h3}>FLIGHT FINDER</h3>
                </figure>
            </a>
            <a href="https://github.com/imIgnacio/hw6-weatherDashboard" target="_blank">
                <figure className="card" style={styles.cardWeather}>
                    <h3 style={styles.h3}>WEATHER DASHBOARD</h3>
                </figure>
            </a>
            <a href="https://github.com/imIgnacio/warehouse-manager" target="_blank">
                <figure className="card" style={styles.cardWarehouse}>
                    <h3 style={styles.h3}>CAR MANAGMENT</h3>
                </figure>
            </a>
    </div>
}

export default projects;