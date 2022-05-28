import React from 'react'

const Footer = () => {
    const width = window.innerWidth;

  return (
    <div style={{ bottom: 0, left: 0, right: 0, position: 'fixed', backgroundColor: 'gold', width: width, height: 50, }}>
        <p style={{ textAlign: 'center' }}>@ayoadeoye...2022</p>
    </div>
  )
}

export default Footer