import React from 'react'

export const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['home','about','work','skills','testimonials','contact'].map((item,index)=>(
            <a key={item+index}
                className='app__navigation-dot'
                href={`#${item}`} 
                style={active===item ? {backgroundColor:'#313BAC'}:{}}
            />
        ))}
    </div>
  )
}
                
                          
