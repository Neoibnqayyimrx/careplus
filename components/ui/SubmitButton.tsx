import React from 'react'
 
interface ButtonProps {
    isLoading: boolean,
    className? : string,
    children: React.ReactNode,
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <div>SUbmitButton</div>
  )
}

export default SubmitButton