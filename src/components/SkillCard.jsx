function SkillCard({ name, level, isFavorite }) {
    return (
        <article className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-slate-400 text-sm">Nivel: {level}</p>
            {isFavorite && <span className="text-yellow-400 text-xs">★ Favorita</span>}
        </article>
    );
}

export default SkillCard;