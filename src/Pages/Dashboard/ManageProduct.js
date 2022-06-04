
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const {
        data: parts,
        isLoading,
        refetch,
    } = useQuery("parts", () =>
        fetch('https://enigmatic-island-80715.herokuapp.com/part').then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="px-6 lg:px-12">
            <h2 className="text-xl py-2">Manage Products {parts.length}</h2>
            <div class="overflow-x-auto mt-2 lg:mt-5">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parts.map((part, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="avatar">
                                        <div class="w-20 rounded-xl">
                                            <img src={part.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{part.name.slice(0, 10)}...</td>
                                <td>{part.description.slice(0, 15)}...</td>
                                <td className="text-center">${part.price}</td>
                                <td className="text-center">{part.min}</td>
                                <td className="text-center">{part.quantity}</td>
                                <td>
                                    <label
                                        onClick={() => setDeletingProduct(part)}
                                        for="delete-confirm-modal"
                                        class="btn btn-xs btn-error"
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingProduct && (
                <DeleteConfirmModal
                    key={deletingProduct._id}
                    deletingProduct={deletingProduct}
                    setDeletingProduct={setDeletingProduct}
                    refetch={refetch}
                ></DeleteConfirmModal>
            )}
        </div>
    );
};

export default ManageProduct;