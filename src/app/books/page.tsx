import { getAllBooks, getBookById } from '../../lib/components/actions';
import Link from '../../../node_modules/next/link';

export default async function Page(){

    const books = await getAllBooks()
    return <>
     <main >
        <h1>Book Page!</h1>
        {
            books.map(book=> <div key={book.id} className="my-6 column is-half has-background-grey-light">
                <p>{book.title} </p>
                <p>{book.author}</p>
            <strong>{book.price} AMD </strong> <br/>
            <img src={book.photo} alt={book.title} width="300px" height="300px"/> <br/>
            
            <button className="button">
                <Link href={"books/" + book.id}>For detail</Link>
            </button> 
            </div> 
            )
        }
    </main>
    </>
}