import React from 'react';
import styles from '../index.scss';

const JoinMessage = (props: any) => {
  const { name, } = props;
  return (
    <div>
      <span>{'<'}</span>
      <span className={styles.tagColor}>link</span>
      <span className={styles.propertyColor}> rel</span>
      <span className={styles.symbolColor}>=</span>
      <span className={styles.valueColor}>&quot;random&quot;</span>
      <span className={styles.propertyColor}> href</span>
      <span className={styles.symbolColor}>=</span>
      <span className={styles.valueColor}>
        &quot;
        {name}
        &nbsp;已進入聊天室&quot;
      </span>
      <span>{'>'}</span>
    </div>
  );
};

export default JoinMessage;
