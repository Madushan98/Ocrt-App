import React from 'react'

export default function Modal({children}:any) {

    return (
      <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-centersm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
           </div>   
           <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>          
           {children}
          </div>
      </div>
      
    )
  }
  