const fs = require('fs');

const componentName = process.argv.slice(2)[0];
const path = process.argv.slice(3)[0] || '';

const camelComponentName = `${componentName[0].toUpperCase()}${componentName.slice(1).toLowerCase()}`;
const lowerComponentName = componentName.toLowerCase();

const componentDir = `src/interfaceAdapters/components${path}/${camelComponentName}`;

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

// creation du component
const componentpath = `src/interfaceAdapters/components${path}/${camelComponentName}/Model.tsx`;

if (!fs.existsSync(componentpath)) {
  const textAction = `'use client'
import View from './View';

type Props = {

}

const ViewModel: React.FC<Props> = () => {
  
  return (
    <View />
  );
};

export default ViewModel;`;

  fs.writeFile(componentpath, textAction, (err) => {
    if (err) throw err;
  });
}

const viewpath = `src/interfaceAdapters/components${path}/${camelComponentName}/View.tsx`;

if (!fs.existsSync(viewpath)) {
  const textAction = `'use client'
import styles from './styles.module.scss';

type Props = {

}
  
const View: React.FC<Props> = () => {
  
  return (
    <div className={styles.${lowerComponentName}}>
    </div>
  );
};

export default View;`;

  fs.writeFile(viewpath, textAction, (err) => {
    if (err) throw err;
  });
}

// creation de la feuille de style

const stylepath = `src/interfaceAdapters/components${path}/${camelComponentName}/styles.module.scss`;

if (!fs.existsSync(stylepath)) {
  const textAction = `@import 'src/styles/_vars.scss';

  .${lowerComponentName} {

  }
  
  `;

  fs.writeFile(stylepath, textAction, (err) => {
    if (err) throw err;
  });
}

// creation du container

const containerpath = `src/interfaceAdapters/components${path}/${camelComponentName}/index.ts`;

if (!fs.existsSync(stylepath)) {
  const textAction = `'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/interfaceAdapters/state/store';
import { Dispatch } from '@reduxjs/toolkit';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  `;

  fs.writeFile(containerpath, textAction, (err) => {
    if (err) throw err;
  });
}
