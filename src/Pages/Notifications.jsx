import React from 'react';
import NotificationsSection from '../components/NotificationEmail';
import NotificationsSms from '../components/NotificationSms';

function Notifications() {
  return (
    <div>
      <NotificationsSection/>
      <NotificationsSms/>
    </div>
  );
}

export default Notifications;
