// drawer.jsx
import { useNavigate } from 'react-router-dom';

function Drawer() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-slate-800 p-6 shadow-xl w-64 rounded-lg m-4 hidden md:block lg:block">
      <h2 className="text-xl font-bold mb-6 text-white">Drawer</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => handleClick('/')}
            className="block w-full p-3 bg-sky-600 text-white rounded-lg text-center font-semibold hover:bg-sky-700 transition duration-300"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick('/vitrine')}
            className="block w-full p-3 bg-cyan-600 text-white rounded-lg text-center font-semibold hover:bg-cyan-700 transition duration-300"
          >
            Vitrine
          </button>
        </li>
        {/* Ajoute d'autres options ici */}
      </ul>
    </div>
  );
}

export default Drawer;
