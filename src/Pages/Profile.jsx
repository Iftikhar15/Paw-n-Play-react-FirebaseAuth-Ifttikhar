import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user } = useContext(AuthContext);    
    const [name, setName] = useState('');
    const [photoURL, setPhotoUrl] = useState('');
    

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoUrl(user.photoURL || '');
        }
    }, [user]);

    const handleUpdateInfo = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL,
            });
             toast.success("Profile Updated successfully", {
                                      position: "top-right",
                                      autoClose: 4000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      theme: "light",
                                    });
            window.location.reload();
        } catch (error) {
            console.error('Update failed:', error);
             toast.error("Profile Update failed", {
                                      position: "top-right",
                                      autoClose: 4000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                      draggable: true,
                                      theme: "light",
                                    });
        }
    };

    if (!user) return <p className="text-center mt-10">Loading user...</p>;

    return (
        <section className="max-w-2xl mx-auto my-10 p-4 rounded-2xl shadow-md bg-white dark:bg-violet-400 h-auto md:h-[600px] lg:h-[700px]">
            <div className="flex items-center space-x-6">
                <img
                    src={user?.photoURL || "../assets/paw logo.png"}
                    alt={`${name}'s profile`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{user?.displayName}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
                </div>
            </div>

            <form onSubmit={handleUpdateInfo} className="mt-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                <input
                    type="text"
                    name="name"
                    className="input w-1/2 mt-1"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="block text-sm font-medium text-gray-700 mt-4 dark:text-white">Photo URL</label>
                <input
                    type="text"
                    name="PhotoURL"
                    className="input w-1/2 mt-1"
                    placeholder="PhotoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                />

                <button type="submit" className="btn btn-neutral mt-4 hover:bg-violet-700 flex flex-1">Update</button>
            </form>

            
        </section>
    );
};

export default Profile;
