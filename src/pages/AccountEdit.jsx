import React from 'react'
import AccountEditForm from '../components/account/AccountForm'
import TwoFactor from '../components/account/TwoFactor'
import ThreeFactor from '../components/account/ThreeFactor'
import Waitlist from '../components/home/Waitlist'

const AccountEdit = () => {
  return (
    
    <>
    
    <AccountEditForm/>
    <TwoFactor/>
    <ThreeFactor/>
    <Waitlist/>
    
    
    </>
  )
}

export default AccountEdit
