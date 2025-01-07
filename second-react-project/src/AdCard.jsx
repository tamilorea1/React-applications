import AD from './assets/anthony davis.jpg'

function AdCard(){

    return(
        <div className="Adcard">
                <img className ="Adcard-image" src = {AD} alt = "Profile picture"></img>
                <h2 className="Adcard-title">Anthony "Day to Day" Davis</h2>
                <p className="Adcard-text"> I am the King's sidekick. I should've taken over years ago but I'm here now</p>
        </div>
    );
}

export default AdCard;