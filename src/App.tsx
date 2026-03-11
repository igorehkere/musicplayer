import { Logo } from "./ui/Logo";
import { PageBar } from "./ui/pageBar";
import { TracksList } from "./ui/TracksList";
import style from './App.module.css';
import styleList from "./ui/TrackList.module.css";
import styleLogo from "./ui/Logo.module.css"

function App () {
  return (
    <div className={style.app}>
      <div className={styleLogo.logo}>
        <Logo/>
      </div>
      <div className={styleList.tracks}>
        <PageBar/>
        <TracksList/>
      </div>      
    </div>

  )
}

export default App;