import React from 'react'
import cl from './main.module.css'

export const ServicesMain = () => {
  return (
    <div className={cl.background}>
      <div className='container'>
        <h3 className={cl.title}>Subscription</h3>
        <p className={cl.subtitle}>/ Joining is your first speculation with us /</p>
        <div className={cl.line}></div>
        <div className={cl.splash}>
          <p className={cl['top-desc']}>Up front, our clients need to understand that our typical speculation takes at least a year to mature. That’s why we encourage one-year subscriptions. However, we understand that a year’s payment up front is a lot to ask of those unfamiliar with our work, so we also offer a quarterly option to The Independent Speculator. Our My Take service has monthly and yearly options. All subscriptions renew automatically until cancelled, except for the yearly subscription to The Independent Speculator, which must be renewed by the client every year. (Don’t worry; we’ll send reminders.) All clients who renew any subscription are grandfathered against future price increases.</p>
          <p className={cl.rules}>There are no refunds. Here’s why:</p>
          <ol>
            <li className={cl.rule}>It takes a great deal of time, work, and expense to come up with great speculations. Once we give you our ideas, you can’t un-know them, can’t give them back.</li>
            <li className={cl.rule}>We aren’t looking for people who want to “kick the tires.” We aren’t interested in offering “free trials” or other sales gimmicks. Unlike others who shotgun their sales pitches at the masses, we’re aiming for an elite audience that already knows the value of our kind of work.</li>
          </ol>
          <p className={cl.end}>Note that we reserve the right to cancel service—with no refund—to anyone who forwards our copyrighted material to others. Sharing our work with non-clients hurts us and fellow clients who then face extra competition from others acting on the same information.</p>
        </div>
      </div>
    </div>
  )
}
