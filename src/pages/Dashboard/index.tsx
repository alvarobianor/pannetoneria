import React from 'react';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Veja aqui uma lista fantástica de Panettones</Title>
      <Form>
        {/* <input type="" placeholder="Text here" /> */}
        <p>Filtro por marca:</p>
        <div>
          <select name="Filter" id="filter">
            <option value="Laranja">Nenhum</option>
            <option value="oi">kjkj</option>
            <option value="kjkjkj">jkjkj</option>
            <option value="jkjkjlç">çççoo</option>
            <option value="uhuhu">vvtv</option>
          </select>
          <button type="submit">Filter</button>
        </div>
      </Form>
      <Repositories>
        <a href="test">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/panettone-50f77b4.jpg?quality=90"
            alt="Álvaro Bianor"
          />
          <div>
            <strong>Alvim rei delas</strong>
            <p>Caba bom desenrolado</p>
          </div>
        </a>

        <a href="test">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/panettone-50f77b4.jpg?quality=90"
            alt="Álvaro Bianor"
          />
          <div>
            <strong>Alvim rei delas</strong>
            <p>Caba bom desenrolado</p>
          </div>
        </a>

        <a href="test">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/panettone-50f77b4.jpg?quality=90"
            alt="Álvaro Bianor"
          />
          <div>
            <strong>Alvim rei delas</strong>
            <p>Caba bom desenrolado</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
