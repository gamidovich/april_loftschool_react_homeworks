import React from 'react';
import { connect } from 'react-redux';
import { assignWith } from 'lodash';
import PropTypes from 'prop-types';
import './Budget.css';

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
      <p>
        Всего получено денег: <span className="t-profit">{profit}</span>
      </p>
      <p>
        Расходы продавцов: <span className="t-sellers">{expanses.customerExpance}</span>
      </p>
      <p>
        Расходы на ферме: <span className="t-farm">{expanses.farmExpanse}</span>
      </p>
      <p>
        Расходы на доставку: <span className="t-delivery">{expanses.deliveryExpanse}</span>
      </p>
      <p>
        Итого: <span className="t-total">{keys.reduce((memo, key) => memo + props[key], 0)}</span>
      </p>
    </div>
  );
};

Budget.propTypes = {
  profit: PropTypes.number.isRequired,
  customerExpance: PropTypes.number.isRequired,
  farmExpanse: PropTypes.number.isRequired,
  deliveryExpanse: PropTypes.number.isRequired,
};

const mapStateToProps = ({ budget }) => ({
  profit: budget.profit,
  customerExpance: budget.customerExpance,
  farmExpanse: budget.farmExpanse,
  deliveryExpanse: budget.deliveryExpanse,
});

export default connect(mapStateToProps)(Budget);
