import React from "react";

export default function footer() {
    let footerStyle = {
       
        flexDirection: 'row',
         justifyContent: 'flex-end'
    }
  return (
 
  <footer className="container bg-dark text-light my-4 py-3 " style={footerStyle} >
     <p className="text-center">
     copyright &copy; | My todos list
     </p>

   
  </footer>
  )
}
