import Link from 'next/link'
import React from 'react'
import cl from './about.module.css'

export const AboutWho = () => {
  return (
    <div className='container'>
      <h3 className={cl.title}>Who We Are</h3>
      <div className={cl['wrap-desc']}>
        <p className={cl.desc}>Who We Are
          Lobo Tiggre (Louis James) was legendary speculator Doug Casey’s protégé at Casey Research for almost 14 years, until early 2018. He joined the Casey team in 2004. By 2007, he was writing and making investment recommendations in Casey’s flagship newsletter, the International Speculator. Now he brings his experience, his connections and his deal flow directly to you, without the barrage of marketing hype used by larger publishers.</p>
      </div>
      <button className={cl.btn}>View Our Services</button>
      <div className={cl.block}>
        <div className={cl.cols}>
          <div className={cl.col}>
            <p className={cl.number}>
              66 +
            </p>
            <p className={cl.name}>Countries</p>
            <p className={cl['desc-col']}>From recent war zones to remote jungles to high mountain tops, our quest for the highest due diligence standards in the world has taken us to 66 countries. So far…</p>
          </div>
          <div className={cl.col}>
            <p className={cl.number}>
              16 +
            </p>
            <p className={cl.name}>Years</p>
            <p className={cl['desc-col']}>For more than 16 years, we've been learning from world-class geologists and legendary speculators, inspecting mines and exploration projects, and delivered big investment wins to readers.</p>
          </div>
          <div className={cl.col}>
            <p className={cl.number}>
              73.6%
            </p>
            <p className={cl.name}>Realized Gain</p>
            <p className={cl['desc-col']}>This is the current average of all completed trades in The Independent Speculator.</p>
          </div>
        </div>
      </div>
      <div className={cl.knowledge}>
        <h3 className={cl.here}>HERE'S WHAT YOU NEED TO KNOW</h3>
        <div className={cl.wrap}>
          <div className={cl.left}>
            <p className={cl.subtitle}>Report Card</p>
          </div>
          <div className={cl.right}>
            <p className={cl['title-rigth']}>Building A New Track Record</p>
            <p className={cl.description}>The average yearly gain reported by the International Speculator during Lobo's tenure (published by Casey Research in January of 2018), was 18.5%. <Link className={cl.link} href={'/'}><a className='target-blank' >See disclaimer</a></Link> for details. <br /> <br />
              We are now posting a <Link className={cl.link} href={'/'}><a className='target-blank' >new track</a></Link> record of all closed positions—no cherry picking—including evidence showing all fees and commissions. Interested parties are invited to monitor our results as they are achieved. Our clients, of course, have access to a completely transparent portfolio of all positions, including analysis of news and developments in near real time.</p>
          </div>
        </div>
        <div className={cl.separator}></div>
        <div className={cl.wrap}>
          <div className={cl.left}>
            <p className={cl.subtitle}>Learning Curve</p>
          </div>
          <div className={cl.right}>
            <p className={cl['title-rigth']}>School of Hard Rocks</p>
            <p className={cl.description}>The 18.5% average of past yearly gains includes the years of our founder’s early training at Casey Research, the crash of 2008, and the downturn for resource investments from 2011 to 2015. Not all years were winners, but some were quite successful, resulting in the average above. We are now ready to apply the lessons learned from the decades of investing experience of investing giants such as Doug Casey, Rick Rule, and others to seek to achieve even better results in the future.
              <br /><br />
              Results are the first and most essential cornerstone of our business. That’s what we’re all here for, after all.</p>
          </div>
        </div>
        <div className={cl.separator}></div>
        <div className={cl.wrap}>
          <div className={cl.left}>
            <p className={cl.subtitle}>The Truth</p>
          </div>
          <div className={cl.right}>
            <p className={cl['title-rigth']}>“Louis James” Revealed</p>
            <p className={cl.description}>For the record, “Louis James” is a pen name our lead researcher adopted for his writing at Casey Research. His legal name, Lobo Tiggre, being a bit more exotic, was kept private. Indeed, Tiggre was advised against going public with his real name at the founding of Louis James, LLC.
              <br /><br />
              But since integrity is another cornerstone of our business, keeping the truth from the public was not an option. Instead, we’re keeping the “Louis James” brand alive through our company’s name.</p>
          </div>
        </div>
        <div className={cl.separator}></div>
        <div className={cl.wrap}>
          <div className={cl.left}>
            <p className={cl.subtitle}>Due Diligence</p>
          </div>
          <div className={cl.right}>
            <p className={cl['title-rigth']}>Leaving No Stone Unturned</p>
            <p className={cl.description}>For those not familiar with Lobo Tiggre’s work, due diligence is its hallmark. Hence our Twitter handle, <Link href='/'><a className='target-blank'> @duediligenceguy.</a></Link> He’s flown more than a million miles on behalf of Casey readers (with no way to count the miles on 4×4, horse, mule, and foot).
              <br /><br />
              Now, undeterred by falling rocks in mines, rickety third-world aircraft, scorpions, malaria outbreaks, or worse, we will continue the “Louis James” tradition of going where others dare not tread to leave no stone unturned on behalf of our clients.</p>
          </div>
        </div>
        <div className={cl.separator}></div>
        <div className={cl.wrap}>
          <div className={cl.left}>
            <p className={cl.subtitle}>The Team</p>
          </div>
          <div className={cl.right}>
            <p className={cl['title-rigth']}>Experience Matters</p>
            <p className={cl.description}>Lobo Tiggre is one of the most experienced and diligent researchers on the planet.</p>
            <Link href='/'><a className='target-blank'>Click here to see the full board and their bios.</a></Link>
            <p>
              Our in-house team includes passionate professionals with years of experience. Despite that expertise, we are always willing to check our premises, test our ideas, probe for fatal flaws, and make use of the expertise of others who can help up deliver the best results. To this end, we have a board of advisors consisting of some of the most knowledgeable, reputable, and successful people in our industry. These include: Doug Casey, Adrian Day, Ron Parratt, Moira Smith and more. <br /><br />
              <Link href='/'><a className='target-blank'>Click here to see the full board and their bios.</a></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
