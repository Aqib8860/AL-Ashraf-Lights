const OrderStatsCard = (props: {color:string, title:string}) => {
    return (
        <div className={` ${props.color} w-[250px] h-[150px]  rounded-lg shadow-lg flex flex-col justify-evenly items-center`}>
            <h5 className="text-lg font-semibold">{props.title}</h5>
            <p className="text-2xl" >5</p>

        </div>
    );
}

export default OrderStatsCard;
