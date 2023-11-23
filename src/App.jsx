import { BrowserRouter, Route ,Routes} from "react-router-dom"
import { PublicLayout } from "./components/layout"
import { Home } from "./pages/home"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<PublicLayout/>}>
      <Route path={'/'} element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
