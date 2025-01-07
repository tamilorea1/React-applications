import GA from './assets/Giannis antetokumpo.jpg'

function GACard(){

    return(
        <div className="GAcard">
                <img className ="GAcard-image" src = {GA} alt = "Profile picture"></img>
                <h2 className="GAcard-title">Giannis "Run and dunk" Antetokumpo</h2>
                <p className="GAcard-text">I am the Greek Freak. My team is full of nobodies plus dame. I may be cooked</p>
        </div>
    );
}

export default GACard;