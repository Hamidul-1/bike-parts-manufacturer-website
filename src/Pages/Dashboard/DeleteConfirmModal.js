import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
    deletingProduct,
    setDeletingProduct,
    refetch,
}) => {
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/part/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Deleted");
                    setDeletingProduct(null);
                    refetch();
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-md text-red-500">
                        Are you sure want to delete ''{deletingProduct.name}'' ?
                    </h3>

                    <div class="modal-action">
                        <button
                            onClick={() => handleDelete(deletingProduct._id)}
                            className="btn btn-xs btn-error"
                        >
                            Delete
                        </button>
                        <label for="delete-confirm-modal" class="btn btn-xs btn-accent">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;