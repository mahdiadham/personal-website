const SkillCard = ({ data }) => {
    const { name, role, icon } = data;

    return (
        <div className="flex flex-col justify-start items-center gap-2">
            <div className="size-20">
                <img src={icon} alt={name} />
            </div>
            <div className="text-white text-center">
                {/* <h4>
                    {name}
                </h4> */}
                {/* <span>
                    {role}
                </span> */}
            </div>
        </div>
    );
}

export default SkillCard;