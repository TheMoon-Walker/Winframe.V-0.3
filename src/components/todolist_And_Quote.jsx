import Todolist from "./toDoList";
import Quote from "./quote";
export default function Todolist_And_Quote() {



    return(
        <div className="flex flex-col flex-1 bg-slate-400">
        <div className="bg-orange-300 lg:h-32 h-40">
          <Quote />
        </div>

        <div className="bg-slate-500 flex-1">
          <Todolist />
        </div>
      </div>
    )
}
