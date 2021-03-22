import { useEffect } from 'react';
import { io } from "socket.io-client";


const App = () => {
  useEffect(() => {
    const msgData = {
      id: 1,
      sender_id: 50,
      msg: "Hi there,"
    }
    const socket = io("http://localhost:3001");
    socket.emit("message", msgData);


    socket.on("message", (msg) => {
      console.log(msg);
    })

  }, [])
  return (
    <div className="App">
      React app
    </div>
  );
}

export default App;
