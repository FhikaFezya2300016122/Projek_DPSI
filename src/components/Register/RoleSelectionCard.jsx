export default function RoleSelectionCard({ role, selectedRole, onSelect }) {
  const isSelected = selectedRole === role.id;

  return (
    <button
      type="button"
      onClick={() => onSelect(role.id)}
      className={`flex flex-col items-center px-6 py-8 border rounded-xl transition-all ${
        isSelected ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="relative mb-4">
        <img
          src={role.img}
          alt={role.title}
          className="h-20 w-20 rounded-full object-cover"
        />
        <span
          className={`absolute top-0 right-0 h-5 w-5 rounded-full border-2 ${
            isSelected ? 'bg-green-500 border-green-500' : 'border-gray-300'
          }`}
        ></span>
      </div>

      <h3 className="font-semibold text-lg text-gray-800">{role.title}</h3>
      <p className="text-sm text-gray-500 text-center mt-1">{role.description}</p>
    </button>
  );
}
