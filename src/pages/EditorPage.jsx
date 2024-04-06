import React, { useState } from "react";
//import toast from 'react-hot-toast'
import "./editorPage.scss";
import logo from "../assets/logo.png";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { ChakraProvider } from "@chakra-ui/react";
// import { initSocket } from "../socket";
// import ACTIONS from "../Action";
// import {useLocation, useNavigate, Navigate, useParams} from 'react-router-dom'

// import theme from "./theme";

const EditorPage = () => {
//     const socketRef = useRef(null);
//     const location = useLocation();
//     const reactNavigate = useNavigate();

//     const {roomId} = useParams();

// // ? incase if we doesnt get username state it wont thorw the error
//     useEffect(() => {
//       const init = async () => {
//         socketRef.current = await initSocket();
//         socketRef.current.on('connect_error', (err)=> handleErrors(err));
//         socketRef.current.on("connect_failed", (err) => handleErrors(err));

//         function handleErrors(e) {
//           console.log('socket error', e);
//           toast.error('socket connection failed, try again later');
//           reactNavigate("/");
//         }

//         socketRef.current.emit(ACTIONS.JOIN, {
//           roomId,
//           username: location.state?.username,
//         });
//       };
//       init();

//     }, [])


  const [clients, setClients] = useState([
    { socketId: 1, username: "meghana" },
    { socketId: 2, username: "Ankit " },
    { socketId: 3, username: "shrinath" },
    { socketId: 4, username: "chaitanya" },
  ]);

  // if(!location.state) {
  //   return <Navigate />
  // }

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          {/* logo div */}
          <div className="logo">
            <img className="logoImage" src={logo} alt="logo" />
          </div>
          <h3 className="connected">Connected</h3>

          {/* participants div */}
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>

        <button className="btn copyBtn">Copy Room Id</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <ChakraProvider>
          <Editor />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default EditorPage;
