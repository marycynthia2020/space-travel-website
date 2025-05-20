import React, { useContext } from 'react'
import { tabContext } from '../contexts/TabContext'
import { crewMembers } from '../data'

const CrewTabs = () => {
  const {crew, setCrew} = useContext(tabContext)

  const changeCrew = (id) => {
    crewMembers.map(member => {
      if(member.id === id) {
        setCrew(member)
      }
    })

  }
  return (
     <div className="flex gap-2 mb-8 xl:self-start">
            <div className={crew.id === 1? "w-2 h-2 border rounded-full xl:w-4 xl:h-4 bg-white": "w-2 h-2 border rounded-full xl:w-4 xl:h-4" } onClick={() => changeCrew(1)}></div>
             <div className={crew.id === 2? "w-2 h-2 border rounded-full xl:w-4 xl:h-4 bg-white": "w-2 h-2 border rounded-full xl:w-4 xl:h-4" }  onClick={() => changeCrew(2)}></div>
              <div className={crew.id === 3? "w-2 h-2 border rounded-full xl:w-4 xl:h-4 bg-white": "w-2 h-2 border rounded-full xl:w-4 xl:h-4" }  onClick={() => changeCrew(3)}></div>
               <div className={crew.id === 4? "w-2 h-2 border rounded-full xl:w-4 xl:h-4 bg-white": "w-2 h-2 border rounded-full xl:w-4 xl:h-4" }  onClick={() => changeCrew(4)}></div>
          </div>
  )
}

export default CrewTabs