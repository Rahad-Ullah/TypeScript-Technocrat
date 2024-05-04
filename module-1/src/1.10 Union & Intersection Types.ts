{
    // * Union types  -  টাইপগুলোকে কম্বাইন করে অপশন তৈরি করে, যে কোন টাইপ ইউজ করা যাবে

    type FrontEndDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

    type Developer = FrontendDeveloper | FullStackDeveloper;

    const newDeveloper: FrontEndDeveloper = "fakibazDeveloper"

    const developer: Developer = "expertDeveloper"


    // * Intersaction types  -   টাইপগুলোকে কম্বাইন করে বাধ্যবাধকতা তৈরি করে, সবগুলো টাইপকেই ইউজ করতে হবে
    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'; 
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer';
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ['React', 'Node'],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }
    
}