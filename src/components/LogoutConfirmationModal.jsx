// src/components/LogoutConfirmationModal.jsx
export default function LogoutConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
          {/* Ikon Logout */}
          <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Logout Confirmation</h3>
        <p className="text-gray-600 mb-6">
          You will be logged out from Englify. Make sure to save your progress.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-8 py-3 bg-red-50 text-red-500 font-bold rounded-lg hover:bg-red-100 transition-colors"
          >
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
}