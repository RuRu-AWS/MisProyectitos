
import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() 
{
    
    return (
        //El section es para poder darle estilo de manera global en nuestro index.css
        <section className='App'>
        <TwitterFollowCard 
        userName="ChoppingSnow">
        Daniel Martín
        </TwitterFollowCard>
        
        <TwitterFollowCard
        userName="pheralb">
        Pablo Hernandez
        </TwitterFollowCard>

        <TwitterFollowCard 
        userName="MisterJagger_">
        MR Jagger
        </TwitterFollowCard>

        </section>
        
    )
}