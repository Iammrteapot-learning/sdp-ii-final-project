import { ClassNames } from "@emotion/react"

export default function fontsTest(){
    return(
        <div className="flex flex-col justify-center items-center p-8 space-y-5">
            <div style={{fontFamily:"Helvetica-Neue"}} className="text-6xl">Helvetica-Neue</div>
            <div style={{fontFamily:"Helvetica-Neue-Light"}} className="text-6xl">Helvetica-Neue-Light</div>
            <div style={{fontFamily:"Helvetica-Neue-Italic"}} className="text-6xl">Helvetica-Neue-Italic</div>
            <div style={{fontFamily:"Helvetica-Neue-Bold"}} className="text-6xl">Helvetica-Neue-Bold</div>
            <div style={{fontFamily:"Helvetica-Neue-Black"}} className="text-6xl">Helvetica-Neue-Black</div>
            <div style={{fontFamily:"Helvetica-Neue-Black-Italic"}} className="text-6xl" >Helvetica-Neue-Black-Italic</div>
        </div>
    )
}