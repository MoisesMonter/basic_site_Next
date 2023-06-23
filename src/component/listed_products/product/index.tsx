import style from './main.module.scss'
import Link from 'next/link'

export default function  products(){
    const listed= [{href:"1",label:"info"},
    {href:"2",label:"info"},
    {href:"3",label:"info"},
    {href:"4",label:"info"},
    {href:"5",label:"info"},
    {href:"6",label:"info"},
    {href:"7",label:"info"},
    {href:"8",label:"info"},
    {href:"9",label:"info"},
    {href:"10",label:"info"},
    {href:"11",label:"info"},
    {href:"12",label:"info"},
    {href:"13",label:"info"},
    {href:"14",label:"info"},
    {href:"15",label:"info"},
    {href:"16",label:"info"},
    {href:"17",label:"info"},
    {href:"18",label:"info"},

    ];
    return(
        <>
            {listed.map((_,index) =>(
                <Link key={index} href={_.href}><span>{_.label}</span></Link>
            ))}
        </>
    )
}
