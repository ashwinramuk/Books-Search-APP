import { useState } from "react"
import "./book.css"

const Book = ({data})=>{
    const [hover, setHover] = useState(false)
    const title = data.volumeInfo.title
    const authorsList = data.volumeInfo.authors

    const pageCount = data.volumeInfo.pageCount
    const bookLink = data.volumeInfo.infLink
    const rating = data.volumeInfo.averageRating
    const imgURL = data.volumeInfo.imageLinks.thumbnail

    return (
        <div className="book-container" onMouseEnter={(e)=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <a href={bookLink}><img style={{width:"100%"}} src={imgURL} alt="Book-cover"/>
            </a>
            <div className="book-details">
            {hover&&(
                <>
                    <p>{title}</p>
                    <p>{[...authorsList]}</p>
                    <p>PAGE COUNT: {pageCount}</p>
                    <p>RATING: {rating}</p>
                    </>
            )}
            </div>
        </div>
    )
}
export default Book;