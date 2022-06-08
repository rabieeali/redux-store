import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: '#152238',
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: '#26c6da',
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" exact element={<ProductDetail />} />
          <Route path="*" element={<p>PAGE NOT FOUND!</p>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
