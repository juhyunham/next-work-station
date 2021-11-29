function HeaderIcon({ Icon }) {
    return (
        <div className="flex cursor-pointer md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500">
            <Icon className="h-5 md:px-10 sm:h-9 group-ghover:text-blue-500" />
        </div>
    );
}

export default HeaderIcon;
