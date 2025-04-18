// MiniatureLayout.jsx

import React, { useMemo } from 'react';
import routes from '../../routes';
import '../../../components/miniatures/miniatures.css';

function MiniatureLayout() {
  // Memoriza los items basados en las rutas
  const items = useMemo(() => {
    const items = [];
    const workRoutes = routes.filter((route) => route.path.includes('/work/'));

    workRoutes.forEach((route) => {
      if (route.title && route.miniatures) {
        route.miniatures.forEach((miniature, index) => {
          const key = `${route.title}-${index}`;
          items.push({
            key,
            component: miniature.miniature,
            path: route.path,
            tag: miniature.tag,
            title: route.title,
          });
        });
      }
    });

    return items;
  }, []);

  return (
    <div className="miniatures-grid">
      {items.map(({ key, component: ComponentToRender, path, tag, title }) => (
        <div key={key} className="miniature-item">
          {ComponentToRender ? (
            <ComponentToRender
              path={path}
              tag={tag}
              title={title}
            />
          ) : (
            'Empty miniature'
          )}
        </div>
      ))}
    </div>
  );
}

export default MiniatureLayout;
