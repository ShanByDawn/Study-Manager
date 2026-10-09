import React from "react";
import { useState } from "react";
import StudyForm from "../components/StudyForm";
import StudyItem from "../components/StudyItem";

function StudyPlanner() {
  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities((prev) => [
      ...prev,
      { id: Date.now(), ...activity }
    ]);
  };

  const removeActivity = (id) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <section className="page">
      <h2>Study Planner</h2>

      <StudyForm onAddActivity={addActivity} />

      <p className="activity-count">
        Total activities: {activities.length}
      </p>

      {activities.length === 0 ? (
        <p className="empty-message">No study activities yet.</p>
      ) : (
        <ul className="activity-list">
          {activities.map((a) => (
            <StudyItem
              key={a.id}
              activity={a}
              onRemove={removeActivity}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default StudyPlanner;
