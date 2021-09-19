import Headerprofile from "./components/headerprofile";
import Buscador from "./components/buscador";
import Conversa from "./components/conversa";
import HeaderConversa from "./components/headerconversa";
import SendMessenger from "./components/sendmessenger";
import StickerConversa from "./components/stickerconversa";
import './App.css';


function App() {
  return(
    <div className="AppContainer">
      <div className="leftContainer">
        <Headerprofile />
        <Buscador />
        <StickerConversa />
      </div>
      <div className="rightContainer">
        <HeaderConversa />
        <Conversa />
        <SendMessenger />


      </div>
    </div>
  )
}

export default App;
