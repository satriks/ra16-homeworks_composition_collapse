import { useRef, useState } from "react"

interface Props {
    collapsedLabel?: string,
    expandedLabel?: string
}


export default function Collapse({collapsedLabel, expandedLabel}:Props) {

    
    collapsedLabel = collapsedLabel ? collapsedLabel : "Развернуть"
    expandedLabel = expandedLabel ? expandedLabel : "Свернуть"

    const [show, setShow] = useState(true)
    const collapseText = useRef<HTMLDivElement>(null)
    
    const onClick = () => {
        collapseText.current? show? collapseText.current.style.height = "50px" : collapseText.current.style.height = "0" : ""
        setShow(!show)
    }

    return (
        <div className="collapse__wrapper">

            <button onClick={onClick}>{show ? collapsedLabel : expandedLabel}</button>
            <div className={show? "collapse": "collapse show"}>

                <div ref={collapseText}>{"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, at!"}</div>
            </div>
        </div>
    )
}