import Vue from 'vue';

export default (to, from, next) => {
    if ( to.matched.some( record => record.meta.forVisitors )) {
        if ( Vue.auth.isAuthenticated() ) {
            next({
                path: '/home'
            });
        } else {
            next();
        }
    } else if ( to.matched.some( record => record.meta.forAuth ) ) {
        if ( ! Vue.auth.isAuthenticated() ) {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    } else if ( to.matched.some( record => record.meta.forAuthAdminHeadManager ) ) {
        if ( ! Vue.auth.isAuthenticated() ) {
            next({
                path: '/login'
            });
        } else if ( Vue.checkRoles.isAdmin() || Vue.checkRoles.isHead() || Vue.checkRoles.isManager() ) {
            next();
        } else {
            next({
                path: '/home'
            });
        }
    } else if ( to.matched.some( record => record.meta.forAuthAdminHead ) ) {
        if ( ! Vue.auth.isAuthenticated() ) {
            next({
                path: '/login'
            });
        } else if ( Vue.checkRoles.isAdmin() || Vue.checkRoles.isHead() ) {
            next();
        } else {
            next({
                path: '/home'
            });
        }
    } else {
        next();
    }
}