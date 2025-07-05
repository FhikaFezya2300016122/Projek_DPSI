// src/components/puzzle/DropZone.jsx
import { useDroppable } from '@dnd-kit/core';

// Ini untuk area jawaban tempat menaruh kata
export default function DropZone({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`p-2 border-2 border-dashed rounded-lg min-h-[60px] flex items-center justify-center transition-colors ${
        isOver ? 'bg-teal-100 border-teal-400' : 'bg-gray-100 border-gray-300'
      }`}
    >
      {children}
    </div>
  );
}