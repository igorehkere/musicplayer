import { Logo } from "./ui/Logo";
import { TracksList } from "./ui/TracksList";

function App () {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'space-between', paddingLeft: 300,  paddingRight: 30}}>
      <Logo/>
      <TracksList/>
      <div>
        <h2>details</h2>
      </div>
    </div>
  )
}

export default App;