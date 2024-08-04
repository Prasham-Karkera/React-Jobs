import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = ({loading}) => {
  return (
    <>
        <ClipLoader
        color='#000000'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  )
}

export default Loading