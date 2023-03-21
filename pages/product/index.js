import { Navbar } from "@/src/components/navbar.component";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductList(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fethcData = () => {
            setLoading(true)
            axios.get('http://localhost:3000/api/product').then(
                (res) => {
                    setData(res.data.data)
                    setLoading(false)
                }
            ).catch(
                (err) => {
                    console.log(err)
                    setLoading(false)
                }
            )
        }
        fethcData()
    }, [])

    let content = loading ? <h1>Loading...</h1> : <table> 
        {data.map((item, index) => {
            return (
                <Link href={`/product/${item.id}`}>
                <tr style={{backgroundColor:index%2==0?"green":"yellow"}}>
                    <td>
                        <h2><b>Title:</b></h2> {item.title} <br />
                        <h2><b>Body:</b></h2>
                        {item.body}
                    </td>
                </tr>
                </Link>
            )
        })}
    </table>
    
    return(
        <div>
            <Navbar />
            <h1>Product List</h1>
            {content}
            
        </div>
    )
}