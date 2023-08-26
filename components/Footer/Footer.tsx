import UniIntro from "./UniIntro";
import LinkList from "./LinkList";


const AcademicList = [
    {
        link_name: 'Lorem, ipsum. 1',
        link_url: 'http://localhost:3000/'
    },
    {
        link_name: 'Lorem, ipsum. 2',
        link_url: 'http://localhost:3000/'
    },
    {
        link_name: 'Lorem, ipsum. 3',
        link_url: 'http://localhost:3000/'
    },
    {
        link_name: 'Lorem, ipsum. 4',
        link_url: 'http://localhost:3000/'
    },
    {
        link_name: 'Lorem, ipsum. 5',
        link_url: 'http://localhost:3000/'
    }
]

export default function Footer(){
    return (
        <footer className="w-full py-10">
            <div className="footer-container w-4/5 mx-auto my-0 flex flex-row flex-wrap justify-between">
                <div className="footer-item w-3/12">
                    <UniIntro />
                </div>
                <div className="footer-item w-3/12">
                    <LinkList 
                        heading="academic"
                        items={AcademicList} 
                    />
                </div>
                <div className="footer-item w-3/12">
                    <LinkList 
                        heading="admission"
                        items={AcademicList} 
                    />
                </div>
                <div className="footer-item w-3/12">
                    <LinkList 
                        heading="career"
                        items={AcademicList} 
                    />
                </div>
            </div>
            <div className="back-footer w-full py-2">
                <p className="text-white text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, labore explicabo earum deleniti suscipit vero ut deserunt ab distinctio perferendis.</p>
            </div>
        </footer>
    );
}