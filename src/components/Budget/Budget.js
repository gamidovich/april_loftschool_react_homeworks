import React from 'react';
import { connect } from 'react-redux';
import { assignWith } from 'lodash';
import './Budget.css';

const budgetMapElements = {
  profit: 'Всего получено денег:',
  customerExpance: 'Расходы продавцов',
  farmExpanse: 'Расходы на ферме:',
  deliveryExpanse: 'Расходы на доставку:',
};

export const Budget = ({
  profit = 0,
  customerExpance = 0,
  farmExpanse = 0,
  deliveryExpanse = 0,
}) => {
  const expanses = assignWith(
    {},
    { customerExpance, farmExpanse, deliveryExpanse },
    (_, sourceValue) => -Math.abs(sourceValue),
  );
  const props = { profit, ...expanses };
  const keys = Object.keys(props);

  return (
    <div className="budget">
      <h2>Бюджет</h2>
      {keys.map(key => (
        <p key={key}>
          {budgetMapElements[key]} {props[key]}
        </p>
      ))}
      <p>Итого: {keys.reduce((memo, key) => memo + props[key], 0)}</p>
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({ ...budget });

export default connect(mapStateToProps)(Budget);
