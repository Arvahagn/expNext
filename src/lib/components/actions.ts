import {IBook}from './types'
import { readFile } from 'fs/promises'


export const getAllBooks = async ():Promise<IBook[]> =>{

    const data = await readFile("books.json", "utf-8")

    if(data){
        return JSON.parse(data)
    }
    return []
}



export const getBookById = async (id:number):IBook =>{

    const data = await readFile("books.json", 'utf-8')
    if(data){
        const pars = JSON.parse(data)
        return pars.find(el=>el.id === id)
    }
    return ""

}