import SplashPage from '../components/SplashPage/SplashPage';
import CodePage from '../components/CodePage/CodePage';
import ContactPage from '../components/ContactPage/ContactPage';
import BlogPage from '../components/BlogPage/BlogPage';
import withNavBar from '../components/PageComponent/PageComponent';

export const navigationTabs = [
  {
    url: '/',
    component: SplashPage,
    name: 'Home',
  },
  {
    url: '/blog',
    component: withNavBar(BlogPage),
    name: 'Blog',
  },
  {
    url: '/code',
    component: withNavBar(CodePage),
    name: 'Code',
  },
  {
    url: '/contact',
    component: withNavBar(ContactPage),
    name: 'Contact',
  },
];
