import './App.css';
import { ImageUpload } from './home';
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>

        <div className='app flex-col'>
          <Hero />
          <ImageUpload />;
        </div>
      </main>
    </>
  )
}

export default App;
