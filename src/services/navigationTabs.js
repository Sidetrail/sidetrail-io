import SplashPage from '../components/SplashPage/SplashPage';
import CodePage from '../components/CodePage/CodePage';
import ContactPage from '../components/ContactPage/ContactPage';
import BlogPage from '../components/BlogPage/BlogPage';

export const navigationTabs = [
  {
    url: '/',
    component: SplashPage,
    name: 'Home',
  },
  {
    url: '/blog',
    component: BlogPage,
    name: 'Blog',
  },
  {
    url: '/code',
    component: CodePage,
    name: 'Code',
  },
  {
    url: '/contact',
    component: ContactPage,
    name: 'Contact',
  },
];
