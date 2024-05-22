



 function Dashbord (){


  return(
  <div className="  bg-slate-400  h-full  m-4  shadow-2xl  w-40">
    <ul className="space-y-16 h-10 w-6">
        <li>
          <a href="#" className="block p-2 bg-blue-900 rounded hover:bg-red-200">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">
            Courses
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">
            Students
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">
            Teachers
          </a>
        </li>
        </ul>
    </div>)
}


export default Dashbord;