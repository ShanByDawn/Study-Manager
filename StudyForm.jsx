import React from "react";
import { useState } from "react";

function StudyForm({ onAddActivity }) {
  const [activityName, setActivityName] = useState("");
  const [course, setCourse] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!activityName.trim() || !course.trim()) return;

    onAddActivity({
      activityName,
      course,
      priority
    });

    setActivityName("");
    setCourse("");
    setPriority("Medium");
  };

  return (
    <form className="activity-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Activity Name</label>
        <input
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          placeholder="Read chapter 5"
        />
      </div>

      <div className="form-row">
        <label>Course</label>
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="COMP 101"
        />
      </div>

      <div className="form-row">
        <label>Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <button className="btn-primary">Add Activity</button>
    </form>
  );
}

export default StudyForm;
