import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={GENERAL_INFO.upworkProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    Hire me on Upwork
                </a>

                <div className="space-y-1">
                    <p className="leading-none text-muted-foreground">
                        Built by Muhammad Ateeq
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
