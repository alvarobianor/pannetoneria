import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';

import { Header, DetailsInfo, DetailsAbout } from './styles';

interface Params {
  info: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<Params>();

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
            src="https://avatars1.githubusercontent.com/u/6128107?v=4"
            alt="Panetonne"
          />
          <strong>{params.info}</strong>
        </header>
        <ul>
          <li>
            <strong>Garoto</strong>
            <span>Marca</span>
          </li>
          <li>
            <strong>1.89kg</strong>
            <span>Peso</span>
          </li>
          <li>
            <strong>R$45.00</strong>
            <span>Preço</span>
          </li>
        </ul>
      </DetailsInfo>

      <DetailsAbout>
        <div>
          <strong>Um pouco da história</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            tellus integer feugiat scelerisque varius morbi enim nunc. Netus et
            malesuada fames ac turpis. Purus ut faucibus pulvinar elementum
            integer enim neque volutpat. Quam vulputate dignissim suspendisse in
            est ante in nibh mauris. Ligula ullamcorper malesuada proin libero
            nunc consequat interdum varius. Pellentesque elit eget gravida cum
            sociis natoque. Eleifend quam adipiscing vitae proin sagittis nisl
            rhoncus mattis rhoncus. Tincidunt nunc pulvinar sapien et ligula
            ullamcorper malesuada proin. Neque ornare aenean euismod elementum
            nisi quis eleifend quam adipiscing. Porttitor lacus luctus accumsan
            tortor posuere ac. At urna condimentum mattis pellentesque.
            Imperdiet dui accumsan sit amet nulla. Odio ut enim blandit volutpat
            maecenas volutpat blandit. Augue eget arcu dictum varius duis at.
            Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Et
            molestie ac feugiat sed lectus vestibulum mattis. Ullamcorper morbi
            tincidunt ornare massa eget egestas. Nunc sed id semper risus. Quam
            pellentesque nec nam aliquam sem et.
          </p>
        </div>
      </DetailsAbout>
    </>
  );
};

export default Details;
