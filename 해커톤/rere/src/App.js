import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Join from "./Pages/join";
import Main from "./Pages/main";
import Recommended from "./Pages/recommended";
import Wallpaper from "./CategoryPages/Wallpaper";
import Furniture from "./CategoryPages/Furniture";
import Candle from "./CategoryPages/Candle";
import Light from "./CategoryPages/Light";
import Plant from "./CategoryPages/Plant";
import Pet from "./CategoryPages/Pet";
import Chat from "./Pages/chat";
import Community from "./Pages/community";
import MyPage from "./Pages/myPage";
import PsyTest from "./Pages/psyTest";
import Interior from "./CategoryPages/Interior";
import Fabric from "./CategoryPages/Fabric";
import HouseHoldGoods from "./CategoryPages/HouseHoldGoods";
import DetailsConsumer from "./DetailPages/DetailConsumer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/recommended/wallpaper" element={<Wallpaper />} />
        <Route path="/recommended/furniture" element={<Furniture />} />
        <Route path="/recommended/candle" element={<Candle />} />
        <Route path="/recommended/light" element={<Light />} />
        <Route path="/recommended/plant" element={<Plant />} />
        <Route path="/recommended/pet" element={<Pet />} />
        <Route path="/recommended/interior" element={<Interior />} />
        <Route path="/recommended/fabric" element={<Fabric />} />
        <Route
          path="/recommended/houseHoldGoods"
          element={<HouseHoldGoods />}
        />
        <Route path="/psytest" element={<PsyTest />} />
        <Route path="/details/:id" element={<DetailsConsumer />} />
      </Routes>
    </Router>
  );
}

export default App;
