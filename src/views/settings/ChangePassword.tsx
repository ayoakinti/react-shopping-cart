function ChangePassword() {
    return (
        <div className="">
        <form className="col-lg-8">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <input type="password" placeholder="Old Password" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <input type="password" placeholder="New Password" className="form-control"></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-4">
                <input type="password" placeholder="Confirm New Password" className="form-control"></input>
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
  
  export default ChangePassword;
  