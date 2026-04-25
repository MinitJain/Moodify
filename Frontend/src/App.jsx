import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import "./features/shared/styles/global.scss"
import { SongContextProvider } from "./features/home/song.context"

function App() {

  return (
    <SongContextProvider>
      <RouterProvider router={router} />
    </SongContextProvider>
  )
}

export default App
