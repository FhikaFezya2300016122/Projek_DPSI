const WelcomeBanner = () => (
    <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-white p-6 md:p-8 rounded-2xl overflow-hidden">
        <div className="relative z-10">
            <h2 className="text-xl font-semibold">Hi, Olivia</h2>
            <p className="text-2xl md:text-3xl font-bold mt-1">Welcome to Englify!</p>
        </div>
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full"></div>
        <div className="absolute right-20 -bottom-16 w-32 h-32 bg-white/10 rounded-full"></div>
    </div>
);

// --- components/dashboard/StatCards.jsx ---
const StatCards = () => {
    const stats = [
        { value: '930', label: 'Point Reward' },
        { value: '1340', label: 'Point Achievement' },
        { value: '12', label: 'Total games played' },
    ];

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-around h-full">
            {stats.map((stat, index) => (
                <div key={stat.label} className={index < stats.length -1 ? 'mb-4' : ''}>
                    <p className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-500 mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default WelcomeBanner;