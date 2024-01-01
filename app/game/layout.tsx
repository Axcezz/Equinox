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

            <div className="header" >
            <Header />
            </div>

            <div className="aside aside-1">
            <Menu  />
            </div>


            <main className="main">{children}</main>


            <div className="aside aside-2">
            <Userpanel  />
            </div>

            <div className="footer">
            <Footer  />
            </div>


            </div>
          </PrimeReactProvider>
        );
      }
  