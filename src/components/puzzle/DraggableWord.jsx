// src/components/puzzle/DraggableWord.jsx
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

// Ini untuk kata-kata yang bisa di-drag dari bank kata
export default function DraggableWord({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-3 bg-cyan-200 rounded-lg text-center font-semibold cursor-grab"
    >
      {children}
    </div>
  );
}