import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import twitter from './assets/twitter.png'


const styles = {
  footer: {
    backgroundColor: '#3ae374',
    display: 'flex',
    flexDirection: 'column',
  },
  h3: {
    color: 'white',
    marginTop: '16px',
  },
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
  },
  icon: {
    marginTop: '24px',
    marginBottom: '24px',
    width: '48px',
    height: '48px',
  }
}

function Footer() {

  return <div className='footer' style={styles.footer}>
    <h3 style={styles.h3}>Made with ❤️ by Ignacio Diaz</h3>
    <ul style={styles.ul}>
      <li style={styles.li}><a style={styles.a} href="https://www.github.com/imIgnacio"><img style={styles.icon} src={github}/></a></li>
      <li style={styles.li}><a style={styles.a} href="https://www.linkedin.com/in/ignacio-diaz-ruiz/"><img style={styles.icon} src={linkedin}/></a></li>
      <li style={styles.li}><a style={styles.a} href="https://twitter.com/chachoim"><img style={styles.icon} src={twitter}/></a></li>
    </ul>
  </div>;
}

export default Footer;
