export const StatusModal = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h3 className="text-lg font-semibold mb-4">Status Message</h3>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
