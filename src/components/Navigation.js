const styles = {
    ul: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
    },
    li: {
        margin: '0 20px',
    },
    a: {
        textDecoration: 'none',
    }

}

function Navigation() {
    return <ul style={styles.ul}>
        <li style={styles.li}><a style={styles.a} href="#">Home</a></li>
        <li style={styles.li}><a style={styles.a} href="#">About</a></li>
        <li style={styles.li}><a style={styles.a} href="#">Contact</a></li>
        <li style={styles.li}><a style={styles.a} href="#">Resume</a></li>
    </ul>
}

export default Navigation;