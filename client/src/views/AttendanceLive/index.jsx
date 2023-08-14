import React from "react";
import FormAttendance from "./components/forms";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Index() {
  const [attandance, setAttandance] = useState(null);
  console.log(attandance);
  const token = localStorage.getItem("token");
  const nav = useNavigate();
  if (!localStorage.token) {
    nav("/");
  }
  const userAttandance = async () => {
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.get(
        `http://localhost:8000/attendance/history?sortOrder=desc&orderBy=attendanceId`,
        headers
      );
      setAttandance(res?.data?.attendanceHistory[0]);
    } catch (error) {}
  };
  useEffect(() => {
    userAttandance();
  }, []);

  return (
    <div className="attendanceLive">
      <button></button>
      <FormAttendance></FormAttendance>
      <div>
        <p className="font-semibold mb-4">Attendance Log</p>
        <div className="card-item-custom">
          {!attandance ? (
            ""
          ) : (
            <div className="card-item-custom">
              <div>
                <p className="font-semibold">{attandance?.clockIn}</p>
                <small className="font-medium">{attandance?.date}</small>
              </div>
              <div>
                <p className="font-semibold">Clock In</p>
              </div>
            </div>
          )}
          {!attandance?.clockOut ? (
            ""
          ) : (
            <div className="card-item-custom">
              <div>
                <p className="font-semibold">{attandance?.clockOut}</p>
                <small className="font-medium">{attandance?.date}</small>
              </div>
              <div>
                <p className="font-semibold">Clock Out</p>
              </div>
            </div>
          )}
          <div className="details-log">
            <Link to="/attandance-log">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
