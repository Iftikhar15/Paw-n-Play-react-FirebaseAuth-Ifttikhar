import React from 'react';

const Profile = () => {
    return (
        <section className="max-w-2xl mx-auto p-4 rounded-2xl shadow-md bg-white dark:bg-violet-400 h-auto md:h-[600px] lg:h-[700px]">
            <div className="flex items-center space-x-6">
                <img
                    src="../assets/paw logo.png"
                    alt={`${name}'s profile`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">name</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">email</p>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">About</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2">bio</p>
            </div>
            <div className="mt-4 space-y-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">About</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">About:bio</p>
                </div>

                <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Contact Info</h4>
                    <p className="text-gray-700 dark:text-gray-300">Phone: phone</p>
                </div>

                <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Personal</h4>
                    <p className="text-gray-700 dark:text-gray-300">Birthday: birthday</p>

                </div>
            </div>
        </section>
    );
};

export default Profile;