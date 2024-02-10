import React, { createContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Home from "../pages/home/Home";
import Studio from "../pages/Studio/Studio";
import Setting from "../pages/setting/Setting";
import Header from "../components/Header";

import FullOverlay from "../components/overlay/FullOverlay";
import { ReactFlowProvider, useEdgesState, useNodesState } from "reactflow";
import Presentation from "../presentation/Presentation";
import { debounce } from "@mui/material";
import ImageWithText from "../presentation/components/ImageWithText";
import { ScreenRotationRounded } from "@mui/icons-material";
import TechFeatures from "../presentation/components/TechFeatures";
import Footer from "../presentation/components/Footer";


export const AppContext = createContext();

const initialNodes = [];
const initialEdges = [];

export default function AppProvider() {
  //The app state, used by header to change the main state
  const [appState, setAppState] = useState("Home");
  //A global state to handle the eventual server URL and port
  const [localServerUrl, setLocalServerUrl] = useState("127.0.0.1");
  const [localServerPort, setLocalServerPort] = useState("12345");

  //Login state
  const [isLogged, setIsLogged] = useState(false);
  //used to set the JWT token
  const [reload, setReload] = useState(false);
  const [sideBarReload, setSideBarReload] = useState(null);
  const [componentReload, setComponentReload] = useState(null);

  //used to open the login and signup form
  const [openLogin, setOpenLogin] = useState(false);
  const [OpenSignUp, setOpenSignUp] = useState(false);

  // Open/Close the full overlay
  const [overlay, setOverlay] = useState(false);
  // State variable to hold the component to be rendered in FullOverlay
  const [overlayComponent, setOverlayComponent] = useState({
    Component: null,
    props: {}, // Initial props (empty object or some default props)
  });

  // used as a global state for saving to backend
  const [save, setSave] = useState(false)
  const [fileUsed, setFileUsed] = useState("")

  // Global Debug mode State
  const [isDebug, setIsDebug] = useState(false)

  // Global Running state
  const [isRunning, setIsRunning] = useState(false);

  // Global state for nodes and edges used in reactFlow
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // History state to keep track of past node and edge states
  const [history, setHistory] = useState({ nodes: [], edges: [], currentIndex: -1 });

  // used to mantain a ws in a state globally
  const [globalWs, setGlobalWs] = useState(null);
  const [activeNode, setActiveNode] = useState({});


  const [isDark, setIsDark] = useState(false);





  //sono tutte le mie 'pagine'
  const cmpByState = {
    Home: <Home />,
    Studio: <Studio />,
    Settings: <Setting />
  };


  const [show, setShow] = useState(false);
  const scrollDivRef = useRef(null);

  const handleScroll = () => {
    if (scrollDivRef.current.scrollTop > 500 && scrollDivRef.current.scrollTop < 1200) { // Use scrollTop of the div
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    const scrollDiv = scrollDivRef.current;
    if (scrollDiv) {
      scrollDiv.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    // Defined the ReactFlowProvider Here to have access to its state everywhere in the appContext
    <div ref={scrollDivRef} id="scrollableDiv" className="overflow-scroll scolatela h-[100vh]">
      <div className="h-[1100px] sm:h-[600px]">
        <Presentation />
      </div>
      <div className="sm:my-[250px]">
        <div className="sm:h-[400px]  bg-gradient-to-bl from-purple-900 to-blue-700 py-20 flex items-center justify-center relative">
          <span className="absolute backdrop-blur-xl top-[-100px] w-full  sm:h-[600px]"></span>
          <div className={`hidden sm:block fixed mx-4 text-center top-8 p-1 px-6 z-50 bg-indigo-700 text-gray-200  text-sm rounded-full shadow-lg transition-opacity duration-500 ${show ? 'opacity-80' : 'opacity-0'}`}>
            {show &&
              <>
                This is a demonstration version and requires integration with its backend to function fully!
                <a href="https://github.com/G14MB0/VisualCoding_backend_public" className=" pl-2 font-semibold text-indigo-200">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Discover More <span aria-hidden="true">&rarr;</span>
                </a>
              </>
            }
          </div>
          <div id="VisualCoding" className="z-10 max-w-[1100px] mx-auto rounded-xl overflow-hidden ring ring-indigo-500 w-full mx-2 sm:mx-10 hidden sm:block">
            <ReactFlowProvider>
              <AppContext.Provider
                value={{
                  appState,
                  setAppState,
                  isLogged,
                  setIsLogged,
                  reload,
                  setReload,
                  openLogin,
                  setOpenLogin,
                  OpenSignUp,
                  setOpenSignUp,
                  localServerUrl,
                  setLocalServerUrl,
                  localServerPort,
                  setLocalServerPort,
                  overlay,
                  setOverlay,
                  overlayComponent,
                  setOverlayComponent,
                  save,
                  setSave,
                  fileUsed, setFileUsed,
                  sideBarReload, setSideBarReload,
                  componentReload, setComponentReload,
                  isDebug, setIsDebug,
                  setIsRunning, isRunning,
                  nodes, setNodes, onNodesChange,
                  edges, setEdges, onEdgesChange,
                  history, setHistory,
                  globalWs, setGlobalWs,
                  activeNode, setActiveNode,
                  isDark, setIsDark,
                }}
              >
                <Header />
                <FullOverlay
                  Component={overlayComponent.Component}
                  {...overlayComponent.props}
                />
                {cmpByState[appState]}
              </AppContext.Provider>
            </ReactFlowProvider>
          </div>
          <div className="sm:hidden">
            <div className='m-0 flex flex-col items-center justify-center'>
              <div className="text-center sm:text-right">
                <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-4xl ">
                  Optimized for Big Screen.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  our platform transforms programming into a unique visual experience: build, create, and connect without writing a single line of code, exclusively on expansive screens.
                </p>
                <div className="text-gray-200 mt-8 animate-bounce">
                  <ScreenRotationRounded />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <ImageWithText />
        <TechFeatures />
        <Footer />
      </div>
    </div>
  );
}
