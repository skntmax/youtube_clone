import React from 'react'
import HomeContent from '../Page/Home/HomeContent'
import Sidebar from './Sidebar'
import './Content.css'
const Content = (props) => {
    return (
        <div className="content">
            <Sidebar />
            <HomeContent setval={props.setval} />
        </div>
    )
}

export default Content
