import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [ref, setRef] = useState();
  const [variantId, setVariantId] = useState();
  const [checked, setChecked] = useState();

  useEffect(() => { if (!ref) {
    return;}
    const init = () => { setVariantId(ref.variantId); setChecked(ref.value) };
    const change = () => { setChecked(ref.value) };
    ref.addEventListener('init', init);
    ref.addEventListener('change', change);
    return () => {
      ref.removeEventListener('init', init);
      ref.removeEventListener('change', init);
    }
  }, [ref]);

  return <>
    <dl>
        <dt>Variant ID</dt><dd>{ variantId }</dd>
        <dt>Checked</dt><dd>{ checked !== undefined && String(checked) }</dd>
    </dl>
    <redo-shopify-checkbox contextProductId="123" customerId="456" ref={ref => setRef(ref)} />
  </>
}

const root = document.getElementById('app');
createRoot(root).render(<App />);
