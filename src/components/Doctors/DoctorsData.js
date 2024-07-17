import Doctor1 from '../../assets/doctors/doctors-1.jpg'
import Doctor2 from '../../assets/doctors/doctors-2.jpg'
import Doctor3 from '../../assets/doctors/doctors-3.jpg'
import Doctor4 from '../../assets/doctors/doctors-4.jpg'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const doctorsData = [
    {
        Name: "Walter White",
        Title: "Chief Medical Officer",
        Description: "Dr. Walter White has over 20 years of experience in the medical field, specializing in oncology.",
        Image: Doctor1,
        SocialMedia: [            
            { icon: FaTwitter, url: "https://twitter.com/mulindijr" },
            { icon: FaFacebook, url: "https://www.facebook.com/mulindijr" },
            { icon: FaInstagram, url: "https://www.instagram.com/mulindijr" },
            { icon: FaLinkedin, url: "https://www.linkedin.com/in/mulindijr" }
        ]
    },
    {
        Name: "Jane Smith",
        Title: "Cardiologist",
        Description: "Dr. Jane Smith is a renowned cardiologist known for her expertise in heart diseases and patient care.",
        Image: Doctor2,
        SocialMedia: [
            { icon: FaTwitter, url: "https://twitter.com/mulindijr" },
            { icon: FaFacebook, url: "https://www.facebook.com/mulindijr" },
            { icon: FaInstagram, url: "https://www.instagram.com/mulindijr" },
            { icon: FaLinkedin, url: "https://www.linkedin.com/in/mulindijr" }
        ]
    },
    {
        Name: "William Anderson",
        Title: "Pediatrician",
        Description: "Dr. William Anderson specializes in pediatric medicine, providing compassionate care to children and adolescents.",
        Image: Doctor3,
        SocialMedia: [
            { icon: FaTwitter, url: "https://twitter.com/mulindijr" },
            { icon: FaFacebook, url: "https://www.facebook.com/mulindijr" },
            { icon: FaInstagram, url: "https://www.instagram.com/mulindijr" },
            { icon: FaLinkedin, url: "https://www.linkedin.com/in/mulindijr" }
        ]
    },
    {
        Name: "Emily Johnson",
        Title: "Neurologist",
        Description: "Dr. Emily Johnson has extensive experience in treating neurological disorders, with a focus on patient-centered care.",
        Image: Doctor4,
        SocialMedia: [
            { icon: FaTwitter, url: "https://twitter.com/mulindijr" },
            { icon: FaFacebook, url: "https://www.facebook.com/mulindijr" },
            { icon: FaInstagram, url: "https://www.instagram.com/mulindijr" },
            { icon: FaLinkedin, url: "https://www.linkedin.com/in/mulindijr" }
        ]
    }
];

export default doctorsData;
