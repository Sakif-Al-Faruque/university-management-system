import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function NoticeBoard({date, title}:{date: string, title: string}){
    return (
        <div className="w-full p-2 text-red-600 mb-4 hover:bg-red-600 hover:text-white border-box">
            <h2>
                <CalendarDaysIcon 
                    className="w-5 inline"
                />
                <span className="py-1 inline-block ml-4">{date}</span>
            </h2>
            <p>{title}</p>
        </div>
    );
}