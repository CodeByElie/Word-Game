import { Send } from "lucide-react";
import { useEffect } from "react";

function App() {
  const wordSize = 6;

  return (
    <div className="h-screen grid place-content-center bg-gray-100">
      <div className="rounded-xl shadow-lg bg-white p-10 grid gap-10">
        <div className={`grid grid-cols-6 gap-3 overflow-scroll max-h-87`}>
          {Array.from({ length: wordSize * 6 }).map((_, i) => (
            <div key={i} className="w-15 h-15 rounded-xl bg-gray-100"></div>
          ))}
        </div>
        <div className="flex gap-3">
          <input type="text" className="w-10/12 h-15 p-3 inset-shadow-sm focus:outline-none bg-gray-50 rounded-xl" placeholder="Word..."/>
          <button className="w-2/12 h-15 bg-red-400 rounded-xl place-content-center grid cursor-pointer">
            <Send className=" size-7 text-white"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
