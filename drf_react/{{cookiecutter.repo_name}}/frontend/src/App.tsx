import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ConfigProvider, theme } from "antd";
import { useAppSelector } from "./redux/hooks";

export default function App() {
  const { mode } = useAppSelector((state) => state.auth);
  const { darkAlgorithm, defaultAlgorithm } = theme;
  return (
    <ConfigProvider theme={{ algorithm: mode == "dark" ? darkAlgorithm : defaultAlgorithm }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}
