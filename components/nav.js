import React from 'react'
import Link from 'next/link'

 const Nav = () => {
    return (
        <div>
            <ul style={{color:'gray',display:'flex', direction:'column', justifyContent:'space-around', padding:'10px'}}>
                <li> <Link href='/'>home</Link></li>
                <li><Link href='/about'>about</Link></li>
            </ul>
        </div>
    )
}
export default Nav