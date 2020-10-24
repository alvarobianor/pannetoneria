/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import { Title, Form } from './styles';
import Repositories from '../../components/Repositories/index';

import api from '../../service/api';

interface Brands {
  brands: Array<string>;
}

interface Panettone {
  _id: string;
  name: string;
  brand: string;
  url_img: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('nenhum');
  const [listBrands, setListBrands] = useState<string[]>([]);
  const [data, setData] = useState<Panettone[]>([]);

  useEffect(() => {
    async function load() {
      const { data: info } = await api.get<Brands>('/brands');

      setListBrands(info.brands);
    }
    load();
  }, []);

  useEffect(() => {
    async function load() {
      const { data: info } = await api.get<Panettone[]>(
        `/search?filter=${selectedValue}`,
      );
      setData(info);
    }
    load();
  }, [selectedValue]);

  return (
    <>
      <Title>Veja aqui uma lista fantástica de Panettones</Title>
      <Form>
        <p>Filtro por marca:</p>
        <div>
          <select
            name="Filter"
            id="filter"
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="nenhum">Nenhum</option>
            {listBrands.map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>
          {/* <button type="submit">{selectedValue}</button> */}
        </div>
      </Form>
      {data.map((element) => (
        <Repositories
          key={element.id}
          title={element.name}
          src={element.url_img}
          description={element.brand}
        />
      ))}
    </>
  );
};

export default Dashboard;
