import 'primeicons/primeicons.css';
import '../globals.css';
import 'primereact/resources/themes/lara-dark-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import "primeflex/primeflex.css";
import { PrimeReactProvider } from 'primereact/api';

import Header from './Components/Header';
import Menu from './Components/Menu';
import Userpanel from './Components/Userpanel';
import Footer from './Components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
        return (
          <PrimeReactProvider>
            <div className="wrapper">
      {/* 
     Header where the Logo is displayed.
      */}
            <div className="header" >
            <Header />
            </div>
      {/* 
     Aside where the menu is displayed.
      */}
            <div className="aside aside-1">
            <Menu  />
            </div>

      {/* 
     where the content should be displayed.
      */}

            <main className="main">{children}</main>

      {/* 
     Aside where the userpanel is displayed.
      */}

            <div className="aside aside-2">
            <Userpanel  />
            </div>

            {/* not sure if i would use the footer. maybe for a chat function or something.
            
            <div className="footer">
            <Footer  />
            </div> */}


            </div>
          </PrimeReactProvider>
        );
      }
  