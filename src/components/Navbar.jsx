import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">
                <div className="container-fluid">
                    <div>                       <div className='  text-center bg- text-dark my-2' style={{ background: '' }}>
                <h6 className="  " style={{fontSize:'10px'}}> <img className='' width={120} src="youtube-logo-png-46020.png" alt="" />Created By <span style={{ color: '' }}>Kamal</span><span style={{ color: '' }}> Nayan</span> <span style={{ color: '' }}>Upadhyay</span></h6>

            </div>
</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
                        </ul>
                        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                        <div className="input-group  w-50  ">
                            <input type="search" className="inp outline-none" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" value={props.text} onChange={props.onChange} />
                            <button className="input-group-text button " onClick={props.fetchApi} id="basic-addon2" >Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar