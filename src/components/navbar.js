

const Navbar = () => {
    const BORDER_STYLE = {'border-image': 'linear-gradient(#d46d2c, #50eb7c) 2',
    'border-left':  '1px solid ',
    'margin-right':'2em',
    'padding-left':'2em'}
    return (
        <div>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"></link>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{'margin-bottom':0}}>
          <a class="navbar-brand" href="/">Owen Zhang</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/" 
                style = {BORDER_STYLE}>Home </a>
              </li>
  
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" 
                role="button" data-toggle="dropdown" data-bs-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false" style = {BORDER_STYLE}>
                  Projects
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="/">ML Projects</a>
                  <a class="dropdown-item" href="/">Website Projects</a>
                  <a class="dropdown-item" href="/">Others</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/courses" style = {BORDER_STYLE}>Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/" style = {BORDER_STYLE}>Current Status</a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    )
};
export default Navbar;
