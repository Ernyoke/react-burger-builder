import React from 'react';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurderBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
