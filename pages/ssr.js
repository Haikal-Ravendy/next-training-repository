import React from "react"

export default function SSR(props) {
    const { data } = props

    return(
        <div>
            <h1>Server Side Rendering</h1>
            
            <div className={'w-full space-y-6'}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={'w-full bg-gray-100 p-4'}>
                            <h1><b>Title:</b></h1> {item.title} <br />
                            <h1><b>Body:</b></h1>
                            {item.body}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    let data = []
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()).then(json => data = json)
    .catch(err => console.log(err))
    return {
        props: {
            data
        }
    }
}

