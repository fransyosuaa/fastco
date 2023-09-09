'use client';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './styles/ItemList.module.scss';
import Card from './Card.jsx';

const ItemList = ({ input }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`/api/items?q=${input}`);
      const {
        data: { data: response },
      } = resp;
      setItems(response);
    };
    fetchData();
  }, [input]);

  return (
    <Card>
      <h2 className={styles.h2}>Item List</h2>
      <div className={styles.table}>
        <div className={styles.table.div}>
          <div>Name</div>
          <div>Stock</div>
          <div>Price</div>
        </div>
        {items.map((item) => {
          return (
            <div key={item._id} className={styles['table-child']}>
              <div>{item.name}</div>
              <div>{new Intl.NumberFormat().format(item.stock)}</div>
              <div>{new Intl.NumberFormat().format(item.price)}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

ItemList.propTypes = {
  input: PropTypes.number,
};

export default ItemList;
