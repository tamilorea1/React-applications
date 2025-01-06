import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import SecondHeader from './SecondHeader.jsx'
function App(){

  return(
    <>
      <Header/>
      {/* <Food/> */}
      <SecondHeader/>
      <Footer/>
      
    </>
  );
}

export default App;

// An error would return if two elements are in the return function
//Therefore you need a fragment "<></>" to ensure it works accordingly
// fragment makes it look like there's one element.

// To comment inside of return, press ctrl + /