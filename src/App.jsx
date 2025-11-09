import Hero from './components/Hero';
import Features from './components/Features';
import InsightsDemo from './components/InsightsDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Hero />
      <Features />
      <InsightsDemo />
      <Footer />
    </div>
  );
}

export default App;
