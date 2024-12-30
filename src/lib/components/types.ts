export interface IBook{
    id: number
    title:string
    author:string
    price:number
    photo:string
}

export interface IProps{
    className:string
    href:string
    children:React.ReactNode 
}