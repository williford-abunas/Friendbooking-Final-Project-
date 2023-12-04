import { useNavigate } from 'react-router-dom'

export default function OwnerDashboard() {
  const navigate = useNavigate()
  const handleReturnClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    navigate('/owner')
  }
  return (
    <>
      <div className="h1Headers">
        <h1>MY DASHBOARD!</h1>
      </div>
      <div>
        <ul id="ownerDashboardList">
          <li>
            <div id="ownerDashboardDateBox">
              <div className="ownerDashboardDateBoxDateBlock">
                <div className=" ownerDashboardDateBoxTitle ">
                  <b className="word-styling">Date:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">14/11/2023</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">Start Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">12.00pm</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">End Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">13.00pm</div>
              </div>
            </div>

            <div id="ownerDashboardDescription">
              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Meeting:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">Ming</div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Appointment:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">
                  Out For Lunch
                </div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Description:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent ownerDashboardDescriptionContentDescription">
                  It has been a while since we catch up. sadlkja asda sdasd asda
                  dsad asd asda sdasdasd asdasd asda dsa asdasd asdasda asd
                  asdasd asd jkh kjh kjh kjhkjhkjh kjh kjh kjh kjh kjhkjh
                </div>
              </div>
            </div>
            <button className="delete-button">Delete</button>
          </li>
          <li>
            <div id="ownerDashboardDateBox">
              <div className="ownerDashboardDateBoxDateBlock">
                <div className=" ownerDashboardDateBoxTitle">
                  <b className="word-styling">Date:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">14/11/2023</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">Start Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">12.00pm</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">End Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">13.00pm</div>
              </div>
            </div>

            <div id="ownerDashboardDescription">
              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Meeting:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">Ming</div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Appointment:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">
                  Out For Lunch
                </div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Description:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent ownerDashboardDescriptionContentDescription">
                  It has been a while since we catch up. sadlkja asda sdasd asda
                  dsad asd asda sdasdasd asdasd asda dsa asdasd asdasda asd
                  asdasd asd jkh kjh kjh kjhkjhkjh kjh kjh kjh kjh kjhkjh
                </div>
              </div>
            </div>
            <button className="delete-button">Delete</button>
          </li>
          <li>
            <div id="ownerDashboardDateBox">
              <div className="ownerDashboardDateBoxDateBlock">
                <div className=" ownerDashboardDateBoxTitle">
                  <b className="word-styling">Date:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">14/11/2023</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">Start Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">12.00pm</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">End Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">13.00pm</div>
              </div>
            </div>

            <div id="ownerDashboardDescription">
              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Meeting:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">Ming</div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Appointment:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">
                  Out For Lunch
                </div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Description:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent ownerDashboardDescriptionContentDescription">
                  It has been a while since we catch up. sadlkja asda sdasd asda
                  dsad asd asda sdasdasd asdasd asda dsa asdasd asdasda asd
                  asdasd asd jkh kjh kjh kjhkjhkjh kjh kjh kjh kjh kjhkjh
                </div>
              </div>
            </div>
            <button className="delete-button">Delete</button>
          </li>
          <li>
            <div id="ownerDashboardDateBox">
              <div className="ownerDashboardDateBoxDateBlock">
                <div className=" ownerDashboardDateBoxTitle">
                  <b className="word-styling">Date:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">14/11/2023</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">Start Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">12.00pm</div>
              </div>

              <div className="ownerDashboardDateBoxDateBlock">
                <div className="ownerDashboardDateBoxTitle">
                  <b className="word-styling">End Time:</b>{' '}
                </div>
                <div className="ownerDashboardDateBoxContent">13.00pm</div>
              </div>
            </div>

            <div id="ownerDashboardDescription">
              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Meeting:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">Ming</div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Appointment:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent">
                  Out For Lunch
                </div>
              </div>

              <div className="ownerDashboardDateBoxDescriptionBlock">
                <div className="ownerDashboardDescriptionTitle">
                  <b className="word-styling">Description:</b>{' '}
                </div>
                <div className="ownerDashboardDescriptionContent ownerDashboardDescriptionContentDescription">
                  It has been a while since we catch up. sadlkja asda sdasd asda
                  dsad asd asda sdasdasd asdasd asda dsa asdasd asdasda asd
                  asdasd asd jkh kjh kjh kjhkjhkjh kjh kjh kjh kjh kjhkjh
                </div>
              </div>
            </div>
            <button className="delete-button">Delete</button>
          </li>
        </ul>
      </div>
      <button className="calendar-return" onClick={handleReturnClick}>
        Return to My Calendar
      </button>
    </>
  )
}
