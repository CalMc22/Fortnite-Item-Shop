function Profile({ username, email }) {
    return ( 
        <div className="profile">
            <h1 className='title'>PROFILE</h1>
            <p>
            Username: {username}
            <br />
            <br />
            Email: {email}
            </p>
        </div>
        
     );
}

export default Profile;