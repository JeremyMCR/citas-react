import React from "react";

const Header = () => {
    return (
        <header className="grid">
            <h1 className="font-black text-5xl text-center mt-10 md:w-2/3 mx-auto">
                Seguimos Pacientes{" "}
                <span className = "text-indigo-600">Veterinaria</span>
            </h1>
        </header>
    )
}

export default Header;