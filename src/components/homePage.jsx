//homepage.jsx

import Todolist_And_Quote from "./todolist_And_Quote";
import Drawer from "./Drawer";
import Footer from "./Footer";
export default function HomePage() {
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


//switcher entre les pages tout en gardant le drawer intact (switcher entre les composant c'est a dire remplacer un par un autre)
//creer une page qui affiches les taches achever , date de creation mettre une option en haut qui permet de les filtrer par dates (semamines, mois, jour)