import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'
import { LoginForm } from './components/LoginForm'

export const App = () => {
  return (
    <>
    <NavBar/>
    <div className='containerCards'> 
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    <ExtensionCard 
     cardTitle=""
     cardImage=""
     cardDescription=""
    />
    
    </div>
    <h1>React + Bootstrap</h1>

    <LoginForm/>

    </>

  )
}

