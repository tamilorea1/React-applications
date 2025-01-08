import Lebron from './assets/lebron james.png'

function Example(){

    const lebrontitle = {
        fontFamily: "Helvetica, sans-serif",
        fontSize: "20px",
        textAlign: "center",    //center aligns the text
        display: "block", //centers the text
    }

    const lebronimg = {
        maxwidth: "60%",
        height: "auto", 
        display: "block",
        margin: "auto", //centers the image
        borderRadius: "50%", //makes the image circular
        border: "3px solid black", //adds a border to the image
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", //adds a shadow to the image
        
    }

    const button = {
         backgroundcolor: "darkgray",
         color: "black", /*color of the text*/
         padding: "10px 80px", /*Padding */
         borderradius: "10px", /*border radius*/
         /*border: "none", /*border*/
         cursor: "pointer",
         margin: "auto", 
         display: "block", //centers the button
    }

    return(
        <example>
            <div>
                <img style={lebronimg} src={Lebron} alt = "Lebron James image"></img>
                <h1 style={lebrontitle}>Lebron James</h1>
                
                <button
                style={button}
                onClick={() => window.open('https://www.instagram.com/kingjames/', '_blank', 'noopener,noreferrer')}>
                More information about player
                </button>

{/* // The code above is the same as the code below just in a different format */}

{/* <a href="https://www.instagram.com/kingjames/" target="_blank" rel="noopener noreferrer">
  <button style={button}>More information about player</button>
</a> */}
   
            </div>

        </example>
    );
}

export default Example

// href attribute points to lebron's instagram page
// target attribute opens the link in a new tab
// rel attribute specifies the relationship between the current document and the linked document

