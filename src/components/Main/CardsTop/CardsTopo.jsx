// export default CardsTopo;
import React, { useState } from 'react';
import {
  InsightItem,
  InsightsContainer,
  Table, TableCell,
  TableRow
} from './CardsTopoStyle.jsx';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { calcularDatas } from '../../../util/DataUtil';

const CardsTopo = ({ cards }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index, item) => {
    if (item.comtab) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };
  const datas = calcularDatas({});

  return (
    <InsightsContainer>
      {cards != null && cards.length > 0 && cards.map((item, index) => (
        <InsightItem
          key={index}
          expanded={expandedIndex === index}
          onClick={() => handleExpandClick(index, item)}
        >
          <span className='infoTopo'>
            <i className={`bx ${item.icon}`}></i>
            <span className="info">
              <h3>{item.value}</h3>
              <p>{item.label}</p>

              <p>{item.comDataRange &&
                <span style={{
                  fontSize: '12px',
                  color: `${({ theme }) => theme.text}`
                }}>{`De ${datas.primeiroDiaDoMes} até ${datas.diaAtualMenosUm}`}</span>}
                {item.comData && <span style={{
                  fontSize: '12px',
                  color: `${({ theme }) => theme.text}`
                }}>{`De ${datas.hoje}`}</span>}
              </p>
            </span>
          </span>
          {expandedIndex === index && item.comtab && (
            <>
              <Table>
                <thead>
                  <tr>
                    <th>Prc Tab</th>
                    <th>Prc Ven</th>
                    <th>Flex</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow>
                    <TableCell>{item.tab.prcTbp}</TableCell>
                    <TableCell>{item.tab.prcVen}</TableCell>
                    <TableCell>{item.tab.flex}</TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </>
          )}
        </InsightItem>
      ))}
    </InsightsContainer>
  );
};

export default CardsTopo;
