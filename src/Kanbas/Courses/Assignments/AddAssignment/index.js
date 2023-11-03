import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, selectAssignment } from '../assignmentsReducer';

const AddAssignment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addAssignment({ ...assignment, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="mt-2">
      <label className="form-label">
        Assignment Name
        <input
          value={assignment.title}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, title: e.target.value }))
          }
          className="form-control"
        />
      </label>
      <textarea
        onChange={(e) =>
          dispatch(
            selectAssignment({ ...assignment, description: e.target.value })
          )
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
              dispatch(
                selectAssignment({ ...assignment, points: e.target.value })
              )
            }
            value={assignment.points}
            className="form-control"
          />
        </div>
      </div>
      <br />
      <div
        className="d-flex"
        style={{ marginTop: '20px', alignItems: 'center' }}
      >
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
                type="date"
                value={assignment.dueDate}
                onChange={(e) =>
                  dispatch(
                    selectAssignment({ ...assignment, dueDate: e.target.value })
                  )
                }
                className="form-control"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-4">
              <label htmlFor="availableFromDate">Available From</label>
              <input
                id="availableFromDate"
                type="date"
                value={assignment.availableFromDate}
                onChange={(e) =>
                  dispatch(
                    selectAssignment({
                      ...assignment,
                      availableFromDate: e.target.value,
                    })
                  )
                }
                className="form-control"
              />
            </div>

            <div className="col-4">
              <label htmlFor="availableUntilDate">Until</label>
              <input
                id="availableUntilDate"
                type="date"
                value={assignment.availableUntilDate}
                onChange={(e) =>
                  dispatch(
                    selectAssignment({
                      ...assignment,
                      availableUntilDate: e.target.value,
                    })
                  )
                }
                className="form-control"
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
};

export default AddAssignment;
