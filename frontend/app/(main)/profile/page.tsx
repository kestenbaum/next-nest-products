import React, { memo } from 'react';
import ProfilePage from './ProfilePage';

const Page = memo(() => {
    return <ProfilePage />;
});

Page.displayName = 'ProfilePage';

export default Page;