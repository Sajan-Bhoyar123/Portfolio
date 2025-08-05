import CertificateCard from './CertificateCard';

export default function CertificateList() {
    const certificates = [
        {
            title: "Introduction Of Artificial Intelligence",
            image: "/AI.jpg",
            description: "Completed a Introduction Of Artificial Intelligence Course From Infosys Springboard",
            viewLink: "/Python3.4.3_Certificate.png"
        },
         {
            title: "Data Structures and Algorithm Certificate",
            image: "/DSA_Certificate.png",
            description: "Completed a course on Data Structures and Algorithm in C++",
            viewLink: "/DSA_Certificate.png"
        },
        {
            title: "Full Stack Development (MERN Stack)",
            image: "/DL.jpg",
            description: "Completed a course on Ful Stack Development(MERN).",
            viewLink: "/Speakathon_Certificate.png"
        }
    ];

    return (
        <div className="row px-3">
            {certificates.map((cert, idx) => (
                <CertificateCard
                    key={idx}
                    title={cert.title}
                    image={cert.image}
                    description={cert.description}
                    viewLink={cert.viewLink}
                />
            ))}
        </div>
    );
}
