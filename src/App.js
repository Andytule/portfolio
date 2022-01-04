import React from 'react'
import styles from './App.module.css'
import { NavBar, Home, Project } from './components'

class App extends React.Component {
    render () {
        return (
            <div className={styles.container}>
                <NavBar />
                <Home />
                <Project />
            </div>
        )
    }
}

export default App
