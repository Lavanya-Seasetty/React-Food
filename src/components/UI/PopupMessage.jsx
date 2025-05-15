import { useEffect } from 'react';

export default function PopupMessage({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup-message">
      {message}
    </div>
  );
}
