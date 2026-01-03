// Project data with real project images from /storage/

// Import Our Work background image
import ourWorkBg from "../../storage/Sylvester/FotoatrasdoourworkDoorsfromInside1HR.jpeg";

// Import Sylvester images
import sylvesterThumb from "../../storage/Sylvester/Fotodecapa2ndFloorInteriorHR.jpeg";
import sylvester1 from "../../storage/Sylvester/Fotodecapa2ndFloorInteriorHR.jpeg";
import sylvester2 from "../../storage/Sylvester/DeckandPatioHR.jpeg";
import sylvester3 from "../../storage/Sylvester/DeckandPatio2HR.jpeg";
import sylvester4 from "../../storage/Sylvester/DeckandPatio3HR.jpeg";
import sylvester5 from "../../storage/Sylvester/DeckDiningHR.jpeg";
import sylvester6 from "../../storage/Sylvester/OutdoorShowerHR.jpeg";
import sylvester7 from "../../storage/Sylvester/OutdoorShower2HR.jpeg";
import sylvester8 from "../../storage/Sylvester/OutdoorShower3HR.jpeg";
import sylvester9 from "../../storage/Sylvester/OutdoorShowerarea1HR.jpeg";
import sylvester10 from "../../storage/Sylvester/OutdoorShowerarea2HR.jpeg";
import sylvester11 from "../../storage/Sylvester/OutdoorShowerarea3HR.jpeg";
import sylvester12 from "../../storage/Sylvester/FrontPorch1HR.jpeg";
import sylvester13 from "../../storage/Sylvester/FrontPorch2HR.jpeg";
import sylvester14 from "../../storage/Sylvester/FrontPorchDetailHR.jpeg";
import sylvester15 from "../../storage/Sylvester/PatioHR.jpeg";
import sylvester16 from "../../storage/Sylvester/PatioDoorsHR.jpeg";
import sylvester17 from "../../storage/Sylvester/BasementEntryHR.jpeg";
import sylvester18 from "../../storage/Sylvester/BasementHallwayHR.jpeg";
import sylvester19 from "../../storage/Sylvester/BasementLivingroomHR.jpeg";
import sylvester20 from "../../storage/Sylvester/BarDetailHR.jpeg";
import sylvester21 from "../../storage/Sylvester/BarDetail2HR.jpeg";
import sylvester22 from "../../storage/Sylvester/BathroomHR.jpeg";
import sylvester23 from "../../storage/Sylvester/ShowerHR.jpeg";
import sylvester24 from "../../storage/Sylvester/RearExteriorHR.jpeg";
import sylvester25 from "../../storage/Sylvester/RearDeckDetailHR.jpeg";
import sylvester26 from "../../storage/Sylvester/FotoatrasdoourworkDoorsfromInside1HR.jpeg";

// Import Argilla images
import argillaThumb from "../../storage/Argilla/Foto de capa2300HR.jpeg";
import argilla1 from "../../storage/Argilla/Foto de capa2300HR.jpeg";
import argilla2 from "../../storage/Argilla/2308HR.jpeg";
import argilla3 from "../../storage/Argilla/2323HR.jpeg";
import argilla4 from "../../storage/Argilla/2393HR.jpeg";

// Import Kelvin images
import kelvinThumb from "../../storage/Kelvin/Foto de capaWEB_-2_INTERIORS(9).jpeg";
import kelvin1 from "../../storage/Kelvin/Foto de capaWEB_-2_INTERIORS(9).jpeg";
import kelvin2 from "../../storage/Kelvin/WEB_-1_EXTERIORS(5).jpeg";
import kelvin3 from "../../storage/Kelvin/WEB_-2_INTERIORS(1).jpeg";
import kelvin4 from "../../storage/Kelvin/WEB_-2_INTERIORS(3).jpeg";
import kelvin5 from "../../storage/Kelvin/WEB_-2_INTERIORS(6).jpeg";
import kelvin6 from "../../storage/Kelvin/WEB_-2_INTERIORS(10).jpeg";
import kelvin7 from "../../storage/Kelvin/WEB_-2_INTERIORS(11).jpeg";
import kelvin8 from "../../storage/Kelvin/WEB_-2_INTERIORS(13).jpeg";
import kelvin9 from "../../storage/Kelvin/WEB_-2_INTERIORS(15).jpeg";
import kelvin10 from "../../storage/Kelvin/WEB_-2_INTERIORS(20).jpeg";
import kelvin11 from "../../storage/Kelvin/WEB_-2_INTERIORS(24).jpeg";
import kelvin12 from "../../storage/Kelvin/WEB_-2_INTERIORS(31).jpeg";
import kelvin13 from "../../storage/Kelvin/WEB_-2_INTERIORS(38).jpeg";
import kelvin14 from "../../storage/Kelvin/WEB_-2_INTERIORS(39).jpeg";
import kelvin15 from "../../storage/Kelvin/WEB_-2_INTERIORS(42).jpeg";
import kelvin16 from "../../storage/Kelvin/WEB_-2_INTERIORS(45).jpeg";
import kelvin17 from "../../storage/Kelvin/WEB_-2_INTERIORS(46).jpeg";

// Import Sagamore images
import sagamoreThumb from "../../storage/Sagamore/FotodecapaPrimaryBathroom.jpeg";
import sagamore1 from "../../storage/Sagamore/FotodecapaPrimaryBathroom.jpeg";
import sagamore2 from "../../storage/Sagamore/Frontentry.jpeg";
import sagamore3 from "../../storage/Sagamore/Bedroom2.jpeg";
import sagamore4 from "../../storage/Sagamore/RearSideExterior.jpeg";
import sagamore5 from "../../storage/Sagamore/SplitviewEntryMudroom.jpeg";
import sagamore6 from "../../storage/Sagamore/IMG_4655.jpeg";
import sagamore7 from "../../storage/Sagamore/bmf_5871.jpeg";
import sagamore8 from "../../storage/Sagamore/bmf_5899.jpeg";
import sagamore9 from "../../storage/Sagamore/bmf_5916.jpeg";
import sagamore10 from "../../storage/Sagamore/bmf_5922.jpeg";
import sagamore11 from "../../storage/Sagamore/bmf_5943.jpeg";
import sagamore12 from "../../storage/Sagamore/bmf_5985.jpeg";
import sagamore13 from "../../storage/Sagamore/bmf_5994.jpeg";
import sagamore14 from "../../storage/Sagamore/bmf_6012.jpeg";
import sagamore15 from "../../storage/Sagamore/bmf_6030.jpeg";
import sagamore16 from "../../storage/Sagamore/bmf_6039.jpeg";
import sagamore17 from "../../storage/Sagamore/bmf_6042.jpeg";


export interface Project {
    id: number;
    title: string;
    subtitle: string;
    slug: string;
    location: string;
    year: string;
    description: string;
    thumbnail: string;
    images: string[];
}

// Export the Our Work background image
export { ourWorkBg };

export const projects: Project[] = [
    {
        id: 1,
        title: "Gloucester",
        subtitle: "Complete transformation with custom decking and outdoor living",
        slug: "gloucester",
        location: "Gloucester, MA",
        year: "2024",
        description:
            "A stunning complete renovation featuring custom decking, outdoor living spaces, an outdoor shower oasis, and beautifully finished basement entertainment areas. This project showcases our commitment to exceptional craftsmanship and attention to detail.",
        thumbnail: sylvesterThumb,
        images: [
            sylvester1,
            sylvester2,
            sylvester3,
            sylvester4,
            sylvester5,
            sylvester6,
            sylvester7,
            sylvester8,
            sylvester9,
            sylvester10,
            sylvester11,
            sylvester12,
            sylvester13,
            sylvester14,
            sylvester15,
            sylvester16,
            sylvester17,
            sylvester18,
            sylvester19,
            sylvester20,
            sylvester21,
            sylvester22,
            sylvester23,
            sylvester24,
            sylvester25,
            sylvester26,
        ],
    },
    {
        id: 2,
        title: "Essex",
        subtitle: "Modern elegance with refined interior finishes",
        slug: "essex",
        location: "Essex, MA",
        year: "2024",
        description:
            "An exquisite renovation showcasing modern design principles with refined interior finishes. This project demonstrates our expertise in creating spaces that blend contemporary aesthetics with timeless elegance.",
        thumbnail: argillaThumb,
        images: [
            argilla1,
            argilla2,
            argilla3,
            argilla4,
        ],
    },
    {
        id: 3,
        title: "Rockport",
        subtitle: "Contemporary interiors with stunning exterior views",
        slug: "rockport",
        location: "Rockport, MA",
        year: "2023",
        description:
            "A comprehensive interior transformation featuring modern design elements and premium finishes throughout. The project highlights our attention to detail and commitment to creating cohesive, beautifully crafted living spaces.",
        thumbnail: kelvinThumb,
        images: [
            kelvin1,
            kelvin2,
            kelvin3,
            kelvin4,
            kelvin5,
            kelvin6,
            kelvin7,
            kelvin8,
            kelvin9,
            kelvin10,
            kelvin11,
            kelvin12,
            kelvin13,
            kelvin14,
            kelvin15,
            kelvin16,
            kelvin17,
        ],
    },
    {
        id: 4,
        title: "Manchester",
        subtitle: "Luxury bathroom and bedroom renovations with premium details",
        slug: "manchester",
        location: "Manchester, MA",
        year: "2024",
        description:
            "A luxurious renovation featuring stunning bathroom designs, elegant bedroom spaces, and thoughtful architectural details throughout. This project exemplifies our dedication to creating refined living environments with exceptional craftsmanship.",
        thumbnail: sagamoreThumb,
        images: [
            sagamore1,
            sagamore2,
            sagamore3,
            sagamore4,
            sagamore5,
            sagamore6,
            sagamore7,
            sagamore8,
            sagamore9,
            sagamore10,
            sagamore11,
            sagamore12,
            sagamore13,
            sagamore14,
            sagamore15,
            sagamore16,
            sagamore17,
        ],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}
