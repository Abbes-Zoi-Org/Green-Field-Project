<nav className="navbar navbar-expand-lg bg-orange">
<div className="container-fluid">
  <ul><Link to={"/"} className="navbar-brand active c-white">Calories Tracker</Link></ul>
  {currentUser ? (
  <div className="collapse navbar-collapse" id="caloriesTracker">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
      <li className="nav-item dropdown">
        <p className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Days
        </p>
        <ul className="dropdown-menu">
          <li>
            <Link to={"/meals"} className="dropdown-item">Monday</Link>
          </li>
          <li>
            <Link to={"/meals"} className="dropdown-item">Tuesday</Link>
          </li>
          <li>
            <Link to={"/meals"} className="dropdown-item">Wednesday</Link>
          </li>
          <li>
            <Link to={"/meals"} className="dropdown-item">Thursday</Link>
          </li>
          <li>
            <Link to={"/meals"} className="dropdown-item">Friday</Link>
          </li>
          <li>
            <Link to={"/meals"} className="dropdown-item">Saturday</Link>
          </li>
          <li>
            <Link to={"/meals"} className="dropdown-item">Sunday</Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link to={"/profile"} className="nav-link">
          <Profile />
        </Link>
      </li>
      <li className="nav-item">
        <Link to={"/user"} className="nav-link">
          <User />
        </Link>
      </li>
      <li className="nav-item">
        <Link href={"/login"} className="nav-link" onClick={logOut}>LogOut</Link>
      </li>
    </ul>
  </div>
) : (
  <div className="navbar-nav ml-auto d-flex">
    <li className="nav-item">
      <Link to={"/login"} className="nav-link">
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link to={"/register"} className="nav-link">
        Sign Up
      </Link>
    </li>
  </div>
)}
</div>
</nav>





      <nav className="navbar navbar-expand navbar-dark bg-dark">
 
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>