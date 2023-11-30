import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const DaysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Users: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const [selectedDay, setSelectedDay] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Check authentication status and redirect if not authenticated
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  const handleDayClick = (day: string) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day));
  };

  function TimeSlotsDropdown() {
    const timeSlots = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM'];

    return (
      <div className="time-slots-dropdown">
        {timeSlots.map((slot, index) => (
          <Link key={index} to={`/form/${selectedDay}/${slot}`}>
            <button>{slot}</button>
          </Link>
        ))}
      </div>
    );
  }

  // Render nothing if not authenticated or if still loading
  if (!isAuthenticated || isLoading) {
    return null;
  }

  return (
    <>
      <div className="h1Headers">
        <h1>OWNER WEEKLY CALENDAR!</h1>
      </div>
      {DaysOfWeek.map((day, index) => (
        <div key={index} className="day-container">
          <button onClick={() => handleDayClick(day)}>{day}</button>
          {selectedDay === day && <TimeSlotsDropdown />}
        </div>
      ))}
    </>
  );
};

export default Users;
