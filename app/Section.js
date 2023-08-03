const Section = (props) => {
    return (
        <>
            <div className="flex text-gray-800 pb-10">
                <div id={props.id} className="basis-1/4">
                    {props.title}
                </div>
                <div className="basis-3/4">
                    {props.description}
                </div>
            </div>
        </>
    );
}

export default Section;