import React from 'react'
import { NavigationDots } from '../components/NavigationDots'
import { SocialMedia } from '../components/SocialMedia'


export const AppWrapper = (Component,idName,classNames) =>function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Component/>
            <div className='copyright'>
                <p className='p-text'>@2024 Ritik</p>
                <p className='p-text'>All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}
