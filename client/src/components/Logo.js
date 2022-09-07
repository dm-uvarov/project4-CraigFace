import logo from './earth_globe_icon.png';
import logo1 from './globe.png';
import logo2 from './globe1.png';

export default function Logo () {
  return (
    <div id="logo" 
    style={{ backgroundImage: `url(${logo1})`, 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat' }}>
      {/* <img className="d-inline-block" src={logo} alt ="logo"></img> */}
      <h1 className="h1 text-black d-inline-block align-middle">(craigs
        <span className="h1 text-primary">face</span>)
      </h1>
    </div>
  )
}
