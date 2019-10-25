import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

const appRouter = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Every Voice Matters'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Contact | Every Voice Matters'
            }
        },
    ],
});

// shameless copy+paste from https://alligator.io/vuejs/vue-router-modify-head/
// hence why every typehint is `any`, idk wtf it does ¯\_(ツ)_/¯
appRouter.beforeEach((to: any, from: any, next: any) => {
    const nearestWithTitle = to.matched.slice().reverse().find((r: any) => r.meta && r.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find((r: any) => r.meta && r.meta.metaTags);
    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    }

    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => {
        if(el.parentNode !== null) {
            el.parentNode.removeChild(el);
        }
    });

    if(!nearestWithMeta) {
        return next();
    }

    nearestWithMeta.meta.metaTags.map((tagDef: any) => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        tag.setAttribute('data-vue-router-controlled', '');
        return tag;
    })
        .forEach((tag: any) => document.head.appendChild(tag));

    next();
});

export default appRouter;
