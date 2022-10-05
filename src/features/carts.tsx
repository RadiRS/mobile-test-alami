import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  id: number;
  item: Item;
}

// dummy data
const items: Item[] = [
  {id: 1, name: 'Book', price: 10000},
  {id: 2, name: 'Phone', price: 2000000},
  {id: 3, name: 'Table', price: 4000000},
  {id: 4, name: 'Laptop', price: 14000000},
];

const Cart: React.FC = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const totalItemsInCart = carts.length;
  const totalPrice = carts.reduce((acc, cart) => acc + cart.item.price, 0);

  const onPressAddItem = (item: Item) => {
    const id = Math.floor(Math.random() * 100);
    const cart: Cart = {id, item};

    setCarts([...carts, cart]);
  };

  const onPressRemoveItem = (item: Item) => {
    const itemInCart = carts.find(cart => cart.item.id === item.id);

    if (!itemInCart) {
      return;
    }

    const newCarts = carts.filter(cart => cart.id !== itemInCart.id);

    setCarts(newCarts);
  };

  const totalCurrentItemInCart = (item: Item) => {
    return carts.filter(cart => cart.item.id === item.id).length;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View style={styles.itemContainer}>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.mb}>Rp {item.price}</Text>
            <View style={styles.btnItemWrapper}>
              <Button title=" - " onPress={() => onPressRemoveItem(item)} />
              <Text style={styles.itemCountText}>
                {totalCurrentItemInCart(item)}
              </Text>
              <Button title=" + " onPress={() => onPressAddItem(item)} />
            </View>
          </View>
        ))}
      </View>
      <Pressable style={styles.cart}>
        <Text style={styles.bold}>Total Price : Rp {totalPrice}</Text>
        <Text style={styles.bold}>Total Item : {totalItemsInCart}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  item: {
    width: '45%',
    borderWidth: 1,
    padding: 16,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemCountText: {
    marginHorizontal: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  btnItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  mb: {
    marginBottom: 8,
  },
});

export default Cart;
