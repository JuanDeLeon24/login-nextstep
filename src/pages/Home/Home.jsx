import React from "react";

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <h1>Login successful!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Home;