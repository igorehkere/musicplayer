import { useState } from "react"
import style from "./TrackList.module.css"

type page = {
    changeNumPage: (pageNum: number) => void,
}

export function PageBar({changeNumPage}: page) {
    const [pageNum, setPageNum] = useState(1);
    return (
        <div className={style.btns}>
            <button onClick={() => {
                if (pageNum > 1) {
                    setPageNum(pageNum - 1);
                    changeNumPage(pageNum - 1);
                }
            }}>&lt;</button>            
            <span>{pageNum}</span>
            <button onClick={() => {
                if (pageNum < 3) {
                    setPageNum(pageNum + 1);
                    changeNumPage(pageNum + 1); 
                }
                
            }}>&gt;</button>
        </div>
    )
}