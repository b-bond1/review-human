import Navigation from './components/Navigation';
import Footer from './components/Footer';

function Layout({ children }) {
    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;