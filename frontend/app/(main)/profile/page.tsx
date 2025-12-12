import React from 'react';
import ProfilePage from './ProfilePage';

async function getUserData() {
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
        id: 1,
        name: "Oleksii Vovnenko",
        email: "vovnenkoolekisii@gmail.com",
        registrationDate: "2025-12-10",
        avatarUrl: "/avatars/ivan.jpg"
    };
}

const Page = async () => {
    const userData = await getUserData();

    return (
        <ProfilePage
            id={userData.id}
            name={userData.name}
            email={userData.email}
            avatarUrl={userData.avatarUrl}
            registrationDate={userData.registrationDate}
        />
    );
};

export default Page;