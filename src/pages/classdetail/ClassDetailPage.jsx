// src/pages/classdetail/ClassDetailPage.jsx
import React, { useState } from 'react';
import ClassLeaderboard from '../classdetail/ClassLeaderboard';
import { HiArrowLeft, HiChevronRight } from 'react-icons/hi';
import { useNavigate, Link } from 'react-router-dom'; // <-- Impor Link
import PostCard from '../classdetail/PostCard'; // <-- Impor komponen baru
import AssignmentView from '../classdetail/AssignmentView';
import PeopleView from '../classdetail/PeopleView';

// Data Contoh untuk Postingan
const mockPosts = [
    {
        id: 1,
        title: 'Assignment Session 3, Phase 3',
        content: 'Lorem ipsum dolor sit amet consectetur. Lorem viverra facilisi quis tincidunt arcu. Faucibus accumsan dignissim ut tortor semper.',
        authorName: 'Teacher Salsabila',
        authorAvatar: 'https://i.pravatar.cc/150?u=salsabila',
        timestamp: '1hr ago',
        commentCount: 21,
        // PERBARUI DATA GAME DI SINI
        game: { 
            title: 'Body word structure', 
            type: 'Puzzle',
            difficulty: 'Easy, 10 Questions',
            plays: '125k Plays'
        }
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur.',
        content: 'Lorem ipsum dolor sit amet consectetur. Lorem viverra facilisi quis tincidunt arcu. Faucibus accumsan dignissim ut tortor semper.',
        authorName: 'Teacher Salsabila',
        authorAvatar: 'https://i.pravatar.cc/150?u=salsabila',
        timestamp: '5day ago',
        commentCount: 14,
        game: null
    }
];



const ClassDetailPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Forum');
  const tabs = ['Forum', 'Assignment', 'People'];

  return (
    <div className="space-y-6">
      
      {/* Header Halaman */}
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
          <HiArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Class 7c</h1>
      </div>

      {/* Breadcrumbs (PERUBAHAN DI SINI) */}
      <nav className="text-sm font-semibold text-gray-500 flex items-center gap-1.5">
        <Link to="/classroom" className="hover:text-gray-800 hover:underline">Classroom</Link>
        <HiChevronRight className="w-4 h-4" />
        <span className="text-gray-800">Class 7c</span>
      </nav>

      {/* Navigasi Tab */}
      <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-full w-max">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab ? 'bg-teal-500 text-white shadow-md' : 'text-gray-600 hover:bg-white'}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Area Konten */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'Forum' && (
            <>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-500">announce something to your class</p>
              </div>
              {mockPosts.map(post => ( <PostCard key={post.id} post={post} /> ))}
            </>
          )}
          {activeTab === 'Assignment' && ( <AssignmentView /> )}
          {activeTab === 'People' && ( <PeopleView /> )}
        </div>
        <div className="lg:col-span-1">
          <ClassLeaderboard />
        </div>
      </div>
    </div>
  );
};

export default ClassDetailPage;