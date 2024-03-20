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

const image = () => {
  return (
    <div class="box-border border-2 md:box-content">
      <pre>{currDisplay}</pre>
    </div>
  )
}

export default image