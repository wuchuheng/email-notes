import * as React from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import routes from './routes';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return (<>
        {element}
    </>);
};

function render() {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(
        <HashRouter>
            <App />
        </HashRouter>,
  );
}

render();
