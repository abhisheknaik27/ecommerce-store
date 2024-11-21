import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import AuthLogin from "./pages/auth/AuthLogin"
import AuthRegister from "./pages/auth/AuthRegister"

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <h1>HEADER</h1>

      <Routes>
        <Route path="/auth"  element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
