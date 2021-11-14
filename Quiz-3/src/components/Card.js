import Logo from '../assets/img/logo.png'

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <h2>{props.name}</h2>
        <h5>Release Year : {props.year}</h5>
        <img
          className="fakeimg"
          style={{width: "50%", height: "300px", objectFit: "cover"}}
          src={props.gambar}/>
        <br/>
        <br/>
        <div>
          <strong>Price: {props.price}</strong><br/>
          <strong>Rating: {props.rating}</strong><br/>
          <strong>Size: {props.size}</strong><br/>
          <strong style={{marginRight: "10px"}}>Platform : Android & IOS
          </strong>
          <br/>
        </div>
        <p>
          <strong style={{marginRight: "10px"}}>Description :</strong>
          {props.desc}
        </p>

        <hr/>
      </div>
    </div>
  )
}

export default Card