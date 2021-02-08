import Vue from 'vue';

Vue.mixin({
    methods: {
        isBlankOrEmptyString(str) {
            return !str || /^\s*$/.test(str);
        },

        makeToast(vueInstance, variant = null, title = "", content = "") {
            vueInstance.$root.$bvToast.toast(content, {
                title,
                variant,
                solid: true,
                toaster: 'b-toaster-bottom-right',
                appendToast: true
            });
        },

        isEmptyObject(obj) {
            return Object.keys(obj).length === 0;
        },
    }
})