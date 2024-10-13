import React from "react";
import { Helmet } from "react-helmet";
import RouterOutlet from "./components/Router/RoutersApp";
import Theme from "./redux/theme/useTheme";
import SoketTeste from './api/webCliente/reqTeste'
import ExampleComponent from "./api/webCliente/reqTeste";

const App = () => {
  return (
    // <ExampleComponent/>
    <Theme>
      <Helmet>
        {/* <meta charSet="UTF-8" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
        <link rel="stylesheet" href="style.css" />
        <title>Teste App</title>
      </Helmet>
      <RouterOutlet />
    </Theme>
  );
};

export default App;
