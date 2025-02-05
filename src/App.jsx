import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Nav />

    <section className="container mx-auto px-4 py-6 min-h-screen">
        <Outlet />
    </section>

        <Footer /> 
    </div>
  );
}

export default App;

