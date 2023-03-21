export default function SSG() {
    return (
        <div>
            <h1>STATIC SITE GENERATION</h1>
            <div className={'w-full p-4 bg-gray-200'} >

            </div>
        </div>
    )
}

export async function getStaticPaths(ctx) {
    let data = []
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()).then(json => data = json)
    .catch(err => console.log(err))
    const paths = data.map((item) => {
        return {
            params: {
                ssg: item.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
    

export async function getStaticProps(context) {
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