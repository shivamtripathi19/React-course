import React, { useState } from "react";

export default function Hello() {
  const [isHello, setHellohandle] = useState(false);
  return (
    <div>
      <h1>Hello World</h1>
      {!isHello && <p>you can see me....</p>}
      {isHello && <p>well I'm not sure...</p>}
      <button onClick={() => setHellohandle(!isHello)}>Click Me!</button>
    </div>
  );
}
