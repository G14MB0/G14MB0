import Presentation from "./presentation/Presentation";
import AppProvider from "./provider/appProvider";

function App() {
  // useEffect(() => {
  //   localStorage.removeItem('myToken')
  // }, [])

  return (
    <div className="">
      <div>
        <Presentation />
      </div>
      <div className=" bg-gradient-to-r from-purple-700 to-pink-700 py-20 ">
        <div className="max-w-[1000px] mx-auto rounded-xl overflow-hidden mb-5 ring ring-indigo-500">
          <AppProvider />
        </div>
      </div>
    </div>
  );
}

export default App;
