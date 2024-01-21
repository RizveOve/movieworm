import React from 'react'
import { Card } from '../components'

export const MovieList = () => {
  return (
    <main className='mt-6'>
      <div className='flex flex-wrap justify-center' >
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}
