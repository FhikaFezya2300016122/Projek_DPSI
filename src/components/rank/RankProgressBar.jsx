import React from 'react';

// Komponen ini menampilkan progress bar di bagian atas halaman Rank
const RankProgressBar = ({ userPoints, ranks }) => {
    
    // Temukan rank pengguna saat ini
    let currentRankIndex = 0;
    for (let i = ranks.length - 1; i >= 0; i--) {
        if (userPoints >= ranks[i].points_required) {
            currentRankIndex = i;
            break;
        }
    }

    return (
        <div className="w-full px-4 md:px-8 py-6">
            <div className="flex items-center justify-between">
                {ranks.map((rank, index) => (
                    <React.Fragment key={rank.name}>
                        {/* Node (lingkaran) untuk setiap rank */}
                        <div className="flex flex-col items-center z-10">
                            <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${index <= currentRankIndex ? 'bg-white border-green-500' : 'bg-gray-200 border-gray-300'}`}>
                                {index <= currentRankIndex && (
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                )}
                            </div>
                        </div>
                        
                        {/* Garis penghubung antar node */}
                        {index < ranks.length - 1 && (
                            <div className={`flex-1 h-1 transition-colors duration-500 ${index < currentRankIndex ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default RankProgressBar;
