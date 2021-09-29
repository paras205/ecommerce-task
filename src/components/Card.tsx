import React, { FC, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "store/actions/cart";
import { showLoginForm } from "store/actions/auth";
import { RootState } from "store/store";
import { Product } from "store/types";

const fallBackImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NCAgHDQ0HBwcHDQ8IDQgNFREWFhURExMYKCgsGBolGxMVIT0hJSkrLi4uFx82RDNAOzQtODcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAArEAEBAAEBBgMJAQEAAAAAAAAAAQIRAxMhMVGRMmFxBBIUQUJTobHRUsH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+nSNSEakAka0SNQCRSKAoAAoIoAAoIKAgoCCgIACCoAigIlaSgwlaqUGLGbG6lBz0GtAGpGokagLIsSNAKACgACgigAAAAAAAAAACCoAigIACVmtJQYqWN1mgwLoA1GokagEaRQFRQAUAAAAAAAAAAAAAAAAEFQBFARFKDNZrVSgzoADUWJGgWAAoAEUAAAAAAAAAAAAAAAAAAAQAECgIlVKDIUBqKkagAKACgAAAAAAA55bXGXTnZz0+QOg576ef4N9PP8AAOg576ef4N9PP8A6Dnvp5x0AAAAAAARUARUASqgMioCxploBUUBUUAAAAAABw2MmuWsl0t58fnXdw2PG5zrbL3oJvcf8T3flbpr2dpjj0nHyjhuMvLT/AE9GM0knTgCe5Ok7Q9ydJ2jjttt9ON8s8p+obHa6cLy5S9Ab2+MmN0kl4cZJ1b2fhnox7R4L64/uNbLwz0BsAAAAABFQBFSgIqAgADUZjUAVFAVFAAAAAAAcPZ/Fn63913ebZc9p1vvSd6Bt9t9ON5cMs5+oxlt8rNOV+rKc7Cez59J3huM+k7wHMdNxn0neG4z6TvAa112V8rJO8d9l4cfRxywuOzyl4XWXnL847bHw4+gNgAAAAAIqAIqUBFQEAAixIsBVQBVRQAAAAAAHDPYcbZlcPe42TWO4Dz/D5fcy75f0+Hy+5l3y/r0APP8AD5fcy75f0+Hy+5l3y/r0APPfZreeds6XW/8AXfGaSScpwigAAAAAACVUAQAEVKCCALFZjUBQAUAFAAAAAAAAAAAAAAAAAAABAoCAAlSqlBBACNRhqA0qRQFRQFQBQAAAAAAAAAAAAAAAEVAEAAEArNWs0ATUAixiNQG4rMWA0IoKIoCoAoAAAAAAAAAAACAAgAAAhRKCVlazaArICRqMStQG1jEaBuDMaBRFBRAFABRAFE1AUTUBUAFQABAAABBKBWaVAKzS1LQBlAI3ABY0oCqAKsAAAAAAAAAAUBAAAAEAFQARABKzVAZrNQBmgA//2Q==";

const Card: FC<Product> = ({ imageUrl, name, price, id }: Product) => {
  const [image, setImage] = useState<string>(imageUrl);
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const handleAddToCart = () => {
    if (authenticated) {
      const dataToSend = { name, imageUrl, price, id, quantity: 1 };
      dispatch(addToCart(dataToSend));
    } else {
      dispatch(showLoginForm());
    }
  };
  return (
    <div className="card">
      <div className="card_inner">
        <div className="card_image_container">
          <img src={image} alt={name} onError={() => setImage(fallBackImage)} />
          <div className="add_to_cart" onClick={handleAddToCart}>
            <AiOutlineShoppingCart />
          </div>
        </div>
        <div className="card_content">
          <h3>{name}</h3>
          {price && <h5>Rs. {price}</h5>}
        </div>
      </div>
    </div>
  );
};

export default Card;
