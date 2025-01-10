import Matt from './assets/MATT.jpg'

function Member2(props){

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
        <members2 className="pic">
             <img className="mattPic" src={Matt} alt= "Profile Picture"></img>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Mickey Badge: {props.mickeyStatus ? "Active" : "Not active"}</p>
                <button style={button} 
                onClick={() => window.open('https://www.instagram.com/matthewgenaj/', '_blank', 'noopener,noreferrer')}>
                Instagram</button>



        </members2>
    );
}

export default Member2;