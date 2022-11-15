import React, { useState } from 'react'
import { SignUp} from '../../components/pages/sign-up/sign-up'
import { SignUpLayout } from '../../layouts/SignUpLayouts'

export default function SignUpScreen() {
    return (
        <SignUpLayout>
            <SignUp />
        </SignUpLayout>
    )
}
