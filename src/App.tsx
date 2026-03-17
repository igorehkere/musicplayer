import { Logo } from "./ui/Logo";
import { PageBar } from "./ui/PageBar";
import { TracksList } from "./ui/TracksList";
import style from './App.module.css';
import styleList from "./ui/TrackList.module.css";
import styleLogo from "./ui/Logo.module.css"
import { useState } from "react";
import { TrackDetails } from "./ui/TrackDetails";

function App () {
  const [numPage, setNumPage] = useState<number>(1);
  const [selectedTrackId, setSelectedTrackId] = useState<null | string>(null);
  const changeNumPage = (num: number) => {
    setNumPage(num);
  }
  const getTrackDetail = (id: string) => {
    setSelectedTrackId(id);
  }
  return (
    <div className={style.app}>
      <div className={styleLogo.logo}>
        <Logo/>
      </div>
      <div className={styleList.tracks}>
        <PageBar changeNumPage={changeNumPage}/>
        <TracksList numPage={numPage} getTrackDetail={getTrackDetail}/>
      </div>
      <TrackDetails selectedTrackId={selectedTrackId}/>      
    </div>

  )
}

export default App;