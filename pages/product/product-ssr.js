import axios from "axios"

export default function ProductSsr({data}){
    return (
        <div className="w-full">
            {
                Array.isArray(data) && data.length > 0 ?
                data.map((item, index) => {
                    return (
                        <div key={index} className={'w-full bg-gray-100 p-4'}>
                            <p><b>User ID:</b> {item.id}</p>
                            <h1><b>Title:</b></h1> {item.title} <br />
                            <h1><b>Body:</b></h1>
                            {item.body}
                        </div>
                    )
                }) : <p> No data </p>	
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const [err,data] = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    ).then(
        res => {return [null, res.data]}
    ).catch(
        err => {return [err, null]}
    )

    if(err){
        return {
            redirect: {
                destination: '/about',
                permanent: false
            }
        }
    }

    return {
        props: {
            data
        }
    }
}