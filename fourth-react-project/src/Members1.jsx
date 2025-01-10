import Ayo from './assets/AYO.jpg'
import Matt from './assets/MATT.jpg'

function Members(props) {
    const containerStyle = {
      display: "flex", //flexbox layout
      flexDirection: "column", // Align items vertically
      alignItems: "flex-start", // Align items to the left
      marginBottom: "20px", // Add spacing between members
    };
  
    const imageStyle = {
      width: "150px", // Adjust size as needed
      marginBottom: "10px", // Add spacing below the image
    };
  
    const buttonStyle = {
      backgroundColor: "darkgray", //button background color
      color: "black", // Color of the text
      padding: "10px 80px", // Padding
      borderRadius: "10px", // rounds the buttons edges
      cursor: "pointer", // make the button clickable
    };
  
    return (
      <div style={containerStyle}>
        <img style={imageStyle} src={props.image} alt="Profile Picture" />
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Mickey Badge: {props.mickeyStatus ? "Active" : "Not active"}</p>
        <button
          style={buttonStyle}
          onClick={() =>
            window.open(props.instagramLink, "_blank", "noopener,noreferrer")
          }
        >
          Instagram
        </button>
      </div>
    );
  }
  
  export default Members;
  

  //In line 5 & 6 display: "flex" and flexDirection:"column" make the format stack vertically
  //format : Image, text, button.


  //In line 34, you can use props for different links
  //In our case we used props.instagramLink to generalize it, making attaching different instagrams easier.
