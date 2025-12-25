import React from 'react'
import SideBar from "./SideBar";
import Topnavbar from "./Topnavbar";
import Stat from "./Stat";
import Project from "./Project";
function Parent({children}) {
  return (
    <div class="layout">
      <SideBar />

      <main id="main">
        <Topnavbar />
        <Stat />
        {children}
      </main>
    </div>
  )
}

export default Parent
