
const SportsItemCategories = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-center text-5xl font-extrabold">Sports Item Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <button className="btn btn-accent">Sports Shoe</button>
                <button className="btn btn-accent">Football</button>
                <button className="btn btn-accent">Tennis Racket</button>
                <button className="btn btn-accent">Bicycle</button>
            </div>
        </div>
    );
};

export default SportsItemCategories;