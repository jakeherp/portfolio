import React from 'react'

interface IProps {
  error: {
    type: string
  }
}

export default function ErrorMessage({ error }: IProps) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>This field is required</p>
      case 'minLength':
        return <p>This field needs to be at least 2 characters long</p>
      case 'pattern':
        return <p>Please enter a valid email address</p>
      default:
        return null
    }
  }

  return null
}
