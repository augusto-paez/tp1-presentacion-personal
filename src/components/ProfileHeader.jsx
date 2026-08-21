function ProfileHeader({ name, phrase }) {
    return (
        <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            <p className="text-slate-400 mt-2">{phrase}</p>
        </header>
    );
}

export default ProfileHeader;