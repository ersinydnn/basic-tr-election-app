
import adaylar from './Adaylar';
import classes from "./Card.module.css"
import Buton from './Buton';
const Card = () => {
return (
    <div className={classes['card-container']}>
  {adaylar.map((aday,index) => (
    <div key={index} className={classes.card}>
      <div className={classes['card-img-container']}>
        <img src={aday.foto} alt={aday.isim} className={classes['adaylar-foto']} />
      </div>
      <h3>{aday.isim}</h3>
      <Buton />
    </div>
  ))}
</div>

  )
}

export default Card;