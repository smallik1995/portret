import axios from 'axios';
export default function (Vue) {
     Vue.auth = {
        setToken( token ) {
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = 'Bearer' + token;
        },
        getToken() {
            let token = localStorage.getItem('token');
            if ( !token ) {
                return null;
            } else {
                return token;
            }
        },
        isAuthenticated() {
            if ( this.getToken() ) {
                return true;
            } else {
                return false;
            }
        },
    };
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get() {
                return Vue.auth;
            }
        }
    });
}