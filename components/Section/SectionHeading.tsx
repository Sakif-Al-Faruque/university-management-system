

export default function SectionHeading({title, description, color}:{title: string, description: string, color: string}){
    return (
        <div className="w-full flex py-12">
            <h2 className="xl:w-2/5 md:w-2/5 text-3xl font-bold text-gray-400 text-right box-border py-12 capitalize">{title}</h2>
            <div className="section-bar w-1/5 text-center">
                <span className={`w-4 h-40 inline-block rounded-lg ${color}`}></span>
            </div>
            <h2 className="xl:w-2/5 md:w-2/5 text-2xl text-left box-border py-12 capitalize">{description}</h2>
        </div>
    );
}