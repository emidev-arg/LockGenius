import React from 'react'

const Footer = () => {
  return (
    <footer style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '8vh', borderTop: '1px solid rgb(220, 220, 220, 0.7)'}}>
        <p style={{margin: '0', padding: '0', fontSize: '0.9rem', fontWeight: '500', color: 'gray'}}>Made by <a href='https://eedev.vercel.app' style={{color: 'black'}}>ee_dev</a>. Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer