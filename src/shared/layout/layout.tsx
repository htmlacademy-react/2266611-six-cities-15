import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

type LayoutProps = {
  wrapper: string;
  title: string;
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

const Layout = ({ wrapper, title, header, content, footer }: LayoutProps): JSX.Element => (
  <div className={wrapper}>

    <Helmet>
      <title>{title}</title>
    </Helmet>

    {header}
    {content}
    {footer}

  </div >
);

export default Layout;
