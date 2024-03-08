import { useRef } from 'react'
import React from 'react'
import Card from './card'
const Foreground = () => {
  const data = [
    {
      desc: "This is the background color of the card which will be displayed",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "This is the background color of the card which will be displayed",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "This is the background color of the card which will be displayed",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"},
    },
    {
      desc: "This is the background color of the card which will be displayed",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Upload", tagColor: "green"},
    },
  ]
const ref =useRef(null)
  return (
    <div ref={ref} className='fixed left-0 top-0 w-full z-[3] h-screen flex gap-10 flex-wrap p-5'>
       {data.map((item,index)=>(
        <Card data={item} refe={ref}/>
       ))}
    </div>
  )
}

export default Foreground
