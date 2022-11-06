import React from 'react'
import { ServicesChoose } from '../../components/pages/services/choose/choose'
import { ServicesMain } from '../../components/pages/services/main/main'
import { GuestLayout } from '../../layouts/GuestLayout'

export default function Services() {
    return (
        <GuestLayout>
            <ServicesMain />
            <ServicesChoose />
        </GuestLayout>
    )
}
