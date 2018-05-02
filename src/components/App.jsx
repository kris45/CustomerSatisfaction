import React from 'react'
import '../css/main.css'
import Header from './Header'
import Content from '../containers/Content'
import Sidebar from '../containers/Sidebar'
import Footer from './Footer'


const App = () => (
    <div>
        <Header />
        <Content />
        <Sidebar />
        <Footer />
    </div>
)

export default App