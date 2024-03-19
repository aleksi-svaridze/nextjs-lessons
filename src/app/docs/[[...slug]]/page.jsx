import React from 'react'

export default function Docs({params}) {
    if(params.slug?.length === 2) {
        return (
            <h1>docs for FEATURE {params.slug[0]} and CONCEPT {params.slug[1]}</h1>
        )
    } else if (params.slug?.length === 1) {
        return(
            <h1>Docs for FEATURE {params.slug[1]}</h1>
        )
    }

    return (
      <div>
        <h1>Docs page</h1>
      </div>
    )
}
