import { Portfolio } from '../components/main/portfolio';
import { InDevelopment } from '../components/main/inDevelopment';
import { Donate } from '../components/main/donate';
import { Biography } from '../components/main/biography';
import { Blog } from '../components/main/blog';
import { NotFound } from '../components/main/notFound';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PersonIcon from '@mui/icons-material/Person';


//Maintain ID's
const menuRoutes = [
    {
        id: 1,
        name: 'Portfolio',
        path: '/',
        icon: SlideshowIcon,
        Element: Portfolio
    },
    {
        id: 2,
        name: 'In Development',
        path: '/in-development',
        icon: QueuePlayNextIcon,
        Element: InDevelopment
    },
    {
        id: 3,
        name: 'Biography',
        path: '/biography',
        icon: PersonIcon,
        Element: Biography
    },
    {
        id: 4,
        name: 'Blog',
        path: '/blog',
        icon: PersonIcon,
        Element: Blog
    },
    {
        id: 5,
        name: 'Donate',
        path: '/donate',
        icon: HandshakeIcon,
        Element: Donate
    },
];

const notFoundRoute = {
    id: 6,
    name: 'Not Found',
    path: '*',
    Element: NotFound
};

const generalRoutes = [
    notFoundRoute
];

const protectedRoutes = [
];

const initialDocumentTitle = `Jae Films`;

export {
    menuRoutes,
    notFoundRoute,
    generalRoutes,
    protectedRoutes,
    initialDocumentTitle
};