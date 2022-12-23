import './App.css';
import Reasons from './componets/Reasons/Reasons';
import Testimonials from './componets/Testimonials/Testimonials';
import { Footer } from './componets/Footer/Footer';
import Hero from './componets/Hero/Hero'
import { Join } from './componets/Join/Join';
import Plans from './componets/Plans/Plans';
import Programs from './componets/Programs/Programs';

function App() {
  return (
    <div className="App">
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonials />
        <Join />
        <Footer />
    </div>
  );
}

export default App;
