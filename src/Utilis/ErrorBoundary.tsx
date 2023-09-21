import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
    const error: any = useRouteError()
    if(error.status === 404){
        return <div>Page Not Found</div>;
    }
    if(error.status === 500){
        return <div>Internal Server Error</div>
    }
    if (error.status === 403){
        return <div>Bad Request</div>
    }
  return (
    <div>
      oops! something happened
    </div>
  )
}

export default ErrorBoundary
