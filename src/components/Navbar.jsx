function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <div className="logo-icon">D</div>
                <span>DormMarket</span>
            </div>

            <input className="navbar-search" type="text" placeholder="Search items..."/>

            <div className="navbar-buttons">
                <button>Browse</button>
                <button>Messages</button>
                <button>My Listings</button>
                <button className="list-button">+ List Item</button>
            </div>
        </nav>    
    );
}

export default Navbar;