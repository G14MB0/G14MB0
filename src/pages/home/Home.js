
import "./index.css";
// const { ipcRenderer } = window.require("electron");
const uniqueKey = Date.now();
const iframeSrc = `https://my.spline.design/interactivesparkletterwithparticleeffectcopy-371a9aa1dd45ba33b88383284d7a637c/?key=${uniqueKey}`;

export default function Home() {
  // const { serverUrl, token } = useContext(AppContext);
  // const [name, setName] = useState("Home1")

  // useEffect(() => {
  //   ipcRenderer.send("say-hello", "hello!");

  //   ipcRenderer.once("hello", (event, response) => {
  //     console.log("ipcMain said:", response);
  //   });
  // }, []);

  return (
    <div className={"main dark:bg-slate-950"}>
      <div className="aspect-[7/4] dark:bg-slate-950">
        <iframe src={iframeSrc} frameborder='0' width='100%' height='100%'></iframe>
      </div>
    </div>
  );
}