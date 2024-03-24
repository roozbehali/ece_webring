import React from 'react'
import { useState, useEffect } from 'react'
// import imageToAscii from "image-to-ascii"

// const imageToAscii = require("image-to-ascii")

// jpg|png to ASCII
// const toAscii = () => {
//   const [currDisplay, setCurrDisplay] = useState([])

//   useEffect(() => {
//     imageToAscii("../../public/people/sunnie.jpg", {
//       colored: false,
//       size: {height: 80, width: 60},
//     }, (err, converted) => {
//       if(err) {
//         console.error(err)
//         return
//       }
//       setCurrDisplay(converted)
//     })
//   }, [])
// }

const Image = () => {
  return (
    <div className="flex items-center justify-center p-8 text-white border-4 border-dotted border-stone-600 rounded-lg">
      <p>wip</p>
    </div>
  )
}

export default Image
