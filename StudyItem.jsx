import React from "react";

function StudyItem({ activity, onRemove }) {
  return (
    <li className="activity-item">
      <div>
        <h3>{activity.activityName}</h3>
        <p>Course: {activity.course}</p>
        <p>Priority: {activity.priority}</p>
      </div>

      <button
        className="btn-remove"
        onClick={() => onRemove(activity.id)}
      >
        Remove
      </button>
    </li>
  );
}

export default StudyItem;
