import { useState } from 'react'
import bgimg from './assets/bgimg.png'

function App() {
  return (
    <div 
      className="h-screen w-screen bg-cover bg-center flex items-center justify-start pl-20 text-gray-900" 
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="text-left">
        <h1 className="text-5xl font-bold mb-7">Rojin Karki</h1>
        <p className="text-lg mb-7 w-1/3">Hi! I'm Rojin Karki, an 18-year-old IT enthusiast. I recently graduated from
         high school and currently work as a Hardware and Network Specialist and IT Technician. I have hands-on
            experience in troubleshooting systems, setting up networks, and providing technical support. I'm passionate
            about technology and always eager to learn and grow in the IT field.</p>
        <div className="flex space-x-6">
          <span className="text-xl cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 hover:scale-110 transition transform duration-200">Skills</span>
          <span className="text-xl cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 hover:scale-110 transition transform duration-200">Work Experience</span>
          <span className="text-xl cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 hover:scale-110 transition transform duration-200">Resume</span>
        </div>
      </div>
    </div>
  )
}

export default App
