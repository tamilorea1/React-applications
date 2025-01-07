import JT from './assets/Jayson tatum.jpg'

function JTCard(){

    return(
        <div className="JTcard">
                <img className ="JTcard-image" src = {JT} alt = "Profile picture"></img>
                <h2 className="JTcard-title">Jayson "Aura farming" Tatum</h2>
                <p className="JTcard-text">Look at me I'm Jayson Tatum, I'm 6'10, lightskin, a millionaire, a champion, and I have a kid with Ella Mai. I hate you.</p>
        </div>
    );
}

export default JTCard;