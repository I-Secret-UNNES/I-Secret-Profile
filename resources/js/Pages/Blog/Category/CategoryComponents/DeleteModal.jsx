import React from 'react';

export default function DeleteModal({
    isModalOpen,
    closeModal,
    handleDelete,
    deleteId,
}) {
    const handleBackgroundClick = e => {
        if (e.target.classList.contains('modal-open')) {
            closeModal();
        }
    };

    return (
        <div
            className={`modal ${isModalOpen ? 'modal-open' : ''}`}
            onClick={handleBackgroundClick}
        >
            <div className='modal-box bg-white'>
                <h3 className='font-bold text-lg text-gray-700'>Confirm Deletion</h3>
                <p className='py-4 text-gray-700'>
                    Are you sure you want to delete the data?
                </p>
                <div className='modal-action'>
                    <button
                        className='btn bg-gray-300 hover:bg-gray-400 text-gray-700 border-none rounded-md shadow-md'
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        className='btn bg-primary hover:bg-red-600 text-white border-none rounded-md shadow-md'
                        onClick={() => handleDelete(deleteId)}
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
