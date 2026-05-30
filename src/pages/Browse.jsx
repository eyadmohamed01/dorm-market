import Navbar from "../components/Navbar";

function Browse() {
    return (
        <main>
            <Navbar />
            <section className="hero-section">
                
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Your personal marketplace
                </div>
                
                <h1>
                    Dorm<span className="hero-market">Market</span>
                </h1>
                
                <p>Buy & sell within your student residence</p>

                <input 
                  className="hero-search" 
                  type="text" 
                  placeholder="What are you looking for?"
                />
            
            </section>
        </main>
    );
}

export default Browse;