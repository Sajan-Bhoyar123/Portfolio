import HackathonCard from './HackathonCard';

export default function HackathonList() {
    let certificates = [
        {
            name: "Ecothon 4.O Hackathon",
            organizer: "Sipna College of Engineering and Technology, Amravati",
            duration: "",
            date: "10 March 2025",
            certificate: "/Ecothon_4.O_Certificate.png",
            redirect: ""
        },
        {
            name: "HackOn 2025 Hackathon",
            organizer: "Government College of Engineering (GCOE), Nagpur",
            duration: "8hrs",
            date: "21 Feb 2025",
            certificate: "/HackOn_Hackathon_Certificate.png",
            redirect: ""
        }
    ];

    return (
        <div className="row px-3">
            {
                certificates.map((obj, idx) => (
                    <HackathonCard
                        key={idx}
                        name={obj.name}
                        organizer={obj.organizer}
                        duration={obj.duration}
                        date={obj.date}
                        certificate={obj.certificate}
                        redirect={obj.redirect}
                    />
                ))
            }
        </div>
    );
};
