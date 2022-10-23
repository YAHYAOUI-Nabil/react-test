/* eslint-disable prettier/prettier */
module.exports = {
    mode: "jit",
    purge: ["./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                work: "Work Sans",
            },
            colors: {
                blue: "#1B31A8",
            },
            backgroundColor: {
                "card-bg": "#FFFFFF",
                "cta-bg": "#1B31A8",
            },
            width: {
                84: "84px",
                320: "320px",
                560: "560px",
                584: "584px",
                1464: "1464px",
            },
            height: {
                20: "20px",
                24: "24px",
                56: "56px",
                511: "511px",
                1697: "1697px",
            },
            boxShadow: {
                "5xl": "0px 16px 32px rgba(30, 42, 50, 0.08)",
            },
            borderRadius: {
                "4xl": "32px",
            },
            left: {
                100: "calc(50% - 84px/2)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
