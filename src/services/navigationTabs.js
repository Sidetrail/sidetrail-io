import SplashPage from '../components/SplashPage/SplashPage';
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
    title: 'Sidetrail' 
  },
  {
    url: '/about',
    component: withNavBar(AboutPage),
    name: 'About',
    title: 'About' 
  },
  {
    url: '/blog',
    component: withNavBar(BlogPage),
    name: 'Blog',
    title: 'Blog' 
  },
  {
    url: '/photos',
    component: withNavBar(PhotosPage),
    name: 'Photos',
    title: 'Photos' 
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
    title: 'Contact' 
  },
];
