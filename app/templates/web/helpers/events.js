export default {
    only: (f) => {
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            return f(e);
        };
    },

    np: (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
};
