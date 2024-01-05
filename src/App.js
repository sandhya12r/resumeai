import './styles/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Guidance from './components/Guidance';
import Library from './components/Library';
import Revolution from './components/Revolution';
import UserInterface from './components/UserInterface';
import WhyAi from './components/WhyAi';

function App() {
  return (
    <body>
      <Header />
      <Main />
      <WhyAi />
      <Guidance />
      <UserInterface />
      <Library />
      <Revolution />
      <Footer />
    </body>
  );
}

export default App;
