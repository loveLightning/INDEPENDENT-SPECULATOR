import { useEffect, useState } from 'react';
import { GsapsScroll } from '../components/gsap/GsapsScroll';
import { Benefits } from '../components/pages/main/benefits/Benefits';
import { Info } from '../components/pages/main/info/Info';
import { News } from '../components/pages/main/news/News';
import { BaseSection } from '../components/pages/main/section/BaseSection';
import { Subscription } from '../components/pages/main/subscription/Subscription';
import { Testimonials } from '../components/pages/main/testimonials/Testimonials';
import { withLayout } from '../layouts/GuestLayout';

function Home(): JSX.Element {
  const pointValueStart = ['-900px top', '-120px top', '100px top', '340px top', '540px top', '820px top']
  const pointValueEnd = ['+=750', '+=230', '+=260', '+=220', '+=270', '+=770']
  let startTo = 'center 10% '
  const endTo = '+=1120'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth
      console.log(width)
      if (width > 1500) {
        startTo = 'center 30%'
      }
    }
  }, [])

  return (
    <>
      <GsapsScroll pointValueStart={pointValueStart} pointValueEnd={pointValueEnd} startTo={startTo} endTo={endTo}>
        <Info
          socialNetworks={{
            twitter: '#',
            linkedin: '#',
            youtube: '#',
            facebook: '#',
          }}
        />
        <News />

        <Benefits />
      </GsapsScroll>

      <BaseSection
        name="What people say about us"
        title="Testimonials"
        seeAllLink="#"
      >
        <Testimonials />
      </BaseSection>

      <Subscription />

    </>
  );
}

export default withLayout(Home);
