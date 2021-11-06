import logo from '../assets/img/logo.png';

function CheckBox(props) {
    return(
      <div className="content">
        <input type="checkBox" id={props.id} name={props.name} value={props.name} readOnly={props.id} />
        <label style={{paddingLeft:"10px"}}htmlFor={props.id}>{props.name}</label>
      </div>
    )
  }
  
  const Submit = () => {
    return(
      <button>SEND</button>
    )
  }

const CheckBoxSanber = () => {
  return (
    <div className="card">
      <div
        style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center"
      }}>
        <img src={logo} alt="logo-sanber"/>
      </div>
      <div className="head">
        <h1 className="title" style={{
          fontWeight: 400
        }}>THINGS TO DO</h1>
        <p style={{
          fontSize: "13px"
        }}>During bootcamp in sanbercode</p>
      </div>
      <div>
        <CheckBox id="1" name="Belajar GIT dan CLI"/>
        <CheckBox id="2" name="Belajar HTML dan CSS"/>
        <CheckBox id="3" name="Belajar JavaScript"/>
        <CheckBox id="4" name="Belajar ReactJS Dasar"/>
        <CheckBox id="5" name="Belajar ReactJS Advance"/>
      </div>
      <Submit/>
    </div>
  )
}

export default CheckBoxSanber