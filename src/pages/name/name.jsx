import React from 'react';
import './{{ .name }}.css';

export const {{ .name }} = (props) => {
  return <div className="{{ .name }}">
    Hello
    <div className="small">
    {{ .hello }}
    </div>
  </div>
}
