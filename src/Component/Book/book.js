import { useState } from "react"
import "./book.css"

const Book = ({data})=>{
    const [hover, setHover] = useState(false)
    const title = data.volumeInfo?.title
    const authorsList = data.volumeInfo?.authors

    const pageCount = data.volumeInfo?.pageCount
    const bookLink = data.volumeInfo?.infoLink
    const rating = data.volumeInfo?.averageRating
    const imgURL = data.volumeInfo.imageLinks?.thumbnail
    console.log(data.volumeInfo.imageLinks?.thumbnail)

    return (
        <div className="book-container" onMouseEnter={(e)=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <a href={bookLink} target="_blank"><img style={{width:"100%"}} src={imgURL} alt="Book-cover"/>
            {hover&&(
                <div className="book-details">
                    <p>{title}</p>
                    <p>{[...authorsList]}</p>
                    <p>PAGE COUNT: {pageCount}</p>
                    <p>RATING: {rating}</p>
                    </div>
            )}
            </a>
        </div>
    )
}
export default Book;