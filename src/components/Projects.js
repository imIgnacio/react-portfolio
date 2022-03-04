const styles = {
    h3: {
        color: "black",
        fontSize: '150%',
        display: 'inline-block',
        marginTop: '32px',
        padding: '15px 20px 15px 20px',
        borderRadius: '10px',
        boxShadow: 'inset 0 0 10px black',
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        color: '#b8e994',
    },
    cardHtml: {
        background: "url('https://ak.picdn.net/shutterstock/videos/7080529/thumb/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: 'center',
    },
    cardJava: {
        background: "url('https://marvel-b1-cdn.bc0a.com/f00000000156946/www.jrebel.com/sites/rebel/files/image/2021-03/2021%20java%20technology%20report.jpeg')",
        backgroundSize: "cover",
        border: '5px solid #60a3bc',
    },
    cardGithub: {
        background: "url('https://miro.medium.com/max/1024/1*wzEf4qVNT7mUeMIeQWTJbg.jpeg')",
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
         <a href="https://github.com/imIgnacio/homework2">
                <figure className="card" style={styles.cardHtml}>
                    <h3 style={styles.h3}>HTML</h3>
                </figure>
            </a>
            <a href="https://github.com/imIgnacio/my-java-programs">
                <figure className="card" style={styles.cardJava}>
                    <h3 style={styles.h3}>JAVA</h3>
                </figure>
            </a>
            <a href="https://github.com/imignacio">
                <figure className="card" style={styles.cardGithub}>
                    <h3 style={styles.h3}>GITHUB</h3>
                </figure>
            </a>
            <a href="https://github.com/TrangTheDev/flightFinder">
                <figure className="card" style={styles.cardFlightFinder}>
                    <h3 style={styles.h3}>FLIGHT FINDER</h3>
                </figure>
            </a>
            <a href="https://github.com/imIgnacio/hw6-weatherDashboard">
                <figure className="card" style={styles.cardWeather}>
                    <h3 style={styles.h3}>WEATHER DASHBOARD</h3>
                </figure>
            </a>
            <a href="https://github.com/imIgnacio/warehouse-manager">
                <figure className="card" style={styles.cardWarehouse}>
                    <h3 style={styles.h3}>CAR MANAGMENT</h3>
                </figure>
            </a>
    </div>
}

export default projects;