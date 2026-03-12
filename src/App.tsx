import { Logo } from "./ui/Logo";
import { PageBar } from "./ui/pageBar";
import { TracksList } from "./ui/TracksList";
import style from './App.module.css';
import styleList from "./ui/TrackList.module.css";
import styleLogo from "./ui/Logo.module.css"
import { useState } from "react";

function App () {
  const [numPage, setNumPage] = useState<number>(1);
  const changeNumPage = (num: number) => {
    setNumPage(num);
  }
  return (
    <div className={style.app}>
      <div className={styleLogo.logo}>
        <Logo/>
      </div>
      <div className={styleList.tracks}>
        <PageBar changeNumPage={changeNumPage}/>
        <TracksList numPage={numPage}/>
      </div>      
    </div>

  )
}

export default App;