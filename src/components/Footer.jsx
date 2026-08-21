function Footer({ name }) {
    return (
        <footer className="mt-12 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>Hecho con React y Tailwind CSS por {name}</p>
        </footer>
    );
}

export default Footer;