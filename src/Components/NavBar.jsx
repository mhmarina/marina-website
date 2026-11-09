import { useState } from "react";

export function Navbar() {
    const sections = [
        { id: "games", label: "Games" },
        { id: "graphics", label: "Graphics" },
        { id: "ml", label: "ML/AI" },
        { id: "appdev", label: "App Dev" },
        { id: "art", label: "Art" },
    ];

    const [clickedItem, setClickedItem] = useState("home")

    const scrollToSection = (id) => {
        setClickedItem(id)
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav
            style={{
                position: "sticky", 
                top: 0, 
                zIndex: 1000,
                backgroundColor: "pink",
                padding: "10px",
                gap: "5px",
                display: "flex",
                borderBottom: "5px solid black"
            }}
        >
            {sections.map(({ id, label }) => (
                <button 
                    key={id} onClick={() => scrollToSection(id)}
                    style={{
                        border: "2px solid black",
                        backgroundColor: `${id === clickedItem ? "black" : "pink"}`,
                        color: `${id === clickedItem ? "pink" : "black"}`
                    }}
                    >
                    {label}
                </button>
            ))}
        </nav>
    );
}