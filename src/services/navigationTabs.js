import SplashPage from '../components/SplashPage/SplashPage';
import CodePage from '../components/CodePage/CodePage';
import ContactPage from '../components/ContactPage/ContactPage';
import AboutPage from '../components/AboutPage/AboutPage';
import BlogPage from '../components/BlogPage/BlogPage';
import PhotosPage from '../components/PhotosPage/PhotosPage';
import withNavBar from '../components/PageComponent/PageComponent';

export const navigationTabs = [
  {
    url: '/',
    exact: true,
    component: SplashPage,
    name: 'Home',
  },
  {
    url: '/about',
    component: withNavBar(AboutPage),
    name: 'About',
  },
  {
    url: '/blog',
    component: withNavBar(BlogPage),
    name: 'Blog',
  },
  {
    url: '/photos',
    component: withNavBar(PhotosPage),
    name: 'Photos',
  },
  // {
  //   url: '/code',
  //   component: withNavBar(CodePage),
  //   name: 'Code',
  // },
  {
    url: '/contact',
    component: withNavBar(ContactPage),
    name: 'Contact',
  },
];
