import { useNavigate } from "react-router-dom";


function Drawer() {
const navigate = useNavigate();

  const handleClick = () => {
    navigate('/vitrine')
  };

  return (
    <div className="bg-slate-800  p-6 shadow-xl w-64 rounded-lg m-4 hidden md:block lg:block">
      <h2 className="text-xl font-bold mb-6 text-white">Drawer</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => handleClick(1)}
            className="block w-full p-3 bg-sky-600 text-white rounded-lg text-center font-semibold hover:bg-sky-700 transition duration-300"
          >
            Option 1
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(2)}
            className="block w-full p-3 bg-cyan-600 text-white rounded-lg text-center font-semibold hover:bg-cyan-700 transition duration-300"
          >
            Option 2
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(3)}
            className="block w-full p-3 bg-rose-600 text-white rounded-lg text-center font-semibold hover:bg-rose-700 transition duration-300"
          >
            Option 3
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(4)}
            className="block w-full p-3 bg-blue-600 text-white rounded-lg text-center font-semibold hover:bg-blue-700 transition duration-300"
          >
            Option 4
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Drawer;
