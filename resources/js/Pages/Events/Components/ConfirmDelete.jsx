import { router } from "@inertiajs/react";
import React from "react";

const ConfirmDelete = ({ setShowConfirm, eventProps }) => {

    const handleDelete = () => {
        router.post(`/admin/events/${eventProps.id}/delete`, {
            _method: "delete",
        }, {
            onSuccess: () => {
                setShowConfirm(false);
            }
        })
    }

    return (
    <section className="w-full fixed left-0 top-0 flex flex-col justify-center items-center h-screen">
        <div 
            className="w-full fixed bg-black bg-opacity-10 left-0 top 0 h-screen"
            onClick={() => setShowConfirm(false)}></div>
        <div className="bg-white relative rounded-md">
            <header className="border-b py-2 px font-bold text-xl text-center text-black">Confirmation</header>
            <div className="p-6 text-black">
                <h4>Are you sure you want to delete this event?</h4>

                <div className="flex gap-4 mt-5 justify-end items-center">
                    <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-md"
                    onClick={handleDelete}>Delete</button>
                    <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md"
                    onClick={() => setShowConfirm(false)}>Cancel</button>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ConfirmDelete;