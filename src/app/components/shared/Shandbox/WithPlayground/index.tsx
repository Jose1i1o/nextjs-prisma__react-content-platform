import React from "react";
import {
  Sandpack, SandpackTheme,
} from "@codesandbox/sandpack-react";

import { theme } from "@/theme/theme";

const WithPlayground = () => {
  const files = {
    "/App.jsx": `import React from "react";
import Button from "./Button";
import Card from "./Card";

export default function App() {
  return (
    <div className="App">
      <Card>
        <Button />
      </Card>
    </div>
  );
}`,
    "/Button.jsx": `import React from "react";

export default function Button() {
  return <button>Button</button>;
}`,
    "/Card.jsx": `import React from "react";

export default function Card({ children }) {
  return <div className="card">{children}</div>;
}`,
    "/styles.css": `.card {
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.125);
}`,
  };

  const myTheme = theme.sandBox as SandpackTheme;

  return (
    <Sandpack
      files={files}
      template="vite-react"
      options={{
        showConsoleButton: true,
        showInlineErrors: true,
        showNavigator: true,
        showLineNumbers: true,
        showTabs: true,
        showRefreshButton: true,
      }}
      theme={ myTheme }
    />
  );
}

export default WithPlayground;
