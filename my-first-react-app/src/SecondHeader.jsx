
function SecondHeader(){

    const link1 = "Join now";
    const link2 = "Contact the clubhouse"

    return(
        <secondHeader>
        <h1> Welcome to the clubhouse</h1>
        <ul>
            <li><a href = "#">{link1.toUpperCase()}</a></li>
            <li><a href = "#">{link2}</a></li>
        </ul>

        </secondHeader>
    );
}

export default SecondHeader;

