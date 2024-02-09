import Image from "next/image"
import page from "../public/page_not_found.svg"
export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <Image src={page} alt=""/>
        </div>
    )
}