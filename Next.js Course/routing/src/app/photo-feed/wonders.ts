import {StaticImageData} from "next/image"
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";


export type SeasonImage ={
    id:string;
    name:string;
    src:StaticImageData;
    photographer:string;
    location:string;
};

const seasonsImages: SeasonImage[]=[
    {
        id:"1",
        name:"autumn",
        src:photo1,
        photographer:"Divya",
        location :"Earth",
    },
    {
        id:"2",
        name:"rainy",
        src:photo2,
        photographer:"Divya",
        location :"Earth",
    },
    {
        id:"3",
        name:"spring",
        src:photo3,
        photographer:"Divya",
        location :"Earth",
    },
    {
        id:"4",
        name:"summer",
        src:photo4,
        photographer:"Divya",
        location :"Earth",
    },
    {
        id:"5",
        name:"winter",
        src:photo5,
        photographer:"Divya",
        location :"Earth",

    }
];
export default seasonsImages;