import Drawer from "./drawer";
import Footer from "./footer";
import Todolist_And_Quote from "./todolist_And_Quote";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-300">
      <div className="flex flex-row flex-1">
        <Drawer />
        <Todolist_And_Quote />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;


// soit j'essaie de comprendre comment faire partager une seul etat entre deux composants pour pouvoir reagir lors du clic d'un de boutton du drawer 
//sinon j'essaie de construire la logique de l'etat de mon composant lorsque je clic sur done