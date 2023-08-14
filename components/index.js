// Layout
import Header from "./Layout/Header/Header";
import { Navigation } from "./Layout/Navigation/Navigation";
import { Menu } from "./Layout/Menu/Menu";
import Footer from "./Layout/Footer/Footer";

// Home Section
import HomeHero from "@/components/Sections/Home/Hero/HomeHero"
import HomeAbout from "@/components/Sections/Home/About/HomeAbout"
import HomeTask from "@/components/Sections/Home/Task/HomeTask"
import HomeProjects from "@/components/Sections/Home/Projects/HomeProjects"
import HomeContacts from "@/components/Sections/Home/Contacts/HomeContacts"

//Component
import { PaginationSlider } from "./component/PaginationSlider/PaginationSlider";
import { MobilePaginationSlider } from "./component/MobilePaginationSlider/MobilePaginationSlider";

//Form
import FullForm from "./component/Form/FullForm";

// UI elements
import Button from "./UI/Button/Button";
import Burger from "./UI/Burger/Burger";
import { SliderArrows } from "./UI/SliderArrows/SliderArrows";
import Title from "./UI/Title/Title";
import { Input } from './UI/Input/Input'
import { TextArea } from './UI/TextArea/TextArea'

export {
    //Layout
    Header,
    Navigation,
    Menu,
    Footer,
    
    //Home
    HomeHero,
    HomeAbout,
    HomeTask,
    HomeProjects,
    HomeContacts,
    
    //Components
    PaginationSlider,
    MobilePaginationSlider,

    //Form
    FullForm,

    //UI
    Burger,
    SliderArrows,
    Button,
    Title,
    Input,
    TextArea

}