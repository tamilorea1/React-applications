//We leanrt conditionals here.
// We should lean towards using ternary operators, as it  makes it
// easier to read and understand.


import PropTypes from 'prop-types'

function UserGreeting(props){

    // think of these like variables
    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt
                    
    );
}

//These are for debugging purposes where it ensures the types input by the user are correct
UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username: PropTypes.string,
}

//These are the default settings in case there's no username or nobody is logged in
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;