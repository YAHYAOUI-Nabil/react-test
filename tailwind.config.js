module.exports = {
    mode: "jit",
    purge: ["./build/*.html", "./src/**/*.tsx", "./safeclasses.txt"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                "card-bg": "#FFFFFF",
            },
            width: {
                560: "560px",
                584: "584px",
                1464: "1464px",
            },
            height: {
                24: "24px",
                511: "511px",
                1697: "1697px",
            },
            boxShadow: {
                "5xl": "0px 16px 32px rgba(30, 42, 50, 0.08)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
