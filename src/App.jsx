import './App.css';
import HeroSection from './components/HeroSection'; 
import AboutSection from './components/AboutSection'; 
import CountdownTimer from './components/CountdownTimer';
import SignupForm from './components/WaitlistSignup';
import IncentivesSection from './components/IncentivesSection';

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CountdownTimer />
      <SignupForm />
      <IncentivesSection />
    </>
  );
}

export default App;
