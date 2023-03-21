import Link from 'next/link'
export function Navbar() {
    // navbar is a component that contains the navigation bar
    return (
        <ul>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/about"}>About</Link>
            </li>
            <li>
                <Link href={"/product"}>Products</Link>
            </li>
        </ul>
    )
}