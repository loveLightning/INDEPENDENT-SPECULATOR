import { Main } from 'next/document'
import React from 'react'
import { AboutBussiness } from '../components/pages/about-us/bussiness/about-bussiness'
import { AboutMain } from '../components/pages/about-us/main/about-main'
import { AboutWho } from '../components/pages/about-us/who/about-who'
import { GuestLayout } from '../layouts/GuestLayout'

export default function AboutUs() {
  return (
    <GuestLayout>
        <AboutMain />
        <AboutWho />
        <AboutBussiness />
    </GuestLayout>
  )
}
