import Members from "./Members1.jsx"
import Student from "./Student.jsx"
import Team from './Team.jsx'
import Ayo from './assets/AYO.jpg'
import Matt from './assets/MATT.jpg'
import Abe from './assets/ABE.jpg'
import Abu from './assets/ABU.jpg'
import Omo from './assets/OMO.jpg'
import David from './assets/DAVID.jpg'

function App() {
  return (
    <>
      <Team/>
      
      {/* Pass the Instagram link dynamically */}
      <Members
        name="AyoBarede"
        age={21}
        mickeyStatus={false}
        image={Ayo}
        instagramLink="https://www.instagram.com/xthrow1/"
      />
      <Members
        name="Matthew"
        age={21}
        mickeyStatus={true}
        image={Matt}
        instagramLink="https://www.instagram.com/matthewgenaj/"
      />

      <Members
      name="Abe"
      age={21}
      mickeyStatus={false}
      image={Abe}
      instagramLink="https://www.instagram.com/baller.abe/"
      />

      <Members
      name="Abu"
      age="Unknown currently"
      mickeyStatus={false}
      image={Abu}
      instagramLink="https://www.instagram.com/mc_junior3/"
      />

      <Members
      name="Omo"
      age={21}
      mickeyStatus={false}
      image={Omo}
      instagramLink="https://www.instagram.com/_nolimitomo_/"
      />

      <Members
      name="David"
      age={20}
      mickeyStatus={true}
      image={David}
      instagramLink="https://www.instagram.com/david_og8/"
      />
      
    </>
  );
}

export default App;


//To access literals that are not strings, use {}