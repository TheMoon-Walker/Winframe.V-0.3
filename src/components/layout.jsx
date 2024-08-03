import Drawer from './drawer';
import Footer from './footer';
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-300">
      <div className="flex flex-row flex-1">
        <Drawer />
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
