import { notFound } from "../../../../node_modules/next/navigation"
import {getBookById} from '../../../lib/components/actions'

interface IProps{
    params:{id:number}
}


export default async function Page (props:IProps){

   const book = await getBookById(props.params.id)
    if(book){
       return <img src={book.photo} width={300} height={300} />

    }

    return <>
        {
            notFound()
        }
    </>
}