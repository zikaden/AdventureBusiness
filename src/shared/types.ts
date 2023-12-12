export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurTours = "ourtours",
    ContactUs = "contactus"
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface TourType {
    name: string;
    description?: string;
    image: string;
}
