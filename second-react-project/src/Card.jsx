import Lebron from './assets/lebron james.png'

function Card(){

    return(
        <div className="card">
                <img className ="card-image" src = {Lebron} alt = "Profile picture"></img>
                <h2 className="card-title">Lebron "King" James</h2>
                <p className="card-text">I am the kid from <strong>Akron</strong>, and I need some help from this sorry franchise </p>
        </div>
    );
}

export default Card;

// to copy a url of an image, right click and press copy image address.
// alt = "", will show an alternate text if the image can't be displayed