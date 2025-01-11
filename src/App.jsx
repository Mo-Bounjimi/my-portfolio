import HeaderLeft from './components/HeaderLeft';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />

        <main className="flex-[3]">
          <Home />
          <Education />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
