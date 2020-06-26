import { Dashboard, AddEvent, Event } from '../pages';

const appRoutes = [
    {
        name: "Dashboard",
        component: Dashboard,
        exact: true,
        path: "/Dashboard"
    },
    {
        name: "Add Event",
        component: AddEvent,
        exact: true,
        path: "/AddEvent"
    },
    {
        name: "Event",
        component: Event,
        exact: true,
        path: "/"
    }
];

export default appRoutes;