import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './header.css'

export default () => {
    return (
        <>
            <div className="header">
                <img src={require('../../public/LogoIEF.png')} alt="IEF logo" height={200} />
                <div className="links">
                    <a href="https://github.com/0xyNaMu/IEF2/tree/master/Impact_Evaluation_Framework" target="blank">
                        Evaluation Framework
                    </a>
                    <a href="https://github.com/0xyNaMu/IEF2" target="blank">
                        GitHub
                    </a>
                    <a
                        href="https://www.canva.com/design/DAFld4hZzdM/NXoab7xbpNjzcZxP53TN2w/edit?utm_content=DAFld4hZzdM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        target="blank"
                    >
                        How it works
                    </a>
                </div>
            </div>

            <Outlet />
        </>
    )
}
