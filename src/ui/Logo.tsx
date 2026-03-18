import style from "./Logo.module.css"

export function Logo() {
    return (
        <div className={style.logo}>
            <img src="./src/Logo.svg"/>
        </div>
    )
}