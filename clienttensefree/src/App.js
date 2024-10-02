import logo from './logo.svg';
import './App.css';
import VideoPlayer from './Components/VideoPlayer';
import { ContextProvider } from './SocketContext';
import Options from './Components/Options';
import Notifications from './Components/Notifications';

function App() {
  return (
    <div class="bg-gray-200 py-18 sm:py-24 font-poppins">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">TenseFree, Meet Anywhere Anyhow !!!</p>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div class="relative max-lg:row-start-1 w-[384px] h-[512px]">
          <VideoPlayer/>
          </div>
      </div>
    </div>
  </div>
  
  );
}

export default App;
