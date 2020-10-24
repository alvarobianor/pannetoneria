/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import api from '../../service/api';

import { Header, DetailsInfo, DetailsAbout } from './styles';

interface Params {
  info: string;
}

interface Panettone {
  brand: string;
  weight: number;
  price: number;
  about: string;
  url_img: string;
  _id: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const [data, setData] = useState<Panettone>();
  useEffect(() => {
    async function load() {
      const response = await api.get<Panettone>(`/panettone/${params.info}`);
      setData(response.data);
    }

    load();
  }, []);

  return (
    <>
      <Header>
        <Link to="/">
          <FiChevronsLeft size={15} />
          Voltar
        </Link>
      </Header>

      <DetailsInfo>
        <header>
          <img
            src={
              data?.url_img ||
              `https://avatars1.githubusercontent.com/u/6128107?v=4`
              // apenas uma imagem padrão para não ficar sem nada
            }
            alt="Panetonne"
          />
          <strong>{params.info || `Mock`}</strong>
        </header>
        <ul>
          <li>
            <strong>{data?.brand || `Mock`}</strong>
            <span>Marca</span>
          </li>
          <li>
            <strong>
              {data?.weight || `Mock`}
              kg
            </strong>
            <span>Peso</span>
          </li>
          <li>
            <strong>
              R$
              {data?.price || `Mock`}
              .00
            </strong>
            <span>Preço</span>
          </li>
        </ul>
      </DetailsInfo>

      <DetailsAbout>
        <div>
          <strong>Uma breve história sobre esse Panettone</strong>
          <p>{data?.about || `Mock`}</p>
        </div>
      </DetailsAbout>
    </>
  );
};

export default Details;
