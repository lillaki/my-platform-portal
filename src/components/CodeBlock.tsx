import React, { useState } from 'react';

interface Props {
  language?: string;
  value: string;
}

export const CodeBlock: React.FC<Props> = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(value.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="codeblock-wrap">
      <div className="codeblock-toolbar">
        <span className="codeblock-lang">{language || 'text'}</span>
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={copy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <pre className="codeblock-pre">
        <code>{value}</code>
      </pre>
    </div>
  );
};