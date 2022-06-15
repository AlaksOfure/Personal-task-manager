import React, { useEffect } from 'react'

const Alert = ({ type, msg, hideAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <p className={`alert alert-${type}`}>
      {msg}
    </p>
  )
}

export default Alert
