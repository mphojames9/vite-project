import { useEffect, useState } from "react";


export function ThemeSlider({ id }) {
const [checked, setChecked] = useState(false);


useEffect(() => {
const root = document.documentElement;
const current = root.getAttribute("data-theme") || "dark";
setChecked(current === "light");
}, []);


const toggleTheme = () => {
const root = document.documentElement;
const next = checked ? "dark" : "light";
root.setAttribute("data-theme", next);
setChecked(!checked);
};


return (
<label className="theme-switch" htmlFor={id}>
<input
id={id}
type="checkbox"
checked={checked}
onChange={toggleTheme}
aria-label="Toggle theme"
/>
<span className="slider">
</span>
</label>
);
}