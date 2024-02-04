function Footer() {
    const currentYear = new Date().getFullYear();
        return <footer>
        <p>© NoteKeeper {currentYear}.</p>
    </footer>
}

export default Footer;