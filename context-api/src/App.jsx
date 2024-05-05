import Login from "./comp/login"
import Profile from "./comp/profile"
import UserContextProvider from "./context/userContextProvider"


function App() {
  return (
    <UserContextProvider>
     <h1>Hi Danish</h1>
     <Login/>
     <Profile/>

    </UserContextProvider>
  )
}

export default App