import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { SchoolJourney } from "@/pages/SchoolJourney";
import { ObjectOrientedProgramming } from "@/pages/courses/ObjectOrientedProgramming";
import { ProgrammingLogicAndDesign } from "@/pages/courses/ProgrammingLogicAndDesign";
import { DataStructuresAndAlgorithm } from "@/pages/courses/DataStructuresAndAlgorithm";
import { SoftwareDesign } from "@/pages/courses/SoftwareDesign";
import { ComputerSystemsAndTroubleshooting } from "@/pages/courses/ComputerSystemsAndTroubleshooting";
import { ComputerApplication } from "@/pages/courses/ComputerApplication";
import { DataAndDigitalCommunication } from "@/pages/courses/DataAndDigitalCommunication";
import { Microprocessors } from "@/pages/courses/Microprocessors";
import { CognateTrackCourse1 } from "@/pages/courses/CognateTrackCourse1";
import { PracticeDesign1 } from "@/pages/courses/PracticeDesign1";
import { PracticeDesign2 } from "@/pages/courses/PracticeDesign2";
import { Internships } from "@/pages/courses/Internships";
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/school-journey" element={<SchoolJourney />} />
        <Route
  path="/school-journey/cpe-c102-object-oriented-programming"
  element={<ObjectOrientedProgramming />}
/>
<Route
  path="/school-journey/cpe-c103-programming-logic-and-design"
  element={<ProgrammingLogicAndDesign />}
/>
<Route
  path="/school-journey/cpe-c201-data-structures-and-algorithm"
  element={<DataStructuresAndAlgorithm />}
/>
<Route
  path="/school-journey/cpe-c202-software-design"
  element={<SoftwareDesign />}
/>
<Route
  path="/school-journey/cpe-c204-computer-systems-and-troubleshooting"
  element={<ComputerSystemsAndTroubleshooting />}
/>
<Route
  path="/school-journey/cpe-c205-computer-application"
  element={<ComputerApplication />}
/>
<Route
  path="/school-journey/cpe-c315-computer-application"
  element={<ComputerApplication />}
/>
<Route
  path="/school-journey/cpe-c303-data-and-digital-communication"
  element={<DataAndDigitalCommunication />}
/>
<Route
  path="/school-journey/cpe-c306-microprocessors"
  element={<Microprocessors />}
/>
<Route
  path="/school-journey/cpe-c403-practice-design-1"
  element={<PracticeDesign1 />}
/>
<Route
  path="/school-journey/cpe-c404-practice-design-2"
  element={<PracticeDesign2 />}
/>
<Route
  path="/school-journey/cpe-c402-internships"
  element={<Internships />}
/>
      </Routes>
    </div>
  );
}

export default App;