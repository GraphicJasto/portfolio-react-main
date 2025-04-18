import HomePage from "./Home/Home";
import WorkPage from "./Work/Work";
import ContactPage from "./Contact/Contact";
import NotFoundPage from "./Error/NotFoundPage";

import ProjectAlgoritcom from "./Work/Projects/algoritcom/Algoritcom.jsx";
import ProjectEmiles from "./Work/Projects/emiles/Emiles.jsx";
import Miniature from "../components/miniatures/Miniature.jsx";

const routes = [
    // Navbar Routes
    { 
        title: 'Resume',
        icon: 'draft',
        customIcon: true,
        path: "/", 
        element: <HomePage />,
        navigable: true,
        transitionNav: false,
        maxWidth: '700',
    },
    {   
        title: 'Work',
        icon: 'edit',
        path: "/work", 
        element: <WorkPage />,
        navigable: true,
        transitionNav: false,
        maxWidth: '1440',
    },
    
    {   
        title: 'Ideas',
        icon: 'lightbulb',
        path: "/ideas", 
        element: <ContactPage />,
        navigable: true,
        transitionNav: false,
        maxWidth: '1440',
    },
    {   
        title: 'Contact',
        icon: 'front_hand',
        path: "/contact", 
        element: <ContactPage />,
        navigable: true,
        transitionNav: false,
        maxWidth: '700',
    },
    // Work Projects Routes
    { 
        title: 'Algoritcom',
        icon: 'project',
        path: "/work/algoritcom", 
        element: <ProjectAlgoritcom />,
        navigable: false,
        transitionNav: true,
        miniatures: [
            { 
                copy: "Crushing the competence by familiarity",
                tag: "wspdasudhalksdjhaLKS",
                miniature: Miniature,
            },
        ], 
    },
    { 
        title: 'Emiles',
        icon: 'project',
        path: "/work/emiles", 
        element: <ProjectEmiles />,
        navigable: false,
        transitionNav: true,
        miniatures: [
            {   
                copy: "Brand positioning",
                tag: "brand positioning",
                miniature: Miniature,
            },
        ], 
    },
    { 
        title: 'Another',
        icon: 'project',
        path: "/work/another",
        element: <ProjectEmiles />,
        navigable: false,
        transitionNav: true,
        miniatures: [
            {   
                copy: "Another project one",
                tag: "another1",
                miniature: Miniature,
            },
        ], 
    },
    // Error Routes
    { 
        title: 'Not Found',
        icon: 'error',
        path: "*", 
        element: <NotFoundPage />,
        navigable: false,
        transitionNav: false,
    }
]

export default routes;
