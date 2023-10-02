'use client'
import React from 'react'

interface Props {
  error: Error
  reset: () => void
}

/*
  In a typical application, you would use a logging service
  like Sentry or LogRocket to log the error.
*/

const ErrorPage = ({ error, reset }: Props) => {
  console.error(error)

  return (
    <>
      <h1>Oops, something went wrong</h1>
      <p>
        <button className="btn" onClick={reset}>
          Try again
        </button>
      </p>
    </>
  )
}

export default ErrorPage
