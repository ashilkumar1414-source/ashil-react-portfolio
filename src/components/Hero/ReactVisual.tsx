import './ReactVisual.scss';

export function ReactVisual() {
  return (
    <div className="react-visual">
      <div className="react-visual__glow" />

      <div className="react-visual__atom">
        <div className="react-visual__core" />
        <div className="react-visual__orbit react-visual__orbit--1" />
        <div className="react-visual__orbit react-visual__orbit--2" />
        <div className="react-visual__orbit react-visual__orbit--3" />
        <span className="react-visual__electron react-visual__electron--1" />
        <span className="react-visual__electron react-visual__electron--2" />
        <span className="react-visual__electron react-visual__electron--3" />
      </div>

      <div className="react-visual__panel react-visual__panel--tree">
        <div className="react-visual__panel-head">
          <span />
          <span />
          <span />
          <em>ComponentTree.tsx</em>
        </div>
        <pre>
          <code>
            <span className="tok-kw">{'<'}</span>
            <span className="tok-comp">App</span>
            {'\n'}
            {'  '}
            <span className="tok-kw">{'<'}</span>
            <span className="tok-comp">QueryClient</span>
            {'\n'}
            {'    '}
            <span className="tok-kw">{'<'}</span>
            <span className="tok-comp">ZustandStore</span>
            {'\n'}
            {'      '}
            <span className="tok-kw">{'<'}</span>
            <span className="tok-comp">Dashboard</span>
            <span className="tok-kw">{' />'}</span>
            {'\n'}
            {'      '}
            <span className="tok-kw">{'<'}</span>
            <span className="tok-comp">AIChat</span>
            <span className="tok-kw">{' />'}</span>
          </code>
        </pre>
      </div>

      <div className="react-visual__panel react-visual__panel--term">
        <div className="react-visual__panel-head">
          <span />
          <span />
          <span />
          <em>terminal</em>
        </div>
        <pre>
          <code>
            <span className="tok-prompt">$</span> npm run build
            {'\n'}
            <span className="tok-ok">✓</span> React 19 optimized
            {'\n'}
            <span className="tok-ok">✓</span> Bundle ready
            <span className="tok-cursor">|</span>
          </code>
        </pre>
      </div>

      <div className="react-visual__chip react-visual__chip--zustand">Zustand</div>
      <div className="react-visual__chip react-visual__chip--query">TanStack Query</div>
      <div className="react-visual__chip react-visual__chip--ts">TypeScript</div>
    </div>
  );
}
