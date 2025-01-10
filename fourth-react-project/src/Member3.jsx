
import Abe from './assets/ABE.jpg'

function Member3(props){

    const button = {
        backgroundcolor: "darkgray",
        color: "black", /*color of the text*/
        padding: "10px 80px", /*Padding */
        borderradius: "10px", /*border radius*/
        /*border: "none", /*border*/
        cursor: "pointer",
        margin: "auto", 
        display: "block", //centers the button
        float: "left",
   }

    return(
        <members3>
             <img className='abePic' src={Abe} alt= "Profile Picture"></img>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Mickey Badge: {props.mickeyStatus ? "Active" : "Not active"}</p>
                <button style={button} 
                onClick={() => window.open('https://www.instagram.com/baller.abe/', '_blank', 'noopener,noreferrer')}>
                Instagram</button>



        </members3>
    );
}

export default Member3;