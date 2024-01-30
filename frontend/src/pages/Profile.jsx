function Profile({ username, email }) {
    return ( 
        <div>
            <h1>Profile</h1>
            <p>
            Welcome, {username}!
            <br />
            <br />
            email: {email}
            </p>
        </div>
        
     );
}

export default Profile;