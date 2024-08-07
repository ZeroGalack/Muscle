import React, { useState } from 'react';
import './CodeEditor.css'; // Arquivo CSS para estilização

function CodeEditor() {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const formatCode = (code) => {
    code = code.replace(/=/g, '<span class="pink">=</span>');

    const numberRegex = /(\d+(\.\d+)?)/g;
    code = code.replace(numberRegex, '<span class="purple">$1</span>');
    
    return code;
  };

  return (
    <div
      className="code-editor"
      contentEditable="true"
      dangerouslySetInnerHTML={{ __html: formatCode(code) }}
      onChange={handleChange}
      spellCheck="false"
      placeholder="Escreva seu código aqui..."
    />
  );
}

export default CodeEditor;
