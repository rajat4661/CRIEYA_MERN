import React from 'react'
import Input from '../../lib/Input';

const IndustryPersonForm = () => {
  return (
    <>
    <p>Industry Person</p>
    <Input
        name="firstName"
        label="First Name"
        placeholder="Enter First Name"
        type="text"
      />
      <Input
        name="lastName"
        label="Last Name"
        placeholder="Enter Last Name"
        type="text"
      />
      <Input name="email" label="Email" placeholder="Enter Email" type="text" />
    </>
  )
}

export default IndustryPersonForm;
