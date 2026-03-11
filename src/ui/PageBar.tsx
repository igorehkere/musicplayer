import { useState } from "react"
import style from "./TrackList.module.css"

export function PageBar() {
    const [pageNum, setPageNum] = useState(1);
    return (
        <div className={style.btns}>
            <button onClick={() => {
                if (pageNum > 1) {
                    setPageNum(pageNum - 1);
                }
            }}>&lt;</button>            
            <span>{pageNum}</span>
            <button onClick={() => {
                setPageNum(pageNum + 1);
            }}>&gt;</button>
        </div>
    )
}