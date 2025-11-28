import type { Restaurant} from "../types/restaurant";

interface Props{
  info: Restaurant;
}

const Store = ({info}: Props) => {
  return(
    <div>
      <h2>{info.name}</h2>
      <h3>{info.category}</h3>
      <p>주소: {info.address.city} {info.address.detail}</p>
      <h4>메뉴</h4>
      <ul>
        {info.menu.map((m, idx) => (
          <li key={idx}>
            {m.name} - {m.price}원
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Store;