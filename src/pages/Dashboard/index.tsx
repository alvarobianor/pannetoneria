import React from 'react';
import { Title, Form } from './styles';
import Repositories from '../../components/Repositories/index';

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
      <Repositories
        title="Alvim delas"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/panettone-50f77b4.jpg?quality=90"
        description="foda bagarai"
      />
    </>
  );
};

export default Dashboard;
