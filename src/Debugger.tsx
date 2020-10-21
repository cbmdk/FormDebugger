import React, { Fragment } from 'react';

interface Props {
  value: any;
}

export const Debugger: React.FC<Props> = ({ value }) => (
  <pre css={{ fontFamily: 'Consolas, monospace', fontSize: '.8em', lineHeight: 1.2, whiteSpace: 'pre-wrap' }}>
    {typeof value === 'string'
      ? value.split(/\n/g).map((n, i) => (
          <Fragment key={i}>
            {n}
            <br />  
          </Fragment>
        ))
      : JSON.stringify(value, null, 2)}
  </pre>
);
