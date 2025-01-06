
function Header(){
    return(
        <header> 
            <h1>Lone's mickey website</h1>
            <nav>
                <ul>
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Services</a></li>
                </ul>    
            </nav>
            <hr></hr>       
        </header>// this is the closing header tag (element) in HTML
    );
    
}

export default Header;
//always export the component (Header) so that it can be imported in other files

//<h1>My website</h1> prints out "my website"
//This format <li><a href = "#">Home</a></li> Gives Home a hyperlink
// Give a horizontal rule at the bottom of the website
