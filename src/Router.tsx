import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayouts";
import { Initial } from "./pages/Initial";

export function Router() {
  return(
    <Routes >
      <Route  path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Initial />} />
      </Route>
    </Routes>
  )
}