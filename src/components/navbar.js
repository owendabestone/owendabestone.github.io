

const Navbar = () => {
    const BORDER_STYLE = {'borderImage': 'linear-gradient(#d46d2c, #50eb7c) 2',
    'borderLeft':  '1px solid ',
    'marginRight':'2em',
    'paddingLeft':'2em'}
    return (
        <div>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"></link>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{'marginBottom':0}}>
          <a className="navbar-brand" href="/">Owen Zhang</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/" 
                style = {BORDER_STYLE}>Home </a>
              </li>
  
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" 
                role="button" data-toggle="dropdown" data-bs-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false" style = {BORDER_STYLE}>
                  Projects
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="/mlprojects">ML Projects</a>
                  <a className="dropdown-item" href="/webprojects">Website Projects</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses" style = {BORDER_STYLE}>Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/currentstatus" style = {BORDER_STYLE}>Current Status</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/hobbies" style = {BORDER_STYLE}>Hobbies</a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    )
};
export default Navbar;
