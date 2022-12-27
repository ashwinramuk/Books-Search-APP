import { useState } from "react"
import Book from "../Book/book"
import "./Landing_page.css"

const LandingPage = () =>{
    const [searchBookTitle, setSearchBookTitle] = useState("")
    const [bookList, setBookList] = useState([])
    const [loader, setLoader] = useState(false)
    const handleSearch = (e)=>{
        e.preventDefault();
        // const params={
        //     q:searchBookTitle
        // }
        setLoader(true)
        fetch(("https://www.googleapis.com/books/v1/volumes?"+new URLSearchParams({q:`${searchBookTitle}`}).toString()))
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setBookList(data.items);
        })
        .catch((e)=>{console.log(e)})
        .finally(()=>{setLoader(false);setSearchBookTitle("")})
    }
    return(
        <div>
            <div className="search-bar">
                <input type='text' placeholder="Search for a book" onChange={(e)=>{setSearchBookTitle(e.target.value)}} value={searchBookTitle}/>
                <button onClick={handleSearch}>search</button>
            </div>
            {loader&&<img src="Loading_icon.gif"/>}
            {!loader&&(<div className="main-container">
                {bookList.map((book,i)=>{
                return <Book data={book} key={i}/>}
                )}
            </div>)}
        </div>
    )
}

export default LandingPage;
