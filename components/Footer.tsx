const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <p className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10">
                    Let&apos;s build something great.
                </p>

                <div className="space-y-1">
                    <p className="leading-none text-muted-foreground">
                        Built by Muhammad Ateeq
                    </p>
                    <a
                        href="https://tajmirul.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline hover:text-white"
                    >
                        Template by Tajmirul Islam
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
