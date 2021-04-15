import { useSelector } from "react-redux";
import { AuthState } from "../../reducers/modules/authReducer";
import { AppState } from "../../reducers/rootReducer";

function EditProfile() {


  const { user } = useSelector<AppState, AuthState>((state) => state.auth);

  return (
    <div className="">
      <form className="col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input type="text" value={user?.name.firstName} className="form-control" readOnly></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input type="text" value={user?.name.firstName} className="form-control" readOnly></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-4">
              <input type="email" value={user?.email} disabled className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <button type="submit" className="auth-btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
