import React from 'react'

function Card({name, btn_text='visit me'}) {
    console.log(name);
    
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {name}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
        <button className='bg-blue p-4'>{btn_text}</button>
      </div>
    )
}

export default Card
