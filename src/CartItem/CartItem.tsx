import { IconButton } from '@material-ui/core';
import { CartItemType } from '../App';
import { Wrapper } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = () => <div> Cart Item </div>

export default CartItem;
