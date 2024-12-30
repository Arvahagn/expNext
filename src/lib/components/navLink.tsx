"use client"
import Link from "../../../node_modules/next/link"
import { usePathname } from "../../../node_modules/next/navigation"
import { IProps } from "./types"


export const NavLink = (props:IProps) =>{
    const {className, href, children} = props
    const path = usePathname()

    const styleName = className + (path == href ? " has-background-success" : "")
    return <>
        <Link className={styleName} href={href}>
            {children}
        </Link>
    </>
}