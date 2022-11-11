import React from 'react'
import cl from './welcome.module.css'

export const Welcome = () => {
    return (
        <>
            <div className={cl.wrap}>
                <div className={cl['wrap-title']}>
                    <h2 className={cl.title}>
                        Welcome to the
                        Independent Speculator Affiliate Program
                    </h2>
                </div>
                <div className={cl.line}></div>
            </div>
            <div className={cl.back}>
                <p className={cl['sub-title']}>We’re happy to share revenue with those who help us make sales. Our affiliate program:</p>
                <ol>
                    <li className={cl.li}>Uses cookies to track sales you initiate. That can happen whether or not clients sign up right away, as long as the client signs up using the same device within 360 days.</li>
                    <br />
                    <li className={cl.li}> Gives you credit even if clients arrive at our website from competing affiliates, as long as you were the first to send them to us.</li>
                    <br />
                    <li className={cl.li}> Pays out quarterly, with the following percentages of first-year sales, based on the number of sales:
                        <br /><br />
                        30% for 1-10 sales
                        <br /><br />
                        40% for 11-50 sales
                        <br /><br />
                        50% for 51-100 sales
                        <br /><br />
                        60% for 101-500 sales
                        <br /><br />
                        70% for 501-1,000 sales
                        <br /><br />
                        80% for 1,001+ sales
                    </li>
                    <br />
                    <li className={cl.li}>Automatically increases the revenue sharing the more sales an affiliate generates. Whether you start small or large, the more sales you send us, the more you make.</li>
                    <br />
                    <li className={cl.li}>Is cumulative and the counter never resets. That means that whenever you reach the next level of affiliation, we’ll increase your percentage of revenue, whether that takes days, months or years.</li>
                </ol>
            </div>
        </>
    )
}
