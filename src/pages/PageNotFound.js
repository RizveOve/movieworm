import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pnf from "../assets/images/pnf.png"
import { Button } from '../components/Button'

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found- MovieWorm`;
  });
  return (
    <main>
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <div className="max-w-lg">
          <img className="rounded" src={pnf} alt="404 Page Not Found" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to="/">
          <Button>Back To Home</Button>
        </Link>          
      </div>
    </section>
  </main>
  )
}
