import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssignment, selectAssignment } from '../assignmentsReducer';

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const a = assignments.find((a) => a._id === assignmentId);
  const [assignment, setAssignment] = useState(a);

  const handleSave = () => {
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="mt-2">
      <label className="form-label">
        Assignment Name
        <input
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="form-control"
        />
      </label>
      <textarea
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        value={assignment.description}
        className="form-control"
      />
      <div className="row mt-3 align-items-center">
        <div className="col-auto" style={{ marginRight: '5px' }}>
          Points
        </div>
        <div className="col">
          <input
            onChange={(e) =>
              setAssignment({ ...assignment, points: e.target.value })
            }
            value={assignment.points}
            className="form-control"
          />
        </div>
      </div>
      <br />
      <div className=" d-flex style={{marginTop: '20px', alignItems: 'center'}}">
        <p style={{ marginRight: '10px' }}>Assign</p>
        <div
          className="container ms-2"
          style={{
            maxWidth: '600px',
            border: '1px solid #e0e0e0',
            padding: '20px',
            borderRadius: '5px',
          }}
        >
          <div className="row mt-2">
            <div className="col-10">
              <label htmlFor="dueDate">Due</label>

              <input
                id="dueDate"
                onChange={(e) =>
                  setAssignment({ ...assignment, dueDate: e.target.value })
                }
                type="date"
                value={assignment.dueDate}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-4">
              <label htmlFor="availableFromDate">Available From</label>

              <input
                id="availableFromDate"
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    availableFromDate: e.target.value,
                  })
                }
                type="date"
                value={assignment.availableFromDate}
              />
            </div>

            <div className="col-4">
              <label htmlFor="availableUntilDate">Until</label>

              <input
                id="availableUntilDate"
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    availableUntilDate: e.target.value,
                  })
                }
                type="date"
                value={assignment.availableUntilDate}
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="float-end me-3">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-light me-2"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
