import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { ReactExpertise } from './components/ReactExpertise/ReactExpertise';
import { Process } from './components/Process/Process';
import { WhyMe } from './components/WhyMe/WhyMe';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { initTheme } from './store/themeStore';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

function Portfolio() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ReactExpertise />
        <Process />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Portfolio />
    </QueryClientProvider>
  );
}
