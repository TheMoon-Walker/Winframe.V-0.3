function Drawer() {
    return (
      <div className="bg-gray-800 h-full p-6 shadow-xl w-64 rounded-lg m-4">
        <h2 className="text-xl font-bold mb-6 text-white">Drawer</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="block p-3 bg-sky-600 text-white rounded-lg text-center font-semibold hover:bg-sky-700 transition duration-300"
            >
              Option 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 bg-cyan-600 text-white rounded-lg text-center font-semibold hover:bg-cyan-700 transition duration-300"
            >
              Option 2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 bg-rose-600 text-white rounded-lg text-center font-semibold hover:bg-rose-700 transition duration-300"
            >
              Option 3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block p-3 bg-blue-600 text-white rounded-lg text-center font-semibold hover:bg-blue-700 transition duration-300"
            >
              Option 4
            </a>
          </li>
        </ul>
      </div>
    );
  }
export default Drawer;
