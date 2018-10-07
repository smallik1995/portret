
export default function (Vue) {

    Vue.checkRoles = {
        user() {
            return JSON.parse(localStorage.getItem('user')).roles
        },
        isAdmin() {
            if ( this.user().admin ) {
                return true
            }
            return false;
        },
        isHead() {
            if ( this.user().head ) {
                return true;
            }
            return false;
        },
        isManager() {
            if ( this.user().manager ) {
                return true;
            }
            return false;
        },
        isEmployee() {
            if ( this.user().employee ) {
                return true;
            }
            return false;
        },
    };

    Object.defineProperties(Vue.prototype, {
        $checkRoles: {
            get() {
                return Vue.checkRoles;
            }
        }
    });
}
