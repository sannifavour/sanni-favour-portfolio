
import Navbar from './layout/Navbar'
import { Hero } from "@/sections/Hero";
import { Skills } from "@/sections/Skills";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Project";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
   <div className='min-h-screen overflow-x-hidden'>
    <Navbar />
    <main>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
   </div>
  )
}

export default App
